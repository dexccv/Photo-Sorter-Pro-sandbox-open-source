import os
import sys
import subprocess
import time
import webbrowser
import threading

def install_dependencies():
    dependencies = ["fastapi", "uvicorn", "pillow", "send2trash"]
    installed = []
    
    print("Checking dependencies...")
    for dep in dependencies:
        try:
            if dep == "pillow":
                __import__("PIL")
            else:
                __import__(dep)
        except ImportError:
            print(f"Installing missing dependency: {dep}...")
            try:
                subprocess.check_call([sys.executable, "-m", "pip", "install", dep])
                installed.append(dep)
            except Exception as e:
                print(f"Failed to install {dep}: {e}")
                sys.exit(1)
                
    if installed:
        print(f"Successfully installed: {', '.join(installed)}")
    else:
        print("All dependencies are ready.")

def start_server():
    import uvicorn
    # Change working directory to this script's directory so relative paths resolve correctly
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    # Ensure the root script dir is in sys.path so backend package can be imported
    if script_dir not in sys.path:
        sys.path.insert(0, script_dir)
    
    uvicorn.run("backend.main:app", host="127.0.0.1", port=8000, log_level="warning")

def open_browser():
    # Wait for 1.5 seconds to let the server start up
    time.sleep(1.5)
    webbrowser.open("http://localhost:8000/")

if __name__ == "__main__":
    # ANSI escape codes for coloring on Windows/Unix CMD
    CYAN = "\033[96m"
    PURPLE = "\033[95m"
    GREEN = "\033[92m"
    YELLOW = "\033[93m"
    BLUE = "\033[94m"
    BOLD = "\033[1m"
    DIM = "\033[90m"
    RESET = "\033[0m"

    print(f"{CYAN}┌────────────────────────────────────────────────────────┐{RESET}")
    print(f"{CYAN}│{RESET}  {BOLD}{PURPLE}PHOTO SORTER PRO{RESET}                                      {CYAN}│{RESET}")
    print(f"{CYAN}│{RESET}  {DIM}Elite Sandbox Edition v2.5{RESET}                             {CYAN}│{RESET}")
    print(f"{CYAN}│{RESET}  {BOLD}{YELLOW}Created by:{RESET} {BOLD}{CYAN}dexccv{RESET} ({BLUE}https://github.com/dexccv{RESET})        {CYAN}│{RESET}")
    print(f"{CYAN}├────────────────────────────────────────────────────────┤{RESET}")
    print(f"{CYAN}│{RESET}  {BOLD}{GREEN}[STATUS]{RESET}   Backend server started successfully.       {CYAN}│{RESET}")
    print(f"{CYAN}│{RESET}  {BOLD}{YELLOW}[ADDRESS]{RESET}  http://127.0.0.1:8000                      {CYAN}│{RESET}")
    print(f"{CYAN}│{RESET}  {BOLD}{BLUE}[CONTROL]{RESET}  Press Ctrl+C to terminate application.     {CYAN}│{RESET}")
    print(f"{CYAN}└────────────────────────────────────────────────────────┘{RESET}")
    
    install_dependencies()
    
    # Run browser opener in thread
    browser_thread = threading.Thread(target=open_browser, daemon=True)
    browser_thread.start()
    
    # Run uvicorn server on main thread
    start_server()
