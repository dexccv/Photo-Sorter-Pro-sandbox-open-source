import os
import subprocess
import sys

def build():
    print("Building executable with PyInstaller...")
    # Include frontend directory and ensure we're using correct path sep
    data_sep = os.pathsep
    cmd = [
        sys.executable, "-m", "PyInstaller",
        "--name", "ModernPhotoSorter",
        "--noconfirm",
        "--onedir",
        "--windowed",
        "--icon=icon.png",
        "--add-data", f"frontend{data_sep}frontend",
        "run.py"
    ]
    try:
        subprocess.run(cmd, check=True)
        print("Build complete. Check the 'dist' folder.")
    except Exception as e:
        print(f"Error building: {e}")
        sys.exit(1)

if __name__ == "__main__":
    build()
