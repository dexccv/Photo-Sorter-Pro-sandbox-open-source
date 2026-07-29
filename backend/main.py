import os
import sys
import shutil
import string
import json
import base64
import hashlib
import time
from io import BytesIO
from typing import List, Dict, Optional
from datetime import datetime
from fastapi import FastAPI, HTTPException, Query, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse, StreamingResponse, Response
from pydantic import BaseModel
from PIL import Image, ExifTags, ImageOps
import send2trash

from backend.mtp_helper import (
    is_mtp_path, get_mtp_drives, scan_mtp_dir, scan_mtp_images, get_mtp_file_local_path
)

def resolve_path(path: str) -> str:
    """Normalize path and strip 'This PC\' prefix for standard drives or preserve MTP paths"""
    if not path:
        return ""
    p = path.replace('/', '\\').strip()
    if p.lower() in ["this pc", "thispc", "computer"]:
        return ""
    if p.lower().startswith("this pc\\"):
        sub = p[8:].strip()
        if len(sub) >= 2 and sub[1] == ':':
            return sub
        if sub.startswith("Local Disk (") and len(sub) >= 14 and sub[12] == ':':
            drive_letter = sub[11:13]
            rest = sub[14:].lstrip('\\/')
            return f"{drive_letter}\\{rest}" if rest else f"{drive_letter}\\"
    return p

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

# In-memory thumbnail LRU cache: path -> (etag, jpeg_bytes, size_wh)
_thumb_cache: Dict[str, tuple] = {}
THUMB_CACHE_MAX = 300  # max entries

app = FastAPI(title="Modern Photo Sorter API")

# Enable CORS for frontend development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SESSION_FILE = "sorter_session.json"
DEFAULT_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"]
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

class CreateFolderPayload(BaseModel):
    parent_folder: str
    folder_name: str

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

class LayoutPayload(BaseModel):
    preset: Optional[str] = "standard"
    show_stage: Optional[bool] = True
    presets_position: Optional[str] = "right"
    show_left_sidebar: Optional[bool] = True
    show_right_panel: Optional[bool] = True
    show_bottom_panel: Optional[bool] = True

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
    }
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
                session_data.update(loaded)
        except Exception:
            pass

def save_session():
    try:
        with open(SESSION_FILE, 'w') as f:
            json.dump(session_data, f)
    except Exception:
        pass

load_session()

class PinnedFoldersPayload(BaseModel):
    pinned_folders: List[str]

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
            "lastIndex": session_data["last_index"] if session_data["last_folder"] == path else 0
        }

    if not real_path or not os.path.exists(real_path) or not os.path.isdir(real_path):
        raise HTTPException(status_code=404, detail="Directory not found")
    
    exts = tuple(session_data.get("extensions", DEFAULT_EXTENSIONS))
    try:
        files = [f for f in os.listdir(real_path) if f.lower().endswith(exts) and os.path.isfile(os.path.join(real_path, f))]
        files.sort()
        
        session_data["last_folder"] = path
        save_session()
        
        log_event("SCAN", f"Scanning directory: '{real_path}' (Found {len(files)} images)")
        return {
            "folder": path,
            "images": files,
            "lastIndex": session_data["last_index"] if session_data["last_folder"] == path else 0
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

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

    if request.headers.get("if-none-match") == etag:
        return Response(status_code=304)

    if cache_key in _thumb_cache:
        cached_etag, cached_bytes = _thumb_cache[cache_key]
        return Response(
            content=cached_bytes,
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
            buf = BytesIO()
            img.save(buf, format="JPEG", quality=75, optimize=True, progressive=True)
            jpeg_bytes = buf.getvalue()

        if len(_thumb_cache) >= THUMB_CACHE_MAX:
            oldest_key = next(iter(_thumb_cache))
            del _thumb_cache[oldest_key]
        _thumb_cache[cache_key] = (etag, jpeg_bytes)

        return Response(
            content=jpeg_bytes,
            media_type="image/jpeg",
            headers={
                "ETag": etag,
                "Cache-Control": "private, max-age=86400",
                "Content-Length": str(len(jpeg_bytes)),
            }
        )
    except Exception as e:
        return FileResponse(real_path)

@app.get("/api/metadata")
def get_metadata(path: str = Query(...)):
    """Extract EXIF data, image size, and compute histogram data"""
    real_path = get_real_file_path(path)
    if not os.path.exists(real_path):
        raise HTTPException(status_code=404, detail="File not found")
        
    try:
        exif_data = {"Camera": "-", "ISO": "-", "Aperture": "-", "Shutter": "-"}
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
                    elif tag == "ExposureTime": exif_data["Shutter"] = f"{value}s"
            
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
            
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/api/create-folder")
def create_folder(payload: CreateFolderPayload):
    """Create a new subfolder"""
    target = os.path.join(payload.parent_folder, payload.folder_name)
    try:
        os.makedirs(target, exist_ok=True)
        log_event("FOLDER", f"CREATED: Subfolder '{payload.folder_name}' inside '{payload.parent_folder}'")
        return {"status": "success", "path": target}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/api/rotate")
def rotate_image(path: str = Query(...), degrees: int = Query(...)):
    """Rotate image physically on disk"""
    if not os.path.exists(path):
        raise HTTPException(status_code=404, detail="File not found")
    try:
        with Image.open(path) as img:
            rotated = img.rotate(-degrees, expand=True)
            rotated.save(path)
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
    """Get active session details including last folder, last index, pinned folders, and layout"""
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
    return {
        "last_folder": last_folder if folder_exists else "",
        "last_index": session_data.get("last_index", 0),
        "pinned_folders": [p for p in session_data.get("pinned_folders", []) if os.path.exists(p)],
        "hotkeys": session_data.get("hotkeys", {}),
        "theme": session_data.get("theme", "theme-black"),
        "lang": session_data.get("lang", "en"),
        "layout": session_data.get("layout", default_layout)
    }

@app.post("/api/session-layout")
def save_session_layout(payload: LayoutPayload):
    """Save user's custom layout preferences"""
    session_data["layout"] = payload.dict()
    save_session()
    log_event("LAYOUT", f"Layout saved: Preset='{payload.preset}', Stage={payload.show_stage}, Position='{payload.presets_position}'")
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
    """Record current sorting index inside session"""
    session_data["last_folder"] = folder
    session_data["last_index"] = index
    save_session()
    return {"status": "success"}

# Serve frontend static files
app.mount("/", StaticFiles(directory="frontend", html=True), name="frontend")
