// Internationalization dataset
    const TRANSLATIONS = {
      en: {
        title: "Photo Sorter Pro",
        subtitle: "Professional Media Organization Studio",
        tab_previews: "Folder Contents",
        tab_logs: "Activity Log",
        tab_presets: "Presets",
        lbl_explorer: "Explorer",
        lbl_drives: "Drives",
        lbl_metadata: "Image Info",
        lbl_open_folder: "Open Folder",
        lbl_new: "New",
        lbl_new_folder: "New Folder",
        lbl_no_image: "No image selected",
        lbl_no_image_desc: "Please select a source folder in the explorer or type a path in the address bar to scan files.",
        lbl_histogram: "Histogram Curve",
        meta_camera_exif: "Camera EXIF",
        meta_camera: "Camera",
        meta_iso: "ISO",
        meta_aperture: "Aperture",
        meta_shutter: "Shutter",
        meta_file_info: "File Info",
        meta_filename: "Filename",
        meta_resolution: "Resolution",
        meta_size: "Size",
        lbl_connected: "Server Connected",
        lbl_footer_help: "Ctrl+H / F1: Shortcuts Guide",
        settings_title: "Application Settings",
        tab_hotkeys: "Hotkeys (1-9)",
        tab_global_shortcuts: "Shortcuts Global",
        tab_appearance: "Appearance",
        tab_system: "System & Extensions",
        lbl_hotkeys_desc: "Configure fast automatic moves for numeric presets [1-9].",
        lbl_global_desc: "Click a key box and press any key combination on keyboard to rebind shortcuts.",
        lbl_theme: "Application Theme",
        lbl_theme_desc: "Configure visual color themes and layout options.",
        lbl_th_size: "Preview Thumbnail Size",
        lbl_animations: "Animations & Transitions",
        lbl_animations_desc: "Enable transition animations (slide out & shrink when moving/deleting)",
        lbl_formats: "Scanned File Formats",
        lbl_formats_desc: "File system and scan extension settings.",
        lbl_general: "General & Security",
        lbl_ask_delete: "Confirm before sending images to Recycle Bin",
        lbl_lang: "Interface Language",
        lbl_lang_desc: "Change the display language of the interface.",
        btn_save: "Save & Apply",
        btn_cancel: "Cancel",
        btn_ok: "OK",
        help_title: "Keyboard Shortcuts Guide",
        help_nav: "Image Navigation",
        help_nav_next: "Next Image",
        help_nav_prev: "Previous Image",
        help_nav_undo: "Undo Last Action",
        help_nav_rotate: "Rotate (CW/CCW)",
        help_file: "File & Panel",
        help_file_folder: "Create Folder",
        help_file_src: "Open Folder",
        help_file_del: "Move Trash",
        help_file_left: "Toggle Explorer",
        help_file_bottom: "Toggle Console",
        help_file_right: "Toggle EXIF",
        help_tip: "Tip [1-9] Keycaps: Press numeric keys 1-9 to move the active image to the configured preset target folder.",
        dlg_confirm_title: "Confirmation",
        dlg_confirm_del_title: "Delete Image",
        dlg_confirm_del_msg: "Move image \"{file}\" to Recycle Bin?",
        dlg_create_folder_title: "Create New Folder",
        dlg_create_folder_msg: "Enter name for the new subfolder:",
        dlg_open_folder_title: "Open Source Folder",
        dlg_open_folder_msg: "Paste absolute path of your image folder (from File Explorer):",
        dlg_preset_title: "Select Preset {key} Target",
        dlg_preset_msg: "Paste absolute path of the destination folder for this preset:",
        log_ready: "System ready. Please open a folder from the Explorer.",
        log_scan_dir: "Scanning folder: {path}. Found {count} images.",
        log_create_folder_ok: "Folder successfully created: {name}",
        log_create_folder_err: "Failed to create folder: {err}",
        log_rotate_ok: "Rotation {degrees}° success: {file}",
        log_rotate_err: "Failed to rotate: {err}",
        log_action_ok: "Success {action}: {file} -> {target}",
        log_action_err: "Failed: {err}",
        log_undo_ok: "Undo successful: {msg}",
        log_undo_err: "Undo failed: {err}",
        log_clear: "Activity log cleared.",
        log_save_settings: "Settings saved and applied successfully.",
        sz_small: "Small",
        sz_medium: "Medium",
        sz_large: "Large",
        lbl_move: "MOVE",
        lbl_copy: "COPY",
        lbl_target_placeholder: "C:\\Path\\to\\target\\folder",
        lbl_browse: "Browse",
        lbl_press_key: "Press key...",
        lbl_no_images_in_folder: "This folder contains no images.",
        sh_next_image: "Next Image",
        sh_next_image_desc: "Display the next image in order",
        sh_prev_image: "Previous Image",
        sh_prev_image_desc: "Display the previous image in order",
        sh_undo: "Undo Last Action",
        sh_undo_desc: "Rollback the last move or copy operation",
        sh_delete: "Delete (Recycle Bin)",
        sh_delete_desc: "Move the active image to the Recycle Bin",
        sh_rotate_cw: "Rotate 90° CW",
        sh_rotate_cw_desc: "Rotate the image clockwise",
        sh_rotate_ccw: "Rotate 90° CCW",
        sh_rotate_ccw_desc: "Rotate the image counter-clockwise",
        sh_help: "Open Help Guide",
        sh_help_desc: "Show keyboard shortcuts and tips",
        sh_toggle_explorer: "Toggle Left Explorer",
        sh_toggle_explorer_desc: "Hide or show the folder directory sidebar",
        sh_toggle_console: "Toggle Bottom Console",
        sh_toggle_console_desc: "Hide or show the filmstrip and logs panel",
        sh_toggle_metadata: "Toggle Right EXIF Info",
        sh_toggle_metadata_desc: "Hide or show the camera metadata sidebar",
        sh_create_folder: "Create Folder",
        sh_create_folder_desc: "Create a subfolder in the active directory",
        sh_open_folder: "Open Source Directory",
        sh_open_folder_desc: "Enter a path to open a new image folder",
        gh_modal_title: "Support the Developer",
        gh_modal_subtitle: "Photo Sorter Pro by dexccv",
        gh_modal_body: "Thank you for using Photo Sorter Pro. If this application helps your photo sorting workflow, please consider starring the repository or following @dexccv on GitHub.",
        gh_modal_btn_follow: "Follow @dexccv on GitHub",
        gh_modal_btn_later: "Maybe Later"
      },
      id: {
        title: "PHOTO SORTER PRO",
        subtitle: "EDISI ELITE v2.3",
        tab_previews: "Isi Folder",
        tab_logs: "Log Aktivitas",
        tab_presets: "Preset",
        lbl_explorer: "Penjelajah",
        lbl_drives: "Drive",
        lbl_metadata: "Info Gambar",
        lbl_open_folder: "Buka Folder",
        lbl_new: "Baru",
        lbl_new_folder: "Folder Baru",
        lbl_no_image: "Tidak ada gambar yang terpilih",
        lbl_no_image_desc: "Silakan pilih folder sumber di bilah kiri atau masukkan path di bilah alamat atas untuk memindai berkas.",
        lbl_histogram: "Kurva Histogram",
        meta_camera_exif: "Kamera EXIF",
        meta_camera: "Kamera",
        meta_iso: "ISO",
        meta_aperture: "Aperture",
        meta_shutter: "Shutter",
        meta_file_info: "Informasi File",
        meta_filename: "Nama File",
        meta_resolution: "Dimensi",
        meta_size: "Ukuran",
        lbl_connected: "Server Terhubung",
        lbl_footer_help: "Ctrl+H / F1: Panduan Shortcuts",
        settings_title: "Pengaturan Aplikasi",
        tab_hotkeys: "Hotkeys (1-9)",
        tab_global_shortcuts: "Shortcuts Global",
        tab_appearance: "Tampilan",
        tab_system: "Sistem & Ekstensi",
        lbl_hotkeys_desc: "Konfigurasikan aksi pemindahan otomatis cepat untuk masing-masing angka [1-9].",
        lbl_global_desc: "Klik pada kotak tombol, lalu tekan kombinasi tombol keyboard baru untuk mengubah pintasan global.",
        lbl_theme: "Tema Warna Aplikasi",
        lbl_theme_desc: "Sesuaikan skema tema warna visual dan ukuran elemen tata letak.",
        lbl_th_size: "Ukuran Thumbnail Pratinjau",
        lbl_animations: "Animasi & Transisi",
        lbl_animations_desc: "Aktifkan animasi transisi (Slide out & fade saat memindahkan/menghapus)",
        lbl_formats: "Format Gambar yang Dipindai",
        lbl_formats_desc: "Pengaturan fungsionalitas sistem berkas dan pemindaian file gambar.",
        lbl_general: "Umum & Keamanan",
        lbl_ask_delete: "Konfirmasikan sebelum menghapus gambar ke Recycle Bin",
        lbl_lang: "Bahasa Antarmuka",
        lbl_lang_desc: "Ubah bahasa tampilan pada antarmuka aplikasi.",
        btn_save: "Simpan & Terapkan",
        btn_cancel: "Batal",
        btn_ok: "OK",
        help_title: "Panduan Tombol Cepat (Shortcuts)",
        help_nav: "Navigasi Gambar",
        help_nav_next: "Gambar Selanjutnya",
        help_nav_prev: "Gambar Sebelumnya",
        help_nav_undo: "Undo Aksi Terakhir",
        help_nav_rotate: "Rotasi (CW/CCW)",
        help_file: "Manajemen File & Panel",
        help_file_folder: "Buat Folder",
        help_file_src: "Pilih Folder",
        help_file_del: "Pindahkan Trash",
        help_file_left: "Sembunyi Explorer",
        help_file_bottom: "Sembunyi Console",
        help_file_right: "Sembunyi Metadata",
        help_tip: "Tip Preset Angka [1-9]: Anda dapat menekan angka 1 s/d 9 untuk langsung memindahkan file saat ini ke folder tujuan preset yang dikonfigurasi.",
        dlg_confirm_title: "Konfirmasi",
        dlg_confirm_del_title: "Hapus Gambar",
        dlg_confirm_del_msg: "Pindahkan gambar \"{file}\" ke Recycle Bin?",
        dlg_create_folder_title: "Buat Folder Baru",
        dlg_create_folder_msg: "Masukkan nama untuk subfolder baru:",
        dlg_open_folder_title: "Buka Folder Sumber",
        dlg_open_folder_msg: "Tempel path absolut direktori gambar Anda (dari File Explorer):",
        dlg_preset_title: "Pilih Tujuan Preset {key}",
        dlg_preset_msg: "Tempel path absolut folder tujuan untuk preset ini:",
        log_ready: "Sistem siap. Silakan buka folder melalui Explorer.",
        log_scan_dir: "Memindai folder: {path}. Ditemukan {count} gambar.",
        log_create_folder_ok: "Folder berhasil dibuat: {name}",
        log_create_folder_err: "Gagal membuat folder: {err}",
        log_rotate_ok: "Rotasi {degrees}° sukses: {file}",
        log_rotate_err: "Gagal rotasi: {err}",
        log_action_ok: "Sukses {action}: {file} -> {target}",
        log_action_err: "Gagal: {err}",
        log_undo_ok: "Undo sukses: {msg}",
        log_undo_err: "Undo gagal: {err}",
        log_clear: "Log aktivitas dibersihkan.",
        log_save_settings: "Pengaturan berhasil disimpan dan diterapkan.",
        sz_small: "Kecil",
        sz_medium: "Sedang",
        sz_large: "Besar",
        lbl_move: "Pindah",
        lbl_copy: "Salin",
        lbl_target_placeholder: "C:\\Path\\ke\\folder\\tujuan",
        lbl_browse: "Cari",
        lbl_press_key: "Tekan tombol...",
        lbl_no_images_in_folder: "Folder ini tidak memiliki file gambar.",
        sh_next_image: "Lanjut Gambar (Next)",
        sh_next_image_desc: "Menampilkan gambar berikutnya",
        sh_prev_image: "Kembali Gambar (Prev)",
        sh_prev_image_desc: "Menampilkan gambar sebelumnya",
        sh_undo: "Undo Aksi terakhir",
        sh_undo_desc: "Membatalkan pemindahan/penyalinan terakhir",
        sh_delete: "Hapus Gambar (Recycle Bin)",
        sh_delete_desc: "Memindahkan gambar aktif ke Recycle Bin",
        sh_rotate_cw: "Rotasi 90° CW",
        sh_rotate_cw_desc: "Memutar gambar searah jarum jam",
        sh_rotate_ccw: "Rotasi 90° CCW",
        sh_rotate_ccw_desc: "Memutar gambar berlawanan arah jarum jam",
        sh_help: "Buka Panduan (Help)",
        sh_help_desc: "Menampilkan panduan tombol cepat",
        sh_toggle_explorer: "Toggle Explorer",
        sh_toggle_explorer_desc: "Sembunyi/tampilkan panel folder kiri",
        sh_toggle_console: "Toggle Console",
        sh_toggle_console_desc: "Sembunyi/tampilkan panel log bawah",
        sh_toggle_metadata: "Toggle EXIF Metadata",
        sh_toggle_metadata_desc: "Sembunyi/tampilkan panel EXIF kanan",
        sh_create_folder: "Buat Folder",
        sh_create_folder_desc: "Buat subfolder baru di folder aktif",
        sh_open_folder: "Pilih Folder Sumber",
        sh_open_folder_desc: "Buka folder baru dari path",
        gh_modal_title: "Dukung Pengembang",
        gh_modal_subtitle: "Photo Sorter Pro oleh dexccv",
        gh_modal_body: "Terima kasih telah menggunakan Photo Sorter Pro. Jika aplikasi ini membantu pekerjaan sortir foto Anda, berikan Star atau follow akun GitHub @dexccv.",
        gh_modal_btn_follow: "Follow @dexccv di GitHub",
        gh_modal_btn_later: "Nanti Saja"
      },
      zh: {
        title: "照片整理专业版",
        subtitle: "精英版 v2.3",
        tab_previews: "文件夹内容",
        tab_logs: "活动日志",
        tab_presets: "预设",
        lbl_explorer: "资源管理器",
        lbl_drives: "驱动器",
        lbl_metadata: "图片信息",
        lbl_open_folder: "打开文件夹",
        lbl_new: "新建",
        lbl_new_folder: "新建文件夹",
        lbl_no_image: "未选择图片",
        lbl_no_image_desc: "请在左侧选择源文件夹或在上方地址栏输入路径以扫描图片文件。",
        lbl_histogram: "直方图曲线",
        meta_camera_exif: "相机 EXIF",
        meta_camera: "相机",
        meta_iso: "ISO",
        meta_aperture: "光圈",
        meta_shutter: "快门",
        meta_file_info: "文件信息",
        meta_filename: "文件名",
        meta_resolution: "分辨率",
        meta_size: "大小",
        lbl_connected: "服务器已连接",
        lbl_footer_help: "Ctrl+H / F1: 快捷键指南",
        settings_title: "应用设置",
        tab_hotkeys: "快捷键 (1-9)",
        tab_global_shortcuts: "全局快捷键",
        tab_appearance: "外观设置",
        tab_system: "系统与扩展",
        lbl_hotkeys_desc: "配置数字键 [1-9] 快速自动移动图片的操作。",
        lbl_global_desc: "点击按键框并按下键盘上的组合键以重新绑定快捷键。",
        lbl_theme: "应用主题",
        lbl_theme_desc: "配置应用程序的视觉主题和颜色方案。",
        lbl_th_size: "缩略图大小",
        lbl_animations: "动画与过渡",
        lbl_animations_desc: "启用过渡动画效果（移动或删除时的滑动与缩小效果）",
        lbl_formats: "扫描的文件格式",
        lbl_formats_desc: "文件系统和扫描扩展名配置。",
        lbl_general: "通用安全设置",
        lbl_ask_delete: "移动图片至回收站前需要确认",
        lbl_lang: "界面语言",
        lbl_lang_desc: "更改界面显示的语言。",
        btn_save: "保存并应用",
        btn_cancel: "取消",
        btn_ok: "确定",
        help_title: "键盘快捷键指南",
        help_nav: "图像导航",
        help_nav_next: "下一张图片",
        help_nav_prev: "上一张图片",
        help_nav_undo: "撤销操作",
        help_nav_rotate: "旋转",
        help_file: "文件与面板",
        help_file_folder: "新建文件夹",
        help_file_src: "打开文件夹",
        help_file_del: "移动回收站",
        help_file_left: "切换管理器",
        help_file_bottom: "切换日志控制台",
        help_file_right: "切换元数据",
        help_tip: "预设按键 [1-9] 提示：按下数字键 1-9 可以直接将当前图片移动到配置的预设目标文件夹中。",
        dlg_confirm_title: "确认",
        dlg_confirm_del_title: "删除图片",
        dlg_confirm_del_msg: "确定将图片 \"{file}\" 移动到回收站吗？",
        dlg_create_folder_title: "新建文件夹",
        dlg_create_folder_msg: "输入新子文件夹的名称：",
        dlg_open_folder_title: "打开源文件夹",
        dlg_open_folder_msg: "粘贴图片文件夹的绝对路径（从文件管理器复制）：",
        dlg_preset_title: "设置预设 {key} 目标",
        dlg_preset_msg: "粘贴该预设的目标文件夹绝对路径：",
        log_ready: "系统就绪。请从左侧资源管理器打开文件夹。",
        log_scan_dir: "扫描文件夹: {path}。找到 {count} 张图片。",
        log_create_folder_ok: "文件夹创建成功: {name}",
        log_create_folder_err: "创建文件夹失败: {err}",
        log_rotate_ok: "旋转 {degrees}° 成功: {file}",
        log_rotate_err: "旋转失败: {err}",
        log_action_ok: "操作成功 {action}: {file} -> {target}",
        log_action_err: "失败: {err}",
        log_undo_ok: "撤销成功: {msg}",
        log_undo_err: "撤销失败: {err}",
        log_clear: "活动日志已清除。",
        log_save_settings: "设置已成功保存并应用。",
        sz_small: "小",
        sz_medium: "中",
        sz_large: "大",
        lbl_move: "移动",
        lbl_copy: "复制",
        lbl_target_placeholder: "C:\\目标文件夹路径",
        lbl_browse: "浏览",
        lbl_press_key: "按下按键...",
        lbl_no_images_in_folder: "该文件夹中没有图片文件。",
        sh_next_image: "下一张图片",
        sh_next_image_desc: "按顺序显示下一张图片",
        sh_prev_image: "上一张图片",
        sh_prev_image_desc: "按顺序显示上一张图片",
        sh_undo: "撤销上一步操作",
        sh_undo_desc: "撤销最后一次复制或移动操作",
        sh_delete: "删除 (移至回收站)",
        sh_delete_desc: "将当前激活的图片移至回收站",
        sh_rotate_cw: "顺时针旋转 90°",
        sh_rotate_cw_desc: "顺时针旋转图像",
        sh_rotate_ccw: "逆时针旋转 90°",
        sh_rotate_ccw_desc: "逆时针旋转图像",
        sh_help: "打开帮助指南",
        sh_help_desc: "显示键盘快捷键和提示信息",
        sh_toggle_explorer: "切换左侧管理器",
        sh_toggle_explorer_desc: "隐藏或显示文件夹目录侧边栏",
        sh_toggle_console: "切换底部控制台",
        sh_toggle_console_desc: "隐藏或显示底部胶片和日志面板",
        sh_toggle_metadata: "切换右侧元数据",
        sh_toggle_metadata_desc: "隐藏或显示相机元数据侧边栏",
        sh_create_folder: "新建文件夹",
        sh_create_folder_desc: "在活动目录中创建一个子文件夹",
        sh_open_folder: "打开源目录",
        sh_open_folder_desc: "输入路径以打开一个新的图片文件夹",
        gh_modal_title: "支持开发者",
        gh_modal_subtitle: "Photo Sorter Pro 由 dexccv 开发",
        gh_modal_body: "感谢使用 Photo Sorter Pro。如果此应用提升了您的照片分类效率，欢迎在 GitHub 上点亮 Star 或关注 @dexccv。",
        gh_modal_btn_follow: "在 GitHub 关注 @dexccv",
        gh_modal_btn_later: "稍后再说"
      },
      ja: {
        title: "フォトソーター PRO",
        subtitle: "エリートエディション v2.3",
        tab_previews: "フォルダー内容",
        tab_logs: "活動ログ",
        tab_presets: "プリセット",
        lbl_explorer: "エクスプローラー",
        lbl_drives: "ドライブ一覧",
        lbl_metadata: "画像情報",
        lbl_open_folder: "フォルダーを開く",
        lbl_new: "新規",
        lbl_new_folder: "新規フォルダ",
        lbl_no_image: "画像が選択されていません",
        lbl_no_image_desc: "エクスプローラーからソースフォルダーを選択するか、アドレスバーにパスを入力してファイルをスキャンしてください。",
        lbl_histogram: "ヒストグラム",
        meta_camera_exif: "カメラ EXIF",
        meta_camera: "カメラ",
        meta_iso: "ISO",
        meta_aperture: "F値 (絞り)",
        meta_shutter: "シャッター",
        meta_file_info: "ファイル情報",
        meta_filename: "ファイル名",
        meta_resolution: "解像度",
        meta_size: "サイズ",
        lbl_connected: "サーバー接続完了",
        lbl_footer_help: "Ctrl+H / F1: ショートカットガイド",
        settings_title: "環境設定",
        tab_hotkeys: "ショートカット (1-9)",
        tab_global_shortcuts: "グローバルショートカット",
        tab_appearance: "テーマと表示",
        tab_system: "システム設定",
        lbl_hotkeys_desc: "数字キー [1-9] の高速自動画像移動を設定します。",
        lbl_global_desc: "キーボックスをクリックし、キーボード of 任意の組み合わせを押して再設定します。",
        lbl_theme: "配色テーマ",
        lbl_theme_desc: "アプリの視覚的テーマと配色を構成します。",
        lbl_th_size: "サムネイルサイズ",
        lbl_animations: "アニメーション効果",
        lbl_animations_desc: "移動時や削除時のアニメーション効果（スライド＆縮小効果）を有効にする",
        lbl_formats: "スキャン対象フォーマット",
        lbl_formats_desc: "ファイルシステムおよびスキャン拡張子の設定。",
        lbl_general: "全般＆セキュリティ",
        lbl_ask_delete: "ゴミ箱へ送る前に確認ダイアログを表示する",
        lbl_lang: "表示言語",
        lbl_lang_desc: "インターフェースの表示言語を変更します。",
        btn_save: "保存して適用",
        btn_cancel: "キャンセル",
        btn_ok: "OK",
        help_title: "キーボードショートカット一覧",
        help_nav: "画像操作",
        help_nav_next: "次の画像",
        help_nav_prev: "前の画像",
        help_nav_undo: "元に戻す",
        help_nav_rotate: "回転",
        help_file: "ファイルと表示",
        help_file_folder: "フォルダ作成",
        help_file_src: "フォルダ選択",
        help_file_del: "ゴミ箱へ",
        help_file_left: "エクスプローラー開閉",
        help_file_bottom: "ログパネル開閉",
        help_file_right: "情報パネル開閉",
        help_tip: "ヒント [1-9] キー：数字キー 1-9 を押すと、アクティブな画像を設定された宛先プリセットフォルダに即座に移動できます。",
        dlg_confirm_title: "確認",
        dlg_confirm_del_title: "画像の削除",
        dlg_confirm_del_msg: "画像 \"{file}\" をゴミ箱に移動しますか？",
        dlg_create_folder_title: "新規フォルダーの作成",
        dlg_create_folder_msg: "新しいサブフォルダーの名前を入力してください：",
        dlg_open_folder_title: "ソースフォルダを開く",
        dlg_open_folder_msg: "画像フォルダーの絶対パスを貼り付けてください（エクスプローラーからコピー）：",
        dlg_preset_title: "プリセット {key} の宛先設定",
        dlg_preset_msg: "このプリセットの宛先フォルダーの絶対パスを貼り付けてください：",
        log_ready: "準備ができました。フォルダーを開いてください。",
        log_scan_dir: "フォルダーをスキャン中: {path}. {count} 枚の画像が見つかりました。",
        log_create_folder_ok: "フォルダーが作成されました: {name}",
        log_create_folder_err: "フォルダー作成に失敗しました: {err}",
        log_rotate_ok: "回転 {degrees}° 成功: {file}",
        log_rotate_err: "回転失敗: {err}",
        log_action_ok: "{action} 成功: {file} -> {target}",
        log_action_err: "失敗しました: {err}",
        log_undo_ok: "元に戻しました: {msg}",
        log_undo_err: "元に戻すのに失敗しました: {err}",
        log_clear: "ログをクリアしました。",
        log_save_settings: "設定が保存され、適用されました。",
        sz_small: "小",
        sz_medium: "中",
        sz_large: "大",
        lbl_move: "移動",
        lbl_copy: "コピー",
        lbl_target_placeholder: "C:\\コピー先フォルダのパス",
        lbl_browse: "参照",
        lbl_press_key: "キーを押す...",
        lbl_no_images_in_folder: "このフォルダーには画像ファイルがありません。",
        sh_next_image: "次の画像へ",
        sh_next_image_desc: "順次の画像を表示します",
        sh_prev_image: "前の画像へ",
        sh_prev_image_desc: "前の画像を表示します",
        sh_undo: "元に戻す",
        sh_undo_desc: "最後のコピーまたは移動操作を元に戻す",
        sh_delete: "削除 (ゴミ箱)",
        sh_delete_desc: "アクティブな画像をゴミ箱へ移動します",
        sh_rotate_cw: "右回転 90°",
        sh_rotate_cw_desc: "画像を時計回りに回転します",
        sh_rotate_ccw: "左回転 90°",
        sh_rotate_ccw_desc: "画像を反時計回りに回転します",
        sh_help: "ヘルプを開く",
        sh_help_desc: "キーボードショートカットとヒントを表示します",
        sh_toggle_explorer: "エクスプローラー表示切替",
        sh_toggle_explorer_desc: "左フォルダーディレクトリサイドバーの表示・非表示",
        sh_toggle_console: "コンソール表示切替",
        sh_toggle_console_desc: "下部フィルムストリップとログパネルの表示・非表示",
        sh_toggle_metadata: "メタデータ表示切替",
        sh_toggle_metadata_desc: "右カメラメタデータサイドバーの表示・非表示",
        sh_create_folder: "フォルダ作成",
        sh_create_folder_desc: "アクティブなディレクトリにサブフォルダを作成します",
        sh_open_folder: "ソースフォルダを開く",
        sh_open_folder_desc: "入力パスで新しい画像フォルダを開きます",
        gh_modal_title: "制作者をサポート",
        gh_modal_subtitle: "Photo Sorter Pro by dexccv",
        gh_modal_body: "Photo Sorter Proをご利用いただきありがとうございます。本アプリが写真整理のお役に立ちましたら、GitHubでStarまたは@dexccvのフォローをお願いします。",
        gh_modal_btn_follow: "GitHubで@dexccvをフォロー",
        gh_modal_btn_later: "後で"
      },
      pt: {
        title: "ORGANIZADOR DE FOTOS PRO",
        subtitle: "EDIÇÃO ELITE v2.3",
        tab_previews: "Conteúdo da Pasta",
        tab_logs: "Log de Atividades",
        tab_presets: "Presets",
        lbl_explorer: "Explorador",
        lbl_drives: "Unidades",
        lbl_metadata: "Info da Imagem",
        lbl_open_folder: "Abrir Pasta",
        lbl_new: "Novo",
        lbl_new_folder: "Nova Pasta",
        lbl_no_image: "Nenhuma imagem selecionada",
        lbl_no_image_desc: "Por favor, selecione uma pasta no explorador ou digite o caminho na barra de endereços para escanear.",
        lbl_histogram: "Histograma",
        meta_camera_exif: "Câmera EXIF",
        meta_camera: "Câmera",
        meta_iso: "ISO",
        meta_aperture: "Abertura",
        meta_shutter: "Obturador",
        meta_file_info: "Dados do Arquivo",
        meta_filename: "Nome",
        meta_resolution: "Resolução",
        meta_size: "Tamanho",
        lbl_connected: "Servidor Conectado",
        lbl_footer_help: "Ctrl+H / F1: Guia de Atalhos",
        settings_title: "Configurações do Aplicativo",
        tab_hotkeys: "Atalhos (1-9)",
        tab_global_shortcuts: "Atalhos Globais",
        tab_appearance: "Aparência",
        tab_system: "Sistema e Extensões",
        lbl_hotkeys_desc: "Configure atalhos rápidos de movimentação para as teclas [1-9].",
        lbl_global_desc: "Clique no campo e pressione a combinação de teclas para redefinir o atalho.",
        lbl_theme: "Tema de Cores",
        lbl_theme_desc: "Selecione o esquema de cores visuais do aplicativo.",
        lbl_th_size: "Tamanho da Miniatura",
        lbl_animations: "Animações e Efeitos",
        lbl_animations_desc: "Ativar animações de transição (deslizar e diminuir ao mover/excluir)",
        lbl_formats: "Formatos Suportados",
        lbl_formats_desc: "Configurações de formatos de imagem escaneados.",
        lbl_general: "Geral & Segurança",
        lbl_ask_delete: "Confirmar antes de mover imagem para a Lixeira",
        lbl_lang: "Idioma do Sistema",
        lbl_lang_desc: "Mudar o idioma do painel e menus.",
        btn_save: "Salvar & Aplicar",
        btn_cancel: "Cancelar",
        btn_ok: "OK",
        help_title: "Guia de Atalhos de Teclado",
        help_nav: "Navegação",
        help_nav_next: "Próxima Imagem",
        help_nav_prev: "Imagem Anterior",
        help_nav_undo: "Desfazer Ação",
        help_nav_rotate: "Rotacionar",
        help_file: "Arquivos & Painéis",
        help_file_folder: "Criar Pasta",
        help_file_src: "Abrir Pasta",
        help_file_del: "Mover Lixeira",
        help_file_left: "Alternar Explorador",
        help_file_bottom: "Alternar Console",
        help_file_right: "Alternar EXIF",
        help_tip: "Dica Atalhos [1-9]: Pressione os números de 1 a 9 no teclado para mover instantaneamente a foto atual para o destino do preset.",
        dlg_confirm_title: "Confirmação",
        dlg_confirm_del_title: "Excluir Foto",
        dlg_confirm_del_msg: "Deseja mover a imagem \"{file}\" para a Lixeira?",
        dlg_create_folder_title: "Criar Nova Pasta",
        dlg_create_folder_msg: "Digite o nome para a nova subpasta:",
        dlg_open_folder_title: "Abrir Pasta",
        dlg_open_folder_msg: "Cole o caminho absoluto da pasta (copiado do Explorador de Arquivos):",
        dlg_preset_title: "Definir Destino do Preset {key}",
        dlg_preset_msg: "Cole o caminho absoluto do diretório para este preset:",
        log_ready: "Sistema pronto. Por favor, abra uma pasta no Explorador.",
        log_scan_dir: "Escaneando pasta: {path}. {count} fotos encontradas.",
        log_create_folder_ok: "Subpasta criada: {name}",
        log_create_folder_err: "Falha ao criar pasta: {err}",
        log_rotate_ok: "Rotação de {degrees}° concluída: {file}",
        log_rotate_err: "Falha ao rotacionar: {err}",
        log_action_ok: "Sucesso {action}: {file} -> {target}",
        log_action_err: "Falha na ação: {err}",
        log_undo_ok: "Ação desfeita com sucesso: {msg}",
        log_undo_err: "Falha ao desfazer: {err}",
        log_clear: "Logs de atividade limpos.",
        log_save_settings: "Configurações salvas e aplicadas.",
        sz_small: "Pequeno",
        sz_medium: "Médio",
        sz_large: "Grande",
        lbl_move: "Mover",
        lbl_copy: "Copiar",
        lbl_target_placeholder: "C:\\Caminho\\da\\pasta\\destino",
        lbl_browse: "Procurar",
        lbl_press_key: "Pressione a tecla...",
        lbl_no_images_in_folder: "Esta pasta não contém arquivos de imagem.",
        sh_next_image: "Próxima Imagem",
        sh_next_image_desc: "Exibir a próxima imagem em ordem",
        sh_prev_image: "Imagem Anterior",
        sh_prev_image_desc: "Exibir a imagem anterior em ordem",
        sh_undo: "Desfazer Ação",
        sh_undo_desc: "Desfazer a última operação de cópia ou movimentação",
        sh_delete: "Excluir (Lixeira)",
        sh_delete_desc: "Mover a foto ativa para a lixeira",
        sh_rotate_cw: "Rotacionar 90° Direita",
        sh_rotate_cw_desc: "Girar a foto em sentido horário",
        sh_rotate_ccw: "Rotacionar 90° Esquerda",
        sh_rotate_ccw_desc: "Girar a foto em sentido anti-horário",
        sh_help: "Abrir Guia de Ajuda",
        sh_help_desc: "Exibir atalhos de teclado e dicas",
        sh_toggle_explorer: "Alternar Explorador",
        sh_toggle_explorer_desc: "Ocultar ou mostrar a barra de pastas esquerda",
        sh_toggle_console: "Alternar Logs",
        sh_toggle_console_desc: "Ocultar ou mostrar o console de atividades inferior",
        sh_toggle_metadata: "Alternar Metadados",
        sh_toggle_metadata_desc: "Ocultar ou mostrar o painel de EXIF direito",
        sh_create_folder: "Criar Pasta",
        sh_create_folder_desc: "Criar uma subpasta no diretório atual",
        sh_open_folder: "Abrir Diretório de Origem",
        sh_open_folder_desc: "Digitar um caminho para carregar fotos",
        gh_modal_title: "Apoie o Desenvolvedor",
        gh_modal_subtitle: "Photo Sorter Pro por dexccv",
        gh_modal_body: "Obrigado por usar o Photo Sorter Pro. Se este aplicativo ajuda no seu fluxo de trabalho, considere dar uma Star no repositório ou seguir @dexccv no GitHub.",
        gh_modal_btn_follow: "Seguir @dexccv no GitHub",
        gh_modal_btn_later: "Mais Tarde"
      },
      jv: {
        title: "MILAH FOTO PRO",
        subtitle: "EDISI ELITE v2.3",
        tab_previews: "Isi Folder",
        tab_logs: "Catetan Aktivitas",
        tab_presets: "Preset",
        lbl_explorer: "Panjlajah",
        lbl_drives: "Drive",
        lbl_metadata: "Katrangan Gambar",
        lbl_open_folder: "Bukak Folder",
        lbl_new: "Anyar",
        lbl_new_folder: "Folder Anyar",
        lbl_no_image: "Ora ana gambar sing dipilih",
        lbl_no_image_desc: "Pilih folder sumber ing sisih kiwa utawa lebokake path ing dhuwur kanggo mindai gambar.",
        lbl_histogram: "Kurva Histogram",
        meta_camera_exif: "Kamera EXIF",
        meta_camera: "Kamera",
        meta_iso: "ISO",
        meta_aperture: "Aperture",
        meta_shutter: "Shutter Speed",
        meta_file_info: "Informasi Berkas",
        meta_filename: "Jeneng Berkas",
        meta_resolution: "Resolusi",
        meta_size: "Ukuran",
        lbl_connected: "Server Nyambung",
        lbl_footer_help: "Ctrl+H / F1: Panduan Shortcuts",
        settings_title: "Setelan Aplikasi",
        tab_hotkeys: "Hotkeys (1-9)",
        tab_global_shortcuts: "Shortcuts Global",
        tab_appearance: "Tampilan",
        tab_system: "Sistem & Ekstensi",
        lbl_hotkeys_desc: "Atur aksi mindahake otomatis kanggo angka preset [1-9].",
        lbl_global_desc: "Pencet kothak tombol banjur ketik kombinasi tombol anyar ing keyboard kanggo ngganti shortcut.",
        lbl_theme: "Tema Werna Aplikasi",
        lbl_theme_desc: "Pilih werna tema visual lan tampilan aplikasi.",
        lbl_th_size: "Ukuran Gambar Cilik",
        lbl_animations: "Animasi & Transisi",
        lbl_animations_desc: "Uripake animasi transisi (slide out & shrink nalika mindahake utawa mbusak)",
        lbl_formats: "Format Gambar Sing Dipindai",
        lbl_formats_desc: "Setelan jinis format gambar sing dipindai.",
        lbl_general: "Umum & Keamanan",
        lbl_ask_delete: "Tembak konfirmasi sakdurunge mbuang gambar menyang Recycle Bin",
        lbl_lang: "Basa Aplikasi",
        lbl_lang_desc: "Ganti basa antarmuka tampilan aplikasi.",
        btn_save: "Simpen & Terapake",
        btn_cancel: "Wurung",
        btn_ok: "OK",
        help_title: "Panduan Tombol Cepet (Shortcuts)",
        help_nav: "Navigasi Gambar",
        help_nav_next: "Gambar Saklanjute",
        help_nav_prev: "Gambar Sakdurunge",
        help_nav_undo: "Batalne Aksi Terakhir",
        help_nav_rotate: "Rotasi (CW/CCW)",
        help_file: "File & Panel",
        help_file_folder: "Gawe Folder",
        help_file_src: "Pilih Folder",
        help_file_del: "Buang Recycle Bin",
        help_file_left: "Tutup Explorer",
        help_file_bottom: "Tutup Log Konsol",
        help_file_right: "Tutup EXIF Metadata",
        help_tip: "Tip Tombol [1-9]: Pencet tombol angka 1-9 ing keyboard kanggo langsung mindahake gambar menyang folder tujuan preset sing wis disetel.",
        dlg_confirm_title: "Konfirmasi",
        dlg_confirm_del_title: "Hapus Gambar",
        dlg_confirm_del_msg: "Mindahake gambar \"{file}\" menyang Recycle Bin?",
        dlg_create_folder_title: "Gawe Folder Anyar",
        dlg_create_folder_msg: "Lebokake jeneng folder anyar:",
        dlg_open_folder_title: "Bukak Folder Sumber",
        dlg_open_folder_msg: "Tempel path absolut direktori gambar sampeyan (soko File Explorer):",
        dlg_preset_title: "Setel Preset {key} Tujuan",
        dlg_preset_msg: "Tempel path absolut folder tujuan kanggo preset ini:",
        log_ready: "Sistem wis siyap. Monggo bukak folder liwat Explorer.",
        log_scan_dir: "Mindai folder: {path}. Ketemu {count} gambar.",
        log_create_folder_ok: "Folder kasil digawe: {name}",
        log_create_folder_err: "Gagal gawe folder: {err}",
        log_rotate_ok: "Rotasi {degrees}° kasil: {file}",
        log_rotate_err: "Gagal rotasi: {err}",
        log_action_ok: "Kasil {action}: {file} -> {target}",
        log_action_err: "Gagal: {err}",
        log_undo_ok: "Undo kasil: {msg}",
        log_undo_err: "Undo gagal: {err}",
        log_clear: "Catetan aktivitas wis diresiki.",
        log_save_settings: "Setelan kasil disimpen lan ditrapake.",
        sz_small: "Cilik",
        sz_medium: "Sedheng",
        sz_large: "Gedhe",
        lbl_move: "Pindhah",
        lbl_copy: "Salin",
        lbl_target_placeholder: "C:\\Path\\menyang\\folder\\tujuan",
        lbl_browse: "Golek",
        lbl_press_key: "Pencet tombol...",
        lbl_no_images_in_folder: "Folder iki ora ana gambar.",
        sh_next_image: "Gambar Saklanjute",
        sh_next_image_desc: "Nuduhake gambar sakbanjure miturut urutan",
        sh_prev_image: "Gambar Sakdurunge",
        sh_prev_image_desc: "Nuduhake gambar sakdurunge miturut urutan",
        sh_undo: "Undo Aksi Terakhir",
        sh_undo_desc: "Batalne pemindahan utawa penyalinan pungkasan",
        sh_delete: "Hapus (Recycle Bin)",
        sh_delete_desc: "Mindahake gambar menyang kranjang sampah",
        sh_rotate_cw: "Rotasi 90° CW",
        sh_rotate_cw_desc: "Muter gambar searah jarum jam",
        sh_rotate_ccw: "Rotasi 90° CCW",
        sh_rotate_ccw_desc: "Muter gambar kosok balen jarum jam",
        sh_help: "Bukak Panduan Bantuan",
        sh_help_desc: "Nuduhake shortcuts keyboard lan tip",
        sh_toggle_explorer: "Tutup Explorer",
        sh_toggle_explorer_desc: "Sembunyi/tampilake panel explorer kiwo",
        sh_toggle_console: "Tutup Log Ngisor",
        sh_toggle_console_desc: "Sembunyi/tampilake panel log ngisor",
        sh_toggle_metadata: "Tutup EXIF Metadata",
        sh_toggle_metadata_desc: "Sembunyi/tampilake panel info tengen",
        sh_create_folder: "Gawe Folder",
        sh_create_folder_desc: "Gawe subfolder anyar ing folder aktif",
        sh_open_folder: "Pilih Folder Sumber",
        sh_open_folder_desc: "Bukak folder anyar soko path",
        gh_modal_title: "Panyengkuyung Pangembang",
        gh_modal_subtitle: "Photo Sorter Pro dening dexccv",
        gh_modal_body: "Matur nuwun sampun nggunakake Photo Sorter Pro. Manawa aplikasi punika mbantu penggawean sampeyan, tulung paringi Star utawa follow akun GitHub @dexccv.",
        gh_modal_btn_follow: "Follow @dexccv ing GitHub",
        gh_modal_btn_later: "Mangke Saja"
      },
      "jv-tg": {
        title: "MILAH FOTO PRO",
        subtitle: "EDISI ELITE v2.3",
        tab_previews: "Isi Folder",
        tab_logs: "Catetan Aktivitas",
        tab_presets: "Preset",
        lbl_explorer: "Golet Folder",
        lbl_drives: "Drive",
        lbl_metadata: "Katrangan Gambar",
        lbl_open_folder: "Bukak Folder",
        lbl_new: "Anyar",
        lbl_new_folder: "Folder Anyar",
        lbl_no_image: "Laka gambar sing dipilih",
        lbl_no_image_desc: "Tulung pilih folder sumber neng sebelah kiri dong ora ketik nang nduwur nggo mindai gambar.",
        lbl_histogram: "Kurva Histogram",
        meta_camera_exif: "Kamera EXIF",
        meta_camera: "Kamera",
        meta_iso: "ISO",
        meta_aperture: "Aperture",
        meta_shutter: "Shutter Speed",
        meta_file_info: "Informasi Berkas",
        meta_filename: "Aran Berkas",
        meta_resolution: "Dimensi",
        meta_size: "Ukuran",
        lbl_connected: "Server Nyambung um aman bae",
        lbl_footer_help: "Ctrl+H / F1: Panduan Shortcuts",
        settings_title: "Pengaturane",
        tab_hotkeys: "Hotkeys (1-9)",
        tab_global_shortcuts: "Nggo cepetan",
        tab_appearance: "Tampilan",
        tab_system: "Sistem & Ekstensi",
        lbl_hotkeys_desc: "Atur aksi mindahake otomatis kanggo angka preset [1-9].",
        lbl_global_desc: "Pencet tombol kotakane nggo ketik kombinasi tombol anyar ning keyboard nggo ngganti shortcut.",
        lbl_theme: "Tema Werna Aplikasi",
        lbl_theme_desc: "Dipilih warnane disit",
        lbl_th_size: "Ukuran Gambar Cilik",
        lbl_animations: "Animasi & Transisi",
        lbl_animations_desc: "Uripake animasi transisi (slide out & shrink nalika mindahake utawa mbusak)",
        lbl_formats: "Format Gambar Sing Dipindai",
        lbl_formats_desc: "Setelan jinis format gambar sing dipindai.",
        lbl_general: "Umum & Keamanan",
        lbl_ask_delete: "Tembak konfirmasi sakdurunge mbuang gambar menyang Recycle Bin",
        lbl_lang: "Basa Aplikasi",
        lbl_lang_desc: "Ganti basa antarmuka tampilan aplikasi.",
        btn_save: "Simpen & Pasang",
        btn_cancel: "Wurung",
        btn_ok: "OK",
        help_title: "Panduan Tombol Cepet (Shortcuts)",
        help_nav: "Navigasi Gambar",
        help_nav_next: "Gambar Saklanjute",
        help_nav_prev: "Gambar Sakdurunge",
        help_nav_undo: "Batalne Aksi Terakhir",
        help_nav_rotate: "Rotasi (CW/CCW)",
        help_file: "File & Panel",
        help_file_folder: "Gawe Folder",
        help_file_src: "Pilih Folder",
        help_file_del: "Buang tong sampah",
        help_file_left: "Tutup Explorer",
        help_file_bottom: "Tutup Log Konsol",
        help_file_right: "Tutup EXIF Metadata",
        help_tip: "Tip Tombol [1-9]: Pencet tombol angka 1-9 ing keyboard nggo langsung mindahake gambar maring folder tujuan preset sing wis disetel.",
        dlg_confirm_title: "Konfirmasi",
        dlg_confirm_del_title: "Hapus Gambar",
        dlg_confirm_del_msg: "Pindah gambar \"{file}\" maring tong sampah?",
        dlg_create_folder_title: "Gawe Folder Anyar",
        dlg_create_folder_msg: "Lebokna ning folder anyar:",
        dlg_open_folder_title: "Buka Folder Sumber",
        dlg_open_folder_msg: "Tempel path absolut direktori gambar sampeyan (soko File Explorer):",
        dlg_preset_title: "Setel Preset {key} Tujuan",
        dlg_preset_msg: "Tempel path absolut folder tujuan kanggo preset iki:",
        log_ready: "Sistem wis siyap. Monggo bukak folder liwat Explorer.",
        log_scan_dir: "Mindai folder: {path}. Ketemu {count} gambar.",
        log_create_folder_ok: "Folder kasil digawe: {name}",
        log_create_folder_err: "Ora bisa gawe folder: {err}",
        log_rotate_ok: "Rotasi {degrees}° kasil: {file}",
        log_rotate_err: "Gagal rotasi: {err}",
        log_action_ok: "Kasil {action}: {file} -> {target}",
        log_action_err: "Gagal: {err}",
        log_undo_ok: "Undo kasil: {msg}",
        log_undo_err: "Undo gagal: {err}",
        log_clear: "Catetan aktivitas wis diresiki.",
        log_save_settings: "Setelan kasil disimpen lan dipasang.",
        sz_small: "Cilik",
        sz_medium: "Sedheng",
        sz_large: "Gedhe",
        lbl_move: "Mindah",
        lbl_copy: "Nyalin",
        lbl_target_placeholder: "C:\\Path\\menyang\\folder\\tujuan",
        lbl_browse: "Golet",
        lbl_press_key: "Pencet tombol...",
        lbl_no_images_in_folder: "Folder kie laka gambare.",
        sh_next_image: "Gambar Saklanjute",
        sh_next_image_desc: "Nuduhake gambar saklanjute miturut urutan",
        sh_prev_image: "Gambar Sakdurunge",
        sh_prev_image_desc: "Nuduhake gambar sakdurunge miturut urutan",
        sh_undo: "Undo Aksi Terakhir",
        sh_undo_desc: "Batalne pemindahan utawa penyalinan pungkasan",
        sh_delete: "Hapus (tong sampah)",
        sh_delete_desc: "Mindahake gambar maring tong sampah",
        sh_rotate_cw: "Rotasi 90° CW",
        sh_rotate_cw_desc: "Muter gambar searah jarum jam",
        sh_rotate_ccw: "Rotasi 90° CCW",
        sh_rotate_ccw_desc: "Muter gambar kosok balen jarum jam",
        sh_help: "Bukak Panduan Bantuan",
        sh_help_desc: "Nuduhake shortcuts keyboard lan tip",
        sh_toggle_explorer: "Tutup Explorer",
        sh_toggle_explorer_desc: "Sembunyi/tampilake panel explorer kiwa",
        sh_toggle_console: "Tutup Log Ngisor",
        sh_toggle_console_desc: "Sembunyi/tampilake panel log ngisor",
        sh_toggle_metadata: "Tutup EXIF Metadata",
        sh_toggle_metadata_desc: "Sembunyi/tampilake panel info tengen",
        sh_create_folder: "Gawe Folder",
        sh_create_folder_desc: "Gawe subfolder anyar ing folder aktif",
        sh_open_folder: "Pilih Folder Sumber",
        sh_open_folder_desc: "Bukak folder anyar soko path"
      }
    };

    // Translator helper function
    function t(key, replacements = {}) {
      const lang = state.lang || 'en';
      let text = (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || (TRANSLATIONS['en'][key]) || key;
      Object.entries(replacements).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, v);
      });
      return text;
    }

    // Dynamic UI language application
    function applyLanguage(lang) {
      state.lang = lang;

      // 1. Translate all DOM elements with data-i18n
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerText = t(key);
      });

      // 2. Translate document page title
      document.title = t('title');

      // 3. Translate breadcrumbs input placeholder
      const addrInput = document.getElementById('address-bar');
      if (addrInput) {
        if (lang === 'id' || lang === 'jv' || lang === 'jv-tg') {
          addrInput.placeholder = "Path direktori...";
        } else if (lang === 'zh') {
          addrInput.placeholder = "目录路径...";
        } else if (lang === 'ja') {
          addrInput.placeholder = "ディレクトリパス...";
        } else if (lang === 'pt') {
          addrInput.placeholder = "Caminho do diretório...";
        } else {
          addrInput.placeholder = "Directory path...";
        }
      }
    }

    // State management
    let state = {
      currentFolder: '',
      images: [],
      currentIndex: -1,
      hotkeys: {},
      extensions: ['.jpg', '.jpeg', '.png', '.webp'],
      drives: [],
      folderHistory: [],
      panelStates: { left: true, bottom: true, right: true },
      panelSizes: { left: 256, bottom: 224, right: 256 },
      global_shortcuts: {},
      lang: 'en',
      custom_hotkeys: [],
      disabled_global_shortcuts: [],  // list of action names
      disabled_preset_keys: [],        // list of '1'-'9' strings
      isThisPC: false,
      pinned_folders: [],
      last_folder: '',
      last_index: 0,
      recent_folders: [],      // last 10 opened folders
      per_folder_index: {},    // {folder: last_index}
      compareMode: false,      // compare mode state
      selectedIndices: [],     // array of selected indices for multi-select
      lastSelectedIndex: -1,   // last clicked index for shift range select
      copyMoveMode: 'copy'     // 'copy' or 'move' for modal
    };

    // ================================================================
    // CONFLICT DETECTION ENGINE
    // ================================================================

    // Known browser shortcuts and their risk level
    const BROWSER_RESERVED = new Map([
      ['Ctrl+W',         {level:'critical', desc:'Menutup tab browser'}],
      ['Ctrl+T',         {level:'critical', desc:'Membuka tab baru'}],
      ['Ctrl+R',         {level:'critical', desc:'Refresh halaman (browser)'}],
      ['F5',             {level:'critical', desc:'Refresh halaman (browser)'}],
      ['Ctrl+Shift+R',   {level:'critical', desc:'Hard refresh browser'}],
      ['Alt+F4',         {level:'critical', desc:'Menutup window (OS)'}],
      ['F12',            {level:'warning',  desc:'Buka DevTools browser'}],
      ['Ctrl+Shift+I',   {level:'warning',  desc:'Buka DevTools browser'}],
      ['Ctrl+Shift+J',   {level:'warning',  desc:'DevTools Console browser'}],
      ['Ctrl+F',         {level:'warning',  desc:'Pencarian halaman (browser)'}],
      ['Ctrl+P',         {level:'warning',  desc:'Print halaman (browser)'}],
      ['Ctrl+S',         {level:'warning',  desc:'Simpan halaman (browser)'}],
      ['Ctrl+H',         {level:'warning',  desc:'Riwayat browser'}],
      ['Ctrl+D',         {level:'warning',  desc:'Bookmark halaman (browser)'}],
      ['Ctrl+J',         {level:'warning',  desc:'Unduhan browser'}],
      ['Ctrl+U',         {level:'warning',  desc:'Lihat source code (browser)'}],
      ['Ctrl+Tab',       {level:'warning',  desc:'Pindah antar tab browser'}],
      ['Ctrl+Shift+Tab', {level:'warning',  desc:'Pindah antar tab browser'}],
      ['Ctrl+Shift+T',   {level:'warning',  desc:'Buka tab terakhir (browser)'}],
      ['Ctrl+N',         {level:'warning',  desc:'Jendela baru browser'}],
      ['F11',            {level:'info',     desc:'Fullscreen browser'}],
      ['Ctrl+A',         {level:'info',     desc:'Pilih semua teks (browser)'}],
      ['Ctrl+C',         {level:'info',     desc:'Copy (browser)'}],
      ['Ctrl+V',         {level:'info',     desc:'Paste (browser)'}],
      ['Ctrl+X',         {level:'info',     desc:'Cut (browser)'}],
      ['Ctrl+Z',         {level:'info',     desc:'Undo (browser)'}],
      ['Ctrl+Y',         {level:'info',     desc:'Redo (browser)'}],
    ]);

    /**
     * Build a live registry from current settings modal form values.
     * Each entry: {key, sourceId, sourceLabel, enabled, source}
     */
    function buildLiveRegistry() {
      const registry = [];

      // Global shortcuts (from form)
      GLOBAL_ACTION_KEYS.forEach(actionName => {
        const el = document.getElementById(`sh-${actionName}`);
        if (!el || !el.value || el.value === 'None') return;
        const toggleEl = document.getElementById(`toggle-global-${actionName}`);
        const enabled = toggleEl ? toggleEl.checked : true;
        registry.push({
          key: el.value,
          source: 'global',
          sourceId: `global_${actionName}`,
          sourceLabel: `Global: ${t('sh_' + actionName) || actionName}`,
          enabled
        });
      });

      // Preset hotkeys (1-9) from form
      for (let i = 1; i <= 9; i++) {
        const keyStr = String(i);
        const targetEl = document.getElementById(`set-target-${keyStr}`);
        const toggleEl = document.getElementById(`toggle-preset-${keyStr}`);
        if (!targetEl || !targetEl.value.trim()) continue;
        const enabled = toggleEl ? toggleEl.checked : true;
        const actionEl = document.getElementById(`set-action-${keyStr}`);
        registry.push({
          key: keyStr,
          source: 'preset',
          sourceId: `preset_${keyStr}`,
          sourceLabel: `Preset [${keyStr}]: ${actionEl ? actionEl.value.toUpperCase() : ''} → ${targetEl.value.split(/[\\/]/).pop()}`,
          enabled
        });
      }

      // Custom hotkeys from edit buffer
      (_customHotkeysEdit || []).forEach((h, idx) => {
        if (!h.key) return;
        registry.push({
          key: h.key,
          source: 'custom',
          sourceId: `custom_${idx}`,
          sourceLabel: `Custom [${h.key}]${h.label ? ': ' + h.label : ''} (${h.action.toUpperCase()})`,
          enabled: h.enabled !== false
        });
      });

      return registry;
    }

    /**
     * Get conflicts for a given key string, optionally excluding one sourceId (self).
     * Returns {app: [{sourceId, sourceLabel, enabled}], browser: {level, desc} | null}
     */
    function getConflictsForKey(keyStr, excludeSourceId = null) {
      if (!keyStr || keyStr === 'None') return { app: [], browser: null };
      const registry = buildLiveRegistry();
      const app = registry.filter(r => r.key === keyStr && r.sourceId !== excludeSourceId);
      const browser = BROWSER_RESERVED.get(keyStr) || null;
      return { app, browser };
    }

    /** Render conflict badge HTML string for a key */
    function renderConflictBadgesHtml(conflicts, selfLabel) {
      if (!conflicts) return '';
      let html = '<div class="conflict-row">';
      // App-internal conflicts
      conflicts.app.forEach(c => {
        if (c.sourceLabel === selfLabel) return;
        html += `<span class="conflict-badge conflict-app" title="Bentrok dengan shortcut lain di aplikasi">⚡ ${c.sourceLabel}</span>`;
      });
      // Browser conflict
      if (conflicts.browser) {
        const cls = `conflict-${conflicts.browser.level}`;
        const icon = conflicts.browser.level === 'critical' ? '🚫' : conflicts.browser.level === 'warning' ? '⚠️' : 'ℹ️';
        html += `<span class="conflict-badge ${cls}" title="${conflicts.browser.desc}">${icon} Browser: ${conflicts.browser.desc}</span>`;
      }
      html += '</div>';
      return (conflicts.app.length > 0 || conflicts.browser) ? html : '';
    }

    /** Build the full conflict summary and update the banner */
    function refreshConflictSummary() {
      const bar = document.getElementById('conflict-summary-bar');
      const title = document.getElementById('conflict-summary-title');
      const detail = document.getElementById('conflict-summary-detail');
      if (!bar) return;

      const registry = buildLiveRegistry();
      const issues = [];

      // Check all registered keys for app duplicates and browser conflicts
      const seen = new Map();
      registry.forEach(r => {
        if (!r.key) return;
        if (!seen.has(r.key)) seen.set(r.key, []);
        seen.get(r.key).push(r);
      });

      seen.forEach((entries, key) => {
        if (entries.length > 1) {
          const labels = entries.map(e => e.sourceLabel).join(', ');
          issues.push({ level: 'app', key, msg: `Tombol <b>${key}</b> terdaftar di beberapa shortcut: ${labels}` });
        }
        const browser = BROWSER_RESERVED.get(key);
        if (browser) {
          const registeredLabels = entries.map(e => e.sourceLabel).join(', ');
          issues.push({ level: browser.level, key, msg: `Tombol <b>${key}</b> (${registeredLabels}) bentrok dengan browser: ${browser.desc}` });
        }
      });

      if (issues.length === 0) {
        bar.classList.add('hidden');
        return;
      }

      bar.classList.remove('hidden');
      const appIssues = issues.filter(i => i.level === 'app').length;
      const critIssues = issues.filter(i => i.level === 'critical').length;
      const warnIssues = issues.filter(i => ['warning', 'info'].includes(i.level)).length;

      let summaryText = [];
      if (appIssues) summaryText.push(`${appIssues} konflik antar shortcut`);
      if (critIssues) summaryText.push(`${critIssues} bentrok kritis browser`);
      if (warnIssues) summaryText.push(`${warnIssues} peringatan browser`);
      title.textContent = `⚠ ${summaryText.join(' · ')} — Nonaktifkan salah satu via toggle`;

      detail.innerHTML = issues.map(i => {
        const cls = i.level === 'app' ? 'conflict-app' : `conflict-${i.level}`;
        return `<div class="conflict-badge ${cls} w-full">${i.msg}</div>`;
      }).join('');
    }

    function toggleConflictDetail() {
      const detail = document.getElementById('conflict-summary-detail');
      const btn = document.getElementById('conflict-detail-toggle');
      if (!detail || !btn) return;
      detail.classList.toggle('hidden');
      btn.textContent = detail.classList.contains('hidden') ? '▼ Detail' : '▲ Tutup';
    }



    // ----- Performance: Thumbnail lazy loader -----
    // IntersectionObserver to lazily load thumbnails in filmstrip
    let _thumbObserver = null;
    function getThumbObserver() {
      if (!_thumbObserver) {
        _thumbObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                delete img.dataset.src;
                _thumbObserver.unobserve(img);
              }
            }
          });
        }, { rootMargin: '0px 300px 0px 300px', threshold: 0 });
      }
      return _thumbObserver;
    }

    // ----- Performance: Preload cache -----
    // Preload next/prev full images into browser cache so navigation is instant
    const _preloadCache = new Set();
    function preloadImage(path) {
      const url = `/api/image?path=${encodeURIComponent(path)}`;
      if (_preloadCache.has(url)) return;
      _preloadCache.add(url);
      const img = new Image();
      img.src = url;
    }

    // Debounce timer for prewarm scheduler
    let _prewarmTimer = null;

    function preloadNeighbors(index) {
      // 1. Immediately preload full-res images for instant Next/Prev in browser cache
      const immediateNeighbors = [index + 1, index + 2, index - 1];
      immediateNeighbors.forEach(i => {
        if (i >= 0 && i < state.images.length) {
          const path = `${state.currentFolder}/${state.images[i]}`;
          preloadImage(path);
        }
      });

      // 2. Debounced: pre-warm thumbnails on backend for next 5 images (non-blocking)
      // Debounce so rapid navigation doesn't spam the backend
      if (_prewarmTimer) clearTimeout(_prewarmTimer);
      _prewarmTimer = setTimeout(() => {
        const paths = [];
        // Collect next 5 + prev 2 image paths for backend thumbnail pre-warming
        for (let offset = 1; offset <= 5; offset++) {
          const i = index + offset;
          if (i >= 0 && i < state.images.length) {
            paths.push(`${state.currentFolder}/${state.images[i]}`);
          }
        }
        for (let offset = 1; offset <= 2; offset++) {
          const i = index - offset;
          if (i >= 0 && i < state.images.length) {
            paths.push(`${state.currentFolder}/${state.images[i]}`);
          }
        }

        if (paths.length > 0) {
          fetch('/api/prewarm-thumbnails', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ paths, size: 320 })
          }).catch(() => {}); // fire-and-forget, ignore errors
        }
      }, 250); // wait 250ms after last navigation to batch requests
    }

    function dismissGithubModal() {
      const modal = document.getElementById('github-follow-modal');
      if (modal) modal.classList.add('hidden');
      localStorage.setItem('github_follow_prompt_dismissed', 'true');
    }

    // Initialize application
    window.addEventListener('DOMContentLoaded', async () => {
      lucide.createIcons();
      initResizers();
      setupGlobalBindings();
      startDrivePolling();

      const es = new EventSource('/api/watch');
      es.onmessage = (e) => {
        if (e.data === 'refresh' && state.currentFolder && !state.isThisPC) {
          logMsg("Folder changed externally, refreshing...", "info");
          refreshFolder();
        }
      };

      await fetchDrives();
      await fetchSession();
      await fetchSettings();

      applyLanguage(state.lang || 'en');
      logMsg(t('log_ready'));

      // Check if session has a valid last folder to resume
      if (state.last_folder) {
        logMsg(`Memulihkan sesi aplikasi sebelumnya: ${state.last_folder}`);
        await navigateToPath(state.last_folder);
        // Restore last index — note: index 0 is valid and must not be skipped
        // fetchImages already sets currentIndex from lastIndex returned by backend (per_folder_index),
        // but we apply state.last_index as final override only when per_folder_index wasn't already used.
        if (state.last_index >= 0 && state.images.length > state.last_index) {
          // Only override if fetchImages didn't already set a per-folder index
          // (fetchImages sets currentIndex from data.lastIndex which IS the per_folder_index already)
          // So we only override here if currentIndex is still 0 and last_index is different
          if (state.currentIndex === 0 && state.last_index > 0) {
            state.currentIndex = state.last_index;
            displayCurrentImage();
          }
        }
      } else {
        loadThisPC();
      }

      // First-launch non-forcing GitHub Follow Pop-up Modal
      if (!localStorage.getItem('github_follow_prompt_dismissed')) {
        setTimeout(() => {
          const m = document.getElementById('github-follow-modal');
          if (m) m.classList.remove('hidden');
        }, 1200);
      }
    });

    // Session recovery from backend
    async function fetchSession() {
      try {
        const res = await fetch('/api/session');
        const data = await res.json();
        state.last_folder = data.last_folder || "";
        state.last_index = data.last_index || 0;
        state.pinned_folders = data.pinned_folders || [];

        // Restore extended session fields
        state.recent_folders = data.recent_folders || [];
        state.per_folder_index = data.per_folder_index || {};
        if (data.compare_mode !== undefined) {
          state.compareMode = data.compare_mode;
          const cmpBtn = document.getElementById('compare-mode-btn');
          if (cmpBtn) {
            if (state.compareMode) cmpBtn.classList.add('active');
            else cmpBtn.classList.remove('active');
          }
        }

        // Restore panel sizes
        if (data.panel_sizes) {
          state.panelSizes = { ...state.panelSizes, ...data.panel_sizes };
          const leftPanel = document.getElementById('left-panel');
          const rightPanel = document.getElementById('right-panel');
          const bottomPanel = document.getElementById('bottom-panel');
          if (leftPanel && data.panel_sizes.left) leftPanel.style.width = `${data.panel_sizes.left}px`;
          if (rightPanel && data.panel_sizes.right) rightPanel.style.width = `${data.panel_sizes.right}px`;
          if (bottomPanel && data.panel_sizes.bottom) bottomPanel.style.height = `${data.panel_sizes.bottom}px`;
        }

        if (data.layout) {
          // Ensure docks default exists so updateLayoutDOM() never falls back to blank
          if (!data.layout.docks) {
            data.layout.docks = { explorer: 'left', inspector: 'right', console: 'bottom' };
          }
          state.layout = data.layout;
          updateLayoutDOM();
        }
        renderPinnedFolders();
      } catch (e) {
        console.warn("Gagal memuat session", e);
      }
    }

    // ----- Customizable Layout System -----
    function toggleLayoutDropdown(e) {
      if (e) e.stopPropagation();
      const drop = document.getElementById('layout-dropdown');
      if (drop) drop.classList.toggle('hidden');
    }

    document.addEventListener('click', (e) => {
      const drop = document.getElementById('layout-dropdown');
      const btn = document.getElementById('btn-layout-menu');
      if (drop && !drop.classList.contains('hidden') && btn && !btn.contains(e.target) && !drop.contains(e.target)) {
        drop.classList.add('hidden');
      }
    });

    function setWidgetDock(widgetId, dockLocation) {
      if (!state.layout) state.layout = {};
      if (!state.layout.docks) {
        state.layout.docks = { explorer: 'left', inspector: 'right', console: 'bottom' };
      }
      state.layout.docks[widgetId] = dockLocation;
      updateLayoutDOM();
      saveLayoutSession();
      logMsg(`Dock widget '${widgetId}' dipindah ke: ${dockLocation}`, 'info');
    }

    function applyLayoutPreset(presetName) {
      if (!state.layout) state.layout = {};
      state.layout.preset = presetName;
      if (!state.layout.docks) state.layout.docks = {};

      if (presetName === 'standard') {
        state.layout.show_stage = true;
        state.layout.docks = { explorer: 'left', inspector: 'right', console: 'bottom' };
      } else if (presetName === 'comparison') {
        state.layout.show_stage = true;
        state.layout.docks = { explorer: 'left', inspector: 'right', console: 'hidden' };
      } else if (presetName === 'right_presets') {
        state.layout.show_stage = true;
        state.layout.docks = { explorer: 'hidden', inspector: 'right', console: 'right' };
      } else if (presetName === 'minimal') {
        state.layout.show_stage = true;
        state.layout.docks = { explorer: 'hidden', inspector: 'hidden', console: 'hidden' };
      }

      updateLayoutDOM();
      displayCurrentImage();
      saveLayoutSession();
      logMsg(`Layout diubah ke mode: ${presetName}`, 'info');
    }

    function toggleStageCarousel() {
      if (!state.layout) state.layout = {};
      state.layout.show_stage = !(state.layout.show_stage !== false);
      updateLayoutDOM();
      displayCurrentImage();
      saveLayoutSession();
    }

    function updateLayoutDOM() {
      const l = state.layout || {};
      const docks = l.docks || { explorer: 'left', inspector: 'right', console: 'bottom' };

      const leftPanel = document.getElementById('left-panel');
      const rightPanel = document.getElementById('right-panel');
      const bottomPanel = document.getElementById('bottom-panel');

      const widgetExplorer = document.getElementById('widget-explorer');
      const widgetInspector = document.getElementById('widget-inspector');
      const widgetConsole = document.getElementById('widget-console');

      const appendToDock = (widgetEl, dockName) => {
        if (!widgetEl) return;
        if (dockName === 'left' && leftPanel) {
          widgetEl.classList.remove('hidden');
          leftPanel.appendChild(widgetEl);
        } else if (dockName === 'right' && rightPanel) {
          widgetEl.classList.remove('hidden');
          rightPanel.appendChild(widgetEl);
        } else if (dockName === 'bottom' && bottomPanel) {
          widgetEl.classList.remove('hidden');
          bottomPanel.appendChild(widgetEl);
        } else {
          widgetEl.classList.add('hidden');
        }
      };

      appendToDock(widgetExplorer, docks.explorer);
      appendToDock(widgetInspector, docks.inspector);
      appendToDock(widgetConsole, docks.console);

      const updatePanelVisibility = (panelEl, resizerEl) => {
        if (!panelEl) return;
        const visibleChild = Array.from(panelEl.children).some(c => !c.classList.contains('hidden'));
        if (visibleChild) {
          panelEl.classList.remove('hidden');
          if (resizerEl) resizerEl.classList.remove('hidden');
        } else {
          panelEl.classList.add('hidden');
          if (resizerEl) resizerEl.classList.add('hidden');
        }
      };

      const resizerLeft = document.getElementById('resizer-left');
      const resizerRight = document.getElementById('resizer-right');
      const resizerBottom = document.getElementById('resizer-bottom');

      updatePanelVisibility(leftPanel, resizerLeft);
      updatePanelVisibility(rightPanel, resizerRight);
      updatePanelVisibility(bottomPanel, resizerBottom);

      const selExp = document.getElementById('sel-dock-explorer');
      const selInsp = document.getElementById('sel-dock-inspector');
      const selCon = document.getElementById('sel-dock-console');
      if (selExp) selExp.value = docks.explorer || 'left';
      if (selInsp) selInsp.value = docks.inspector || 'right';
      if (selCon) selCon.value = docks.console || 'bottom';

      const cardPrev = document.getElementById('stage-card-prev');
      const cardNext = document.getElementById('stage-card-next');
      const btnCarousel = document.getElementById('btn-toggle-carousel');
      const lblCarousel = document.getElementById('lbl-carousel-mode');

      if (l.show_stage !== false) {
        if (cardPrev) cardPrev.classList.remove('hidden');
        if (cardNext) cardNext.classList.remove('hidden');
        if (btnCarousel) btnCarousel.classList.add('bg-brand-blue/20', 'border-brand-blue', 'text-brand-blue');
        if (lblCarousel) lblCarousel.innerText = 'Compare Mode (ON)';
      } else {
        if (cardPrev) cardPrev.classList.add('hidden');
        if (cardNext) cardNext.classList.add('hidden');
        if (btnCarousel) btnCarousel.classList.remove('bg-brand-blue/20', 'border-brand-blue', 'text-brand-blue');
        if (lblCarousel) lblCarousel.innerText = 'Compare Mode (OFF)';
      }

      renderImagePreviews();
    }

    async function saveLayoutSession() {
      if (!state.layout) return;
      try {
        // Always include docks in the payload so panel positions are persisted
        const payload = {
          ...state.layout,
          docks: state.layout.docks || { explorer: 'left', inspector: 'right', console: 'bottom' }
        };
        await fetch('/api/session-layout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        // Also persist compare_mode derived from show_stage
        saveSessionUI({ compare_mode: state.layout.show_stage !== false });
      } catch (e) {
        console.warn("Failed saving layout session", e);
      }
    }

    // Debounced save of panel sizes and compare_mode to /api/session-ui
    let _sessionUITimer = null;
    function saveSessionUI(extra = {}) {
      if (_sessionUITimer) clearTimeout(_sessionUITimer);
      _sessionUITimer = setTimeout(() => {
        const payload = {
          panel_sizes: { ...state.panelSizes },
          ...extra
        };
        fetch('/api/session-ui', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }).catch(() => {});
      }, 800); // debounce 800ms after last resize
    }

    function togglePanel(type) {
      if (!state.layout) state.layout = {};
      if (!state.layout.docks) state.layout.docks = { explorer: 'left', inspector: 'right', console: 'bottom' };
      const widgetKey = type === 'left' ? 'explorer' : (type === 'right' ? 'inspector' : 'console');
      const currentDock = state.layout.docks[widgetKey];
      const defaultDock = type === 'left' ? 'left' : (type === 'right' ? 'right' : 'bottom');
      const newDock = currentDock === 'hidden' ? defaultDock : 'hidden';
      setWidgetDock(widgetKey, newDock);
    }

    // Save active folder & index session
    async function updateSessionIndex() {
      if (state.currentFolder && state.currentIndex >= 0) {
        try {
          await fetch(`/api/session-index?folder=${encodeURIComponent(state.currentFolder)}&index=${state.currentIndex}`, {
            method: 'POST'
          });
        } catch (e) {
          console.warn("Gagal menyimpan indeks sesi", e);
        }
      }
    }

    // Path cleaner (removes quotes, trims spaces, handles "This PC\" prefixes for drive letters and MTP paths)
    function cleanPath(inputPath) {
      if (!inputPath) return "";
      let p = inputPath.trim();
      if ((p.startsWith('"') && p.endsWith('"')) || (p.startsWith("'") && p.endsWith("'"))) {
        p = p.slice(1, -1).trim();
      }
      p = p.replace(/\//g, '\\');
      
      if (p.toLowerCase() === "this pc" || p.toLowerCase() === "computer") {
        return "This PC";
      }

      // If user pasted "This PC\Local Disk (C:)\..." or "This PC\D:\..."
      if (p.toLowerCase().startsWith("this pc\\")) {
        let sub = p.substring(8).trim();
        if (sub.length >= 2 && sub[1] === ':') {
          return sub;
        }
        if (sub.toLowerCase().startsWith("local disk (") && sub.indexOf("):") > 0) {
          const letterIdx = sub.indexOf("):");
          const driveLetter = sub.substring(letterIdx - 1, letterIdx + 1);
          const rest = sub.substring(letterIdx + 2).replace(/^[\\]+/, "");
          return rest ? `${driveLetter}\\${rest}` : `${driveLetter}\\`;
        }
      }
      return p;
    }

    // Quick Access / Pin to Start handlers
    async function togglePinCurrentFolder() {
      if (!state.currentFolder) return;
      const path = cleanPath(state.currentFolder);
      if (!state.pinned_folders) state.pinned_folders = [];

      const idx = state.pinned_folders.indexOf(path);
      if (idx >= 0) {
        state.pinned_folders.splice(idx, 1);
        logMsg(`Lepas sematan folder: ${path}`);
      } else {
        state.pinned_folders.push(path);
        logMsg(`Folder disematkan ke Akses Cepat: ${path}`, 'success');
      }
      await savePinnedFolders();
      updatePinButtonState();
      renderPinnedFolders();
    }

    async function unpinFolder(path) {
      if (!state.pinned_folders) return;
      state.pinned_folders = state.pinned_folders.filter(p => p !== path);
      await savePinnedFolders();
      updatePinButtonState();
      renderPinnedFolders();
    }

    async function savePinnedFolders() {
      try {
        await fetch('/api/pinned-folders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ pinned_folders: state.pinned_folders || [] })
        });
      } catch (e) {
        logMsg("Gagal menyimpan pinned folders", 'error');
      }
    }

    function updatePinButtonState() {
      const pinBtn = document.getElementById('btn-pin-folder');
      if (!pinBtn) return;
      if (!state.currentFolder) {
        pinBtn.style.opacity = '0.4';
        pinBtn.disabled = true;
        return;
      }
      pinBtn.disabled = false;
      pinBtn.style.opacity = '1';
      const isPinned = (state.pinned_folders || []).includes(cleanPath(state.currentFolder));
      if (isPinned) {
        pinBtn.className = "p-1 rounded bg-brand-blue/20 text-brand-blue transition";
        pinBtn.title = "Lepas sematan folder ini";
      } else {
        pinBtn.className = "p-1 rounded hover:bg-zinc-800 text-zinc-500 hover:text-brand-blue transition";
        pinBtn.title = "Pin folder ini ke Quick Access / Start";
      }
    }

    function renderPinnedFolders() {
      const sidebarList = document.getElementById('pinned-sidebar-list');
      const countEl = document.getElementById('pinned-count');
      const mainGrid = document.getElementById('pinned-grid');

      const pinned = state.pinned_folders || [];
      if (countEl) countEl.innerText = pinned.length;

      if (sidebarList) {
        if (pinned.length === 0) {
          sidebarList.innerHTML = `<div class="text-[10px] text-zinc-600 italic px-1 py-1">Belum ada folder di-pin</div>`;
        } else {
          sidebarList.innerHTML = pinned.map(p => {
            const name = p.split(/[\\/]/).filter(Boolean).pop() || p;
            const safePath = p.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
            return `
              <div onclick="navigateToPath('${safePath}')" class="flex items-center justify-between px-2 py-1 bg-zinc-900/60 hover:bg-zinc-800 rounded cursor-pointer group text-xs transition">
                <div class="flex items-center gap-1.5 truncate">
                  <i data-lucide="folder" class="w-3.5 h-3.5 text-brand-accent shrink-0"></i>
                  <span class="text-zinc-300 group-hover:text-white truncate font-medium">${name}</span>
                </div>
                <button onclick="event.stopPropagation(); unpinFolder('${safePath}')" class="p-0.5 rounded hover:bg-red-950 text-zinc-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition" title="Unpin">
                  <i data-lucide="x" class="w-3 h-3"></i>
                </button>
              </div>
            `;
          }).join('');
        }
      }

      if (mainGrid) {
        if (pinned.length === 0) {
          mainGrid.innerHTML = `<div class="text-xs text-zinc-600 italic col-span-full">Klik ikon 📌 di bilah alamat untuk menyematkan folder favorit Anda ke sini.</div>`;
        } else {
          mainGrid.innerHTML = pinned.map(p => {
            const name = p.split(/[\\/]/).filter(Boolean).pop() || p;
            const safePath = p.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
            return `
              <div onclick="navigateToPath('${safePath}')" class="p-3 bg-zinc-900 border border-brand-border rounded-xl hover:border-brand-blue cursor-pointer transition flex items-center justify-between group">
                <div class="flex items-center gap-2.5 truncate">
                  <div class="p-2 rounded-lg bg-zinc-950 text-brand-accent border border-brand-border">
                    <i data-lucide="folder" class="w-5 h-5"></i>
                  </div>
                  <div class="truncate">
                    <h4 class="text-xs font-semibold text-white group-hover:text-brand-accent truncate">${name}</h4>
                    <p class="text-[10px] text-zinc-500 font-mono truncate">${p}</p>
                  </div>
                </div>
                <button onclick="event.stopPropagation(); unpinFolder('${safePath}')" class="p-1 rounded hover:bg-red-950 text-zinc-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition" title="Unpin">
                  <i data-lucide="pin-off" class="w-4 h-4"></i>
                </button>
              </div>
            `;
          }).join('');
        }
      }
      lucide.createIcons();
    }

    // Logging function
    function logMsg(message, type = 'info') {
      const logTab = document.getElementById('tab-logs');
      const timestamp = new Date().toTimeString().split(' ')[0];

      let badge = `<span class="text-zinc-500">[${timestamp}]</span>`;
      if (type === 'success') badge += ` <span class="bg-emerald-950 text-brand-success px-1.5 py-0.5 rounded font-bold uppercase text-[9px] mr-1">MOVE</span>`;
      else if (type === 'error') badge += ` <span class="bg-red-950 text-brand-danger px-1.5 py-0.5 rounded font-bold uppercase text-[9px] mr-1">ERROR</span>`;
      else if (type === 'undo') badge += ` <span class="bg-blue-950 text-brand-accent px-1.5 py-0.5 rounded font-bold uppercase text-[9px] mr-1">UNDO</span>`;
      else badge += ` <span class="bg-zinc-900 text-zinc-400 px-1.5 py-0.5 rounded font-bold uppercase text-[9px] mr-1">SYS</span>`;

      logTab.innerHTML += `<div class="py-0.5">${badge} <span class="text-zinc-300">${message}</span></div>`;
      logTab.scrollTop = logTab.scrollHeight;
    }

    function clearLogs() {
      document.getElementById('tab-logs').innerHTML = '';
      logMsg(t('log_clear'));
    }

    // Reusable Custom Dialog Modal handler (replacing prompt/confirm/alert)
    function showCustomDialog({ title, message, type = 'alert', placeholder = '', defaultValue = '', onOk }) {
      const modal = document.getElementById('custom-dialog-modal');
      const titleEl = document.getElementById('dialog-title');
      const msgEl = document.getElementById('dialog-message');
      const inputEl = document.getElementById('dialog-input');
      const btnCancel = document.getElementById('dialog-btn-cancel');
      const btnOk = document.getElementById('dialog-btn-ok');
      const iconEl = document.getElementById('dialog-icon');

      titleEl.innerText = title;
      msgEl.innerText = message;

      // Set appropriate icon
      let iconName = 'help-circle';
      let iconColor = 'text-brand-blue';
      if (type === 'prompt') {
        iconName = 'edit-3';
        iconColor = 'text-brand-accent';
      } else if (type === 'alert') {
        iconName = 'alert-circle';
        iconColor = 'text-brand-danger';
      }
      iconEl.setAttribute('data-lucide', iconName);
      iconEl.className = `w-5 h-5 ${iconColor}`;

      if (type === 'prompt') {
        inputEl.classList.remove('hidden');
        inputEl.placeholder = placeholder;
        inputEl.value = defaultValue;
      } else {
        inputEl.classList.add('hidden');
      }

      if (type === 'alert') {
        btnCancel.classList.add('hidden');
      } else {
        btnCancel.classList.remove('hidden');
      }

      const handleOk = () => {
        const val = type === 'prompt' ? inputEl.value.trim() : true;
        modal.classList.add('hidden');
        cleanup();
        if (onOk) onOk(val);
      };

      const handleCancel = () => {
        modal.classList.add('hidden');
        cleanup();
      };

      const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          handleOk();
        } else if (e.key === 'Escape') {
          handleCancel();
        }
      };

      function cleanup() {
        btnOk.onclick = null;
        btnCancel.onclick = null;
        inputEl.onkeydown = null;
      }

      btnOk.onclick = handleOk;
      btnCancel.onclick = handleCancel;
      inputEl.onkeydown = handleKeyDown;

      modal.classList.remove('hidden');
      lucide.createIcons();

      if (type === 'prompt') {
        setTimeout(() => {
          inputEl.focus();
          inputEl.select();
        }, 50);
      }
    }

    // NOTE: togglePanel below uses raw style.display — kept for backward compat with
    // header quick-toggle buttons, but routes through setWidgetDock so state is always saved.
    function togglePanel(panel) {
      if (!state.layout) state.layout = {};
      if (!state.layout.docks) state.layout.docks = { explorer: 'left', inspector: 'right', console: 'bottom' };
      const widgetKey = panel === 'left' ? 'explorer' : (panel === 'right' ? 'inspector' : 'console');
      const currentDock = state.layout.docks[widgetKey];
      const defaultDock = panel === 'left' ? 'left' : (panel === 'right' ? 'right' : 'bottom');
      const newDock = currentDock === 'hidden' ? defaultDock : 'hidden';
      setWidgetDock(widgetKey, newDock);
    }

    // Tab control
    function setBottomTab(tab) {
      const btnPreviews = document.getElementById('tab-btn-previews');
      const btnLogs = document.getElementById('tab-btn-logs');
      const btnPresets = document.getElementById('tab-btn-presets');

      const viewPreviews = document.getElementById('tab-previews');
      const viewLogs = document.getElementById('tab-logs');
      const viewPresets = document.getElementById('tab-presets');

      const btnClearLogs = document.getElementById('btn-clear-logs');

      // Reset styles
      [btnPreviews, btnLogs, btnPresets].forEach(b => {
        if (b) b.className = 'text-xs px-3 py-1.5 border-b-2 border-transparent font-medium text-zinc-400 hover:text-white transition flex items-center gap-1.5';
      });
      [viewPreviews, viewLogs, viewPresets].forEach(v => {
        if (v) v.classList.add('hidden');
      });
      if (btnClearLogs) btnClearLogs.classList.add('hidden');

      if (tab === 'previews') {
        if (btnPreviews) btnPreviews.className = 'text-xs px-3 py-1.5 border-b-2 border-brand-blue font-medium text-white transition flex items-center gap-1.5';
        if (viewPreviews) viewPreviews.classList.remove('hidden');
      } else if (tab === 'logs') {
        if (btnLogs) btnLogs.className = 'text-xs px-3 py-1.5 border-b-2 border-brand-blue font-medium text-white transition flex items-center gap-1.5';
        if (viewLogs) viewLogs.classList.remove('hidden');
        if (btnClearLogs) btnClearLogs.classList.remove('hidden');
      } else if (tab === 'presets') {
        if (btnPresets) btnPresets.className = 'text-xs px-3 py-1.5 border-b-2 border-brand-blue font-medium text-white transition flex items-center gap-1.5';
        if (viewPresets) viewPresets.classList.remove('hidden');
      }
    }

    // Load drives/roots with background polling support
    let _drivePollInterval = null;
    function startDrivePolling() {
      if (_drivePollInterval) clearInterval(_drivePollInterval);
      _drivePollInterval = setInterval(async () => {
        await fetchDrives(true); // silent polling
      }, 4000);
    }

    async function fetchDrives(silent = false) {
      try {
        const res = await fetch('/api/drives');
        const newDrives = await res.json();
        const oldKeys = (state.drives || []).map(d => d.path).join(',');
        const newKeys = (newDrives || []).map(d => d.path).join(',');
        state.drives = newDrives;

        const sel = document.getElementById('drive-selector');
        if (sel) {
          const currentSel = sel.value;
          sel.innerHTML = state.drives.map(d => `<option value="${d.path}">${d.name}</option>`).join('');
          if (currentSel && state.drives.some(d => d.path === currentSel)) {
            sel.value = currentSel;
          }
        }

        if (oldKeys !== newKeys && !silent) {
          logMsg(`Sistem drive diperbarui (${newDrives.length} drive)`);
        }
        if (state.isThisPC) {
          renderThisPCDashboard();
        }
      } catch (e) {
        if (!silent) logMsg(`Gagal memuat drive: ${e}`, 'error');
      }
    }

    async function loadDrive(path) {
      state.isThisPC = false;
      document.getElementById('address-bar').value = path;
      const tree = document.getElementById('directory-tree');
      tree.innerHTML = '';

      if (cleanPath(path).toLowerCase().startsWith('this pc\\')) {
        await navigateToPath(path);
      } else {
        await renderSubdirs(path, tree, 0);
        await navigateToPath(path);
      }
    }

    async function loadThisPC() {
      state.isThisPC = true;
      state.currentFolder = "";
      document.getElementById('address-bar').value = "This PC";
      updatePinButtonState();

      const imgEl = document.getElementById('main-image');
      const emptyState = document.getElementById('empty-state');
      const thisPcContainer = document.getElementById('this-pc-container');

      imgEl.style.display = 'none';
      emptyState.style.display = 'none';
      thisPcContainer.classList.remove('hidden');

      await fetchDrives();
      renderThisPCDashboard();
      renderPinnedFolders();
    }

    function renderThisPCDashboard() {
      const grid = document.getElementById('drives-grid');
      if (!grid) return;

      const drives = state.drives || [];
      if (drives.length === 0) {
        grid.innerHTML = `<div class="text-xs text-zinc-500 italic col-span-full">Tidak ada drive terdeteksi.</div>`;
        return;
      }

      grid.innerHTML = drives.map(d => {
        const isRemovable = d.type === 'removable';
        const isMTP = d.type === 'mtp';
        const iconName = isMTP ? 'smartphone' : (isRemovable ? 'usb' : 'hard-drive');
        const badgeText = isMTP ? 'Ponsel / MTP Device' : (isRemovable ? 'Penyimpanan Eksternal / USB' : 'Local Disk');
        const badgeClass = isMTP ? 'bg-purple-950/80 text-purple-400 border-purple-900/60' : (isRemovable ? 'bg-amber-950/80 text-amber-400 border-amber-900/60' : 'bg-blue-950/80 text-blue-400 border-blue-900/60');
        const safePath = d.path.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

        return `
          <div onclick="loadDrive('${safePath}')" class="p-4 bg-zinc-900 border border-brand-border rounded-xl hover:border-brand-blue cursor-pointer transition flex flex-col justify-between gap-3 group relative overflow-hidden">
            <div class="flex items-start justify-between">
              <div class="p-2.5 rounded-xl bg-zinc-950 border border-brand-border text-brand-blue group-hover:scale-105 transition">
                <i data-lucide="${iconName}" class="w-6 h-6"></i>
              </div>
              <span class="text-[9px] font-semibold px-2 py-0.5 rounded-full border ${badgeClass}">
                ${badgeText}
              </span>
            </div>
            <div>
              <h3 class="text-sm font-bold text-white group-hover:text-brand-blue transition truncate">${d.name}</h3>
              <p class="text-[10px] text-zinc-500 font-mono mt-0.5">${d.path}</p>
            </div>
          </div>
        `;
      }).join('');

      lucide.createIcons();
    }

    // Hierarchical recursive folder tree builder
    async function renderSubdirs(parentPath, container, depth = 0) {
      try {
        const res = await fetch(`/api/scan-dir?path=${encodeURIComponent(parentPath)}`);
        if (!res.ok) return;
        const data = await res.json();

        data.forEach(item => {
          const itemEl = document.createElement('div');
          itemEl.className = "flex flex-col select-none";

          const rowEl = document.createElement('div');
          rowEl.className = `flex items-center gap-1.5 py-1 px-2 hover:bg-zinc-800 rounded cursor-pointer group transition text-xs`;
          rowEl.style.paddingLeft = `${depth * 14 + 8}px`;

          let expanded = false;
          let loaded = false;

          const childrenContainer = document.createElement('div');
          childrenContainer.className = "hidden flex flex-col";

          // Chevron button wrapper
          const chevronBtn = document.createElement('button');
          chevronBtn.className = "w-4 h-4 text-zinc-500 hover:text-white transition-transform duration-150 flex items-center justify-center focus:outline-none";

          const chevron = document.createElement('i');
          chevron.className = "w-3 h-3";
          if (item.hasChildren) {
            chevron.setAttribute('data-lucide', 'chevron-right');
            chevronBtn.onclick = async (e) => {
              e.stopPropagation();
              expanded = !expanded;
              if (expanded) {
                chevronBtn.style.transform = 'rotate(90deg)';
                childrenContainer.classList.remove('hidden');
                if (!loaded) {
                  await renderSubdirs(item.path, childrenContainer, depth + 1);
                  loaded = true;
                }
              } else {
                chevronBtn.style.transform = 'rotate(0deg)';
                childrenContainer.classList.add('hidden');
              }
            };
          } else {
            chevronBtn.style.width = '16px'; // Spacer
          }
          chevronBtn.appendChild(chevron);

          const folderIcon = document.createElement('i');
          folderIcon.className = "w-4 h-4 text-brand-blue shrink-0";
          folderIcon.setAttribute('data-lucide', 'folder');

          const nameSpan = document.createElement('span');
          nameSpan.className = "truncate flex-1 text-zinc-300 group-hover:text-white";
          nameSpan.innerText = item.name;

          rowEl.appendChild(chevronBtn);
          rowEl.appendChild(folderIcon);
          rowEl.appendChild(nameSpan);

          rowEl.onclick = async () => {
            await navigateToPath(item.path);
          };

          itemEl.appendChild(rowEl);
          itemEl.appendChild(childrenContainer);
          container.appendChild(itemEl);
        });
        lucide.createIcons();
      } catch (e) {
        console.error("Gagal memuat subfolder", e);
      }
    }

    async function navigateToAddress() {
      const input = document.getElementById('address-bar');
      const rawPath = cleanPath(input.value);
      if (!rawPath || rawPath.toLowerCase() === 'this pc' || rawPath.toLowerCase() === 'thispc' || rawPath.toLowerCase() === 'computer') {
        loadThisPC();
        return;
      }
      input.value = rawPath;
      await navigateToPath(rawPath);
    }

    async function navigateToPath(path) {
      const cleaned = cleanPath(path);
      if (!cleaned) return;

      if (state.currentFolder && state.currentFolder !== cleaned) {
        state.folderHistory.push(state.currentFolder);
      }
      state.isThisPC = false;
      state.currentFolder = cleaned;
      document.getElementById('address-bar').value = cleaned;

      const thisPcContainer = document.getElementById('this-pc-container');
      if (thisPcContainer) thisPcContainer.classList.add('hidden');

      updatePinButtonState();
      await fetchImages(cleaned);
    }

    // Global Preloader & Cache System
    let _preloadState = {
      folder: '',
      total: 0,
      loaded: 0,
      cancelled: false
    };

    function preloadStagePriority(idx) {
      if (!state.images || state.images.length === 0 || idx < 0) return;
      const total = state.images.length;
      
      // Top #1 Priority: 3 Stage Photos (Active, Prev, Next)
      const prevIdx = (idx - 1 + total) % total;
      const nextIdx = (idx + 1) % total;
      const stageIndices = [idx, prevIdx, nextIdx];

      stageIndices.forEach(i => {
        const file = state.images[i];
        if (!file) return;
        const fullPath = `${state.currentFolder}/${file}`;
        const imgUrl = `/api/image?path=${encodeURIComponent(fullPath)}`;
        if (!_preloadCache.has(imgUrl)) {
          const loader = new window.Image();
          loader.onload = () => _preloadCache.add(imgUrl);
          loader.src = imgUrl;
        }
      });
    }

    function updateSmartRadiusPreload(centerIdx) {
      if (!state.images || state.images.length === 0 || centerIdx < 0) return;
      const total = state.images.length;

      // Smart Directional Radius: +1 to +8 forward, -1 to -3 backward
      const radiusIndices = [];
      for (let offset = 1; offset <= 8; offset++) {
        radiusIndices.push((centerIdx + offset) % total);
      }
      for (let offset = 1; offset <= 3; offset++) {
        radiusIndices.push((centerIdx - offset + total) % total);
      }

      radiusIndices.forEach(i => {
        const file = state.images[i];
        if (!file) return;
        const fullPath = `${state.currentFolder}/${file}`;
        const imgUrl = `/api/image?path=${encodeURIComponent(fullPath)}`;
        if (!_preloadCache.has(imgUrl)) {
          const loader = new window.Image();
          loader.onload = () => _preloadCache.add(imgUrl);
          loader.src = imgUrl;
        }
      });
    }

    async function startFolderPreloader(folderPath, imagesList) {
      _preloadState.cancelled = true;
      _preloadState = {
        folder: folderPath,
        total: imagesList ? imagesList.length : 0,
        loaded: 0,
        cancelled: false
      };

      const container = document.getElementById('preload-progress-container');
      const bar = document.getElementById('preload-progress-bar');
      const badge = document.getElementById('preload-status-badge');
      const text = document.getElementById('preload-status-text');

      if (!imagesList || imagesList.length === 0) {
        if (container) container.classList.add('hidden');
        if (badge) badge.classList.add('hidden');
        return;
      }

      if (container) {
        container.classList.remove('hidden');
        bar.className = "h-full bg-gradient-to-r from-brand-blue via-purple-500 to-emerald-400 w-0 transition-all duration-200";
        bar.style.width = '0%';
      }
      if (badge) badge.classList.remove('hidden');
      if (text) text.innerText = `Pre-loading 0% (0/${imagesList.length})`;

      const thSize = state.thumbnail_size || 'medium';
      let thumbPx = thSize === 'small' ? 160 : (thSize === 'large' ? 320 : 240);

      // Pre-warm backend thumbnail cache in background chunks
      for (let i = 0; i < imagesList.length; i += 50) {
        if (_preloadState.cancelled || _preloadState.folder !== folderPath) break;
        const chunkPaths = imagesList.slice(i, i + 50).map(name => `${folderPath}/${name}`);
        try {
          fetch('/api/prewarm-thumbnails', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ paths: chunkPaths, size: thumbPx })
          }).catch(() => {});
        } catch (e) {}
      }

      // Pre-cache full images in smart radius around active cursor
      updateSmartRadiusPreload(state.currentIndex >= 0 ? state.currentIndex : 0);

      _preloadState.loaded = imagesList.length;
      updatePreloadUI();

      function updatePreloadUI() {
        if (_preloadState.cancelled || _preloadState.folder !== folderPath) return;
        const total = _preloadState.total;
        const loaded = Math.min(_preloadState.loaded, total);
        const percent = total > 0 ? Math.floor((loaded / total) * 100) : 100;

        if (bar) bar.style.width = `${percent}%`;
        if (text) text.innerText = `Pre-loading ${percent}% (${loaded}/${total})`;

        if (percent >= 100) {
          if (bar) bar.className = "h-full bg-emerald-500 w-full transition-all duration-200";
          if (text) text.innerText = `Ready (100% Pre-loaded - Zero Delay)`;
          setTimeout(() => {
            if (_preloadState.folder === folderPath && container) {
              container.classList.add('hidden');
              setTimeout(() => {
                if (badge && _preloadState.folder === folderPath) badge.classList.add('hidden');
              }, 3000);
            }
          }, 1500);
        }
      }
    }

    async function fetchImages(path) {
      try {
        const res = await fetch(`/api/scan-images?path=${encodeURIComponent(path)}`);
        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.detail || "Folder tidak dapat diakses");
        }
        const data = await res.json();

        state.images = data.images || [];
        state.folderMetadata = data.metadata || {};
        state.currentIndex = data.lastIndex !== undefined && data.lastIndex >= 0 && data.lastIndex < data.images.length ? data.lastIndex : (data.images.length > 0 ? 0 : -1);
        state.selectedIndices = state.currentIndex >= 0 ? [state.currentIndex] : [];
        state.lastSelectedIndex = state.currentIndex;

        logMsg(t('log_scan_dir', { path: path, count: state.images.length }));
        const imgWord = (state.lang === 'id' || state.lang === 'jv' || state.lang === 'jv-tg') ? 'gambar' : state.lang === 'zh' ? '图片' : state.lang === 'ja' ? '枚' : state.lang === 'pt' ? 'imagens' : 'images';
        document.getElementById('session-status').innerText = `Folder: ${path} (${state.images.length} ${imgWord})`;

        renderImagePreviews();
        displayCurrentImage();

        // Start background preloader with progress bar
        if (state.images.length > 0) {
          startFolderPreloader(path, state.images);
        }
      } catch (e) {
        logMsg(`Gagal memuat folder '${path}': ${e.message}`, 'error');
        showCustomDialog({
          title: 'Alamat Path Tidak Ditemukan',
          message: `Direktori "${path}" tidak dapat ditemukan atau tidak dapat diakses. Silakan periksa kembali alamat direktori Anda.`,
          type: 'alert'
        });
      }
    }

    // Display active image and draw filmstrip previews + 3-photo stage neighbors
    async function displayCurrentImage() {
      const imgEl = document.getElementById('main-image');
      const vidEl = document.getElementById('main-video');
      const emptyState = document.getElementById('empty-state');
      const counter = document.getElementById('image-counter');

      updateSessionIndex();

      if (state.currentIndex >= 0 && state.currentIndex < state.images.length) {
        const filename = state.images[state.currentIndex];
        const path = `${state.currentFolder}/${filename}`;
        const newSrc = `/api/image?path=${encodeURIComponent(path)}`;
        const isVideo = filename.toLowerCase().match(/\.(mp4|webm|mov)$/);

        updateRatingUI(filename);

        // Instant Top #1 Priority for 3 Stage Photos (Active, Prev, Next)
        preloadStagePriority(state.currentIndex);

        emptyState.style.display = 'none';
        counter.innerText = `${state.currentIndex + 1} / ${state.images.length}`;

        if (isVideo) {
          imgEl.style.display = 'none';
          imgEl.src = '';
          vidEl.style.display = 'block';
          vidEl.style.opacity = '1';
          if (vidEl.src !== newSrc) {
            vidEl.src = newSrc;
          }
          vidEl.play().catch(e => console.log('Auto-play prevented', e));
        } else {
          vidEl.style.display = 'none';
          vidEl.pause();
          vidEl.src = '';
          imgEl.style.transition = 'none';
          imgEl.style.opacity = '1';
          imgEl.style.display = 'block';
          if (imgEl.src !== newSrc) {
            imgEl.src = newSrc;
          }
        }

        // Preload smart radius for instant next/prev navigation
        requestIdleCallback(() => updateSmartRadiusPreload(state.currentIndex), { timeout: 800 });

        // Fetch metadata asynchronously without blocking image display
        fetchMetadata(path);
      } else {
        imgEl.src = '';
        imgEl.style.display = 'none';
        imgEl.style.opacity = '1';
        if (vidEl) {
          vidEl.src = '';
          vidEl.style.display = 'none';
        }
        if (!state.isThisPC) {
          emptyState.style.display = 'flex';
        }
        counter.innerText = '0 / 0';
        clearMetadata();
        updateRatingUI(null);
      }

      renderStageNeighbors();
      updateFilmstripSelection();
    }

    function renderStageNeighbors() {
      const cardPrev = document.getElementById('stage-card-prev');
      const cardNext = document.getElementById('stage-card-next');
      const imgPrev = document.getElementById('stage-prev-img');
      const imgNext = document.getElementById('stage-next-img');
      const lblPrev = document.getElementById('stage-prev-label');
      const lblNext = document.getElementById('stage-next-label');

      if (!cardPrev || !cardNext) return;

      const isStageActive = state.layout && state.layout.show_stage !== false;
      if (!isStageActive || state.images.length === 0) {
        cardPrev.classList.add('hidden');
        cardNext.classList.add('hidden');
        return;
      }

      if (state.images.length === 1) {
        imgPrev.src = '';
        lblPrev.innerText = 'First Photo';
        cardPrev.classList.add('opacity-20', 'pointer-events-none');
        cardPrev.classList.remove('hidden');

        imgNext.src = '';
        lblNext.innerText = 'Last Photo';
        cardNext.classList.add('opacity-20', 'pointer-events-none');
        cardNext.classList.remove('hidden');
        return;
      }

      // Continuous cyclic wrap-around preview so neighbor cards are NEVER empty/black
      const total = state.images.length;
      const prevIdx = (state.currentIndex - 1 + total) % total;
      const nextIdx = (state.currentIndex + 1) % total;

      // Previous image card
      const prevFile = state.images[prevIdx];
      if (prevFile) {
        const prevPath = `${state.currentFolder}/${prevFile}`;
        const newUrl = new URL(`/api/image?path=${encodeURIComponent(prevPath)}`, window.location.href).href;
        
        lblPrev.innerText = prevFile;
        lblPrev.title = prevFile;

        imgPrev.style.opacity = '1';
        if (imgPrev.src !== newUrl) {
          imgPrev.src = newUrl;
        }
        cardPrev.classList.remove('hidden', 'opacity-20', 'pointer-events-none');
        cardPrev.classList.add('opacity-60');
      }

      // Next image card
      const nextFile = state.images[nextIdx];
      if (nextFile) {
        const nextPath = `${state.currentFolder}/${nextFile}`;
        const newUrl = new URL(`/api/image?path=${encodeURIComponent(nextPath)}`, window.location.href).href;
        
        lblNext.innerText = nextFile;
        lblNext.title = nextFile;

        imgNext.style.opacity = '1';
        if (imgNext.src !== newUrl) {
          imgNext.src = newUrl;
        }
        cardNext.classList.remove('hidden', 'opacity-20', 'pointer-events-none');
        cardNext.classList.add('opacity-60');
      }
    }

    function updateFilmstripSelection() {
      const container = document.getElementById('tab-previews');
      if (!container) return;

      const selCount = (state.selectedIndices || []).length;
      const countEl = document.getElementById('folder-item-count');
      if (countEl) {
        countEl.innerText = `${state.images.length} items${selCount > 1 ? ' (' + selCount + ' terpilih)' : ''}`;
      }

      // If container has no DOM cards yet, trigger initial render
      if (container.children.length === 0 && state.images.length > 0) {
        renderImagePreviews();
        return;
      }

      const cards = container.children;
      const selectedSet = new Set(state.selectedIndices || []);

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const idx = parseInt(card.dataset.index, 10);
        if (isNaN(idx)) continue;

        const isActive = idx === state.currentIndex;
        const isSelected = selectedSet.has(idx);

        if (isSelected) {
          card.className = card.className.replace(/bg-zinc-\d+|border-brand-border|hover:border-zinc-700/g, '').trim();
          if (!card.classList.contains('border-brand-blue')) {
            card.classList.add('bg-brand-blue/20', 'border-brand-blue', 'ring-2', 'ring-brand-blue/60', 'shadow-lg');
          }
          if (!card.querySelector('.check-badge')) {
            const checkBadge = document.createElement('div');
            checkBadge.className = 'check-badge absolute top-1.5 left-1.5 z-20 w-4 h-4 bg-brand-blue text-white rounded-full flex items-center justify-center text-[10px] font-bold shadow';
            checkBadge.innerText = '✓';
            card.appendChild(checkBadge);
          }
        } else {
          const badge = card.querySelector('.check-badge');
          if (badge) badge.remove();
          card.classList.remove('bg-brand-blue/20', 'ring-2', 'ring-brand-blue/60', 'shadow-lg');
          if (isActive) {
            card.classList.add('bg-zinc-800', 'border-brand-blue');
            card.classList.remove('bg-zinc-950', 'border-brand-border');
          } else {
            card.classList.add('bg-zinc-950', 'border-brand-border');
            card.classList.remove('bg-zinc-800', 'border-brand-blue');
          }
        }

        if (isActive) {
          card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      }
    }


    function getSelectedFiles() {
      if (!state.selectedIndices || state.selectedIndices.length === 0) {
        if (state.currentIndex >= 0 && state.images[state.currentIndex]) {
          return [state.images[state.currentIndex]];
        }
        return [];
      }
      return state.selectedIndices.map(idx => state.images[idx]).filter(Boolean);
    }

    function handleThumbnailClick(idx, e) {
      if (!state.selectedIndices) state.selectedIndices = [];

      if (e.ctrlKey || e.metaKey) {
        const selIdx = state.selectedIndices.indexOf(idx);
        if (selIdx >= 0) {
          state.selectedIndices.splice(selIdx, 1);
        } else {
          state.selectedIndices.push(idx);
        }
        state.lastSelectedIndex = idx;
        state.currentIndex = idx;
      } else if (e.shiftKey && state.lastSelectedIndex !== undefined && state.lastSelectedIndex >= 0) {
        const start = Math.min(state.lastSelectedIndex, idx);
        const end = Math.max(state.lastSelectedIndex, idx);
        const range = [];
        for (let i = start; i <= end; i++) {
          range.push(i);
        }
        state.selectedIndices = Array.from(new Set([...state.selectedIndices, ...range]));
        state.currentIndex = idx;
      } else {
        state.selectedIndices = [idx];
        state.lastSelectedIndex = idx;
        state.currentIndex = idx;
      }

      displayCurrentImage();
    }

    // Copy / Move Pop-Up Modal Logic
    function openCopyMoveModal(mode = 'copy') {
      const files = getSelectedFiles();
      if (files.length === 0) {
        showCustomDialog({
          title: 'Pilih Foto Terlebih Dahulu',
          message: 'Tidak ada foto yang terpilih untuk di-copy atau move.',
          type: 'alert'
        });
        return;
      }

      const modal = document.getElementById('copy-move-modal');
      const subtitle = document.getElementById('copy-move-modal-subtitle');
      const filesList = document.getElementById('copy-move-files-list');
      const quickSection = document.getElementById('copy-move-quick-access');
      const quickList = document.getElementById('copy-move-quick-list');
      const targetInput = document.getElementById('copy-move-target-folder');

      setCopyMoveMode(mode);
      subtitle.innerText = `${files.length} foto terpilih`;

      filesList.innerHTML = files.map(f => `<div class="truncate text-zinc-300">📄 ${f}</div>`).join('');

      if (!targetInput.value && state.hotkeys && state.hotkeys['1'] && state.hotkeys['1'].target) {
        targetInput.value = state.hotkeys['1'].target;
      }

      const presets = [];
      if (state.hotkeys) {
        Object.entries(state.hotkeys).forEach(([k, v]) => {
          if (v.target) presets.push({ label: `Preset ${k}`, target: v.target });
        });
      }
      (state.pinned_folders || []).forEach(p => {
        const name = p.split(/[\\/]/).filter(Boolean).pop() || p;
        presets.push({ label: `Pin: ${name}`, target: p });
      });

      if (presets.length > 0) {
        quickSection.classList.remove('hidden');
        quickList.innerHTML = presets.map(p => {
          const safe = p.target.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
          return `<button type="button" onclick="document.getElementById('copy-move-target-folder').value='${safe}'" class="px-2 py-1 bg-zinc-900 border border-brand-border hover:border-brand-blue hover:text-white rounded text-[10px] text-zinc-400 font-mono transition">${p.label}</button>`;
        }).join('');
      } else {
        quickSection.classList.add('hidden');
      }

      modal.classList.remove('hidden');
      lucide.createIcons();
    }

    function closeCopyMoveModal() {
      const modal = document.getElementById('copy-move-modal');
      if (modal) modal.classList.add('hidden');
    }

    function setCopyMoveMode(mode) {
      state.copyMoveMode = mode;
      const btnCopy = document.getElementById('btn-mode-copy');
      const btnMove = document.getElementById('btn-mode-move');
      const title = document.getElementById('copy-move-modal-title');
      const icon = document.getElementById('copy-move-modal-icon');

      if (mode === 'copy') {
        btnCopy.className = 'py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition bg-brand-blue text-white shadow';
        btnMove.className = 'py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition text-zinc-400 hover:text-white';
        title.innerText = 'Copy (Salin) Foto';
        icon.setAttribute('data-lucide', 'copy');
      } else {
        btnMove.className = 'py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition bg-brand-blue text-white shadow';
        btnCopy.className = 'py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition text-zinc-400 hover:text-white';
        title.innerText = 'Move (Pindah) Foto';
        icon.setAttribute('data-lucide', 'arrow-right-left');
      }
      lucide.createIcons();
    }

    async function nativeBrowseFolder(initialDir = '') {
      try {
        const res = await fetch(`/api/browse-directory?initial_dir=${encodeURIComponent(initialDir)}`);
        const data = await res.json();
        if (data.status === 'success' && data.path) {
          return data.path;
        }
      } catch (e) {
        console.error("Native browse folder error:", e);
      }
      return '';
    }

    async function browseFolderForCopyMove() {
      const targetInput = document.getElementById('copy-move-target-folder');
      const initial = targetInput ? targetInput.value : '';
      const path = await nativeBrowseFolder(initial);
      if (path && targetInput) {
        targetInput.value = path;
      }
    }

    async function executeCopyMoveAction() {
      const files = getSelectedFiles();
      const targetFolder = document.getElementById('copy-move-target-folder').value.trim();
      const conflict = document.getElementById('copy-move-conflict').value;
      const mode = state.copyMoveMode || 'copy';

      if (!targetFolder) {
        showCustomDialog({
          title: 'Pilih Direktori Tujuan',
          message: 'Silakan pilih atau ketik direktori tujuan terlebih dahulu.',
          type: 'alert'
        });
        return;
      }

      closeCopyMoveModal();

      try {
        logMsg(`Memproses ${mode.toUpperCase()} ${files.length} foto ke '${targetFolder}'...`);
        const res = await fetch('/api/batch-action', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: mode,
            src_folder: state.currentFolder,
            file_names: files,
            target_folder: targetFolder,
            resolve_conflict: conflict
          })
        });

        const data = await res.json();
        if (data.status === 'success') {
          logMsg(`Berhasil ${mode.toUpperCase()} ${data.processed}/${files.length} foto ke '${targetFolder}'`, 'success');

          if (mode === 'move') {
            const movedFiles = new Set(data.results.filter(r => r.status === 'success').map(r => r.file_name));
            state.images = state.images.filter(f => !movedFiles.has(f));
            state.selectedIndices = [];
            if (state.currentIndex >= state.images.length) {
              state.currentIndex = Math.max(0, state.images.length - 1);
            }
          }

          displayCurrentImage();
        } else {
          logMsg(`Gagal memproses batch action: ${data.detail || 'Error'}`, 'error');
        }
      } catch (e) {
        logMsg(`Error saat mengeksekusi batch action: ${e}`, 'error');
      }
    }

    // Renders thumbnail gallery auto-adapting to bottom filmstrip vs sidebar vertical grid
    function renderImagePreviews() {
      const container = document.getElementById('tab-previews');
      if (!container) return;

      const selCount = (state.selectedIndices || []).length;
      document.getElementById('folder-item-count').innerText = `${state.images.length} items${selCount > 1 ? ' (' + selCount + ' terpilih)' : ''}`;

      if (state.images.length === 0) {
        container.innerHTML = `<div class="text-zinc-600 text-xs italic w-full text-center p-4">${t('lbl_no_images_in_folder')}</div>`;
        return;
      }

      const consoleDock = state.layout?.docks?.console || 'bottom';
      const isSidebar = consoleDock === 'left' || consoleDock === 'right';
      const isHidden = container.classList.contains('hidden');

      if (isSidebar) {
        container.className = "absolute inset-0 overflow-y-auto p-2 grid grid-cols-2 gap-2 content-start min-h-0 select-none" + (isHidden ? ' hidden' : '');
      } else {
        container.className = "absolute inset-0 overflow-x-auto p-4 flex gap-4 items-center min-h-0 select-none" + (isHidden ? ' hidden' : '');
      }

      const presetsGrid = document.getElementById('presets-grid');
      if (presetsGrid) {
        if (isSidebar) {
          presetsGrid.className = "grid grid-cols-1 gap-2 p-2";
        } else {
          presetsGrid.className = "grid grid-cols-2 md:grid-cols-4 gap-3 p-4";
        }
      }

      const thSize = state.thumbnail_size || 'medium';
      let thumbPx = 240;
      let cardClass = isSidebar ? 'h-32 w-full' : 'h-36 w-28';
      let textClass = 'text-[9px] mt-1.5';
      if (!isSidebar) {
        if (thSize === 'small') {
          cardClass = 'h-24 w-20'; textClass = 'text-[8px] mt-1'; thumbPx = 160;
        } else if (thSize === 'large') {
          cardClass = 'h-44 w-36'; textClass = 'text-[10px] mt-2'; thumbPx = 320;
        }
      }

      const observer = getThumbObserver();
      const frag = document.createDocumentFragment();

      state.images.forEach((filename, idx) => {
        const path = `${state.currentFolder}/${filename}`;
        const thumbUrl = `/api/thumbnail?path=${encodeURIComponent(path)}&size=${thumbPx}`;

        const card = document.createElement('div');
        const isActive = idx === state.currentIndex;
        const isSelected = (state.selectedIndices || []).includes(idx);

        card.className = `${cardClass} shrink-0 rounded-lg border p-1.5 cursor-pointer flex flex-col justify-between transition group hover:scale-102 relative ${
          isSelected
            ? 'bg-brand-blue/20 border-brand-blue ring-2 ring-brand-blue/60 shadow-lg'
            : (isActive ? 'bg-zinc-800 border-brand-blue' : 'bg-zinc-950 border-brand-border hover:border-zinc-700')
        }`;
        card.dataset.index = idx;

        card.onclick = (e) => {
          handleThumbnailClick(idx, e);
        };

        if (isSelected) {
          const checkBadge = document.createElement('div');
          checkBadge.className = 'absolute top-1.5 left-1.5 z-20 w-4 h-4 bg-brand-blue text-white rounded-full flex items-center justify-center text-[10px] font-bold shadow';
          checkBadge.innerText = '✓';
          card.appendChild(checkBadge);
        }

        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'w-full flex-1 overflow-hidden rounded bg-zinc-900 flex items-center justify-center relative min-h-0';

        const skeleton = document.createElement('div');
        skeleton.className = 'absolute inset-0 skeleton-shimmer';
        imgWrapper.appendChild(skeleton);

        const thumbImg = document.createElement('img');
        thumbImg.className = 'max-w-full max-h-full object-cover relative z-10';
        thumbImg.alt = filename;
        thumbImg.style.opacity = '0';
        thumbImg.style.transition = 'opacity 0.15s ease';

        thumbImg.onload = () => {
          thumbImg.style.opacity = '1';
          skeleton.remove();
        };
        thumbImg.onerror = () => {
          thumbImg.src = `/api/image?path=${encodeURIComponent(path)}`;
          thumbImg.style.opacity = '1';
          skeleton.remove();
        };

        if (Math.abs(idx - state.currentIndex) <= 4) {
          thumbImg.src = thumbUrl;
        } else {
          thumbImg.dataset.src = thumbUrl;
          observer.observe(thumbImg);
        }

        imgWrapper.appendChild(thumbImg);

        const titleLabel = document.createElement('div');
        titleLabel.className = `truncate ${isSelected ? 'text-brand-blue font-bold' : 'text-zinc-400 group-hover:text-white'} font-mono ${textClass}`;
        titleLabel.innerText = filename;
        titleLabel.title = filename;

        card.appendChild(imgWrapper);
        card.appendChild(titleLabel);
        frag.appendChild(card);
      });

      container.innerHTML = '';
      container.appendChild(frag);

      const activeCard = container.querySelector(`[data-index="${state.currentIndex}"]`);
      if (activeCard) {
        requestAnimationFrame(() => {
          activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        });
      }
    }


    async function fetchMetadata(path) {
      try {
        const res = await fetch(`/api/metadata?path=${encodeURIComponent(path)}`);
        const data = await res.json();

        document.getElementById('meta-camera').innerText = data.exif.Camera;
        document.getElementById('meta-lens').innerText = data.exif['Lens Model'] || '-';
        document.getElementById('meta-iso').innerText = data.exif.ISO;
        document.getElementById('meta-aperture').innerText = data.exif.Aperture;
        document.getElementById('meta-shutter').innerText = data.exif.Shutter;
        document.getElementById('meta-focal').innerText = data.exif['Focal Length'] || '-';
        document.getElementById('meta-date').innerText = data.exif['Date Taken'] || '-';
        document.getElementById('meta-wb').innerText = data.exif['White Balance'] || '-';
        document.getElementById('meta-flash').innerText = data.exif.Flash || '-';

        if (data.exif.GPS) {
          document.getElementById('gps-container').classList.remove('hide');
          document.getElementById('meta-gps').innerText = data.exif.GPS;
          const [lat, lon] = data.exif.GPS.split(',').map(s => s.trim());
          document.getElementById('gps-map-link').href = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
        } else {
          document.getElementById('gps-container').classList.add('hide');
        }

        document.getElementById('meta-filename').innerText = data.filename;
        document.getElementById('meta-filename').title = data.filename;
        document.getElementById('meta-resolution').innerText = data.resolution;
        document.getElementById('meta-size').innerText = data.size;

        drawHistogram(data.histogram);
      } catch (e) {
        console.error("Gagal memuat metadata", e);
      }
    }

    function clearMetadata() {
      document.getElementById('meta-camera').innerText = '-';
      document.getElementById('meta-lens').innerText = '-';
      document.getElementById('meta-iso').innerText = '-';
      document.getElementById('meta-aperture').innerText = '-';
      document.getElementById('meta-shutter').innerText = '-';
      document.getElementById('meta-focal').innerText = '-';
      document.getElementById('meta-date').innerText = '-';
      document.getElementById('meta-wb').innerText = '-';
      document.getElementById('meta-flash').innerText = '-';
      document.getElementById('gps-container').classList.add('hide');
      document.getElementById('meta-filename').innerText = '-';
      document.getElementById('meta-resolution').innerText = '-';
      document.getElementById('meta-size').innerText = '-';

      const canvas = document.getElementById('histogram-canvas');
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function drawHistogram(hist) {
      const canvas = document.getElementById('histogram-canvas');
      const ctx = canvas.getContext('2d');

      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'screen';

      const maxVal = Math.max(...hist.r, ...hist.g, ...hist.b);
      if (maxVal === 0) return;

      const scaleX = canvas.width / 256;
      const scaleY = canvas.height / maxVal;

      const drawChannel = (data, color) => {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        for (let i = 0; i < 256; i++) {
          const x = i * scaleX;
          const y = canvas.height - (data[i] * scaleY);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      };

      drawChannel(hist.r, '#ef4444');
      drawChannel(hist.g, '#10b981');
      drawChannel(hist.b, '#3b82f6');
    }

    // Navigation and folder actions
    function nextImage() {
      if (state.images.length > 0 && state.currentIndex < state.images.length - 1) {
        state.currentIndex++;
        displayCurrentImage();
      }
    }

    function prevImage() {
      if (state.images.length > 0 && state.currentIndex > 0) {
        state.currentIndex--;
        displayCurrentImage();
      }
    }

    // History and navigation back/up
    function goBack() {
      if (state.folderHistory.length > 0) {
        const prev = state.folderHistory.pop();
        navigateToPath(prev);
      }
    }

    function goUp() {
      if (state.currentFolder) {
        const parts = state.currentFolder.split(/[\\/]/);
        if (parts.length > 1) {
          parts.pop();
          const parent = parts.join('/');
          navigateToPath(parent);
        }
      }
    }

    function refreshFolder() {
      if (state.currentFolder) {
        fetchImages(state.currentFolder);
      }
    }

    function navigateToAddress() {
      const path = document.getElementById('address-bar').value.trim();
      if (path) navigateToPath(path);
    }

    // Action executing Moves / Copy / Trash
    async function executeAction(action, targetFolder = null) {
      if (state.currentIndex < 0 || state.currentIndex >= state.images.length) return;
      const filename = state.images[state.currentIndex];
      const processedFile = filename;
      const processedPath = `${state.currentFolder}/${processedFile}`;
      const processedThumbUrl = `/api/thumbnail?path=${encodeURIComponent(processedPath)}&size=320`;

      const payload = {
        action: action,
        src_folder: state.currentFolder,
        file_name: filename,
        target_folder: targetFolder,
        resolve_conflict: 'keep_both'
      };

      const proceed = () => {
        if (action === 'move' || action === 'delete') {
          state.images.splice(state.currentIndex, 1);
          if (state.currentIndex >= state.images.length) {
            state.currentIndex = Math.max(0, state.images.length - 1);
          }
        } else if (action === 'copy') {
          if (state.images.length > 0 && state.currentIndex < state.images.length - 1) {
            state.currentIndex++;
          }
        }

        displayCurrentImage();

        // After navigation, update Prev card smoothly
        if ((action === 'move' || action === 'copy') && state.images.length > 0) {
          const imgPrev = document.getElementById('stage-prev-img');
          const lblPrev = document.getElementById('stage-prev-label');
          if (imgPrev) {
            if (state.animations !== false) imgPrev.style.opacity = '0';
            const ghostImg = new window.Image();
            ghostImg.onload = () => {
              imgPrev.src = processedThumbUrl;
              imgPrev.style.opacity = '1';
            };
            ghostImg.onerror = () => {
              imgPrev.src = `/api/image?path=${encodeURIComponent(processedPath)}`;
              imgPrev.style.opacity = '1';
            };
            ghostImg.src = processedThumbUrl;
            if (ghostImg.complete) {
              imgPrev.src = processedThumbUrl;
              imgPrev.style.opacity = '1';
            }
          }
          if (lblPrev) {
            lblPrev.innerText = processedFile;
            lblPrev.title = processedFile;
          }
        }
      };

      // Perform optimistic stage advance immediately
      if (state.animations !== false) {
        const imgEl = document.getElementById('main-image');
        const animClass = action === 'delete' ? 'animate-delete-out' : 'animate-move-out';
        imgEl.classList.add(animClass);

        setTimeout(() => {
          proceed();
          imgEl.classList.remove(animClass);
          imgEl.classList.add('animate-image-in');
          setTimeout(() => imgEl.classList.remove('animate-image-in'), 150);
        }, 150);
      } else {
        proceed();
      }

      // Dispatch backend file operation asynchronously without blocking UI navigation
      fetch('/api/action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).then(async res => {
        const data = await res.json();
        if (data.status === 'success') {
          logMsg(t('log_action_ok', { action: action.toUpperCase(), file: filename, target: targetFolder || 'Recycle Bin' }), 'success');
          refreshFolder();
        } else {
          logMsg(t('log_action_err', { err: data.detail }), 'error');
        }
      }).catch(e => {
        logMsg(t('log_action_err', { err: e }), 'error');
      });
    }

    async function deleteImage() {
      if (state.currentIndex < 0) return;
      const filename = state.images[state.currentIndex];

      if (!state.ask_delete) {
        await executeAction('delete');
        return;
      }

      showCustomDialog({
        title: t('dlg_confirm_del_title'),
        message: t('dlg_confirm_del_msg', { file: filename }),
        type: 'confirm',
        onOk: async () => {
          await executeAction('delete');
        }
      });
    }

    async function undoAction() {
      try {
        const res = await fetch('/api/undo', { method: 'POST' });
        const data = await res.json();

        if (data.status === 'success') {
          logMsg(t('log_undo_ok', { msg: data.message }), 'undo');
          refreshFolder();
        } else {
          logMsg(t('log_undo_err', { err: data.message || "" }), 'error');
        }
      } catch (e) {
        logMsg(t('log_undo_err', { err: e }), 'error');
      }
    }

    async function createNewFolder() {
      if (!state.currentFolder) return;
      showCustomDialog({
        title: t('dlg_create_folder_title'),
        message: t('dlg_create_folder_msg'),
        type: 'prompt',
        placeholder: t('lbl_new_folder') + '...',
        onOk: async (name) => {
          if (!name) return;
          try {
            const res = await fetch('/api/create-folder', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ parent_folder: state.currentFolder, folder_name: name })
            });
            const data = await res.json();
            if (data.status === 'success') {
              logMsg(t('log_create_folder_ok', { name }));
              await loadDrive(document.getElementById('drive-selector').value);
            }
          } catch (e) {
            logMsg(t('log_create_folder_err', { err: e }), 'error');
          }
        }
      });
    }

    async function rotateImage(degrees) {
      if (state.currentIndex < 0) return;
      const filename = state.images[state.currentIndex];
      const path = `${state.currentFolder}/${filename}`;

      try {
        const res = await fetch(`/api/rotate?path=${encodeURIComponent(path)}&degrees=${degrees}`, { method: 'POST' });
        const data = await res.json();
        if (data.status === 'success') {
          logMsg(t('log_rotate_ok', { degrees, file: filename }));
          const imgEl = document.getElementById('main-image');
          imgEl.src = `/api/image?path=${encodeURIComponent(path)}&t=${Date.now()}`;
        }
      } catch (e) {
        logMsg(t('log_rotate_err', { err: e }), 'error');
      }
    }

    async function renameImage() {
      if (state.currentIndex < 0 || !state.currentFolder) return;
      const oldName = state.images[state.currentIndex];
      
      showCustomDialog({
        title: "Rename File",
        message: "Masukkan nama baru untuk file ini:",
        type: 'prompt',
        placeholder: oldName,
        onOk: async (newName) => {
          if (!newName || newName === oldName) return;
          try {
            const res = await fetch('/api/rename', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ src_folder: state.currentFolder, old_name: oldName, new_name: newName })
            });
            const data = await res.json();
            if (data.status === 'success') {
              logMsg(`Renamed: ${oldName} -> ${data.new_name}`);
              refreshFolder();
            } else {
              logMsg(`Error renaming: ${data.detail || 'Unknown error'}`, 'error');
            }
          } catch (e) {
            logMsg(`Error: ${e}`, 'error');
          }
        }
      });
    }

    async function findDuplicates() {
      if (!state.currentFolder) return;
      logMsg("Scanning for duplicates (this might take a while)...");
      try {
        const res = await fetch(`/api/find-duplicates?path=${encodeURIComponent(state.currentFolder)}`);
        const data = await res.json();
        if (data.status === 'success') {
          if (data.duplicates.length === 0) {
            logMsg("No duplicates found.");
            return;
          }
          let msg = `Found ${data.duplicates.length} duplicate groups:\n\n`;
          data.duplicates.forEach((grp, i) => {
             msg += `Group ${i+1}: ${grp.join(', ')}\n`;
          });
          showCustomDialog({
            title: "Duplicate Detection",
            message: "Duplikat ditemukan. (UI Penghapusan detail sedang dalam pengembangan):\n\n" + msg.substring(0, 500),
            type: 'alert'
          });
        }
      } catch (e) {
        logMsg(`Error finding duplicates: ${e}`, 'error');
      }
    }

    async function batchRenameExif() {
      if (!state.currentFolder || state.isThisPC) return;
      
      showCustomDialog({
        title: "Batch Rename by EXIF",
        message: "Fitur ini akan mengubah nama SEMUA FOTO di folder ini menggunakan format Tanggal Pengambilan EXIF (contoh: 2024-05-12_10-30-00.jpg). Lanjutkan?",
        type: 'confirm',
        onOk: async () => {
          logMsg("Starting batch rename...");
          try {
            const res = await fetch('/api/batch-rename-exif', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ folder: state.currentFolder })
            });
            const data = await res.json();
            if (data.status === 'success') {
              logMsg(`Berhasil merename ${data.renamed_count} foto berdasarkan tanggal EXIF.`);
              refreshFolder();
            } else {
              logMsg(`Error batch rename: ${data.detail}`, 'error');
            }
          } catch (e) {
            logMsg(`Error batch rename: ${e}`, 'error');
          }
        }
      });
    }

    let slideshowInterval = null;
    function toggleSlideshow() {
      const btn = document.getElementById('btn-slideshow');
      const icon = btn.querySelector('i');
      if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
        logMsg("Slideshow stopped");
        icon.setAttribute('data-lucide', 'play');
      } else {
        logMsg("Slideshow started (3s)");
        icon.setAttribute('data-lucide', 'pause');
        slideshowInterval = setInterval(() => {
          if (state.currentIndex < state.images.length - 1) {
            nextImage();
          } else {
            toggleSlideshow(); // stop at end
          }
        }, 3000);
      }
      lucide.createIcons();
    }

    // Global actions keys for recorder UI
    const GLOBAL_ACTION_KEYS = [
      'next_image', 'prev_image', 'undo', 'delete',
      'rotate_cw', 'rotate_ccw', 'help', 'toggle_explorer',
      'toggle_console', 'toggle_metadata', 'create_folder', 'open_folder'
    ];

    // Visual settings loader
    async function fetchSettings() {
      try {
        const res = await fetch('/api/settings');
        const data = await res.json();
        state.hotkeys = data.hotkeys;
        state.extensions = data.extensions;
        state.ask_delete = data.ask_delete !== undefined ? data.ask_delete : true;
        state.theme = data.theme || 'theme-black';
        state.thumbnail_size = data.thumbnail_size || 'medium';
        state.animations = data.animations !== undefined ? data.animations : true;
        state.global_shortcuts = data.global_shortcuts || {};
        state.lang = data.lang || 'en';
        state.custom_hotkeys = data.custom_hotkeys || [];
        state.disabled_global_shortcuts = data.disabled_global_shortcuts || [];
        state.disabled_preset_keys = data.disabled_preset_keys || [];

        document.body.className = 'h-full flex flex-col antialiased ' + state.theme;
        applyLanguage(state.lang);
        renderPresetsPanel();
        renderImagePreviews();
      } catch (e) {
        console.error('Gagal memuat setting', e);
      }
    }

    function renderPresetsPanel() {
      const grid = document.getElementById('presets-grid');
      grid.innerHTML = '';

      for (let i = 1; i <= 9; i++) {
        const key = String(i);
        const conf = state.hotkeys[key];

        const card = document.createElement('button');
        card.className = "p-3 rounded-xl border border-brand-border bg-zinc-950 hover:border-brand-blue flex flex-col items-start gap-1 text-left transition select-none group";

        if (conf) {
          const actionText = conf.action.toUpperCase();
          const targetName = conf.target.split(/[\\/]/).pop() || conf.target;
          card.onclick = () => executeAction(conf.action, conf.target);
          card.innerHTML = `
            <span class="text-[10px] font-semibold text-brand-accent bg-zinc-900 px-2 py-0.5 rounded font-mono uppercase">Preset ${key}</span>
            <span class="text-xs font-semibold text-white truncate w-full mt-1">${targetName}</span>
            <span class="text-[9px] text-zinc-500 font-mono">${actionText}</span>
          `;
        } else {
          card.onclick = openSettingsModal;
          card.innerHTML = `
            <span class="text-[10px] font-semibold text-zinc-600 bg-zinc-900 px-2 py-0.5 rounded font-mono uppercase">Preset ${key}</span>
            <span class="text-xs text-zinc-600 italic mt-1">Kosong</span>
            <span class="text-[9px] text-zinc-600">Klik untuk atur</span>
          `;
        }
        grid.appendChild(card);
      }
    }

    // Modal Control: Settings Tab Swapping
    function setSettingsTab(tab) {
      const btnHotkeys = document.getElementById('set-tab-btn-hotkeys');
      const btnCustomKeys = document.getElementById('set-tab-btn-custom-keys');
      const btnGlobalShortcuts = document.getElementById('set-tab-btn-global-shortcuts');
      const btnAppearance = document.getElementById('set-tab-btn-appearance');
      const btnSystem = document.getElementById('set-tab-btn-system');

      const contentHotkeys = document.getElementById('set-tab-content-hotkeys');
      const contentCustomKeys = document.getElementById('set-tab-content-custom-keys');
      const contentGlobalShortcuts = document.getElementById('set-tab-content-global-shortcuts');
      const contentAppearance = document.getElementById('set-tab-content-appearance');
      const contentSystem = document.getElementById('set-tab-content-system');

      // Reset classes
      [btnHotkeys, btnCustomKeys, btnGlobalShortcuts, btnAppearance, btnSystem].forEach(b => {
        if (b) b.className = 'text-xs py-2.5 border-b-2 border-transparent font-medium text-zinc-400 hover:text-white transition flex items-center gap-1.5 focus:outline-none shrink-0';
      });
      [contentHotkeys, contentCustomKeys, contentGlobalShortcuts, contentAppearance, contentSystem].forEach(c => {
        if (c) c.classList.add('hidden');
      });

      const activeClass = 'text-xs py-2.5 border-b-2 border-brand-blue font-medium text-white transition flex items-center gap-1.5 focus:outline-none shrink-0';
      if (tab === 'hotkeys') {
        btnHotkeys.className = activeClass;
        contentHotkeys.classList.remove('hidden');
      } else if (tab === 'custom-keys') {
        btnCustomKeys.className = activeClass;
        contentCustomKeys.classList.remove('hidden');
        renderCustomHotkeyRows();
      } else if (tab === 'global-shortcuts') {
        btnGlobalShortcuts.className = activeClass;
        contentGlobalShortcuts.classList.remove('hidden');
      } else if (tab === 'appearance') {
        btnAppearance.className = activeClass;
        contentAppearance.classList.remove('hidden');
      } else if (tab === 'system') {
        btnSystem.className = activeClass;
        contentSystem.classList.remove('hidden');
      }
      lucide.createIcons();
    }


    // Modal Control: Settings
    function openSettingsModal() {
      // 1. Preset Hotkeys (1-9) with toggle + conflict badge
      const container = document.getElementById('settings-hotkeys-rows');
      container.innerHTML = '';
      for (let i = 1; i <= 9; i++) {
        const key = String(i);
        const conf = state.hotkeys[key] || { action: 'move', target: '', enabled: true };
        const isEnabled = !(state.disabled_preset_keys || []).includes(key);

        const wrapper = document.createElement('div');
        wrapper.className = 'space-y-1';

        const row = document.createElement('div');
        row.id = `preset-row-${key}`;
        row.className = `flex items-center gap-3 bg-zinc-950 p-3 rounded-lg border border-brand-border transition ${isEnabled ? '' : 'shortcut-row-disabled'}`;
        row.innerHTML = `
          <label class="toggle-sw" title="${isEnabled ? 'Aktif — klik untuk nonaktifkan' : 'Nonaktif — klik untuk aktifkan'}">
            <input type="checkbox" id="toggle-preset-${key}" ${isEnabled ? 'checked' : ''}>
            <span class="slider"></span>
          </label>
          <span class="key-badge w-8 h-8 rounded-md bg-zinc-900 border border-brand-border flex items-center justify-center font-bold text-brand-blue text-sm font-mono">${key}</span>
          <select id="set-action-${key}" class="bg-zinc-900 border border-brand-border rounded px-2 py-1 text-xs text-white outline-none" ${!isEnabled ? 'disabled' : ''}>
            <option value="move" ${conf.action === 'move' ? 'selected' : ''}>MOVE (${t('lbl_move')})</option>
            <option value="copy" ${conf.action === 'copy' ? 'selected' : ''}>COPY (${t('lbl_copy')})</option>
          </select>
          <input type="text" id="set-target-${key}" value="${conf.target}" placeholder="${t('lbl_target_placeholder')}" class="flex-1 bg-zinc-900 border border-brand-border rounded px-3 py-1 text-xs text-zinc-300 font-mono outline-none" ${!isEnabled ? 'disabled' : ''}>
          <button onclick="browsePresetFolder('${key}')" class="px-3 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-xs text-white" ${!isEnabled ? 'disabled' : ''}>${t('lbl_browse')}</button>
        `;

        // Conflict badge container for this row
        const conflictEl = document.createElement('div');
        conflictEl.id = `conflict-preset-${key}`;

        // Toggle change handler
        const toggleInput = row.querySelector(`#toggle-preset-${key}`);
        toggleInput.onchange = () => {
          const enabled = toggleInput.checked;
          row.classList.toggle('shortcut-row-disabled', !enabled);
          row.querySelectorAll('select, input[type=text], button').forEach(el => el.disabled = !enabled);
          refreshConflictSummary();
          updatePresetConflictBadge(key, conflictEl);
        };

        // Update conflict badge for this preset row
        const updatePresetConflictBadge = (k, el) => {
          const targetEl = document.getElementById(`set-target-${k}`);
          if (targetEl && targetEl.value.trim()) {
            const c = getConflictsForKey(k, `preset_${k}`);
            el.innerHTML = renderConflictBadgesHtml(c, `Preset [${k}]`);
          } else {
            el.innerHTML = '';
          }
        };

        // Trigger conflict check when target changes
        const targetInput = row.querySelector(`#set-target-${key}`);
        targetInput.oninput = () => { updatePresetConflictBadge(key, conflictEl); refreshConflictSummary(); };

        wrapper.appendChild(row);
        wrapper.appendChild(conflictEl);
        container.appendChild(wrapper);

        // Initial conflict check
        setTimeout(() => updatePresetConflictBadge(key, conflictEl), 0);
      }

      // 2. Global Shortcuts with toggle + conflict badge
      const shContainer = document.getElementById('settings-global-shortcuts-rows');
      shContainer.innerHTML = '';
      GLOBAL_ACTION_KEYS.forEach(actionName => {
        const shortcutStr = state.global_shortcuts[actionName] || 'None';
        const isEnabled = !(state.disabled_global_shortcuts || []).includes(actionName);

        const wrapper = document.createElement('div');
        wrapper.className = 'space-y-1';

        const row = document.createElement('div');
        row.className = `flex items-center justify-between bg-zinc-950 p-2.5 rounded-lg border border-brand-border text-xs transition ${isEnabled ? '' : 'shortcut-row-disabled'}`;

        row.innerHTML = `
          <div class="flex items-center gap-2.5">
            <label class="toggle-sw" title="Toggle aktif/nonaktif shortcut ini">
              <input type="checkbox" id="toggle-global-${actionName}" ${isEnabled ? 'checked' : ''}>
              <span class="slider"></span>
            </label>
            <div class="flex flex-col">
              <span class="font-semibold text-zinc-300">${t('sh_' + actionName)}</span>
              <span class="text-[10px] text-zinc-500">${t('sh_' + actionName + '_desc')}</span>
            </div>
          </div>
          <input type="text" id="sh-${actionName}" value="${shortcutStr}" readonly
            class="key-badge w-36 bg-zinc-900 border border-brand-border rounded text-center py-1 text-xs text-brand-blue font-bold font-mono outline-none cursor-pointer focus:border-brand-blue hover:bg-zinc-800 transition"
            placeholder="${t('lbl_press_key')}" ${!isEnabled ? 'disabled' : ''}>
        `;

        const conflictEl = document.createElement('div');
        conflictEl.id = `conflict-global-${actionName}`;

        const inputEl = row.querySelector(`#sh-${actionName}`);
        inputEl.onkeydown = (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (e.key === 'Backspace' || e.key === 'Delete') {
            inputEl.value = 'None';
          } else {
            const str = keyEventToString(e);
            if (str) inputEl.value = str;
          }
          updateGlobalConflictBadge(actionName, conflictEl);
          refreshConflictSummary();
        };

        const toggleInput = row.querySelector(`#toggle-global-${actionName}`);
        toggleInput.onchange = () => {
          const enabled = toggleInput.checked;
          row.classList.toggle('shortcut-row-disabled', !enabled);
          inputEl.disabled = !enabled;
          refreshConflictSummary();
          updateGlobalConflictBadge(actionName, conflictEl);
        };

        wrapper.appendChild(row);
        wrapper.appendChild(conflictEl);
        shContainer.appendChild(wrapper);
      });

      // Helper: update conflict badge for a global shortcut
      const updateGlobalConflictBadge = (actionName, el) => {
        const inputEl = document.getElementById(`sh-${actionName}`);
        if (!inputEl || !inputEl.value || inputEl.value === 'None') { el.innerHTML = ''; return; }
        const c = getConflictsForKey(inputEl.value, `global_${actionName}`);
        el.innerHTML = renderConflictBadgesHtml(c, `Global: ${t('sh_' + actionName) || actionName}`);
      };

      // Initial conflict badges for global shortcuts
      GLOBAL_ACTION_KEYS.forEach(actionName => {
        const el = document.getElementById(`conflict-global-${actionName}`);
        if (el) setTimeout(() => updateGlobalConflictBadge(actionName, el), 0);
      });

      // 3. Appearance settings
      const themeRadios = document.getElementsByName('opt-theme');
      themeRadios.forEach(r => {
        if (r.value === state.theme) r.checked = true;
      });
      const thSizeRadios = document.getElementsByName('opt-th-size');
      thSizeRadios.forEach(r => {
        if (r.value === state.thumbnail_size) r.checked = true;
      });
      document.getElementById('chk-animations').checked = state.animations !== false;

      // 4. System settings
      document.getElementById('chk-ask-delete').checked = state.ask_delete;
      document.getElementById('opt-lang').value = state.lang || 'en';
      document.getElementById('ext-jpg').checked = state.extensions.includes('.jpg');
      document.getElementById('ext-png').checked = state.extensions.includes('.png');
      document.getElementById('ext-webp').checked = state.extensions.includes('.webp');
      document.getElementById('ext-gif').checked = state.extensions.includes('.gif');

      // 5. Load custom hotkeys into working copy
      _customHotkeysEdit = JSON.parse(JSON.stringify(state.custom_hotkeys || []));

      // Default to hotkeys tab on open + refresh conflict summary
      setSettingsTab('hotkeys');
      document.getElementById('settings-modal').classList.remove('hidden');
      setTimeout(refreshConflictSummary, 50);
    }



    async function browsePresetFolder(key) {
      const current = document.getElementById(`set-target-${key}`).value;
      const path = await nativeBrowseFolder(current);
      if (path) {
        document.getElementById(`set-target-${key}`).value = path;
        refreshConflictSummary();
      }
    }

    // ============================================================
    // CUSTOM HOTKEYS — state, UI, logic
    // ============================================================

    // In-memory working copy while settings modal is open
    let _customHotkeysEdit = [];

    function renderCustomHotkeyRows() {
      const container = document.getElementById('custom-hotkeys-rows');
      const emptyEl  = document.getElementById('custom-hotkeys-empty');
      container.innerHTML = '';

      if (_customHotkeysEdit.length === 0) {
        emptyEl.classList.remove('hidden');
        lucide.createIcons();
        refreshConflictSummary();
        return;
      }
      emptyEl.classList.add('hidden');

      _customHotkeysEdit.forEach((item, idx) => {
        // ---- Enable/Disable toggle ----
        const isEnabled = item.enabled !== false;
        const toggleLabel = document.createElement('label');
        toggleLabel.className = 'toggle-sw shrink-0';
        toggleLabel.title = isEnabled ? 'Aktif — klik untuk nonaktifkan' : 'Nonaktif — klik untuk aktifkan';
        const toggleChk = document.createElement('input');
        toggleChk.type = 'checkbox';
        toggleChk.checked = isEnabled;
        const toggleSlider = document.createElement('span');
        toggleSlider.className = 'slider';
        toggleLabel.appendChild(toggleChk);
        toggleLabel.appendChild(toggleSlider);

        const row = document.createElement('div');
        row.className = `flex items-center gap-2 bg-zinc-950 p-2.5 rounded-xl border border-brand-border group hover:border-zinc-700 transition ${isEnabled ? '' : 'shortcut-row-disabled'}`;
        row.dataset.idx = idx;

        // ---- Key recorder button ----
        const keyBtn = document.createElement('div');
        keyBtn.className = 'key-badge min-w-[80px] px-2 py-1.5 rounded-lg border border-brand-border bg-zinc-900 text-center text-xs font-bold font-mono text-brand-blue cursor-pointer hover:border-brand-blue transition focus:outline-none select-none';
        keyBtn.tabIndex = 0;
        keyBtn.title = 'Klik lalu tekan tombol keyboard';
        keyBtn.textContent = item.key || 'Klik...';

        // Conflict badge container (lives below the row)
        const conflictDiv = document.createElement('div');
        conflictDiv.className = 'pl-2';
        const updateCustomConflictBadge = () => {
          if (!item.key) { conflictDiv.innerHTML = ''; return; }
          const c = getConflictsForKey(item.key, `custom_${idx}`);
          conflictDiv.innerHTML = renderConflictBadgesHtml(c, `Custom [${item.key}]`);
        };

        toggleChk.onchange = () => {
          item.enabled = toggleChk.checked;
          row.classList.toggle('shortcut-row-disabled', !item.enabled);
          refreshConflictSummary();
          updateCustomConflictBadge();
        };

        let _isRecording = false;
        const startRecord = () => {
          if (_isRecording) return;
          _isRecording = true;
          keyBtn.textContent = '⏺ Tekan...';
          keyBtn.classList.add('border-brand-blue', 'text-white');
          const onKey = (e) => {
            e.preventDefault(); e.stopPropagation();
            if (e.key === 'Escape') {
              keyBtn.textContent = item.key || 'Klik...';
            } else {
              const str = keyEventToString(e);
              if (str) { item.key = str; keyBtn.textContent = str; }
            }
            _isRecording = false;
            keyBtn.classList.remove('text-white');
            document.removeEventListener('keydown', onKey, true);
          };
          document.addEventListener('keydown', onKey, true);
        };
        keyBtn.addEventListener('click', startRecord);
        keyBtn.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); startRecord(); } });

        // ---- Label input ----
        const labelIn = document.createElement('input');
        labelIn.type = 'text';
        labelIn.className = 'w-24 bg-zinc-900 border border-brand-border rounded-lg px-2 py-1.5 text-xs text-zinc-300 font-mono outline-none focus:border-brand-blue';
        labelIn.placeholder = 'Label...';
        labelIn.value = item.label || '';
        labelIn.oninput = () => { item.label = labelIn.value; };

        // ---- Action dropdown ----
        const actionSel = document.createElement('select');
        actionSel.className = 'bg-zinc-900 border border-brand-border rounded-lg px-2 py-1.5 text-xs text-white outline-none focus:border-brand-blue cursor-pointer';
        ['move', 'copy', 'delete'].forEach(act => {
          const opt = document.createElement('option');
          opt.value = act;
          opt.textContent = act.toUpperCase();
          if (item.action === act) opt.selected = true;
          actionSel.appendChild(opt);
        });
        actionSel.onchange = () => {
          item.action = actionSel.value;
          // If delete, disable target input
          targetIn.disabled = (item.action === 'delete');
          browseBtn.disabled = (item.action === 'delete');
          targetIn.style.opacity = (item.action === 'delete') ? '0.3' : '1';
        };

        // ---- Target folder input ----
        const targetIn = document.createElement('input');
        targetIn.type = 'text';
        targetIn.className = 'flex-1 bg-zinc-900 border border-brand-border rounded-lg px-2 py-1.5 text-xs text-zinc-300 font-mono outline-none focus:border-brand-blue';
        targetIn.placeholder = 'D:\\Folder\\Tujuan';
        targetIn.value = item.target || '';
        targetIn.disabled = (item.action === 'delete');
        targetIn.style.opacity = (item.action === 'delete') ? '0.3' : '1';
        targetIn.oninput = () => { item.target = targetIn.value; };

        // ---- Browse button ----
        const browseBtn = document.createElement('button');
        browseBtn.className = 'px-2 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-white transition shrink-0';
        browseBtn.textContent = 'Browse';
        browseBtn.disabled = (item.action === 'delete');
        browseBtn.onclick = async () => {
          const path = await nativeBrowseFolder(item.target || '');
          if (path) {
            item.target = path;
            targetIn.value = path;
            refreshConflictSummary();
          }
        };

        // ---- Delete row button ----
        const delBtn = document.createElement('button');
        delBtn.className = 'p-1.5 rounded-lg hover:bg-red-950/60 text-zinc-600 hover:text-red-400 transition opacity-0 group-hover:opacity-100 shrink-0';
        delBtn.title = 'Hapus hotkey ini';
        delBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/></svg>';
        delBtn.onclick = () => {
          _customHotkeysEdit.splice(idx, 1);
          renderCustomHotkeyRows();
          refreshConflictSummary();
        };

        row.appendChild(toggleLabel);
        row.appendChild(keyBtn);
        row.appendChild(labelIn);
        row.appendChild(actionSel);
        row.appendChild(targetIn);
        row.appendChild(browseBtn);
        row.appendChild(delBtn);

        const wrapper = document.createElement('div');
        wrapper.className = 'space-y-0.5';
        wrapper.appendChild(row);
        wrapper.appendChild(conflictDiv);
        container.appendChild(wrapper);

        setTimeout(updateCustomConflictBadge, 0);
      });

      setTimeout(refreshConflictSummary, 20);
    }


    function addCustomHotkeyRow() {
      _customHotkeysEdit.push({ key: '', label: '', action: 'move', target: '' });
      renderCustomHotkeyRows();
      // Scroll to new row
      const cont = document.getElementById('custom-hotkeys-rows');
      cont.scrollTop = cont.scrollHeight;
    }


    async function saveSettings() {
      // 1. Hotkeys (1-9) + which preset keys are disabled
      const newHotkeys = {};
      const newDisabledPresetKeys = [];
      for (let i = 1; i <= 9; i++) {
        const key = String(i);
        const actionEl = document.getElementById(`set-action-${key}`);
        const targetEl = document.getElementById(`set-target-${key}`);
        const toggleEl = document.getElementById(`toggle-preset-${key}`);
        const action = actionEl ? actionEl.value : 'move';
        const target = targetEl ? targetEl.value.trim() : '';
        const enabled = toggleEl ? toggleEl.checked : true;
        if (target) newHotkeys[key] = { action, target };
        if (!enabled) newDisabledPresetKeys.push(key);
      }

      // 2. Global Shortcuts + which are disabled
      const newGlobalShortcuts = {};
      const newDisabledGlobalShortcuts = [];
      GLOBAL_ACTION_KEYS.forEach(actionName => {
        const val = document.getElementById(`sh-${actionName}`)?.value;
        newGlobalShortcuts[actionName] = val === 'None' ? '' : (val || '');
        const toggleEl = document.getElementById(`toggle-global-${actionName}`);
        if (toggleEl && !toggleEl.checked) newDisabledGlobalShortcuts.push(actionName);
      });

      // 3. Theme & Thumbnail size
      let newTheme = 'theme-black';
      document.getElementsByName('opt-theme').forEach(r => { if (r.checked) newTheme = r.value; });
      let newThSize = 'medium';
      document.getElementsByName('opt-th-size').forEach(r => { if (r.checked) newThSize = r.value; });
      const newAnims = document.getElementById('chk-animations').checked;

      // 4. System Options
      const newAskDelete = document.getElementById('chk-ask-delete').checked;
      const newLang = document.getElementById('opt-lang').value;
      const newExts = [];
      if (document.getElementById('ext-jpg').checked) { newExts.push('.jpg'); newExts.push('.jpeg'); }
      if (document.getElementById('ext-png').checked) newExts.push('.png');
      if (document.getElementById('ext-webp').checked) newExts.push('.webp');
      if (document.getElementById('ext-gif').checked) newExts.push('.gif');

      // 5. Custom hotkeys (keep enabled flag)
      const newCustomHotkeys = _customHotkeysEdit.filter(h => h.key);

      try {
        const res = await fetch('/api/settings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            hotkeys: newHotkeys,
            extensions: newExts,
            ask_delete: newAskDelete,
            theme: newTheme,
            thumbnail_size: newThSize,
            animations: newAnims,
            global_shortcuts: newGlobalShortcuts,
            lang: newLang,
            custom_hotkeys: newCustomHotkeys,
            disabled_preset_keys: newDisabledPresetKeys,
            disabled_global_shortcuts: newDisabledGlobalShortcuts
          })
        });
        if (res.ok) {
          state.hotkeys = newHotkeys;
          state.extensions = newExts;
          state.ask_delete = newAskDelete;
          state.theme = newTheme;
          state.thumbnail_size = newThSize;
          state.animations = newAnims;
          state.global_shortcuts = newGlobalShortcuts;
          state.lang = newLang;
          state.custom_hotkeys = newCustomHotkeys;
          state.disabled_preset_keys = newDisabledPresetKeys;
          state.disabled_global_shortcuts = newDisabledGlobalShortcuts;

          applyLanguage(newLang);
          document.body.className = 'h-full flex flex-col antialiased ' + state.theme;
          logMsg(t('log_save_settings'));
          renderPresetsPanel();
          renderImagePreviews();
          closeSettingsModal();
        }
      } catch (e) {
        logMsg(t('log_action_err', { err: e }), 'error');
      }
    }

    function closeSettingsModal() {
      document.getElementById('settings-modal').classList.add('hidden');
    }

    // Modal Control: Help
    function showHelpModal() {
      document.getElementById('help-modal').classList.remove('hidden');
    }

    function closeHelpModal() {
      document.getElementById('help-modal').classList.add('hidden');
    }

    function keyEventToString(e) {
      const parts = [];
      if (e.ctrlKey) parts.push('Ctrl');
      if (e.shiftKey) parts.push('Shift');
      if (e.altKey) parts.push('Alt');

      let key = e.key;
      if (key === ' ') key = 'Space';

      if (key !== 'Control' && key !== 'Shift' && key !== 'Alt') {
        if (key.length === 1) {
          parts.push(key.toUpperCase());
        } else {
          parts.push(key);
        }
      }
      return parts.join('+');
    }

    // Global Key Bindings & Listeners
    function setupGlobalBindings() {
      document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
          return;
        }

        const key = e.key;
        const activeKeyString = keyEventToString(e);

        // 1. Global shortcuts — skip if action is disabled
        let triggeredAction = null;
        for (const [actionName, shortcutStr] of Object.entries(state.global_shortcuts || {})) {
          if (shortcutStr === activeKeyString) {
            // Only fire if not in the disabled list
            if (!(state.disabled_global_shortcuts || []).includes(actionName)) {
              triggeredAction = actionName;
            }
            break;
          }
        }

        if (triggeredAction) {
          e.preventDefault();
          if (triggeredAction === 'next_image') nextImage();
          else if (triggeredAction === 'prev_image') prevImage();
          else if (triggeredAction === 'undo') undoAction();
          else if (triggeredAction === 'delete') deleteImage();
          else if (triggeredAction === 'rotate_cw') rotateImage(90);
          else if (triggeredAction === 'rotate_ccw') rotateImage(-90);
          else if (triggeredAction === 'help') showHelpModal();
          else if (triggeredAction === 'toggle_explorer') togglePanel('left');
          else if (triggeredAction === 'toggle_console') togglePanel('bottom');
          else if (triggeredAction === 'toggle_metadata') togglePanel('right');
          else if (triggeredAction === 'create_folder') createNewFolder();
          else if (triggeredAction === 'open_folder') openSourceFolder();
          return;
        }
        
        if (key === 'F2') {
          e.preventDefault();
          renameImage();
          return;
        }

        // 2. Preset hotkeys (1-9) — skip if key is disabled
        if (/^[1-9]$/.test(key) && !e.ctrlKey && !e.altKey && !e.shiftKey) {
          const conf = state.hotkeys[key];
          if (conf && !(state.disabled_preset_keys || []).includes(key)) {
            e.preventDefault();
            executeAction(conf.action, conf.target);
            return;
          }
        }

        // 3. Custom hotkeys — skip if disabled (enabled !== false check)
        const customMatches = (state.custom_hotkeys || []).filter(
          h => h.key && h.key === activeKeyString && h.enabled !== false
        );
        if (customMatches.length > 0) {
          e.preventDefault();
          customMatches.forEach(h => {
            if (h.action === 'delete') deleteImage();
            else executeAction(h.action, h.target || null);
          });
          return;
        }
        // 4. Ctrl+C / Ctrl+X / Ctrl+V for Copy/Move Modal
        if ((e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey) {
          const lKey = e.key.toLowerCase();
          if (lKey === 'a') {
            e.preventDefault();
            selectAllPhotos();
            return;
          }
          if (lKey === 'c') {
            e.preventDefault();
            openCopyMoveModal('copy');
            return;
          }
          if (lKey === 'x') {
            e.preventDefault();
            openCopyMoveModal('move');
            return;
          }
          if (lKey === 'v') {
            e.preventDefault();
            openCopyMoveModal('copy');
            return;
          }
        }
      });
    }

    function selectAllPhotos() {
      if (!state.images || state.images.length === 0) return;
      state.selectedIndices = state.images.map((_, idx) => idx);
      if (state.currentIndex < 0 && state.images.length > 0) {
        state.currentIndex = 0;
      }
      displayCurrentImage();
      logMsg(`Memilih semua foto (${state.images.length} item terpilih)`);
    }

    async function openSourceFolder() {
      const path = await nativeBrowseFolder(state.currentFolder);
      if (path) {
        navigateToPath(path);
      }
    }

    function toggleTheme() {
      const css = document.getElementById('theme-light-css');
      const icon = document.querySelector('#btn-theme i');
      if (css.disabled) {
        css.disabled = false;
        document.body.classList.add('theme-light');
        if (icon) icon.setAttribute('data-lucide', 'sun');
        state.theme = 'theme-light';
      } else {
        css.disabled = true;
        document.body.classList.remove('theme-light');
        if (icon) icon.setAttribute('data-lucide', 'moon');
        state.theme = 'theme-black';
      }
      lucide.createIcons();
      saveSettings(); // persist to backend
    }

    // Resizer Panel Drag & Resize Engine
    function initResizers() {
      const leftPanel = document.getElementById('left-panel');
      const rightPanel = document.getElementById('right-panel');
      const bottomPanel = document.getElementById('bottom-panel');

      const resizerLeft = document.getElementById('resizer-left');
      const resizerRight = document.getElementById('resizer-right');
      const resizerBottom = document.getElementById('resizer-bottom');

      resizerLeft.addEventListener('mousedown', (e) => {
        e.preventDefault();
        resizerLeft.classList.add('resizing');
        document.addEventListener('mousemove', resizeLeft);
        document.addEventListener('mouseup', stopResizeLeft);
      });

      function resizeLeft(e) {
        const width = e.clientX;
        if (width > 150 && width < 450) {
          leftPanel.style.width = `${width}px`;
          state.panelSizes.left = width;
        }
      }

      function stopResizeLeft() {
        resizerLeft.classList.remove('resizing');
        document.removeEventListener('mousemove', resizeLeft);
        document.removeEventListener('mouseup', stopResizeLeft);
        saveSessionUI(); // persist panel size
      }

      resizerRight.addEventListener('mousedown', (e) => {
        e.preventDefault();
        resizerRight.classList.add('resizing');
        document.addEventListener('mousemove', resizeRight);
        document.addEventListener('mouseup', stopResizeRight);
      });

      function resizeRight(e) {
        const width = document.body.clientWidth - e.clientX;
        if (width > 150 && width < 450) {
          rightPanel.style.width = `${width}px`;
          state.panelSizes.right = width;
          const filename = state.images[state.currentIndex];
          if (filename) fetchMetadata(`${state.currentFolder}/${filename}`);
        }
      }

      function stopResizeRight() {
        resizerRight.classList.remove('resizing');
        document.removeEventListener('mousemove', resizeRight);
        document.removeEventListener('mouseup', stopResizeRight);
        saveSessionUI(); // persist panel size
      }

      resizerBottom.addEventListener('mousedown', (e) => {
        e.preventDefault();
        resizerBottom.classList.add('resizing');
        document.addEventListener('mousemove', resizeBottom);
        document.addEventListener('mouseup', stopResizeBottom);
      });

      function resizeBottom(e) {
        const height = window.innerHeight - e.clientY - 32;
        if (height > 80 && height < 400) {
          bottomPanel.style.height = `${height}px`;
          state.panelSizes.bottom = height;
        }
      }

      function stopResizeBottom() {
        resizerBottom.classList.remove('resizing');
        document.removeEventListener('mousemove', resizeBottom);
        document.removeEventListener('mouseup', stopResizeBottom);
        saveSessionUI(); // persist panel size
      }
    }

    // ZOOM & PAN LOGIC
    let zoomState = { scale: 1, tx: 0, ty: 0, isDragging: false, startX: 0, startY: 0 };

    function resetZoom() {
      zoomState = { scale: 1, tx: 0, ty: 0, isDragging: false, startX: 0, startY: 0 };
      applyZoom();
    }

    function applyZoom() {
      const img = document.getElementById('main-image');
      if (!img) return;
      if (zoomState.scale === 1) {
        img.style.transform = '';
        img.style.cursor = 'default';
      } else {
        img.style.transform = `translate(${zoomState.tx}px, ${zoomState.ty}px) scale(${zoomState.scale})`;
        img.style.cursor = zoomState.isDragging ? 'grabbing' : 'grab';
      }
    }

    function initZoomAndPan() {
      const container = document.getElementById('stage-card-main');
      if (!container) return;

      container.addEventListener('wheel', (e) => {
        if (!state.images || state.currentIndex < 0) return;
        e.preventDefault();
        
        const zoomIntensity = 0.1;
        const wheel = e.deltaY < 0 ? 1 : -1;
        const zoom = Math.exp(wheel * zoomIntensity);
        
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        const newScale = Math.min(Math.max(1, zoomState.scale * zoom), 10);
        
        if (newScale === 1) {
          resetZoom();
          return;
        }

        const scaleDiff = newScale / zoomState.scale;
        zoomState.tx = mouseX - (mouseX - zoomState.tx) * scaleDiff;
        zoomState.ty = mouseY - (mouseY - zoomState.ty) * scaleDiff;
        zoomState.scale = newScale;
        
        applyZoom();
      });

      container.addEventListener('mousedown', (e) => {
        if (zoomState.scale > 1 && e.button === 0) {
          e.preventDefault();
          zoomState.isDragging = true;
          zoomState.startX = e.clientX - zoomState.tx;
          zoomState.startY = e.clientY - zoomState.ty;
          applyZoom();
        }
      });

      document.addEventListener('mousemove', (e) => {
        if (zoomState.isDragging) {
          e.preventDefault();
          zoomState.tx = e.clientX - zoomState.startX;
          zoomState.ty = e.clientY - zoomState.startY;
          applyZoom();
        }
      });

      document.addEventListener('mouseup', () => {
        if (zoomState.isDragging) {
          zoomState.isDragging = false;
          applyZoom();
        }
      });
      
      // Reset zoom on image change
      const originalNext = nextImage;
      const originalPrev = prevImage;
      const originalDisplay = displayCurrentImage;
      
      window.nextImage = function() { resetZoom(); originalNext(); };
      window.prevImage = function() { resetZoom(); originalPrev(); };
      window.displayCurrentImage = function() { resetZoom(); originalDisplay(); };
    }
    
    // Call initZoomAndPan after DOM loaded
    document.addEventListener('DOMContentLoaded', initZoomAndPan);

    // Rating & Flag Logic
    window.updateRatingUI = function(filename) {
      if (!filename || !state.folderMetadata) {
        window.setStars(0);
        window.setFlagUI(null);
        return;
      }
      const meta = state.folderMetadata[filename] || {};
      window.setStars(meta.rating || 0);
      window.setFlagUI(meta.flag || null);
    }

    window.setStars = function(rating) {
      const stars = document.querySelectorAll('#star-rating-container i');
      stars.forEach((star, index) => {
        if (index < rating) {
          star.classList.replace('text-zinc-600', 'text-yellow-400');
        } else {
          star.classList.replace('text-yellow-400', 'text-zinc-600');
        }
      });
    }

    window.setFlagUI = function(flag) {
      const keepBtn = document.getElementById('btn-flag-keep');
      const rejectBtn = document.getElementById('btn-flag-reject');
      if (!keepBtn || !rejectBtn) return;
      
      keepBtn.classList.replace('text-green-500', 'text-zinc-600');
      rejectBtn.classList.replace('text-red-500', 'text-zinc-600');
      
      if (flag === 'keep') keepBtn.classList.replace('text-zinc-600', 'text-green-500');
      if (flag === 'reject') rejectBtn.classList.replace('text-zinc-600', 'text-red-500');
    }

    window.setRating = async function(rating) {
      if (!state.currentFolder || state.isThisPC) return;
      const filename = state.images[state.currentIndex];
      if (!filename) return;

      const currentRating = (state.folderMetadata[filename] && state.folderMetadata[filename].rating === rating) ? 0 : rating;
      
      try {
        const res = await fetch('/api/update-metadata', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ folder: state.currentFolder, filename, rating: currentRating })
        });
        const data = await res.json();
        if (data.status === 'success') {
          if (!state.folderMetadata[filename]) state.folderMetadata[filename] = {};
          state.folderMetadata[filename].rating = currentRating;
          window.updateRatingUI(filename);
        }
      } catch (e) {
        logMsg(`Error updating rating: ${e}`, 'error');
      }
    }

    window.setFlag = async function(flag) {
      if (!state.currentFolder || state.isThisPC) return;
      const filename = state.images[state.currentIndex];
      if (!filename) return;

      const currentFlag = (state.folderMetadata[filename] && state.folderMetadata[filename].flag === flag) ? 'none' : flag;
      
      try {
        const res = await fetch('/api/update-metadata', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ folder: state.currentFolder, filename, flag: currentFlag })
        });
        const data = await res.json();
        if (data.status === 'success') {
          if (!state.folderMetadata[filename]) state.folderMetadata[filename] = {};
          if (currentFlag === 'none') {
            delete state.folderMetadata[filename].flag;
          } else {
            state.folderMetadata[filename].flag = currentFlag;
          }
          window.updateRatingUI(filename);
        }
      } catch (e) {
        logMsg(`Error updating flag: ${e}`, 'error');
      }
    }

    window.applyFilterAndSort = function(resetIndex = true) {
      if (!state.rawImages) return;
      
      const filter = document.getElementById('filter-select').value;
      const sort = document.getElementById('sort-select').value;
      
      let filtered = state.rawImages.filter(filename => {
        const meta = state.folderMetadata[filename] || {};
        if (filter === 'starred') return (meta.rating && meta.rating > 0);
        if (filter === 'keep') return meta.flag === 'keep';
        if (filter === 'reject') return meta.flag === 'reject';
        return true;
      });
      
      filtered.sort((a, b) => {
        if (sort === 'name_asc') return a.localeCompare(b);
        if (sort === 'name_desc') return b.localeCompare(a);
        if (sort === 'rating_desc') {
          const rA = (state.folderMetadata[a] && state.folderMetadata[a].rating) || 0;
          const rB = (state.folderMetadata[b] && state.folderMetadata[b].rating) || 0;
          if (rA !== rB) return rB - rA;
          return a.localeCompare(b);
        }
        return 0;
      });
      
      const oldFilename = state.images[state.currentIndex];
      state.images = filtered;
      
      if (state.images.length === 0) {
        state.currentIndex = -1;
      } else if (resetIndex) {
        state.currentIndex = 0;
      } else {
        const newIdx = state.images.indexOf(oldFilename);
        if (newIdx !== -1) {
          state.currentIndex = newIdx;
        } else {
          state.currentIndex = 0;
        }
      }
      
      state.selectedIndices = state.currentIndex >= 0 ? [state.currentIndex] : [];
      state.lastSelectedIndex = state.currentIndex;
      
      displayCurrentImage();
      renderFilmstrip();
    }