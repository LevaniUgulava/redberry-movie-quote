# Movie Quotes

A bilingual (English/Georgian) social platform where users share and discuss their favorite movie quotes, create movie lists, and interact through comments and likes.

---

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Resources](#resources)

---

## Introduction

Movie Quotes is a full-stack web application built with Laravel and React (via Inertia.js). Users can:

- Register and log in (email/password or Google OAuth)
- Browse a newsfeed of movie quotes from other users
- Create, edit, and delete their own movies and quotes
- Comment on and like quotes
- Receive notifications for likes and comments
- Switch between English and Georgian locales

The application is fully localized — all routes, UI text, and validation messages support both `en` and `ka` locales.

---

## Prerequisites

- PHP 8.3 or higher
- MySQL 8.4
- Node.js 22 or higher
- Composer
- npm

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Backend | Laravel 13, PHP 8.3 |
| Frontend | React 19, Inertia.js v3 |
| Styling | Tailwind CSS v4 |
| Build Tool | Vite 8 |
| Routing | Laravel Wayfinder (typed routes) |
| Media | Spatie Media Library |
| Auth | Laravel Sanctum, Google OAuth (Socialite) |
| Testing | Pest 5 |
| CI/CD | GitHub Actions |

---

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-username/movie-quotes.git
cd movie-quotes
```

2. **Install PHP dependencies**

```bash
composer install
```

3. **Install frontend dependencies**

```bash
npm install
```

4. **Set up environment**

```bash
cp .env.example .env
php artisan key:generate
```

5. **Configure database**

Edit `.env` and set your MySQL credentials:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=movie_quotes
DB_USERNAME=root
DB_PASSWORD=
```

6. **Run migrations**

```bash
php artisan migrate --force
```

7. **Start the development server**

```bash
composer run dev
```

This runs the Laravel server, queue worker, log viewer, and Vite dev server concurrently.

8. **Open in browser**

Visit `http://localhost:8000`

### Tester Account

A seeded tester account is available for quickly exploring the app:

| Field | Value |
| --- | --- |
| Email | `molly35@example.com` |
| Username | `hwisozk` |
| Password | `password` |

---

## Development

### Available Commands

| Command | Description |
| --- | --- |
| `composer run dev` | Start all dev services (server, queue, logs, vite) concurrently |
| `composer run test` | Clear config and run the full Pest test suite |
| `php artisan test --compact --filter=TestName` | Run a specific test |
| `vendor/bin/pint --dirty --format agent` | Format changed PHP files |
| `npm run dev` | Start Vite dev server only |
| `npm run build` | Build frontend for production |

### Important Notes

- **Run `composer run dev`** during development — it starts all services concurrently
- **Vite hot-reload** is enabled — frontend changes reflect immediately
- **Wayfinder** generates typed route functions in `resources/js/routes/` and `resources/js/actions/` — never hardcode URLs, always use generated functions
- **Localization** — server-side messages use `lang/{locale}/` PHP files, client-side UI text uses `public/js/locales/{locale}/` JSON files loaded via i18next
- **Tests** — always write Pest feature tests with factories, not inline model creation

### Project Structure

```
app/
├── Enums/              # Application enums
├── Events/             # Event classes
├── Http/               # Controllers, Middleware, Requests
├── Models/             # Eloquent models (User, Movie, Quote, Comment, Like, etc.)
├── Notifications/      # Notification classes
├── Policies/           # Authorization policies
├── Providers/          # Service providers
└── Service/            # Service classes

resources/js/
├── Pages/              # Inertia page components
│   ├── Auth/           # Login, Register, Forgot Password
│   ├── Landing/        # Public landing page
│   ├── Movie/          # Single movie detail view
│   ├── Movies/         # User's movie list
│   ├── NewsFeed/       # Quote newsfeed
│   ├── Profile/        # User profile (desktop + mobile layouts)
│   └── Error/          # Error pages (403, 404, 500)
├── components/         # Shared React components
└── shared/             # Shared hooks, types, utilities

routes/web/             # Route files organized by feature
```

---

## Deployment

Deployment is fully automated via GitHub Actions.

### How It Works

1. Push to `main` branch triggers the **CI** workflow
2. CI runs: install dependencies, build frontend, run Pest tests against MySQL 8.4
3. If CI passes, the **CD** workflow triggers automatically
4. CD connects to the production server via SSH and runs:

```bash
cd /var/www/movie-quotes
git pull origin main
composer install --no-interaction --prefer-dist --no-dev --optimize-autoloader
npm ci
npm run build
php artisan migrate --force
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache
```

### Deployment Requirements

- SSH access configured in GitHub Secrets (`DEPLOY_HOST`, `DEPLOY_USERNAME`, `DEPLOY_SSH_KEY`)
- Production server at `/var/www/movie-quotes`
- MySQL database configured on the server

---

## Resources

- **AI / Agent Documentation:** [docs/index.md](docs/index.md) — entry point for all functional module docs (auth, localization, movies, profile, testing, etc.)
- **Stack & Conventions:** [Docs.md](Docs.md) — full stack overview, commands, and architectural decisions
- **Design:** [Figma](https://www.figma.com/design/5uMXCg3itJwpzh9cVIK3hA/Movie-Quotes-Bootcamp-assignment?node-id=0-1&p=f&t=KfOSeZFbLCrwnx9L-0)
- **Database Diagram:** [DrawSQL](https://drawsql.app/teams/levani-workspace/diagrams/movie-quotes)
