# Photo Sorter Pro

A high-performance, open-source desktop web application engineered for rapid photo sorting, culling, cataloging, and side-by-side media comparison. Built on FastAPI and native Windows Shell COM bindings, Photo Sorter Pro delivers sub-second folder scanning and hardware-accelerated media previews.

Developed and maintained by **[dexccv](https://github.com/dexccv)**.

---

## Overview

---
### Recent Updates (2026‑07‑31)
- **Extensive Frontend Refactoring**: Split the monolithic `index.html` into modular `app.js` and `styles.css` for better maintainability.
- **Backend Bug Fixes**: Resolved `get_mtp_file_local_path` and `get_thumbnail_path` undefined references in `backend/main.py`.
- **Type Hinting**: Fixed static dictionary type hinting and assignment mismatches during session layout saving.
- **Import Fixes**: Addressed missing `asyncio` import that caused runtime errors in folder watch endpoints.
- Added **folder auto‑refresh watcher** using `watchdog` to automatically detect file system changes and keep the UI in sync when sorting actions move files.
- Fixed **EXIF loss on image rotation** by preserving EXIF metadata during the `/api/rotate` operation.
- Improved **per‑folder index handling** in `/api/scan-images` for accurate navigation across folders.
- Updated CORS middleware comment and clarified its purpose.
- Added **light‑theme CSS** and basic slideshow support (frontend placeholders).
- Created `backend/watcher.py` module and integrated startup logic.

---
## Overview

Photo Sorter Pro streamlines professional photo selection workflows for photographers, digital archivists, and content creators. It eliminates the overhead of heavy desktop software by leveraging lightweight web standards paired with native system APIs for instant storage device scanning.

### Core Capabilities

- **3-Photo Stage Comparison**: View active images alongside previous and next preview cards in a continuous filmstrip stage. Sizing automatically adapts to portrait and landscape aspect ratios without container padding distortion.
- **Native MTP & External Storage Support**: Built-in Windows Shell COM integration (`comtypes`) enables sub-second directory tree scanning for Android/iOS smartphones (MTP) and external USB media.
- **Modular Free Docking Sandbox**: Dynamic UI workspace allowing individual panels (Explorer, Inspector, Console) to be docked to the Left Sidebar, Right Sidebar, Bottom Dock, or hidden entirely with auto-orienting responsive layouts.
- **Automatic Session Recovery**: State persistence engine that records current working directories, photo indices, target hotkey mappings, and layout preferences in `sorter_session.json` to prevent progress loss.
- **Custom Shortcut Engine**: Configurable single-key folder routing (numeric keys 1–9) with real-time keybinding conflict detection against system and browser defaults.

---

## Architecture & Technology Stack

The application employs a decoupled architecture comprising a Python backend service and a zero-dependency frontend interface.

```
+-------------------------------------------------------------------+
|                        Frontend Interface                         |
|      (HTML5, Vanilla JS, Tailwind CSS, Lucide SVG Engine)        |
+-------------------------------------------------------------------+
                                  |
                        FastAPI REST API Server
                                  |
+---------------------------------+---------------------------------+
|                                 |                                 |
|       Native MTP Helper         |      Local Filesystem Engine    |
|   (Python comtypes C++ COM)     |     (Pillow, Send2Trash, OS)    |
+---------------------------------+---------------------------------+
```

### Stack Components

- **Backend**: Python 3.10+, FastAPI, Uvicorn, Pillow (PIL), Send2Trash, `comtypes` (C++ COM Shell API).
- **Frontend**: Vanilla JavaScript (ES6+), Tailwind CSS, Lucide Icons, HTML5 Canvas (Live RGB Histogram).
- **Persistence**: JSON-based session engine (`sorter_session.json`).

---

## System Requirements

- **Operating System**: Windows 10 / Windows 11 (required for native MTP Shell COM support).
- **Python Runtime**: Python 3.10 or higher.
- **Browser**: Chrome, Edge, Firefox, or any modern Chromium-based browser.

---

## Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/dexccv/Photo-Sorter-Pro-sandbox-open-source-.git
cd Photo-Sorter-Pro-sandbox-open-source-
```

### 2. Install Dependencies

Install the required Python packages:

```bash
pip install -r requirements.txt
```

### 3. Launch Application

Execute the startup script:

```bash
python run.py
```

The startup script automatically verifies dependencies, initializes the local server on `http://127.0.0.1:8000`, and opens the interface in your default browser.

---

## Workspace Layout System

Photo Sorter Pro features a modular layout engine with four predefined workspace configurations:

| Layout Preset | Description |
| :--- | :--- |
| **Standard Dual Sidebar** | Default configuration with Explorer on the left, Stage in center, Inspector on right, and Console on bottom. |
| **3-Photo Stage Studio** | Maximized stage area optimized for side-by-side image comparison with docked activity console. |
| **Right Presets Dock** | Consolidated single-sidebar workflow for rapid cataloging and one-click preset sorting. |
| **Minimal Stage Focus** | Clean borderless stage view with all utility panels hidden for distraction-free viewing. |

### Custom Docking

Panels can be re-docked independently using the **Layout** menu in the top navigation bar:
- **Explorer**: Left Sidebar | Right Sidebar | Bottom Panel | Hidden
- **Inspector**: Left Sidebar | Right Sidebar | Bottom Panel | Hidden
- **Console**: Left Sidebar | Right Sidebar | Bottom Panel | Hidden

When docked to a vertical sidebar, the Folder Contents gallery automatically adjusts from a horizontal filmstrip into a responsive two-column grid.

---

## API Reference

The backend exposes REST endpoints for file operations, session state, and system telemetry:

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/drives` | `GET` | Scans and returns connected local drives, USB volumes, and MTP portable devices. |
| `/api/scan-images` | `GET` | Returns list of supported media files in a specified path with cached session index. |
| `/api/thumbnail` | `GET` | Generates hardware-cached image thumbnails for smooth filmstrip rendering. |
| `/api/action` | `POST` | Executes file operations (`move`, `copy`, `delete`) with undo buffer support. |
| `/api/session-layout` | `POST` | Persists user workspace layout preferences to `sorter_session.json`. |
| `/api/undo` | `POST` | Reverses the previous file move or copy operation. |

---

## Keybindings & Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `Right Arrow` / `Space` | Advance to next photo |
| `Left Arrow` | Return to previous photo |
| `1` – `9` | Execute target folder action (Move/Copy to mapped preset) |
| `Ctrl + Z` | Undo last file operation |
| `Delete` | Trash active photo (via system Recycle Bin) |
| `Ctrl + L` | Toggle Left Explorer Panel |
| `Ctrl + B` | Toggle Bottom Console Panel |
| `Ctrl + R` | Toggle Right Inspector Panel |
| `F1` / `Ctrl + H` | Open Keybindings Guide |

---

## Author & License

Developed by **dexccv**:
- GitHub: [https://github.com/dexccv](https://github.com/dexccv)
- Project Repository: [https://github.com/dexccv/Photo-Sorter-Pro-sandbox-open-source-](https://github.com/dexccv/Photo-Sorter-Pro-sandbox-open-source-)

Distributed under the **MIT License**. See `LICENSE` for further details.
