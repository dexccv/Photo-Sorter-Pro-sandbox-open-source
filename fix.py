import os

path = 'd:/modern-photo-sorter/backend/main.py'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

correct_block = '''@app.get("/api/scan-dir")
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

@app.get("/api/watch")
async def watch_folder_endpoint(request: Request):
    async def event_generator():
        global _folder_changed
        while True:
            if await request.is_disconnected():
                break
            if _folder_changed:
                _folder_changed = False
                yield "data: refresh\\n\\n"
            import asyncio
            await asyncio.sleep(0.5)
    from fastapi.responses import StreamingResponse
    return StreamingResponse(event_generator(), media_type="text/event-stream")

@app.get("/api/image")
def get_image(request: Request, path: str = Query(...)):
    """Serve the full-resolution image file with HTTP caching support"""
    real_path = resolve_path(path)
    
    if is_mtp_path(real_path):
        temp_path = get_mtp_file(real_path)
        if temp_path:
            return FileResponse(temp_path)
        raise HTTPException(status_code=404, detail="File not found on device")
        
    if not real_path or not os.path.exists(real_path):
        raise HTTPException(status_code=404, detail="File not found")
        
    # Check for Not-Modified
    stat = os.stat(real_path)
    etag = f"{stat.st_mtime}-{stat.st_size}"
    if request.headers.get("if-none-match") == etag:
        return Response(status_code=304)
        
    return FileResponse(real_path, headers={
        "Cache-Control": "public, max-age=86400",
        "ETag": etag
    })

@app.get("/api/thumbnail")
def get_thumbnail(path: str = Query(...), width: int = Query(240), height: int = Query(240)):
    """Generate and serve a cached thumbnail for the image"""
    real_path = resolve_path(path)
    if not real_path or not os.path.exists(real_path):
        raise HTTPException(status_code=404, detail="File not found")
        
    thumb_path = get_thumbnail_path(real_path)
    
    # Return from cache if exists and is newer than the original file
    try:
        if os.path.exists(thumb_path) and os.path.getmtime(thumb_path) >= os.path.getmtime(real_path):
            return FileResponse(thumb_path, headers={
                "Cache-Control": "public, max-age=86400, immutable"
            })
    except Exception:
        pass
        
    try:
        if is_mtp_path(real_path):
            temp_path = get_mtp_file(real_path)
            if not temp_path:
                raise HTTPException(status_code=404, detail="File not found on device")
            with Image.open(temp_path) as img:
                small_img = img.copy()
                small_img.thumbnail((width, height))
                small_img.save(thumb_path, "JPEG", quality=85)
        else:
            with Image.open(real_path) as img:
                small_img = img.copy()
                small_img.thumbnail((width, height))
                small_img.save(thumb_path, "JPEG", quality=85)
        
        return FileResponse(thumb_path, headers={
            "Cache-Control": "public, max-age=86400, immutable"
        })
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

@app.post("/api/action-batch")'''

start_idx = content.find('@app.get("/api/scan-dir")')
end_idx = content.find('@app.post("/api/action-batch")')

if start_idx != -1 and end_idx != -1:
    new_content = content[:start_idx] + correct_block + content[end_idx + len('@app.post("/api/action-batch")'):]
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Fixed main.py")
else:
    print("Could not find start or end index.")
