# Phase 2 — Login

Authenticate an existing user via `POST /login` using **email OR name**, with optional remember me.

## Overview

Accept a single `login` field (email or name), `password`, and a `remember` checkbox. Detect whether the identifier is an email or a name, attempt authentication, regenerate the session on success, and redirect to the intended destination. Failed attempts return generic validation errors.

## Architecture Decisions

- One `login` field replaces the old `email` field — the controller detects whether the value is an email (`filter_var(..., FILTER_VALIDATE_EMAIL)`) or a name, and builds credentials accordingly.
- `users.name` is unique (enforced by the base `users` migration) so name-based login is unambiguous.
- Use `Auth::attempt($credentials, $remember)` — handles hashing comparison automatically.
- `remember` maps to the `users.remember_token` column (already present) via the boolean second argument.
- A dedicated `LoginRequest` Form Request mirrors the register slice.
- No rate limiting per user decision.
- The `login` rule must NOT be `exists:users` — leaking which emails/names are registered is a security smell; invalid credentials are reported generically in the controller.

## Implementation Tasks

### Task 1: `LoginRequest`

- **File**: `app/Http/Requests/LoginRequest.php`
- **Description**: Form Request validating login input.
- **Details**:
    - `authorize()` returns `true`.
    - Rules:
        - `login` → `['required', 'string', 'min:3', 'max:255']`
        - `password` → `['required', 'string']`
        - `remember` → `['boolean']`

### Task 2: `AuthController::login`

- **File**: `app/Http/Controllers/AuthController.php`
- **Description**: Authenticate by email or name and redirect.
- **Details**:
    - `public function login(LoginRequest $request): RedirectResponse`
    - `$login = $request->login;`
    - `$field = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'email' : 'name';`
    - `$credentials = [$field => $login, 'password' => $request->password];`
    - `$remember = $request->boolean('remember');`
    - If `Auth::attempt($credentials, $remember)` fails → `throw ValidationException::withMessages(['login' => __('auth.failed')]);`
    - On success: `$request->session()->regenerate();`
    - `return redirect()->intended('/');`
- **Dependencies**: Task 1.

### Task 3: Login route

- **File**: `routes/auth.php`
- **Description**: Guest-only `POST /login`.
- **Details**:
    - Inside the existing `guest` group: `Route::post('/login', [AuthController::class, 'login'])->name('login');`
- **Dependencies**: Task 2, slice 1 (`routes/auth.php` and `AuthController` exist).

## Testing Strategy

- `tests/Feature/Auth/LoginTest.php` (Pest):
    - user can log in with their email (`assertAuthenticated()`, `assertAuthenticatedAs($user)`)
    - user can log in with their name (`assertAuthenticatedAs($user)`)
    - user cannot log in with wrong password (errors, `assertGuest()`)
    - user cannot log in with unregistered email (generic `auth.failed` error)
    - user cannot log in with unregistered name (generic `auth.failed` error)
    - remember me: `Auth::attempt($credentials, true)` persists the remember token (`assertDatabaseHas('users', ['remember_token' => ...])` after re-issuing)
    - session is regenerated on successful login

## Integration Points

- Depends on slice 1 for `routes/auth.php` and the `AuthController` file.
- Redirect fallback `/` renders `Landing/Landing`.
- After implementation, promote a summary into `docs/` per the `docs/` protocol.
