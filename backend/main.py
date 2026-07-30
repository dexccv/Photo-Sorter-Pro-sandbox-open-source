import os
import asyncio
import sys
import shutil
import string
import json
import base64
import hashlib
import time
import subprocess
import concurrent.futures
from io import BytesIO
from typing import List, Dict, Optional, Any
from datetime import datetime
from fastapi import FastAPI, HTTPException, Query, Request
import mimetypes
from backend.watcher import start_watcher, stop_watcher, is_watcher_active
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse, StreamingResponse, Response
from pydantic import BaseModel
from PIL import Image, ExifTags, ImageOps
import send2trash
import tkinter as tk
from tkinter import filedialog

from backend.mtp_helper import (
    is_mtp_path, get_mtp_drives, scan_mtp_dir, scan_mtp_images, get_mtp_file_local_path
)

def resolve_path(path: str) -> str:
    """Normalize path and strip 'This PC\' prefix for standard drives or preserve MTP paths"""
    if not path:
        return ""
    if path == "This PC" or path == "This PC\\":
        return ""
    if is_mtp_path(path):
        return path
    if path.startswith("This PC\\"):
        path = path[8:]
    return os.path.normpath(path)

def get_real_file_path(full_file_path: str) -> str:
    """Extract MTP file to local cache if needed and return valid local file path"""
    norm = full_file_path.replace('/', '\\').strip()
    if is_mtp_path(norm):
        dir_name, file_name = os.path.split(norm)
        return get_mtp_file_local_path(dir_name, file_name)
    
    resolved = resolve_path(norm)
    if is_mtp_path(resolved):
        dir_name, file_name = os.path.split(resolved)
        return get_mtp_file_local_path(dir_name, file_name)
        
    return resolved

# Background thread pool for pre-warming thumbnails (non-blocking)
_prewarm_executor = concurrent.futures.ThreadPoolExecutor(max_workers=3, thread_name_prefix="prewarm")

app = FastAPI(title="Modern Photo Sorter API")

_folder_changed = False
def _on_folder_change():
    global _folder_changed
    _folder_changed = True

@app.on_event("startup")
def setup_windows_asyncio_exception_handler():
    if os.name == 'nt':
        # Start folder auto-refresh watcher based on last_folder
        try:
            if session_data.get("last_folder"):
                start_watcher(session_data["last_folder"], _on_folder_change)
        except Exception as e:
            log_event("WATCHER", f"Failed to start watcher: {e}")
        import asyncio
        try:
            loop = asyncio.get_event_loop()
            def win_handler(loop, context):
                exc = context.get('exception')
                if isinstance(exc, (ConnectionResetError, OSError)) and getattr(exc, 'winerror', None) == 10054:
                    return  # Silence harmless Windows socket disconnection logs (WinError 10054)
                loop.default_exception_handler(context)
            loop.set_exception_handler(win_handler)
        except Exception:
            pass

@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={"status": "error", "detail": str(exc)}
    )

# Enable CORS for frontend development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:8000", "http://localhost:8000", "http://127.0.0.1:5500", "http://localhost:5500", "http://127.0.0.1:5173", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SESSION_DIR = os.path.join(os.path.expanduser("~"), ".photo_sorter")
os.makedirs(SESSION_DIR, exist_ok=True)
SESSION_FILE = os.path.join(SESSION_DIR, "sorter_session.json")
THUMB_CACHE_DIR = os.path.join(SESSION_DIR, ".thumb_cache")
os.makedirs(THUMB_CACHE_DIR, exist_ok=True)

# Auto-refresh watcher flag (managed by watcher module)

DEFAULT_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".mp4", ".webm", ".mov"]
DEFAULT_GLOBAL_SHORTCUTS = {
    "next_image": "ArrowRight",
    "prev_image": "ArrowLeft",
    "undo": "Ctrl+Z",
    "delete": "Delete",
    "rotate_cw": "R",
    "rotate_ccw": "L",
    "help": "F1",
    "toggle_explorer": "Ctrl+L",
    "toggle_console": "Ctrl+B",
    "toggle_metadata": "Ctrl+R",
    "create_folder": "Ctrl+N",
    "open_folder": "Ctrl+O"
}

class ActionPayload(BaseModel):
    action: str  # "move", "copy", "delete"
    src_folder: str
    file_name: str
    target_folder: Optional[str] = None
    resolve_conflict: Optional[str] = "skip" # "overwrite", "keep_both", "skip"

class BatchActionPayload(BaseModel):
    action: str  # "move", "copy", "delete"
    src_folder: str
    file_names: List[str]
    target_folder: Optional[str] = None
    resolve_conflict: Optional[str] = "skip" # "overwrite", "keep_both", "skip"

class CreateFolderPayload(BaseModel):
    parent_folder: str
    folder_name: str

class RenamePayload(BaseModel):
    src_folder: str
    old_name: str
    new_name: str

class MetadataPayload(BaseModel):
    folder: str
    filename: str
    rating: Optional[int] = None
    flag: Optional[str] = None

class BatchRenamePayload(BaseModel):
    folder: str


class SettingsPayload(BaseModel):
    hotkeys: Dict[str, Dict]
    extensions: List[str]
    ask_delete: Optional[bool] = True
    theme: Optional[str] = "theme-black"
    thumbnail_size: Optional[str] = "medium"
    animations: Optional[bool] = True
    global_shortcuts: Optional[Dict[str, str]] = None
    lang: Optional[str] = "en"
    custom_hotkeys: Optional[List[Dict]] = None  # [{key, action, target, label, enabled}]
    disabled_global_shortcuts: Optional[List[str]] = None  # list of action names disabled
    disabled_preset_keys: Optional[List[str]] = None  # list of '1'-'9' keys disabled

import ctypes

class PinnedFoldersPayload(BaseModel):
    pinned_folders: List[str]

class PrewarmPayload(BaseModel):
    paths: List[str]  # list of absolute image paths to pre-generate thumbnails for
    size: Optional[int] = 320  # thumbnail size px

class SessionUIPayload(BaseModel):
    panel_sizes: Optional[Dict[str, int]] = None   # {left, right, bottom} in px
    compare_mode: Optional[bool] = None            # compare mode toggle state

class LayoutPayload(BaseModel):
    preset: Optional[str] = "standard"
    show_stage: Optional[bool] = True
    presets_position: Optional[str] = "right"
    show_left_sidebar: Optional[bool] = True
    show_right_panel: Optional[bool] = True
    show_bottom_panel: Optional[bool] = True
    docks: Optional[Dict[str, str]] = None  # {explorer, inspector, console} -> 'left'|'right'|'bottom'|'hidden'

# Session state loaded in memory
session_data = {
    "last_folder": "",
    "last_index": 0,
    "pinned_folders": [],
    "hotkeys": {},
    "extensions": DEFAULT_EXTENSIONS,
    "ask_delete": True,
    "theme": "theme-black",
    "thumbnail_size": "medium",
    "animations": True,
    "global_shortcuts": DEFAULT_GLOBAL_SHORTCUTS,
    "lang": "en",
    "custom_hotkeys": [],
    "disabled_global_shortcuts": [],  # list of disabled action names
    "disabled_preset_keys": [],  # list of disabled '1'-'9' keys
    "layout": {
        "preset": "standard",
        "show_stage": True,
        "presets_position": "right",
        "show_left_sidebar": True,
        "show_right_panel": True,
        "show_bottom_panel": True
    },
    # Extended session fields
    "recent_folders": [],          # list of last 10 opened folders
    "panel_sizes": {               # resizable panel widths/heights in px
        "left": 256,
        "right": 256,
        "bottom": 224
    },
    "per_folder_index": {},        # {folder_path: last_index} remembered per folder
    "compare_mode": False          # whether Compare Mode was active
}
undo_stack = []

def log_event(category: str, message: str):
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"\033[90m[{now}]\033[0m \033[1;36m[{category.upper()}]\033[0m {message}", flush=True)

def load_session():
    global session_data
    if os.path.exists(SESSION_FILE):
        try:
            with open(SESSION_FILE, 'r') as f:
                loaded = json.load(f)
                # Deep-merge nested dicts (e.g. 'layout', 'panel_sizes') instead of
                # replacing them wholesale, so added default keys are never lost.
                for key, value in loaded.items():
                    if key in session_data and isinstance(session_data[key], dict) and isinstance(value, dict):
                        session_data[key] = {**session_data[key], **value}  # type: ignore[arg-type]
                    else:
                        session_data[key] = value
        except Exception:
            pass

def save_session():
    try:
        with open(SESSION_FILE, 'w') as f:
            json.dump(session_data, f)
    except Exception:
        pass

load_session()

# (Duplicate class removed — PinnedFoldersPayload is defined above at line 144)

@app.get("/api/drives")
def get_drives():
    """Get root drives for Windows or root path for Unix with drive label & type info + MTP devices"""
    if os.name == 'nt':
        drives = []
        kernel32 = ctypes.windll.kernel32
        for d in string.ascii_uppercase:
            drive_path = f"{d}:\\"
            if os.path.exists(drive_path):
                drive_type_code = kernel32.GetDriveTypeW(drive_path)
                if drive_type_code == 2:
                    dtype = "removable"
                    default_name = "Penyimpanan Eksternal / USB"
                elif drive_type_code == 3:
                    dtype = "fixed"
                    default_name = "Local Disk"
                elif drive_type_code == 4:
                    dtype = "network"
                    default_name = "Network Drive"
                elif drive_type_code == 5:
                    dtype = "cdrom"
                    default_name = "CD/DVD Drive"
                else:
                    dtype = "unknown"
                    default_name = "Disk"

                label = ""
                try:
                    vol_buf = ctypes.create_unicode_buffer(1024)
                    fs_buf = ctypes.create_unicode_buffer(1024)
                    if kernel32.GetVolumeInformationW(
                        ctypes.c_wchar_p(drive_path),
                        vol_buf, ctypes.sizeof(vol_buf),
                        None, None, None,
                        fs_buf, ctypes.sizeof(fs_buf)
                    ):
                        label = vol_buf.value
                except Exception:
                    pass

                display_name = f"{label} ({d}:)" if label else f"{default_name} ({d}:)"
                drives.append({
                    "name": display_name,
                    "path": drive_path,
                    "drive_letter": f"{d}:",
                    "type": dtype,
                    "label": label or default_name
                })

        # Include connected MTP / Portable Devices (e.g. TECNO CAMON 40)
        try:
            mtp_devs = get_mtp_drives()
            for md in mtp_devs:
                if not any(d["path"] == md["path"] for d in drives):
                    drives.append(md)
        except Exception as e:
            print(f"Error fetching MTP devices: {e}")

        return drives
    else:
        return [{"name": "Root (/)", "path": "/", "drive_letter": "/", "type": "fixed", "label": "Root"}]

@app.get("/api/scan-dir")
def scan_dir(path: str = Query(...)):
    """List subdirectories of a given path for the file tree explorer"""
    real_path = resolve_path(path)
    
    if is_mtp_path(real_path):
        return scan_mtp_dir(real_path)

    if not real_path or not os.path.exists(real_path):
        raise HTTPException(status_code=404, detail="Path not found")
    try:
        subdirs = []
        for name in sorted(os.listdir(real_path)):
            full_path = os.path.join(real_path, name)
            if os.path.isdir(full_path):
                try:
                    has_children = any(os.path.isdir(os.path.join(full_path, sub)) for sub in os.listdir(full_path))
                except Exception:
                    has_children = False
                subdirs.append({
                    "name": name,
                    "path": full_path,
                    "hasChildren": has_children
                })
        return subdirs
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/api/scan-images")
def scan_images(path: str = Query(...)):
    """List image files inside the specified folder"""
    real_path = resolve_path(path)
    
    if is_mtp_path(real_path):
        exts = session_data.get("extensions", DEFAULT_EXTENSIONS)
        files = scan_mtp_images(real_path, exts)
        session_data["last_folder"] = path
        save_session()
        log_event("SCAN", f"Scanning MTP directory: '{real_path}' (Found {len(files)} images)")
        return {
            "folder": path,
            "images": files,
            "lastIndex": per_folder.get(path, session_data.get("last_index", 0))
        }

    if not real_path or not os.path.exists(real_path) or not os.path.isdir(real_path):
        raise HTTPException(status_code=404, detail="Directory not found")
    
    exts = tuple(session_data.get("extensions", DEFAULT_EXTENSIONS))
    try:
        files = [f for f in os.listdir(real_path) if f.lower().endswith(exts) and os.path.isfile(os.path.join(real_path, f))]
        files.sort()
        
        session_data["last_folder"] = path
        save_session()
        start_watcher(real_path, _on_folder_change)

        # Use per-folder remembered index (most accurate), fallback to global last_index
        per_folder = session_data.get("per_folder_index", {})
        last_idx = per_folder.get(path, session_data.get("last_index", 0))
        # Clamp to valid range
        if files:
            last_idx = max(0, min(last_idx, len(files) - 1))
        else:
            last_idx = 0
            
        meta = load_folder_metadata(real_path)
        
        log_event("SCAN", f"Scanning directory: '{real_path}' (Found {len(files)} images, last_idx={last_idx})")
        return {
            "folder": path,
            "images": files,
            "metadata": meta,
            "lastIndex": last_idx
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

def get_folder_metadata_file(real_path: str) -> str:
    meta_dir = os.path.join(real_path, ".photo_sorter")
    if not os.path.exists(meta_dir):
        try:
            os.makedirs(meta_dir, exist_ok=True)
            if os.name == "nt":
                import ctypes
                ctypes.windll.kernel32.SetFileAttributesW(meta_dir, 2)
        except Exception:
            pass # fallback if permission denied
    return os.path.join(meta_dir, "metadata.json")

def load_folder_metadata(real_path: str) -> dict:
    fpath = get_folder_metadata_file(real_path)
    if os.path.exists(fpath):
        try:
            with open(fpath, "r", encoding="utf-8") as f:
                import json
                return json.load(f)
        except:
            pass
    return {}

def save_folder_metadata(real_path: str, data: dict):
    fpath = get_folder_metadata_file(real_path)
    try:
        with open(fpath, "w", encoding="utf-8") as f:
            import json
            json.dump(data, f, indent=2)
    except:
        pass

@app.post("/api/update-metadata")
def update_metadata(payload: MetadataPayload):
    real_path = resolve_path(payload.folder)
    if not real_path or not os.path.exists(real_path):
        raise HTTPException(status_code=404, detail="Directory not found")
        
    meta = load_folder_metadata(real_path)
    if payload.filename not in meta:
        meta[payload.filename] = {}
        
    if payload.rating is not None:
        meta[payload.filename]["rating"] = payload.rating
    if payload.flag is not None:
        if payload.flag == "none":
            meta[payload.filename].pop("flag", None)
        else:
            meta[payload.filename]["flag"] = payload.flag
            
    save_folder_metadata(real_path, meta)
    return {"status": "success", "metadata": meta.get(payload.filename)}

@app.get("/api/watch")
async def watch_folder_endpoint(request: Request):
    async def event_generator():
        global _folder_changed
        while True:
            if await request.is_disconnected():
                break
            if _folder_changed:
                _folder_changed = False
                yield "data: refresh\n\n"
            await asyncio.sleep(0.5)
    return StreamingResponse(event_generator(), media_type="text/event-stream")

@app.get("/api/image")
def get_image(request: Request, path: str = Query(...)):
    """Serve the full-resolution image file with HTTP caching support"""
    real_path = get_real_file_path(path)
    if not os.path.exists(real_path):
        raise HTTPException(status_code=404, detail="File not found")
    
    stat = os.stat(real_path)
    etag = f'"{hashlib.md5(f"{stat.st_mtime}{stat.st_size}".encode()).hexdigest()}"'
    
    if request.headers.get("if-none-match") == etag:
        return Response(status_code=304)
    
    log_event("VIEW", f"Loading image file: '{os.path.basename(real_path)}'")
    response = FileResponse(real_path)
    response.headers["ETag"] = etag
    response.headers["Cache-Control"] = "private, max-age=3600"
    return response

@app.get("/api/thumbnail")
def get_thumbnail(request: Request, path: str = Query(...), size: int = Query(240)):
    """Serve a fast, compressed thumbnail for filmstrip previews with aggressive caching"""
    real_path = get_real_file_path(path)
    if not os.path.exists(real_path):
        raise HTTPException(status_code=404, detail="File not found")

    stat = os.stat(real_path)
    cache_key = f"{real_path}:{size}:{stat.st_mtime}"
    etag = f'"{hashlib.md5(cache_key.encode()).hexdigest()}"'
    thumb_filepath = os.path.join(THUMB_CACHE_DIR, f"{hashlib.md5(cache_key.encode()).hexdigest()}.jpg")

    if request.headers.get("if-none-match") == etag:
        return Response(status_code=304)

    if os.path.exists(thumb_filepath):
        return FileResponse(
            thumb_filepath,
            media_type="image/jpeg",
            headers={
                "ETag": etag,
                "Cache-Control": "private, max-age=86400",
            }
        )

    try:
        with Image.open(real_path) as img:
            img = ImageOps.exif_transpose(img)
            if img.mode not in ("RGB", "L"):
                img = img.convert("RGB")
            img.thumbnail((size, size), Image.LANCZOS)
            img.save(thumb_filepath, format="JPEG", quality=75, optimize=True, progressive=True)

        return FileResponse(
            thumb_filepath,
            media_type="image/jpeg",
            headers={
                "ETag": etag,
                "Cache-Control": "private, max-age=86400",
            }
        )
    except Exception as e:
        return FileResponse(real_path)

def _generate_thumbnail_background(real_path: str, size: int):
    """Worker function: generate thumbnail and store in cache. Safe to run in thread."""
    try:
        if not os.path.exists(real_path):
            return
        stat = os.stat(real_path)
        cache_key = f"{real_path}:{size}:{stat.st_mtime}"
        thumb_filepath = os.path.join(THUMB_CACHE_DIR, f"{hashlib.md5(cache_key.encode()).hexdigest()}.jpg")
        
        if os.path.exists(thumb_filepath):
            return  # Already cached, nothing to do
            
        with Image.open(real_path) as img:
            img = ImageOps.exif_transpose(img)
            if img.mode not in ("RGB", "L"):
                img = img.convert("RGB")
            img.thumbnail((size, size), Image.LANCZOS)
            img.save(thumb_filepath, format="JPEG", quality=75, optimize=True, progressive=True)
    except Exception:
        pass  # Silently ignore — this is best-effort pre-warming

@app.post("/api/prewarm-thumbnails")
def prewarm_thumbnails(payload: PrewarmPayload):
    """Pre-generate thumbnails for a list of images in the background.
    Returns immediately; actual generation happens in background threads."""
    paths = payload.paths[:50]  # batch size up to 50 per request
    size = max(80, min(payload.size or 320, 640))
    queued = 0
    for path in paths:
        real_path = get_real_file_path(path)
        if not real_path or not os.path.exists(real_path):
            continue
        cache_key = f"{real_path}:{size}:{os.stat(real_path).st_mtime}"
        thumb_filepath = os.path.join(THUMB_CACHE_DIR, f"{hashlib.md5(cache_key.encode()).hexdigest()}.jpg")
        if not os.path.exists(thumb_filepath):
            _prewarm_executor.submit(_generate_thumbnail_background, real_path, size)
            queued += 1
    return {"status": "queued", "count": queued}

def get_decimal_from_dms(dms, ref):
    try:
        degrees = float(dms[0])
        minutes = float(dms[1]) / 60.0
        seconds = float(dms[2]) / 3600.0
        dec = degrees + minutes + seconds
        if ref in ['S', 'W']:
            dec = -dec
        return round(dec, 5)
    except:
        return 0.0

@app.get("/api/metadata")
def get_metadata(path: str = Query(...)):
    """Extract EXIF data, image size, and compute histogram data"""
    real_path = get_real_file_path(path)
    if not os.path.exists(real_path):
        raise HTTPException(status_code=404, detail="File not found")
        
    try:
        exif_data = {
            "Camera": "-", "ISO": "-", "Aperture": "-", "Shutter": "-",
            "Focal Length": "-", "White Balance": "-", "Flash": "-",
            "Date Taken": "-", "Exposure Bias": "-", "Metering Mode": "-",
            "Color Space": "-", "Software": "-", "Lens Model": "-"
        }
        width, height = 0, 0
        size_bytes = os.path.getsize(real_path)
        size_mb = size_bytes / (1024 * 1024)
        
        with Image.open(real_path) as img:
            width, height = img.width, img.height
            exif = img._getexif()
            if exif:
                for tag_id, value in exif.items():
                    tag = ExifTags.TAGS.get(tag_id, tag_id)
                    if tag == "Model": exif_data["Camera"] = str(value).strip()
                    elif tag == "ISOSpeedRatings": exif_data["ISO"] = str(value)
                    elif tag == "FNumber": exif_data["Aperture"] = f"f/{float(value):.1f}"
                    elif tag == "ExposureTime": 
                        if isinstance(value, tuple) and len(value) == 2:
                            exif_data["Shutter"] = f"{value[0]}/{value[1]}s"
                        else:
                            exif_data["Shutter"] = f"{value}s"
                    elif tag == "FocalLength": exif_data["Focal Length"] = f"{float(value)}mm"
                    elif tag == "WhiteBalance": exif_data["White Balance"] = "Auto" if value == 0 else "Manual"
                    elif tag == "Flash": exif_data["Flash"] = "Yes" if value & 1 else "No"
                    elif tag == "DateTimeOriginal": exif_data["Date Taken"] = str(value)
                    elif tag == "ExposureBiasValue": exif_data["Exposure Bias"] = f"{float(value)} EV"
                    elif tag == "MeteringMode":
                        modes = {1:"Average", 2:"CenterWeightedAverage", 3:"Spot", 4:"MultiSpot", 5:"Pattern", 6:"Partial"}
                        exif_data["Metering Mode"] = modes.get(value, str(value))
                    elif tag == "ColorSpace": exif_data["Color Space"] = "sRGB" if value == 1 else "Uncalibrated"
                    elif tag == "Software": exif_data["Software"] = str(value)
                    elif tag == "LensModel": exif_data["Lens Model"] = str(value)
                    elif tag == "GPSInfo":
                        try:
                            gps = {}
                            for t in value:
                                sub_tag = ExifTags.GPSTAGS.get(t, t)
                                gps[sub_tag] = value[t]
                            if "GPSLatitude" in gps and "GPSLongitude" in gps:
                                lat = get_decimal_from_dms(gps["GPSLatitude"], gps.get("GPSLatitudeRef", "N"))
                                lon = get_decimal_from_dms(gps["GPSLongitude"], gps.get("GPSLongitudeRef", "E"))
                                exif_data["GPS"] = f"{lat}, {lon}"
                        except:
                            pass
            
            small_img = img.copy()
            small_img.thumbnail((100, 100))
            hist = small_img.histogram()
            
            r_channel = hist[0:256]
            g_channel = hist[256:512] if len(hist) > 256 else [0]*256
            b_channel = hist[512:768] if len(hist) > 512 else [0]*256
            
        return {
            "filename": os.path.basename(real_path),
            "resolution": f"{width} x {height} px",
            "size": f"{size_mb:.2f} MB",
            "exif": exif_data,
            "histogram": {
                "r": r_channel,
                "g": g_channel,
                "b": b_channel
            }
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

def compute_ahash(img: Image.Image, hash_size: int = 8) -> str:
    try:
        img = img.convert("L").resize((hash_size, hash_size), Image.LANCZOS)
        pixels = list(img.getdata())
        avg = sum(pixels) / len(pixels)
        bits = "".join(["1" if p > avg else "0" for p in pixels])
        return hex(int(bits, 2))[2:].zfill(hash_size * hash_size // 4)
    except:
        return ""

@app.get("/api/find-duplicates")
def find_duplicates(path: str = Query(...)):
    """Scan folder for identical or similar images based on perceptual hash"""
    real_path = resolve_path(path)
    if not real_path or not os.path.exists(real_path) or not os.path.isdir(real_path):
        raise HTTPException(status_code=404, detail="Directory not found")
        
    exts = tuple(session_data.get("extensions", DEFAULT_EXTENSIONS))
    files = [f for f in os.listdir(real_path) if f.lower().endswith(exts) and os.path.isfile(os.path.join(real_path, f))]
    
    hashes = {}
    duplicates = []
    
    for f in files:
        f_path = os.path.join(real_path, f)
        try:
            with Image.open(f_path) as img:
                h = compute_ahash(img)
                if h:
                    if h in hashes:
                        hashes[h].append(f)
                    else:
                        hashes[h] = [f]
        except:
            pass
            
    for h, group in hashes.items():
        if len(group) > 1:
            duplicates.append(group)
            
    return {"status": "success", "duplicates": duplicates}

@app.post("/api/batch-rename-exif")
def batch_rename_exif(payload: BatchRenamePayload):
    real_path = resolve_path(payload.folder)
    if not real_path or not os.path.exists(real_path):
        raise HTTPException(status_code=404, detail="Directory not found")
        
    exts = tuple(session_data.get("extensions", DEFAULT_EXTENSIONS))
    files = [f for f in os.listdir(real_path) if f.lower().endswith(exts) and os.path.isfile(os.path.join(real_path, f))]
    
    renamed_count = 0
    for f in files:
        f_path = os.path.join(real_path, f)
        try:
            with Image.open(f_path) as img:
                exif = img._getexif()
                date_taken = None
                if exif:
                    for tag_id, value in exif.items():
                        tag = ExifTags.TAGS.get(tag_id, tag_id)
                        if tag == "DateTimeOriginal":
                            date_taken = str(value)
                            break
            if date_taken:
                # Format: 2024:05:12 10:30:00 -> 2024-05-12_10-30-00
                safe_date = date_taken.replace(":", "-").replace(" ", "_")
                ext = os.path.splitext(f)[1]
                new_name = f"{safe_date}{ext}"
                new_path = os.path.join(real_path, new_name)
                
                # Handle duplicates e.g., if multiple photos taken in the same second
                counter = 1
                while os.path.exists(new_path) and f_path != new_path:
                    new_name = f"{safe_date}_{counter}{ext}"
                    new_path = os.path.join(real_path, new_name)
                    counter += 1

                if f_path != new_path:
                    os.rename(f_path, new_path)
                    renamed_count += 1
                    undo_stack.append({
                        "action": "rename",
                        "src": f_path,
                        "dst": new_path,
                        "file_name": f
                    })
        except Exception:
            pass
            
    return {"status": "success", "renamed_count": renamed_count}

@app.post("/api/action")
def execute_action(payload: ActionPayload):
    """Move, copy, or delete a file"""
    src_path = os.path.join(payload.src_folder, payload.file_name)
    if not os.path.exists(src_path):
        raise HTTPException(status_code=404, detail="Source file not found")
        
    action = payload.action
    dst_folder = payload.target_folder
    
    try:
        if action in ["move", "copy"]:
            if not dst_folder:
                raise HTTPException(status_code=400, detail="Target folder is required for move/copy")
            
            os.makedirs(dst_folder, exist_ok=True)
            dst_path = os.path.join(dst_folder, payload.file_name)
            
            # Handle conflict
            if os.path.exists(dst_path):
                if payload.resolve_conflict == "skip":
                    return {"status": "skipped", "message": f"Conflict skipped for {payload.file_name}"}
                elif payload.resolve_conflict == "keep_both":
                    base, ext = os.path.splitext(payload.file_name)
                    counter = 1
                    while True:
                        new_name = f"{base}_{counter}{ext}"
                        dst_path = os.path.join(dst_folder, new_name)
                        if not os.path.exists(dst_path):
                            break
                        counter += 1
            if action == "move":
                shutil.move(src_path, dst_path)
            else:
                shutil.copy2(src_path, dst_path)
                
            log_event("FILE", f"{action.upper()}: '{payload.file_name}' -> '{dst_folder}'")
            undo_stack.append({
                "action": action,
                "src": src_path,
                "dst": dst_path,
                "file_name": payload.file_name
            })
            return {"status": "success", "action": action, "dst_path": dst_path}
            
        elif action == "delete":
            send2trash.send2trash(os.path.abspath(src_path))
            log_event("FILE", f"DELETE (Trash): '{payload.file_name}' from '{payload.src_folder}'")
            undo_stack.append({
                "action": "delete",
                "src": src_path,
                "dst": None,
                "file_name": payload.file_name
            })
            return {"status": "success", "action": "delete"}
            
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

def _open_folder_dialog(initial_dir: Optional[str] = None) -> str:
    # 1. Try Windows Native PowerShell FolderBrowserDialog
    if os.name == 'nt':
        try:
            ps_script = "[System.Reflection.Assembly]::LoadWithPartialName('System.Windows.Forms') | Out-Null; $f = New-Object System.Windows.Forms.FolderBrowserDialog; "
            if initial_dir and os.path.exists(initial_dir):
                ps_script += f'$f.SelectedPath = "{initial_dir.replace("/", "\\")}"; '
            ps_script += "if ($f.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK) { Write-Host $f.SelectedPath }"
            
            cmd = ["powershell", "-NoProfile", "-NonInteractive", "-Command", ps_script]
            res = subprocess.run(cmd, capture_output=True, text=True, timeout=120)
            selected = res.stdout.strip()
            if selected and os.path.exists(selected):
                return selected
        except Exception as e:
            print(f"PowerShell folder dialog fallback error: {e}")

    # 2. Fallback to Tkinter
    try:
        root = tk.Tk()
        root.withdraw()
        root.attributes("-topmost", True)
        folder = filedialog.askdirectory(initialdir=initial_dir or None, title="Pilih Folder Tujuan / Directory")
        root.destroy()
        return folder or ""
    except Exception as e:
        print(f"Error opening folder dialog: {e}")
        return ""

@app.get("/api/browse-directory")
def browse_directory(initial_dir: Optional[str] = Query(None)):
    """Open native Windows directory selection dialog"""
    start_dir = resolve_path(initial_dir) if initial_dir else None
    if start_dir and not os.path.exists(start_dir):
        start_dir = None
    selected_path = _open_folder_dialog(start_dir)
    if selected_path:
        norm_path = os.path.normpath(selected_path)
        log_event("BROWSE", f"Selected folder via dialog: '{norm_path}'")
        return {"status": "success", "path": norm_path}
    return {"status": "cancelled", "path": ""}

@app.post("/api/batch-action")
def execute_batch_action(payload: BatchActionPayload):
    """Move, copy, or delete multiple files at once"""
    if not payload.file_names:
        return {"status": "success", "processed": 0, "results": []}

    action = payload.action
    dst_folder = payload.target_folder
    if action in ["move", "copy"] and not dst_folder:
        raise HTTPException(status_code=400, detail="Target folder is required for move/copy")

    if action in ["move", "copy"] and dst_folder:
        os.makedirs(dst_folder, exist_ok=True)

    results = []
    processed_count = 0

    for file_name in payload.file_names:
        src_path = os.path.join(payload.payload_src_folder if hasattr(payload, 'payload_src_folder') else payload.src_folder, file_name)
        if not os.path.exists(src_path):
            results.append({"file_name": file_name, "status": "error", "message": "File not found"})
            continue

        try:
            if action in ["move", "copy"]:
                dst_path = os.path.join(dst_folder, file_name)
                if os.path.exists(dst_path):
                    if payload.resolve_conflict == "skip":
                        results.append({"file_name": file_name, "status": "skipped", "message": "Conflict skipped"})
                        continue
                    elif payload.resolve_conflict == "keep_both":
                        base, ext = os.path.splitext(file_name)
                        counter = 1
                        while True:
                            new_name = f"{base}_{counter}{ext}"
                            dst_path = os.path.join(dst_folder, new_name)
                            if not os.path.exists(dst_path):
                                break
                            counter += 1

                if action == "move":
                    shutil.move(src_path, dst_path)
                else:
                    shutil.copy2(src_path, dst_path)

                undo_stack.append({
                    "action": action,
                    "src": src_path,
                    "dst": dst_path,
                    "file_name": file_name
                })
                processed_count += 1
                results.append({"file_name": file_name, "status": "success", "dst_path": dst_path})

            elif action == "delete":
                send2trash.send2trash(os.path.abspath(src_path))
                undo_stack.append({
                    "action": "delete",
                    "src": src_path,
                    "dst": None,
                    "file_name": file_name
                })
                processed_count += 1
                results.append({"file_name": file_name, "status": "success"})
        except Exception as e:
            results.append({"file_name": file_name, "status": "error", "message": str(e)})

    log_event("BATCH", f"{action.upper()}: Processed {processed_count}/{len(payload.file_names)} files to '{dst_folder or 'trash'}'")
    return {"status": "success", "processed": processed_count, "results": results}

@app.post("/api/undo")
def execute_undo():
    """Undo the last file action"""
    if not undo_stack:
        return {"status": "empty", "message": "Nothing to undo"}
        
    last = undo_stack.pop()
    action = last["action"]
    try:
        if action == "delete":
            log_event("UNDO", f"DELETE UNDO: Restoring '{last['file_name']}' requires manual Recycle Bin restoration")
            return {"status": "info", "message": "Deleted files are sent to Recycle Bin. Please restore manually."}
            
        if action == "move":
            # Move it back
            shutil.move(last["dst"], last["src"])
            log_event("UNDO", f"RESTORED: Moved '{last['file_name']}' back to '{last['src']}'")
            return {"status": "success", "message": f"Undo move: {last['file_name']} restored"}
            
        if action == "copy":
            if os.path.exists(last["dst"]):
                os.remove(last["dst"])
            log_event("UNDO", f"CLEANED: Removed copy of '{last['file_name']}' from '{last['dst']}'")
            return {"status": "success", "message": f"Undo copy: Removed copy of {last['file_name']}"}
            
        if action == "rename":
            shutil.move(last["src"], last["dst"])
            log_event("UNDO", f"RESTORED: Renamed '{last['file_name']}' back")
            return {"status": "success", "message": f"Undo rename: Restored original name"}

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/api/create-folder")
def create_folder(payload: CreateFolderPayload):
    """Create a new subfolder"""
    # Sanitize folder name
    sanitized_name = payload.folder_name.replace("/", "").replace("\\", "").replace("..", "")
    target = os.path.join(payload.parent_folder, sanitized_name)
    try:
        os.makedirs(target, exist_ok=True)
        log_event("FOLDER", f"CREATED: Subfolder '{sanitized_name}' inside '{payload.parent_folder}'")
        return {"status": "success", "path": target}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/api/rename")
def rename_file(payload: RenamePayload):
    """Rename a file"""
    src_path = os.path.join(payload.src_folder, payload.old_name)
    if not os.path.exists(src_path):
        raise HTTPException(status_code=404, detail="Source file not found")
    
    sanitized_new_name = payload.new_name.replace("/", "").replace("\\", "").replace("..", "")
    dst_path = os.path.join(payload.src_folder, sanitized_new_name)
    
    if os.path.exists(dst_path):
        raise HTTPException(status_code=400, detail="Target name already exists")
        
    try:
        shutil.move(src_path, dst_path)
        log_event("FILE", f"RENAME: '{payload.old_name}' -> '{sanitized_new_name}'")
        undo_stack.append({
            "action": "rename",
            "src": dst_path, # the new location
            "dst": src_path, # the old location
            "file_name": sanitized_new_name
        })
        return {"status": "success", "new_name": sanitized_new_name, "dst_path": dst_path}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/api/rotate")
def rotate_image(path: str = Query(...), degrees: int = Query(...)):
    """Rotate image physically on disk, preserving EXIF metadata"""
    if not os.path.exists(path):
        raise HTTPException(status_code=404, detail="File not found")
    try:
        with Image.open(path) as img:
            rotated = img.rotate(-degrees, expand=True)
            # Preserve EXIF data
            exif_bytes = img.info.get('exif', b'')
            rotated.save(path, exif=exif_bytes)
        log_event("IMAGE", f"ROTATED: '{os.path.basename(path)}' by {degrees}°")
        return {"status": "success", "message": f"Rotated image by {degrees} degrees"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/api/settings")
def get_settings():
    """Get active hotkeys and extension settings"""
    return {
        "hotkeys": session_data.get("hotkeys", {}),
        "extensions": session_data.get("extensions", DEFAULT_EXTENSIONS),
        "ask_delete": session_data.get("ask_delete", True),
        "theme": session_data.get("theme", "theme-black"),
        "thumbnail_size": session_data.get("thumbnail_size", "medium"),
        "animations": session_data.get("animations", True),
        "global_shortcuts": session_data.get("global_shortcuts", DEFAULT_GLOBAL_SHORTCUTS),
        "lang": session_data.get("lang", "en"),
        "custom_hotkeys": session_data.get("custom_hotkeys", []),
        "disabled_global_shortcuts": session_data.get("disabled_global_shortcuts", []),
        "disabled_preset_keys": session_data.get("disabled_preset_keys", [])
    }

@app.post("/api/settings")
def save_settings(payload: SettingsPayload):
    """Save active hotkeys and extensions"""
    session_data["hotkeys"] = payload.hotkeys
    session_data["extensions"] = payload.extensions
    session_data["ask_delete"] = payload.ask_delete
    session_data["theme"] = payload.theme
    session_data["thumbnail_size"] = payload.thumbnail_size
    session_data["animations"] = payload.animations
    if payload.global_shortcuts is not None:
        session_data["global_shortcuts"] = payload.global_shortcuts
    session_data["lang"] = payload.lang
    if payload.custom_hotkeys is not None:
        session_data["custom_hotkeys"] = payload.custom_hotkeys
    if payload.disabled_global_shortcuts is not None:
        session_data["disabled_global_shortcuts"] = payload.disabled_global_shortcuts
    if payload.disabled_preset_keys is not None:
        session_data["disabled_preset_keys"] = payload.disabled_preset_keys
    save_session()
    n_custom = len(session_data.get('custom_hotkeys', []))
    n_disabled_g = len(session_data.get('disabled_global_shortcuts', []))
    log_event("SETTINGS", f"UPDATED: Lang='{payload.lang}', Theme='{payload.theme}', CustomHotkeys={n_custom}, DisabledGlobal={n_disabled_g}")
    return {"status": "success"}

@app.get("/api/session")
def get_session():
    """Get active session details including last folder, last index, pinned folders, layout, and UI state"""
    last_folder = session_data.get("last_folder", "")
    folder_exists = os.path.exists(last_folder) and os.path.isdir(last_folder) if last_folder else False
    default_layout = {
        "preset": "standard",
        "show_stage": True,
        "presets_position": "right",
        "show_left_sidebar": True,
        "show_right_panel": True,
        "show_bottom_panel": True
    }
    # Filter recent_folders to only include folders that still exist on disk
    recent = [f for f in session_data.get("recent_folders", []) if os.path.exists(f) and os.path.isdir(f)]
    # Filter per_folder_index to valid folders only
    pfi = {k: v for k, v in session_data.get("per_folder_index", {}).items() if os.path.exists(k)}
    return {
        "last_folder": last_folder if folder_exists else "",
        "last_index": session_data.get("last_index", 0),
        "pinned_folders": [p for p in session_data.get("pinned_folders", []) if os.path.exists(p)],
        "hotkeys": session_data.get("hotkeys", {}),
        "theme": session_data.get("theme", "theme-black"),
        "lang": session_data.get("lang", "en"),
        "layout": session_data.get("layout", default_layout),
        # Extended fields
        "recent_folders": recent,
        "panel_sizes": session_data.get("panel_sizes", {"left": 256, "right": 256, "bottom": 224}),
        "per_folder_index": pfi,
        "compare_mode": session_data.get("compare_mode", False)
    }

@app.post("/api/session-layout")
def save_session_layout(payload: LayoutPayload):
    """Save user's custom layout preferences including docks configuration"""
    layout_dict = payload.dict()
    # Remove None values so we don't overwrite existing layout fields with None
    layout_dict = {k: v for k, v in layout_dict.items() if v is not None}
    # Deep-merge into existing layout (preserves fields not sent by client)
    existing: Dict[str, Any] = session_data.get("layout", {})  # type: ignore[assignment]
    merged: Dict[str, Any] = {**existing, **layout_dict}
    session_data["layout"] = merged
    save_session()
    docks_info = payload.docks or {}
    log_event("LAYOUT", f"Layout saved: Preset='{payload.preset}', Stage={payload.show_stage}, Docks={docks_info}")
    return {"status": "success", "layout": session_data["layout"]}

@app.post("/api/pinned-folders")
def save_pinned_folders(payload: PinnedFoldersPayload):
    """Save pinned folders list"""
    session_data["pinned_folders"] = payload.pinned_folders
    save_session()
    log_event("SESSION", f"Pinned folders updated ({len(payload.pinned_folders)} items)")
    return {"status": "success", "pinned_folders": session_data["pinned_folders"]}

@app.post("/api/session-index")
def save_session_index(folder: str = Query(...), index: int = Query(...)):
    """Record current sorting index inside session, update per-folder index and recent folders"""
    session_data["last_folder"] = folder
    session_data["last_index"] = index

    # Track per-folder last index
    pfi = session_data.setdefault("per_folder_index", {})
    pfi[folder] = index
    # Cap per_folder_index at 50 entries to avoid unbounded growth
    if len(pfi) > 50:
        oldest_key = next(iter(pfi))
        del pfi[oldest_key]

    # Update recent_folders list (most recent first, deduped, max 10)
    recent = session_data.setdefault("recent_folders", [])
    if folder in recent:
        recent.remove(folder)
    recent.insert(0, folder)
    session_data["recent_folders"] = recent[:10]

    save_session()
    return {"status": "success"}

@app.post("/api/session-ui")
def save_session_ui(payload: SessionUIPayload):
    """Save UI state: panel sizes and compare mode"""
    if payload.panel_sizes is not None:
        current = session_data.setdefault("panel_sizes", {"left": 256, "right": 256, "bottom": 224})
        current.update(payload.panel_sizes)
        session_data["panel_sizes"] = current
    if payload.compare_mode is not None:
        session_data["compare_mode"] = payload.compare_mode
    save_session()
    return {"status": "success"}

# Serve frontend static files
app.mount("/", StaticFiles(directory="frontend", html=True), name="frontend")
