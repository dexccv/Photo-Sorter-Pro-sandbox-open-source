# 📋 Kritik & Saran — Photo Sorter Pro v2.5
### Laporan Evaluasi Menyeluruh untuk Next Update

> Dokumen ini berisi evaluasi teknis dan desain yang sangat detail terhadap kondisi aplikasi saat ini, mencakup bug/masalah yang perlu diperbaiki, fitur yang belum ada, dan rekomendasi prioritas pengembangan ke depan.

---

## 🔴 BAGIAN 1 — MASALAH & BUG YANG HARUS DIPERBAIKI

### 1.1 — Backend / Python (Kritis)

---

#### ❌ Bug: `PinnedFoldersPayload` didefinisikan DUA KALI
**File:** [main.py](file:///d:/modern-photo-sorter/backend/main.py#L144-L145) & [L222-L223](file:///d:/modern-photo-sorter/backend/main.py#L222-L223)

```python
# Baris 144-145 (definisi pertama)
class PinnedFoldersPayload(BaseModel):
    pinned_folders: List[str]

# Baris 222-223 (definisi duplikat — akan menimpa yang pertama!)
class PinnedFoldersPayload(BaseModel):
    pinned_folders: List[str]
```

**Dampak:** Python akan menggunakan definisi kedua dan menutup kemungkinan error yang tersembunyi, namun ini adalah code smell yang serius — jika kedua definisi berbeda di masa depan, ini bisa memicu bug yang sulit dilacak.

**Solusi:** Hapus salah satu definisi duplikat, simpan hanya satu di atas sebelum digunakan pertama kali.

---

#### ❌ Bug: `undo` untuk `delete` tidak bisa benar-benar di-undo
**File:** [main.py L691-L693](file:///d:/modern-photo-sorter/backend/main.py#L691-L693)

```python
if action == "delete":
    log_event("UNDO", "DELETE UNDO: Restoring ...")
    return {"status": "info", "message": "Deleted files are sent to Recycle Bin. Please restore manually."}
```

**Dampak:** Pengguna menekan `Ctrl+Z` setelah delete dan mendapat pesan "restore manual dari Recycle Bin". Ini tidak konsisten dengan ekspektasi UX bahwa Ctrl+Z harus benar-benar membalikkan aksi. Fitur undo menjadi setengah-setengah.

**Solusi:** Gunakan library `winshell` atau `Send2Trash` bersama dengan Windows Shell COM (`IShellItem`) untuk men-trigger restore otomatis dari Recycle Bin, atau paling tidak tampilkan toast notifikasi yang jelas bahwa delete tidak bisa di-undo via aplikasi.

---

#### ❌ Bug: `rotate_image` tidak mempertahankan EXIF metadata
**File:** [main.py L721-L733](file:///d:/modern-photo-sorter/backend/main.py#L721-L733)

```python
with Image.open(path) as img:
    rotated = img.rotate(-degrees, expand=True)
    rotated.save(path)  # ← EXIF hilang di sini!
```

**Dampak:** Setelah rotate, semua metadata EXIF (tanggal foto, kamera, GPS, ISO, dll.) hilang permanen dari file. Ini fatal untuk fotografer profesional.

**Solusi:**
```python
with Image.open(path) as img:
    exif_bytes = img.info.get("exif", b"")
    rotated = img.rotate(-degrees, expand=True)
    rotated.save(path, exif=exif_bytes)  # Preserve EXIF
```

---

#### ❌ Bug: `undo_stack` hanya di memory, hilang saat restart
**File:** [main.py L197](file:///d:/modern-photo-sorter/backend/main.py#L197)

```python
undo_stack = []  # in-memory only
```

**Dampak:** Jika server restart (atau crash), seluruh undo history hilang. Pengguna tidak bisa membatalkan aksi dari sesi sebelumnya.

**Solusi:** Persist `undo_stack` ke `sorter_session.json` (dengan batas maksimum, misalnya 50 aksi terakhir), sehingga undo tetap tersedia setelah restart.

---

#### ❌ Bug: `scan_images` tidak mengembalikan `lastIndex` dengan benar
**File:** [main.py L344-L348](file:///d:/modern-photo-sorter/backend/main.py#L344-L348)

```python
return {
    "folder": path,
    "images": files,
    "lastIndex": session_data["last_index"] if session_data["last_folder"] == path else 0
}
```

**Masalah:** `last_index` di session ini adalah index global, bukan per-folder. Namun ada juga `per_folder_index` yang ada di session. Kode ini tidak menggunakan `per_folder_index`, sehingga fungsi "ingat posisi terakhir per folder" tidak bekerja dengan benar di endpoint `scan_images`.

**Solusi:**
```python
pfi = session_data.get("per_folder_index", {})
last_idx = pfi.get(path, 0)
return {"folder": path, "images": files, "lastIndex": last_idx}
```

---

#### ❌ Bug: CORS terbuka lebar ke semua origin
**File:** [main.py L86-L92](file:///d:/modern-photo-sorter/backend/main.py#L86-L92)

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ← Berbahaya untuk aplikasi lokal!
    ...
)
```

**Dampak:** Setiap website yang dibuka pengguna bisa mengakses API backend lokal dan melakukan operasi file (move, delete, copy) secara diam-diam. Ini adalah celah keamanan serius.

**Solusi:** Batasi origin hanya ke `http://127.0.0.1:8000` dan `http://localhost:8000`:
```python
allow_origins=["http://127.0.0.1:8000", "http://localhost:8000"]
```

---

#### ⚠️ Masalah: MTP Cache tidak pernah dibersihkan
**File:** [mtp_helper.py L8-L9](file:///d:/modern-photo-sorter/backend/mtp_helper.py#L8-L9)

Folder `.mtp_cache` akan terus membesar tanpa batas seiring penggunaan aplikasi. Tidak ada mekanisme TTL (Time-To-Live) atau cleanup otomatis.

**Solusi:** Tambahkan endpoint `/api/clear-mtp-cache` dan auto-cleanup saat startup untuk file cache yang lebih dari 7 hari.

---

#### ⚠️ Masalah: `SESSION_FILE` disimpan di direktori kerja, bukan direktori user
**File:** [main.py L94](file:///d:/modern-photo-sorter/backend/main.py#L94)

```python
SESSION_FILE = "sorter_session.json"
```

**Dampak:** Jika aplikasi dijalankan dari direktori yang berbeda, session file akan dibuat di tempat berbeda atau gagal ditemukan. Ini menyebabkan kehilangan session.

**Solusi:** Simpan di direktori yang konsisten:
```python
import appdirs
SESSION_FILE = os.path.join(appdirs.user_data_dir("PhotoSorterPro"), "session.json")
```

---

#### ⚠️ Masalah: Tidak ada validasi input pada `folder_name` saat `create_folder`
**File:** [main.py L710-L719](file:///d:/modern-photo-sorter/backend/main.py#L710-L719)

Nama folder tidak divalidasi — pengguna bisa mengirim nama seperti `../../../Windows/System32` (path traversal attack) yang berpotensi membuat folder di lokasi berbahaya.

**Solusi:** Sanitasi `folder_name` dengan membuang karakter berbahaya (`/`, `\`, `..`, karakter null, dll.).

---

### 1.2 — Frontend / UI-UX (Penting)

---

#### ❌ Masalah: Seluruh frontend ada dalam SATU file HTML (4.846 baris)
**File:** [index.html](file:///d:/modern-photo-sorter/frontend/index.html) — 4.846 baris, 224 KB

**Dampak:**
- Sangat sulit di-maintain dan di-debug
- Tidak bisa di-minify atau di-optimize secara parsial
- Setiap perubahan kecil memerlukan membuka file raksasa
- Tidak ada separation of concerns antara HTML, CSS, dan JS

**Solusi:** Refaktor ke struktur yang lebih modular:
```
frontend/
  index.html        ← markup saja
  css/
    main.css
    themes.css
    animations.css
  js/
    app.js          ← state management
    api.js          ← API calls
    ui.js           ← rendering
    shortcuts.js    ← keyboard handler
    session.js      ← session management
```

---

#### ❌ Masalah: Tidak ada fitur "Rename File"
Satu-satunya aksi yang bisa dilakukan pada foto adalah move/copy/delete/rotate. Tidak ada fitur rename file langsung dari UI. Ini fitur dasar yang sangat dibutuhkan.

---

#### ❌ Masalah: Undo untuk delete tidak bisa bekerja (konsisten dengan bug backend)
UI menampilkan toast "Undo: Restore manual dari Recycle Bin" — ini membingungkan pengguna karena mereka mengharapkan undo benar-benar membalikkan aksi.

---

#### ⚠️ Masalah: Tidak ada indikator loading/progress saat batch operation besar
Saat memindahkan ratusan foto, tidak ada progress bar atau indikator persentase. Pengguna tidak tahu apakah aplikasi masih bekerja atau hang.

---

#### ⚠️ Masalah: Pilihan bahasa (i18n) masih sangat terbatas
Ada sistem i18n (`data-i18n`) tapi teks-teks masih campur bahasa Indonesia dan Inggris secara acak di dalam HTML (contoh: placeholder "Path direktori...", "Pilih atau ketik direktori tujuan...", "Batal", dll.). Konsistensi bahasa sangat buruk.

---

#### ⚠️ Masalah: Thumbnail cache di memory hilang saat server restart
`_thumb_cache` adalah dictionary in-memory. Setiap kali server restart (misalnya saat pengembangan), semua thumbnail harus di-generate ulang dari nol — memperlambat startup.

**Solusi:** Implementasi disk-based thumbnail cache menggunakan hash path+mtime sebagai nama file di folder `.thumb_cache/`.

---

#### ⚠️ Masalah: Tidak ada konfirmasi saat multi-select delete
Pengguna bisa menghapus ratusan foto dalam satu klik tanpa konfirmasi yang memadai. Meski ada `send2trash`, ini tetap risiko tinggi.

---

## 🟡 BAGIAN 2 — FITUR YANG BELUM ADA (PRIORITAS TINGGI)

### 2.1 — Fitur Manajemen File

---

#### 🆕 FITUR: Rename File
**Deskripsi:** Tombol atau shortcut keyboard (`F2`) untuk rename foto langsung dari viewer. Sangat esensial untuk workflow fotografer.

**Implementasi:**
- Backend: endpoint `POST /api/rename` dengan `{src_folder, old_name, new_name}`
- Frontend: double-click pada nama file atau tekan F2 untuk inline rename

---

#### 🆕 FITUR: Auto-Rename Berdasarkan EXIF Date
**Deskripsi:** Fitur batch rename otomatis yang mengubah nama file menjadi format tanggal dari EXIF (contoh: `2024-03-15_001.jpg`). Sangat berguna untuk mengorganisir foto dari kamera.

**Implementasi:**
- Backend: endpoint `POST /api/batch-rename` dengan pilihan format template
- Frontend: modal dengan preview before/after nama file

---

#### 🆕 FITUR: Duplicate Detection (Deteksi Foto Duplikat)
**Deskripsi:** Scan folder dan temukan foto yang identik atau sangat mirip berdasarkan perceptual hash (pHash) atau MD5 checksum. Ini adalah salah satu fitur paling dicari di photo management tools.

**Implementasi:**
- Backend: endpoint `GET /api/find-duplicates?path=...` menggunakan `imagehash` library
- Frontend: tampilkan pasangan/grup foto duplikat dengan opsi keep/delete

---

#### 🆕 FITUR: Star Rating / Flag System
**Deskripsi:** Sistem rating bintang (1-5) atau flag (Pick/Reject/Unflagged) seperti Lightroom. Pengguna bisa menandai foto terbaik dengan bintang atau warna label (merah/hijau/kuning).

**Implementasi:**
- Backend: simpan rating di file JSON terpisah per-folder (`.sortdata/ratings.json`)
- Frontend: tampilkan rating di thumbnail dan main viewer, shortcut keyboard `1-5` untuk rating (selain preset folder)
- Filter: tampilkan hanya foto dengan rating tertentu

---

#### 🆕 FITUR: Filter & Sort Foto
**Deskripsi:** Kemampuan untuk memfilter dan mengurutkan foto di dalam folder berdasarkan:
- Nama file (A-Z, Z-A)
- Tanggal modifikasi (terbaru/terlama)
- Ukuran file (terbesar/terkecil)
- Ukuran dimensi (resolusi tertinggi/terendah)
- Rating/Flag
- Format file (.jpg, .png, .webp, dll.)

---

#### 🆕 FITUR: Batch Rename dengan Template
**Deskripsi:** Rename massal dengan template seperti `{date}_{index:03d}_{original}` yang menghasilkan nama `2024-03-15_001_IMG_001.jpg`.

---

### 2.2 — Fitur Viewer & Tampilan

---

#### 🆕 FITUR: Zoom & Pan pada Foto (Sangat Penting!)
**Deskripsi:** Saat ini tidak ada zoom in/out pada foto. Untuk memeriksa foto secara detail (fokus, noise, ketajaman), pengguna harus membuka file secara terpisah. Ini sangat membatasi kemampuan culling.

**Implementasi:**
- Mouse wheel untuk zoom in/out
- Click + drag untuk pan ketika sudah zoom in
- Double-click untuk zoom 100% atau fit-to-screen
- Tombol/shortcut: `+`/`-` atau `Ctrl+Scroll`
- Indicator zoom level (e.g., "75%")

---

#### 🆕 FITUR: Side-by-Side True Comparison (A/B Compare)
**Deskripsi:** Bandingkan dua foto secara berdampingan dengan zoom dan scroll yang sinkron. Berbeda dengan mode 3-photo stage saat ini yang hanya menampilkan thumbnail kecil di kiri/kanan.

**Implementasi:**
- Split-screen 50/50 antara foto A dan foto B
- Synchronized pan dan zoom (scroll di satu sisi, sisi lain ikut)
- Pilih foto mana yang mau dibandingkan (tidak harus previous/next)

---

#### 🆕 FITUR: Slideshow Mode
**Deskripsi:** Mode presentasi yang otomatis menampilkan foto satu per satu dengan interval waktu yang bisa dikonfigurasi. Berguna untuk review cepat semua foto dari sebuah sesi pemotretan.

---

#### 🆕 FITUR: Video Preview Support
**Deskripsi:** Tambahkan dukungan preview untuk file video (`.mp4`, `.mov`, `.avi`). Saat ini hanya foto yang bisa dilihat.

**Implementasi:**
- Backend: tambahkan ekstensi video ke daftar yang bisa di-scan
- Frontend: tampilkan `<video>` player di main viewer ketika file yang dipilih adalah video

---

#### 🆕 FITUR: Image Zoom & Detail View (100% crop)
**Deskripsi:** Tampilkan crop 100% dari area tertentu foto untuk memeriksa ketajaman/noise tanpa harus zoom full image. Berguna saat culling foto yang mirip untuk memilih yang paling tajam.

---

### 2.3 — Fitur EXIF & Metadata

---

#### 🆕 FITUR: EXIF Metadata Lebih Lengkap
**Deskripsi:** Saat ini metadata yang ditampilkan sangat minim (Camera, ISO, Aperture, Shutter). Tambahkan data penting lainnya:

| Field | Tag EXIF |
|---|---|
| Focal Length | FocalLength |
| White Balance | WhiteBalance |
| Flash | Flash |
| GPS Coordinates | GPSInfo |
| Date Taken | DateTimeOriginal |
| Exposure Bias | ExposureBiasValue |
| Metering Mode | MeteringMode |
| Color Space | ColorSpace |
| Software | Software |
| Lens Model | LensModel |

---

#### 🆕 FITUR: GPS Map Preview
**Deskripsi:** Jika foto mengandung data GPS, tampilkan preview peta kecil (OpenStreetMap/Google Maps) yang menunjukkan lokasi pengambilan foto.

---

#### 🆕 FITUR: Edit EXIF Data
**Deskripsi:** Kemampuan untuk mengedit atau menghapus EXIF metadata (terutama GPS untuk privasi) langsung dari aplikasi tanpa software tambahan.

---

### 2.4 — Fitur Organisasi & Workflow

---

#### 🆕 FITUR: Smart Collections / Virtual Albums
**Deskripsi:** Buat koleksi virtual dari foto-foto yang tersebar di berbagai folder, tanpa memindahkan file. Seperti "Smart Album" di Apple Photos atau "Virtual Copies" di Lightroom.

---

#### 🆕 FITUR: Rekursif Scan Subfolder
**Deskripsi:** Saat ini `scan_images` hanya scan satu level folder. Tambahkan opsi untuk scan rekursif yang menemukan semua foto di semua subfolder secara terorganisir.

---

#### 🆕 FITUR: Export History / Session Report
**Deskripsi:** Generate laporan apa saja yang sudah dilakukan dalam satu sesi: berapa foto yang dipindah ke mana, berapa yang dihapus, total file size yang diproses. Bisa di-export sebagai CSV atau JSON.

---

#### 🆕 FITUR: Preset Folder Templates
**Deskripsi:** Buat template set folder (preset) yang bisa disimpan dan di-load. Contoh: template "Pernikahan" (Folder: Best Shots, Candid, Group, Detail, Delete), template "Produk" (Hero, Lifestyle, Detail, Reject).

---

#### 🆕 FITUR: Watch Folder (Auto-refresh)
**Deskripsi:** Monitor perubahan folder secara otomatis menggunakan `watchdog` library. Jika ada foto baru masuk ke folder sumber, filmstrip otomatis update tanpa perlu refresh manual.

---

### 2.5 — Fitur Teknis & Performa

---

#### 🆕 FITUR: Disk-based Thumbnail Cache (Persistent)
**Deskripsi:** Simpan thumbnail ke disk (bukan hanya memory) agar tidak perlu di-generate ulang setiap kali server restart. Gunakan format `.webp` untuk kompresi optimal.

**Struktur:**
```
.thumb_cache/
  {md5_of_path}_{size}_{mtime}.webp
```

---

#### 🆕 FITUR: WebSocket untuk Real-time Updates
**Deskripsi:** Ganti polling dengan WebSocket untuk notifikasi real-time (misalnya: progress batch operation, file baru terdeteksi, dll.) Saat ini tidak ada feedback real-time dari server ke client.

---

#### 🆕 FITUR: Keyboard Shortcut Profiler
**Deskripsi:** Tampilkan visual heatmap atau tabel "shortcut yang paling sering digunakan" untuk membantu pengguna mengoptimalkan workflow mereka.

---

#### 🆕 FITUR: Multi-window / Tab Support
**Deskripsi:** Kemampuan untuk membuka dua instance aplikasi di browser secara bersamaan untuk mengerjakan dua folder berbeda (misalnya: source di tab 1, target di tab 2).

---

### 2.6 — Fitur Platform & Distribusi

---

#### 🆕 FITUR: Packaging sebagai Executable (.exe)
**Deskripsi:** Build aplikasi menjadi file `.exe` portable menggunakan PyInstaller atau Nuitka agar pengguna tidak perlu install Python. Ini akan sangat meningkatkan adopsi pengguna non-teknis.

**Implementasi:**
```bash
pyinstaller --onefile --windowed --icon=icon.png run.py
```

---

#### 🆕 FITUR: Auto-updater
**Deskripsi:** Cek GitHub Releases API saat startup untuk notifikasi versi baru. Tampilkan badge "Update Available" di header jika ada versi lebih baru.

---

#### 🆕 FITUR: macOS & Linux Support
**Deskripsi:** Saat ini aplikasi secara eksplisit hanya mendukung Windows (karena MTP COM). Tambahkan dukungan macOS/Linux dengan menggunakan `gphoto2` atau `libmtp` sebagai alternatif MTP backend.

---

## 🟢 BAGIAN 3 — SARAN PENINGKATAN DESAIN & UX

### 3.1 — Navigasi & Workflow

---

#### 💡 Saran: Tambahkan "Folder Progress Indicator"
Tampilkan progress bar horizontal di bawah nama folder yang menunjukkan persentase foto yang sudah diproses (sudah diberi aksi vs belum). Contoh: "Photo/Wedding → 45/120 (37%)"

---

#### 💡 Saran: "Quick Jump" ke foto berdasarkan nomor
Shortcut `Ctrl+G` atau `/` untuk membuka dialog "Go to photo #___" agar pengguna bisa langsung loncat ke foto nomor tertentu (berguna untuk folder dengan ribuan foto).

---

#### 💡 Saran: Thumbnail size yang bisa di-scroll zoom
Saat ini thumbnail size bisa diatur di settings (small/medium/large). Tambahkan shortcut `Ctrl+Scroll` di filmstrip untuk zoom thumbnail on-the-fly tanpa membuka settings.

---

#### 💡 Saran: Drag & Drop File ke Preset Folder
Pengguna bisa drag foto dari filmstrip dan drop ke salah satu preset folder button (1-9) untuk memindahkan/menyalin. Lebih intuitif dari keyboard shortcut untuk pengguna baru.

---

#### 💡 Saran: Breadcrumb yang bisa diklik
Saat ini address bar adalah input text biasa. Ubah menjadi breadcrumb interaktif (`C: > Users > dexccv > Photos`) di mana setiap segmen bisa diklik untuk navigasi cepat.

---

#### 💡 Saran: Context Menu (Right-click)
Tambahkan context menu saat klik kanan pada foto di filmstrip dengan opsi: Open in Explorer, Copy Path, Rename, Move to, Copy to, Delete, View EXIF, Set as Rating.

---

### 3.2 — Settings & Konfigurasi

---

#### 💡 Saran: Import/Export Settings
Pengguna bisa export semua settings (hotkeys, preset folders, theme, dll.) ke file JSON dan import di komputer lain. Berguna untuk fotografer yang pakai banyak komputer.

---

#### 💡 Saran: Preset "Quick Setup" untuk Workflow Umum
Saat pertama kali install, tawari pengguna untuk memilih workflow template: "Wedding Photography", "Product Photography", "Event Photography", "Personal Culling" — masing-masing dengan preset folder dan shortcut yang sudah dikonfigurasi.

---

#### 💡 Saran: Light Theme
Saat ini hanya tersedia dark themes (Black, Midnight, Emerald, Cyberpunk). Tambahkan light theme untuk pengguna yang bekerja di lingkungan cerah atau prefer tampilan terang.

---

#### 💡 Saran: Konfigurasi thumbnail quality & format
Saat ini thumbnail di-generate sebagai JPEG 75%. Beri pengguna opsi untuk mengatur kualitas (50-95%) dan format (JPEG vs WebP) untuk trade-off antara kecepatan dan kualitas.

---

### 3.3 — Aksesibilitas & Internasionalisasi

---

#### 💡 Saran: Perbaiki konsistensi bahasa (i18n)
Banyak teks masih hardcode dalam bahasa Indonesia di HTML, meskipun ada sistem `data-i18n`. Semua teks harus melalui sistem i18n untuk konsistensi. Tambahkan bahasa:
- 🇮🇩 Indonesia (sudah ada, tapi tidak lengkap)
- 🇬🇧 English (sudah ada, tapi tidak lengkap)
- 🇯🇵 Japanese
- 🇩🇪 German
- 🇫🇷 French

---

#### 💡 Saran: Screen reader accessibility (ARIA labels)
Tambahkan `aria-label`, `role`, dan `aria-describedby` yang tepat pada semua interactive elements untuk mendukung screen reader.

---

## 🔵 BAGIAN 4 — REKOMENDASI ARSITEKTUR UNTUK UPDATE BESAR

### 4.1 — Refaktor Frontend

Dengan file HTML tunggal 4.846 baris, maintainability sudah sangat kritis. Rekomendasikan migrasi ke:

```
Option A: Vite + Vanilla JS (minimal perubahan, build-time optimization)
Option B: Vite + Vue 3     (component-based, lebih scalable)
Option C: Vite + React     (ekosistem terbesar, tapi learning curve lebih tinggi)
```

Rekomendasi: **Option A** untuk jangka pendek (paling mudah migrasi dari kode existing).

---

### 4.2 — Database untuk Metadata

Mengganti `sorter_session.json` dengan SQLite untuk:
- Rating & flag per foto
- Undo history yang persistent
- Collection/album virtual
- Search & filter yang cepat

```python
# Implementasi dengan SQLAlchemy + SQLite
from sqlalchemy import create_engine
engine = create_engine("sqlite:///photo_sorter.db")
```

---

### 4.3 — Plugin System

Arsitektur plugin sederhana yang memungkinkan pengguna/developer komunitas menambahkan fitur custom:
- Custom export formats
- Custom naming templates
- Custom filter/sort algoritma
- Integration dengan cloud storage (Google Photos, Dropbox, dll.)

---

## 📊 BAGIAN 5 — TABEL PRIORITAS

| # | Item | Prioritas | Estimasi Effort | Dampak |
|---|------|-----------|-----------------|--------|
| 1 | Fix: Hapus duplikat `PinnedFoldersPayload` | 🔴 Kritis | 5 menit | Medium |
| 2 | Fix: Preserve EXIF saat rotate | 🔴 Kritis | 30 menit | Sangat Tinggi |
| 3 | Fix: CORS security | 🔴 Kritis | 15 menit | Tinggi |
| 4 | Fix: `lastIndex` gunakan `per_folder_index` | 🔴 Tinggi | 1 jam | Tinggi |
| 5 | Fitur: Zoom & Pan foto | 🔴 Tinggi | 1-2 hari | Sangat Tinggi |
| 6 | Fitur: Rename File (F2) | 🔴 Tinggi | 3-4 jam | Tinggi |
| 7 | Fix: MTP Cache auto-cleanup | 🟡 Sedang | 2 jam | Medium |
| 8 | Fitur: EXIF metadata lengkap | 🟡 Sedang | 4 jam | Tinggi |
| 9 | Fitur: Duplicate detection | 🟡 Sedang | 1-2 hari | Sangat Tinggi |
| 10 | Fitur: Star rating & flag | 🟡 Sedang | 2-3 hari | Sangat Tinggi |
| 11 | Fitur: Filter & sort foto | 🟡 Sedang | 1-2 hari | Tinggi |
| 12 | Fitur: Disk thumbnail cache | 🟡 Sedang | 4-6 jam | Medium |
| 13 | Fitur: Batch rename EXIF | 🟡 Sedang | 1-2 hari | Tinggi |
| 14 | Fitur: GPS map preview | 🟢 Rendah | 1 hari | Medium |
| 15 | Fitur: Video preview | 🟢 Rendah | 2-3 hari | Medium |
| 16 | Fitur: Export ke .exe | 🟢 Rendah | 2-4 jam | Tinggi |
| 17 | Fitur: Watch folder auto-refresh | 🟢 Rendah | 1-2 hari | Medium |
| 18 | Refaktor: Pisah frontend ke multi-file | 🟢 Rendah | 3-5 hari | Jangka Panjang |
| 19 | Fitur: Slideshow mode | 🟢 Rendah | 4-6 jam | Medium |
| 20 | Fitur: Light theme | 🟢 Rendah | 2-3 jam | Rendah |

---

## ✅ KESIMPULAN

**Photo Sorter Pro v2.5** sudah memiliki fondasi teknis yang solid (FastAPI, Pillow, COM MTP, session management). Namun ada beberapa **bug kritis** yang harus diprioritaskan sebelum rilis publik, terutama:

1. **EXIF hilang saat rotate** — ini adalah deal-breaker untuk fotografer profesional
2. **CORS terbuka lebar** — celah keamanan yang serius
3. **Duplikat class definition** — code quality issue

Untuk **pertumbuhan jangka panjang**, fitur yang paling berdampak untuk adopsi pengguna adalah:
- **Zoom & Pan** (saat ini benar-benar tidak ada cara melihat detail foto)
- **Duplicate Detection** (fitur killer yang tidak banyak tool gratis punya)
- **Star Rating / Flag System** (workflow culling profesional)
- **Packaging sebagai .exe** (menurunkan barrier untuk pengguna non-teknis)

> Dengan memperbaiki bug kritis dan menambahkan fitur Zoom + Rating + Duplicate Detection, Photo Sorter Pro bisa menjadi **kompetitor serius** terhadap tools berbayar seperti Fast Stone Image Viewer dan Photo Mechanic.

---

*Dokumen dibuat oleh: Antigravity AI — Evaluasi mendalam terhadap Photo Sorter Pro v2.5*
*Tanggal evaluasi: 2026-07-31*
