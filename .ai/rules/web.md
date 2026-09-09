---
paths:
  - 'routes/web/**'
---

# Web

## Guests on protected pages get 403, not a redirect
Protected Inertia page routes use `ensure.authenticated` (app/Http/Middleware/EnsureAuthenticated.php, aborts 403 for guests) + `verified`, NOT `auth:sanctum`. `auth:sanctum` would 302-redirect guests to ?modal=login before any 403 check, since Laravel sorts the auth middleware to run first. Keep `auth:sanctum` only where a guest redirect is intended.
