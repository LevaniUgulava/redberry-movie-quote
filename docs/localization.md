# Localization

> Georgian and English locale support for the Movie Quotes app, covering both server-side Laravel messages and client-side React UI text.

## Overview

The application supports two locales: **English** (`en`) and **Georgian** (`ka`). Localization is split into two layers:

1. **Server-side** — Laravel PHP files in `lang/{locale}/` for framework messages (validation errors, auth, passwords, pagination)
2. **Client-side** — `i18next` with JSON files in `public/js/locales/{locale}/` for UI text React renders directly (headings, buttons, labels)

## Supported Locales

| Locale | Code | URL prefix | Middleware |
| --- | --- | --- | --- |
| English | `en` | `/en/...` | `SetLocale` |
| Georgian (Qartuli) | `ka` | `/ka/...` | `SetLocale` |

All routes are prefixed with `{lang}` in `routes/web.php`. The `SetLocale` middleware reads the param, validates it against `APP_LOCALES` in `.env`, and calls `app()->setLocale()`.

## Server-Side Files

| File | Purpose |
| --- | --- |
| `lang/{locale}/auth.php` | Authentication messages (failed login, wrong password, throttle) |
| `lang/{locale}/pagination.php` | Paginator previous/next labels |
| `lang/{locale}/passwords.php` | Password reset flow messages |
| `lang/{locale}/validation.php` | Full validation error messages with `:attribute` placeholders |

These are used automatically by Laravel. When a form submission fails validation on `/ka/login`, the `SetLocale` middleware sets the locale to `ka`, and Laravel returns validation errors in Georgian. The frontend receives them via Inertia's `usePage().props.errors` and renders them directly — no client-side translation needed.

## Client-Side Files

Translation JSON files are split by feature namespace in `public/js/locales/{locale}/`:

| Namespace | File | Content |
| --- | --- | --- |
| `auth` | `auth.json` | Login, register, forgot password form text, verification messages |
| `header` | `header.json` | Navigation buttons (Sign in, Sign up) |
| `common` | `common.json` | Shared text (Movie quotes, Get started, Sign in with Google) |

Configuration: `resources/js/i18n.ts`

### Usage in React

Each component imports the namespace it needs:

```tsx
import { useTranslation } from "react-i18next";

function LoginForm() {
    const { t } = useTranslation("auth");
    return <h1>{t("login_title")}</h1>;
}
```

## Architecture

### How locale flows through the app

```
URL: /ka/login
  → SetLocale middleware reads {lang} param
  → app()->setLocale('ka')
  → URL::defaults(['lang' => 'ka']) — tells Wayfinder lang has a default
  → HandleInertiaRequests shares locale prop
  → React reads locale, i18n.changeLanguage('ka') loads ka/auth.json, ka/header.json, ka/common.json
  → Form validation returns Georgian error messages via Inertia props
```

### Language switcher

The `useLang` hook (`resources/js/shared/components/Header/components/Lang/hooks/useLang.ts`) builds the new path by replacing the locale prefix and navigates with `window.location.href` (full page reload).

### LocaleLink component

`resources/js/components/LocaleLink.tsx` — drop-in replacement for Inertia `<Link>` that auto-prepends the locale prefix to `href`.

```tsx
import LocaleLink from "@/components/LocaleLink";

// Renders as /ka/?modal=register (or /en/?modal=register)
<LocaleLink href="/?modal=register">Sign up</LocaleLink>
```

Reads `locale` from `usePage().props` internally. If the href already starts with the current locale, it's left unchanged.

## Decisions

| Decision | Reasoning | Alternatives rejected |
| --- | --- | --- |
| Split server/client localization | Server-side handles framework messages (validation, auth) automatically; client-side handles UI text React renders directly. Each layer does what it's best at. | Single-layer approach (only server or only client) |
| Use `i18next` + `react-i18next` for frontend | Industry standard, HTTP backend for lazy loading, interpolation support, namespace-based code splitting | Custom `useTranslation` hook reading Inertia shared props |
| Split JSON by namespace (`auth`, `header`, `common`) | Each component loads only the translations it needs. Auth forms don't load header text, header doesn't load auth text. Clean separation by feature. | Single `common.json` file (loads everything everywhere) |
| JSON files in `public/js/locales/` not `resources/js/` | i18next HTTP backend fetches files via HTTP at runtime. `resources/` isn't served directly — Vite bundles JS/CSS, not arbitrary JSON for runtime fetching. | Import JSON in JS (bundled, not lazy), Vite public directory plugin |
| Full page reload on language switch | Prevents stale form errors and i18n state from persisting across locale changes. Clean reset of all React state. | `router.visit()` (preserves component state, stale errors) |
| `URL::defaults()` in SetLocale middleware | Wayfinder reads defaults at code generation time and makes route parameters optional in TypeScript types. Without it, `register()` requires `lang` arg even though `setUrlDefaults` fills it at runtime. | Passing `locale` explicitly in every route call |
| Keep PHP `lang/` files alongside client JSON | PHP files are the source of truth for Laravel framework messages. Duplicating them as JSON would create maintenance burden with no benefit. | Merging everything into client-side i18n |
| No translation packages (`laravel-translatable`, etc.) | Only 2 locales, trivial complexity, no need for database-driven or package-based solutions. | `laravel-translatable`, database translations, Spatie translatable |
| `LocaleLink` wrapper component | Drop-in replacement for `<Link>` that auto-prepends locale to href. Avoids manually adding `/${locale}` to every Link in the app. Reads locale from shared Inertia props internally. | Manual `useLocaleLink()` hook (requires function call on every href), manual `/${locale}` prefix on every Link |

## Rejected: Inertia Shared Props for Translations

Initially considered sharing all translations via `HandleInertiaRequests::share()`:

```php
'translations' => fn() => ['auth' => trans('auth'), 'validation' => trans('validation'), ...],
```

**Why rejected:**
- Bloats every Inertia response with the full translation tree, even for pages that don't use most of it
- Validation messages are already sent back via `props.errors` on failed submissions — no need to pre-load them
- Auth/passwords messages are rarely displayed client-side
- i18next HTTP backend loads only the namespace needed, on demand

## Challenges & Solutions

### Stale form errors on language switch
- **Symptom:** Switching language kept showing validation errors from the previous locale
- **Cause:** `router.visit()` does an Inertia partial reload, preserving component state including form errors
- **Fix:** Changed to `window.location.href` for a full page reload, resetting all state

### i18next not loading translations
- **Symptom:** i18next returned keys instead of translated strings
- **Cause:** JSON files were in `resources/js/locales/` but i18next HTTP backend fetches via HTTP from `public/`
- **Fix:** Moved files to `public/js/locales/{locale}/common.json`

### Wayfinder TypeScript requires `lang` argument
- **Symptom:** `register()` shows TS2554: Expected 1-2 arguments, but got 0
- **Cause:** Wayfinder generates route types with `args` as required. `setUrlDefaults` fills `lang` at runtime but TypeScript types are compile-time — Wayfinder doesn't know about runtime defaults.
- **Fix:** Added `URL::defaults(['lang' => $lang])` in `SetLocale` middleware. Wayfinder reads defaults at code generation time via reflection and makes parameters optional in generated TypeScript.
- **Rule:** Always use `URL::defaults()` in middleware for route parameters that have runtime defaults, so Wayfinder generates optional TypeScript types.
