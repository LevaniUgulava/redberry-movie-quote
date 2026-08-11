# Phase 3 — Logout

End the authenticated session via `POST /logout`.

## Overview

Log the current user out, invalidate the session (removing all session data), regenerate the CSRF token, and redirect to the landing page.

## Architecture Decisions

- Full `invalidate()` + `regenerateToken()` — both CSRF token and session data are cleared, defeating session fixation.
- Route is protected by the `auth` middleware, so only authenticated users can reach it.

## Implementation Tasks

### Task 1: `AuthController::logout`
- **File**: `app/Http/Controllers/AuthController.php`
- **Description**: Log out and invalidate the session.
- **Details**:
  - `public function logout(Request $request): RedirectResponse`
  - `Auth::logout();`
  - `$request->session()->invalidate();`
  - `$request->session()->regenerateToken();`
  - `return redirect('/');`
  - Type-hint `Illuminate\Http\Request` (no Form Request needed).

### Task 2: Logout route
- **File**: `routes/auth.php`
- **Description**: Auth-only `POST /logout`.
- **Details**:
  - New `auth` group: `Route::middleware('auth')->group(function (): void { Route::post('/logout', [AuthController::class, 'logout'])->name('logout'); });`
- **Dependencies**: Task 1, slices 1-2 (`AuthController` exists).

## Testing Strategy

- `tests/Feature/Auth/LogoutTest.php` (Pest):
  - authenticated user can log out (`assertGuest()`, session invalidated, CSRF token regenerated)
  - unauthenticated request to `POST /logout` is redirected — the `auth` middleware sends unauthenticated visitors to `route('login')`, so `POST /login` must exist as a named route

## Integration Points

- Completes the auth cycle: register → login → logout.
- `routes/web.php` stays untouched — no temporary verification route.
- After implementation, promote a summary into `docs/` per the `docs/` protocol.
