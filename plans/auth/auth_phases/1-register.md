# Phase 1 — Register

Create an account via `POST /register`, then automatically log the new user in.

## Overview

Accept `name`, `email`, `password` (+ confirmation), create the `User`, log them in with a regenerated session, and redirect to the intended destination (landing by default).

## Architecture Decisions

- Validation lives in a dedicated `RegisterRequest` Form Request — keeps the controller thin and matches project conventions.
- Auto-login after registration is the expected UX for an Inertia app (no separate login step required after signing up).
- Password hashing is free via the `User` model's `hashed` cast.

## Implementation Tasks

### Task 1: `RegisterRequest`
- **File**: `app/Http/Requests/RegisterRequest.php`
- **Description**: Form Request validating registration input.
- **Details**:
  - `authorize()` returns `true` (registration is public; the route group already applies `guest` middleware).
  - Rules:
    - `name` → `['required', 'string', 'max:255', Rule::unique('users', 'name')]` (name is a login identifier, so it must be unique)
    - `email` → `['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique('users', 'email')]`
    - `password` → `['required', 'confirmed', Password::defaults()]`
  - Use `Illuminate\Validation\Rule` and `Illuminate\Validation\Rules\Password`.
- **Dependencies**: None (this phase).

### Task 2: `AuthController::register`
- **File**: `app/Http/Controllers/AuthController.php`
- **Description**: Store the user, log them in, redirect.
- **Details**:
  - `public function register(RegisterRequest $request): RedirectResponse`
  - `$user = User::create($request->validated());`
  - `Auth::login($user);`
  - `$request->session()->regenerate();` (before/after login — session regeneration prevents fixation)
  - `return redirect()->intended('/');`
- **Dependencies**: Task 1.

### Task 3: Register route
- **File**: `routes/auth.php`
- **Description**: Guest-only `POST /register`.
- **Details**:
  - Create `routes/web/auth.php` (required manually from `routes/web.php` — Laravel 13 does not auto-load `routes/auth.php`).
  - `Route::middleware('guest')->group(...)` containing `Route::post('/register', [AuthController::class, 'register'])->name('register');`
- **Dependencies**: Task 2.

## Testing Strategy

- `tests/Feature/Auth/RegistrationTest.php` (Pest):
  - can register with valid data (`assertAuthenticated()`, user exists in DB, password is hashed)
  - cannot register with invalid data (missing name, invalid email, short password, password confirmation mismatch — `assertSessionHasErrors`)
  - cannot register twice with the same email (unique validation)
  - session is regenerated after registration

## Integration Points

- `routes/web.php` is untouched; `routes/auth.php` is auto-registered.
- Redirect fallback `/` currently renders `Landing/Landing`.
- After implementation, promote a summary into `docs/` per the `docs/` protocol.
