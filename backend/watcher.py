import os
import threading
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

# Global observer reference
_observer = None
_observer_lock = threading.Lock()

class _ChangeHandler(FileSystemEventHandler):
    def __init__(self, callback):
        super().__init__()
        self._callback = callback
    def on_created(self, event):
        self._callback()
    def on_deleted(self, event):
        self._callback()
    def on_modified(self, event):
        self._callback()
    def on_moved(self, event):
        self._callback()

def start_watcher(path: str, callback) -> None:
    """Start a watchdog observer on *path*.
    If an observer is already running it will be stopped first.
    *callback* is called on any file system event.
    """
    global _observer
    with _observer_lock:
        stop_watcher()
        if not os.path.isdir(path):
            return
        event_handler = _ChangeHandler(callback)
        observer = Observer()
        observer.schedule(event_handler, path, recursive=False)
        observer.start()
        _observer = observer

def stop_watcher() -> None:
    """Stop the currently running observer, if any."""
    global _observer
    with _observer_lock:
        if _observer is not None:
            _observer.stop()
            _observer.join()
            _observer = None

def is_watcher_active() -> bool:
    """Return True if a watcher is currently running."""
    return _observer is not None
