# Auth

> Session-based authentication for the Movie Quotes app: register, login, logout. See the original plan in [plans/auth/auth.md](../plans/auth/auth.md).

## Overview

Provides `POST /register`, `POST /login` (email **or** name), and `POST /logout` using a single `App\Http\Controllers\AuthController` plus dedicated Form Requests. The frontend (Inertia/React) is not wired up yet — this is backend-only for now.

## Routes

Defined in `routes/web/auth.php`, required from `routes/web.php` (Laravel 13 no longer auto-loads `routes/auth.php` — see `.ai/rules/bootstrap.md`).

| Method | URI | Name | Middleware | Purpose |
| --- | --- | --- | --- | --- |
| POST | `/register` | `register` | `guest` | Create an account and auto-login |
| POST | `/login` | `login` | `guest` | Authenticate via email or name |
| POST | `/logout` | `logout` | `auth:sanctum` | End the session |

## Architecture

- **Single controller** `App\Http\Controllers\AuthController` with `register()`, `login()`, `logout()`.
- **Form Requests** `RegisterRequest` / `LoginRequest` keep validation out of the controller.
- **Login by email or name:** a single `login` field; the controller detects emails via `filter_var($login, FILTER_VALIDATE_EMAIL)` and builds credentials against `email` or `name` (unique via the base `users` migration). The `login` rule deliberately does NOT use `exists:users` to avoid leaking which identifiers are registered; failures return the generic `auth.failed` message.
- **Password hashing:** free via the `hashed` cast on `App\Models\User`.
- **Session security:** regenerate the session ID on login/register; `invalidate()` + `regenerateToken()` on logout.
- **Redirects:** `redirect()->intended('/')` (landing page fallback until a dashboard exists).

## Decisions

| Decision | Reasoning | Alternatives rejected |
| --- | --- | --- |
| Use Sanctum (`auth:sanctum` on logout) | User installed `laravel/sanctum` for future API/token needs; session auth remains the transport for the same-origin Inertia app | Plain `web` guard only |
| Logout targets `Auth::guard('web')` explicitly | See "Challenges & Solutions" below | `Auth::logout()` (breaks under `auth:sanctum`) |
| No rate limiting on login | Per user decision | Built-in rate limiting |

## Challenges & Solutions

### `Auth::logout()` throws `BadMethodCallException: Method Illuminate\Auth\RequestGuard::logout does not exist`
- **Symptom:** `POST /logout` under the `auth:sanctum` middleware failed with the above exception.
- **Cause:** Laravel's `Authenticate` middleware calls `shouldUse('sanctum')` on success (`vendor/laravel/framework/src/Illuminate/Auth/Middleware/Authenticate.php:83`). From then on `Auth::logout()` resolves to the `sanctum` guard — a `RequestGuard` that has no `logout()` method.
- **Fix:** logout through the session guard explicitly: `Auth::guard('web')->logout()` followed by `$request->session()->invalidate()` and `$request->session()->regenerateToken()`. Sanctum authenticates stateful (same-origin) requests *through* the `web` guard, so this fully clears the session.
- **Tests:** assert on the `web` guard explicitly — `assertGuest('web')` — because the `sanctum` `RequestGuard` caches the authenticated user for the request, so an unqualified `assertGuest()` checks a stale guard after the request ends.
- **Rule:** recorded in `.ai/rules/controllers.md`.

## Testing

Pest feature tests in `tests/Feature/Auth/`:
- `RegistrationTest.php` — valid register + auto-login, invalid data, unique email/name, session regeneration.
- `LoginTest.php` — login by email, by name, wrong password, unregistered identifier, remember me, session regeneration.
- `LogoutTest.php` — authenticated logout (`assertGuest('web')`), session invalidation, guest redirect to login.

Run: `php artisan test --compact --filter=Auth`

## Protected Page Access (Guests Get 403)

Protected **page** routes must not redirect guests to the login modal — they return `403 Forbidden` so the Inertia `Error/ErrorPage` renders with the Forbidden icon. This covers `/newsfeed`, `/profile`, `/movies`, and `/notification` (see `NewsfeedAccessTest` and `MovieStoreTest`).

- **Middleware:** `app/Http/Middleware/EnsureAuthenticated.php` — `abort_unless(auth()->check(), 403)`. Registered as alias `ensure.authenticated` in `bootstrap/app.php`.
- **Routes:** newsfeed, profile, movie, and notification routes use `['ensure.authenticated', 'verified']` instead of `['auth:sanctum', 'verified']`.
- **Why not `auth:sanctum`:** it fires `redirectGuestsTo` (302 → `?modal=login`), and Laravel's middleware sorting runs it *before* a plain guard middleware, so a guest never reaches a 403 check. Sanctum is still used where a redirect is desired (logout, API-style endpoints).
- **Requirement:** the 403 middleware must run before any redirecting middleware in the group; on page routes place it as the first route middleware.
