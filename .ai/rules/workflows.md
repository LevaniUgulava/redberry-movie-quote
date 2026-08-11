---
paths:
  - '.github/workflows/**'
---

# Workflows

## CI is one full-stack job: build + Pest on push/PR to main
`.github/workflows/ci.yml` is the only CI pipeline. It triggers on push to `main` and PRs targeting `main` and is a SINGLE full-stack job (Inertia = one project, never isolate frontend/backend). Steps: PHP 8.4 setup, composer install, Node 22, npm ci, npm run build (Wayfinder Vite plugin runs `php artisan wayfinder:generate`, so PHP must be present for the frontend build), then `php artisan migrate --force` and `vendor/bin/pest`. Tests run on a MySQL 8.4 service container; job-level `DB_*` env vars override the SQLite :memory: values in `phpunit.xml` (PHPUnit `<env>` defaults to `force=false`). No frontend lint step — build + Pest is the quality gate.
