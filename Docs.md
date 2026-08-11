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

## CI / GitHub Actions

A GitHub Actions workflow (`.github/workflows/ci.yml`) runs on every push to `main` and on pull requests targeting `main`. It is a single full-stack job — Inertia is one project, so frontend and backend are never isolated:

- **PHP 8.4** via `shivammathur/setup-php`, `composer install` (default, dev dependencies included).
- **Node 22** (Vite 8 requires Node `^20.19.0 || >=22.12.0`), `npm ci`, then `npm run build`. The frontend build runs PHP under the hood because the Wayfinder Vite plugin executes `php artisan wayfinder:generate` — the job must therefore provide both runtimes together.
- **Pest tests** — `vendor/bin/pest`, with the frontend build done first so Inertia pages resolve the Vite manifest.

Tests run against a MySQL 8.4 service container (the job-level `DB_*` env vars override the SQLite `:memory:` values in `phpunit.xml`, since PHPUnit env config defaults to `force=false`), and `php artisan migrate --force` runs before the suite.

## Commands

```bash
composer run dev        # serve + queue + logs + vite concurrently
composer run test       # run the test suite
php artisan test --compact --filter=TestName
vendor/bin/pint --dirty --format agent   # format changed PHP files
npm run build           # production frontend build
npm run dev             # vite dev server
```

## Architectural `decisions`

| Date | Decision | Reasoning |
| --- | --- | --- |
| 2026-08-09 | Adopt Laravel Boost guidelines as the governing convention set | Ensures consistent, best-practice Laravel development across agents and teammates |
| 2026-08-09 | Create `Docs.md` at project root | Required by project rules for tracking features and decisions |
| 2026-08-11 | Add CI pipeline via GitHub Actions (`.github/workflows/ci.yml`) | Guarantees the frontend builds and the Pest suite passes before changes reach `main`. Runs on `push` to `main` and on PRs targeting `main`. Chose `npm run build` + Pest as the gate for now instead of adding a frontend lint stack (ESLint etc.) — a full test run is sufficient at this stage and avoids adding dependencies prematurely |
| 2026-08-11 | Use MySQL 8.4 for CI tests instead of SQLite `:memory:` | CI runs against the same engine as production (MySQL). Job-level `DB_*` env vars override the SQLite values in `phpunit.xml` (PHPUnit `<env>` defaults to `force=false`, so pre-set shell env wins), and `php artisan migrate --force` runs before the suite |
| 2026-08-11 | Merge frontend build and tests into a single CI job | Inertia is a single full-stack project, so frontend and backend are never isolated in CI. The Wayfinder Vite plugin runs `php artisan wayfinder:generate` during `npm run build`, so the build genuinely requires PHP anyway — one job with both runtimes is simpler and still fails fast on either side |

## Development workflow rules

- **No code is committed without explicit user approval.**
- **`Docs.md` must be fully updated before any commit.**
- Check `.ai/rules` (when present) before creating or editing files.
