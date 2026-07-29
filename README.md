# 📷 Photo Sorter Pro

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.10%2B-brightgreen.svg)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100%2B-009688.svg)](https://fastapi.tiangolo.com/)
[![Creator](https://img.shields.io/badge/Created%20By-dexccv-purple.svg)](https://github.com/dexccv)

**Photo Sorter Pro** is a high-performance, open-source desktop web application designed for lightning-fast photo sorting, culling, cataloging, and side-by-side comparison. Built with FastAPI and a modern responsive frontend, it integrates native Windows Shell COM bindings for instant smartphone (MTP) and external drive detection.

Created with ❤️ by **[dexccv](https://github.com/dexccv)**.

---

## 🌟 Key Features

### 🎞️ 3-Photo Carousel Stage (Side-by-Side Comparison)
- **Continuous Filmstrip Carousel**: View the active photo flanked by interactive **Previous Photo** (left) and **Next Photo** (right) preview cards.
- **Aspect-Ratio Fitting**: Preview cards dynamically wrap around portrait and landscape photos cleanly with zero awkward empty gaps.
- **Compare Mode Toggle**: Seamlessly switch between single photo focus and 3-photo side-by-side comparison view.

### 📱 Native C++ COM MTP Smartphone & USB Engine
- **Instant MTP Device Detection**: Detects Android/iOS smartphones (e.g. `TECNO CAMON`, `Samsung Galaxy`, `iPhone`) connected via MTP virtual namespace (`This PC\...`).
- **Sub-Second Folder Scanning**: Native Python `comtypes` C++ COM pointers eliminate process spawn overhead, scanning deep phone media folders in `<0.2s`.

### 🎨 Modular Free Panel Docking Sandbox
- **Customizable Layout Presets**: 1-click switching between *Standard Dual Sidebar*, *3-Photo Stage Studio*, *Right Presets Dock*, and *Minimal Stage Focus*.
- **Dynamic Dock Reparenting**: Move **Explorer**, **Inspector**, and **Console / Folder Contents** freely between Left Sidebar, Right Sidebar, Bottom Panel, or Hidden.
- **Auto-Adapting Layout Orientation**: Folder Contents gallery automatically converts into a 2-column vertical grid when docked in a sidebar!

### 💾 Automatic Session Recovery & Persistence
- **Crash Recovery**: Automatically saves the last active directory, photo index, and custom layout configuration in `sorter_session.json`.
- **Pin to Start / Quick Access**: Pin favorite target directories to Quick Access for 1-click sorting workflows.

### ⌨️ Custom Shortcuts & Conflict Detection
- **1-Click Folder Routing (Presets 1–9)**: Assign numeric keys to instant Move/Copy target folders.
- **Shortcuts Manager**: Remap global keys with real-time browser conflict warning badges.

---

## 🛠️ Quick Start & Installation

### Prerequisites
- Python 3.10 or higher
- Windows 10 / 11

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dexccv/Photo-Sorter-Pro-sandbox-open-source-.git
   cd Photo-Sorter-Pro-sandbox-open-source-
   ```

2. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Launch Application**:
   ```bash
   python run.py
   ```
   Open your browser at `http://127.0.0.1:8000` (starts automatically).

---

## 📂 Project Structure

```
modern-photo-sorter/
├── backend/
│   ├── main.py           # FastAPI application endpoints & layout persistence
│   ├── mtp_helper.py     # Native Windows COM MTP engine using comtypes
├── frontend/
│   └── index.html        # Modern UI, 3-Photo Stage, Sandbox Layout & Hotkey Engine
├── run.py                # Launcher script with startup watermark banner
├── requirements.txt      # Python package dependencies
└── README.md             # Documentation
```

---

## 👤 Credits & Author

Developed and maintained by **dexccv**:
- **GitHub**: [@dexccv](https://github.com/dexccv)
- **Repository**: [Photo-Sorter-Pro-sandbox-open-source-](https://github.com/dexccv/Photo-Sorter-Pro-sandbox-open-source-)

If you find this project helpful, please consider **⭐ Starring** the repository on GitHub!

---

## 📄 License
This project is open-source and licensed under the [MIT License](LICENSE).
