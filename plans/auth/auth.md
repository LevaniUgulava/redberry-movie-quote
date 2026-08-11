# Auth — Plan

> Session-based authentication for the Movie Quotes app. Backend only (frontend ignored for now). `laravel/sanctum` is installed (user decision); session cookies remain the transport for the same-origin Inertia app.

## Overview

Provide register, login, and logout using Laravel's built-in session authentication. The `users` table already exists with `name`, `email`, `password`, `remember_token`. The `User` model already casts `password` to `hashed`.

## Slices

| # | Slice | Summary | Status |
| --- | --- | --- | --- |
| 1 | [1-register.md](./auth_phases/1-register.md) | Create an account via `POST /register`, then auto-login | Done |
| 2 | [2-login.md](./auth_phases/2-login.md) | Authenticate via `POST /login` with remember me support | Done |
| 3 | [3-logout.md](./auth_phases/3-logout.md) | End the session via `POST /logout` | Done |

## Architecture

- **Sanctum installed** (user decision) for future API/token needs; the same-origin Inertia app still authenticates via session cookies through the `web` guard.
- **Single controller:** `App\Http\Controllers\AuthController` with `register()`, `login()`, `logout()`.
- **Form Requests:** `RegisterRequest` and `LoginRequest` keep validation out of the controller.
- **Routes:** `routes/web/auth.php`, required from `routes/web.php` (Laravel 13 does not auto-load `routes/auth.php`) — guest routes for register/login, `auth:sanctum` middleware for logout.
- **Session security:** regenerate the session ID on login; invalidate the session and regenerate the token on logout. Logout targets `Auth::guard('web')` because `auth:sanctum` switches the default guard to the token `RequestGuard`, which has no `logout()`.
- **Password hashing:** already handled by the `hashed` cast on the `User` model.
- **Redirects:** `redirect()->intended('/')` — the landing page is the fallback until a real dashboard exists.

## Sequencing

1. Slice 1 (register) — depends on nothing
2. Slice 2 (login) — depends on slice 1 (same controller/file style, Form Request pattern)
3. Slice 3 (logout) — depends on slices 1-2 (controller exists)

Every feature slice ships its tests; the testing phase is mandatory for every plan. After implementation, auth docs move into `docs/` (per `docs/` protocol).
