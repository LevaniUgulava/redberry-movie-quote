---
paths:
  - bootstrap/app.php
---

# Bootstrap

## routes/auth.php must be required manually in Laravel 13
Laravel 13 removed the auto-loading of routes/auth.php from withRouting(). To use routes/auth.php, require it at the bottom of routes/web.php (require __DIR__.'/auth.php';). Otherwise auth routes silently never register.
