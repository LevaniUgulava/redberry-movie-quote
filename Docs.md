# Movie Quotes — Documentation

> Root documentation file for the Movie Quotes project. Per project rules, this file must be updated whenever features are added or modified.

## Stack

| Layer | Technology | Version |
| --- | --- | --- |
| Language | PHP | ^8.3 |
| Framework | Laravel | ^13.8 |
| Frontend | Inertia + React (SPA) | v3 |
| Styling | Tailwind CSS | v4 |
| Build | Vite | v8 |
| Testing | Pest | ^5.0 |

### Key packages

- `inertiajs/inertia-laravel` — server-side routing via `Inertia::render()`
- `laravel/wayfinder` — typed route/action functions for the frontend
- `spatie/laravel-medialibrary` — file/media associations with Eloquent models
- `spatie/laravel-query-builder` — filtered/sorted/included API endpoints
- `laravel/boost` (dev) — MCP tools for agents (database queries, docs search, etc.)
- `laravel/pint` (dev) — code style enforcement
- `laravel/pail`, `laravel/pao` (dev) — local log viewer and app overview

## Current state

The project is a fresh scaffold. What exists today:

- **Routes:** single `GET /` route rendering the welcome page (`routes/web.php`).
- **Models:** only the default `App\Models\User`.
- **Migrations:** default `users`, `cache`, `jobs` tables plus `media` (medialibrary).
- **Frontend:** default Inertia/React/Vite setup with Tailwind v4 and the Wayfinder Vite plugin.

Nothing app-specific (quotes, movies, etc.) has been built yet.

## Architecture & conventions

- Pages live in `resources/js/Pages` and are rendered server-side with `Inertia::render()`.
- Frontend calls backend routes/actions through generated Wayfinder functions (`@/actions/`, `@/routes/`) — never hardcoded URLs.
- Tests are Pest feature/unit tests in `tests/`.
- Conventions must follow the Laravel Boost guidelines in `AGENTS.md` (e.g. use `php artisan make:` commands, `pint` formatting, factory-based tests).

## Commands

```bash
composer run dev        # serve + queue + logs + vite concurrently
composer run test       # run the test suite
php artisan test --compact --filter=TestName
vendor/bin/pint --dirty --format agent   # format changed PHP files
npm run build           # production frontend build
npm run dev             # vite dev server
```

## Architectural decisions

| Date | Decision | Reasoning |
| --- | --- | --- |
| 2026-08-09 | Adopt Laravel Boost guidelines as the governing convention set | Ensures consistent, best-practice Laravel development across agents and teammates |
| 2026-08-09 | Create `Docs.md` at project root | Required by project rules for tracking features and decisions |

## Development workflow rules

- **No code is committed without explicit user approval.**
- **`Docs.md` must be fully updated before any commit.**
- Check `.ai/rules` (when present) before creating or editing files.
