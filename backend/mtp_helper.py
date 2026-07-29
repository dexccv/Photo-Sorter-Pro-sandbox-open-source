import os
import sys
import json
import hashlib
from typing import List, Dict, Optional

# Cache directory for MTP extracted files
CACHE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".mtp_cache"))
os.makedirs(CACHE_DIR, exist_ok=True)

def is_mtp_path(path: str) -> bool:
    if not path:
        return False
    normalized = path.replace('/', '\\').strip()
    if normalized.lower() in ["this pc", "thispc", "computer"]:
        return False
    if normalized.lower().startswith("this pc\\") or normalized.startswith("::{20D04FE0"):
        parts = [p for p in normalized.split('\\') if p]
        if len(parts) > 1 and len(parts[1]) == 2 and parts[1][1] == ':':
            return False  # Standard drive letter like "This PC\C:\"
        return True
    return False

def _get_shell():
    try:
        import comtypes.client
        try:
            comtypes.CoInitialize()
        except Exception:
            pass
        return comtypes.client.CreateObject("Shell.Application")
    except Exception as e:
        print(f"COM Init error: {e}")
        return None

def _get_folder_obj(shell, target_path: str):
    if not shell:
        return None
    try:
        parts = [p for p in target_path.replace('/', '\\').split('\\') if p]
        if not parts or parts[0].lower() in ["this pc", "computer"]:
            parts = parts[1:]
        
        if not parts:
            return shell.NameSpace(17) # 17 = ssfDRIVES (This PC)
            
        curr = shell.NameSpace(17)
        for part in parts:
            if not curr:
                break
            found = None
            for item in curr.Items():
                if item.Name.lower() == part.lower() or item.Path.lower() == part.lower():
                    found = item.GetFolder
                    break
            curr = found
        return curr
    except Exception as e:
        print(f"Get Folder Obj error: {e}")
        return None

def get_mtp_drives() -> List[Dict]:
    """Get connected MTP / Portable devices under This PC instantly via comtypes"""
    devices = []
    try:
        shell = _get_shell()
        if shell:
            pc = shell.NameSpace(17)
            if pc:
                for item in pc.Items():
                    if not item.IsFileSystem:
                        devices.append({
                            "name": item.Name,
                            "path": f"This PC\\{item.Name}",
                            "drive_letter": "MTP",
                            "type": "mtp",
                            "label": "Ponsel / MTP Device",
                            "raw_path": item.Path
                        })
    except Exception as e:
        print(f"Error fetching MTP drives via comtypes: {e}")
    return devices

def scan_mtp_dir(path: str) -> List[Dict]:
    """Fast scan subdirectories of an MTP path via native COM"""
    subdirs = []
    try:
        shell = _get_shell()
        if shell:
            folder = _get_folder_obj(shell, path)
            if folder:
                for item in folder.Items():
                    if item.IsFolder:
                        subdirs.append({
                            "name": item.Name,
                            "path": f"{path.rstrip('\\')}\\{item.Name}",
                            "hasChildren": True
                        })
    except Exception as e:
        print(f"Error scanning MTP dir via comtypes: {e}")
    return subdirs

def scan_mtp_images(path: str, exts: List[str]) -> List[str]:
    """Fast scan image files inside an MTP directory via native COM"""
    files = []
    ext_tuple = tuple(e.lower() for e in exts)
    try:
        shell = _get_shell()
        if shell:
            folder = _get_folder_obj(shell, path)
            if folder:
                for item in folder.Items():
                    if not item.IsFolder:
                        fname = item.Name
                        if fname.lower().endswith(ext_tuple):
                            files.append(fname)
                files.sort()
    except Exception as e:
        print(f"Error scanning MTP images via comtypes: {e}")
    return files

def get_mtp_file_local_path(mtp_dir: str, file_name: str) -> str:
    """Extract an MTP file to local cache using native Shell COM CopyHere"""
    clean_dir = mtp_dir.replace('/', '\\').strip()
    
    dir_hash = hashlib.md5(clean_dir.encode('utf-8')).hexdigest()
    target_cache_dir = os.path.join(CACHE_DIR, dir_hash)
    os.makedirs(target_cache_dir, exist_ok=True)
    local_path = os.path.join(target_cache_dir, file_name)
    
    if os.path.exists(local_path) and os.path.getsize(local_path) > 0:
        return local_path

    try:
        shell = _get_shell()
        if shell:
            folder = _get_folder_obj(shell, clean_dir)
            if folder:
                target_item = None
                for item in folder.Items():
                    if item.Name.lower() == file_name.lower():
                        target_item = item
                        break
                
                if target_item:
                    dest_folder = shell.NameSpace(target_cache_dir)
                    if dest_folder:
                        dest_folder.CopyHere(target_item, 20)
    except Exception as e:
        print(f"Error extracting MTP file via comtypes: {e}")
        
    return local_path
