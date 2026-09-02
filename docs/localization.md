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
| `auth` | `auth.json` | Auth form text, Reset password form, verification/result message screens, `resend` |
| `header` | `header.json` | Navigation buttons (Sign in, Sign up, Log out) |
| `common` | `common.json` | Shared actions (View/Edit/Delete, Cancel/Confirm/Upload, Save changes, Director, close, confirm-delete dialog) |
| `movies` | `movies.json` | Movies list, add/edit movie modal & form, image upload area, page title prefix (`title`) |
| `newsfeed` | `newsfeed.json` | News feed header/search hint, quote card comment placeholder, quote create/view/edit modal, Post, page title prefix (`title`) |
| `profile` | `profile.json` | Desktop + mobile profile labels/placeholders, password rules, upload-photo, success/confirm text, page title prefix (`title`) |
| `layout` | `layout.json` | Sidebar (News feed, List of movies, Edit your profile), footer copyright |
| `landing` | `landing.json` | Landing hero headline (get-started reuses `common.get_started`) |

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
  → React reads locale; `useTranslation(ns)` fetches the namespace file on demand (e.g. ka/movies.json)
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

## Page Titles (`<Head>`)

Document titles are composed in **one place**: the `title` callback in `createInertiaApp` (`resources/js/app.tsx`).

```ts
const APP_NAME = "Movie Quotes"; // brand name — not translated, defined once

createInertiaApp({
    title: (title) => `${title} - ${APP_NAME}`,
    // ...
});
```

Each page only supplies its **dynamic prefix** via `<Head>`:

| Page | `<Head title>` | EN | KA |
| --- | --- | --- | --- |
| Landing | *(none — server default)* | Movie Quotes | Movie Quotes |
| Newsfeed | `t("title")` (`newsfeed` ns) | Newsfeed - Movie Quotes | მთავარი - Movie Quotes |
| Movies | `t("title")` (`movies` ns) | Movies - Movie Quotes | ჩემი ფილმების სია - Movie Quotes |
| Movie detail | `movie.title` (dynamic) | {movie} - Movie Quotes | {movie} - Movie Quotes |
| Profile | `t("title")` (`profile` ns) | Profile - Movie Quotes | პროფილი - Movie Quotes |

- The brand suffix `Movie Quotes` is a constant — it is **not** translated. KA prefixes come from the `title` key in each feature namespace.
- `resources/views/app.blade.php` ships a default `<title>Movie Quotes</title>`; pages without a `<Head>` (Landing) fall back to it, and Inertia's `<Head>` replaces it whenever a page sets a title.

## Decisions

| Decision | Reasoning | Alternatives rejected |
| --- | --- | --- |
| Split server/client localization | Server-side handles framework messages (validation, auth) automatically; client-side handles UI text React renders directly. Each layer does what it's best at. | Single-layer approach (only server or only client) |
| Use `i18next` + `react-i18next` for frontend | Industry standard, HTTP backend for lazy loading, interpolation support, namespace-based code splitting | Custom `useTranslation` hook reading Inertia shared props |
| Split JSON by namespace (`auth`, `header`, `common`, plus `movies`, `newsfeed`, `profile`, `layout`, `landing`) | Each component loads only the translations it needs. Auth forms don't load header text, header doesn't load auth text. Feature pages load their own namespace. Clean separation by feature. | Single `common.json` file (loads everything everywhere) |
| `react.nsMode: "fallback"` in i18n init | `useTranslation(["profile", "common"])` binds `t()` to all listed namespaces, so shared keys (`edit`, `cancel`, `save_changes`, `confirm`, `director`, `delete`, ...) resolve from `common` without `"common:"` prefixes. Default `nsMode` binds only the **first** namespace and returns raw keys for the rest. | Prefixing every shared key (`t("common:edit")`) across ~12 components; duplicating shared keys into each feature namespace |
| `constants/Message.tsx` stores translation **keys**, resolved with `useTranslation("auth")` in `useAuthContent` | `constants/Message.tsx` is a plain module (can't call hooks); keeping keys in the config and translating in the hook keeps strings reactive to locale changes | Importing `i18n` directly and calling `i18n.t()` inside the constants module |
| Bilingual en/ka input placeholders are **not** translated | Fields like `Movie name`/`ფილმის სახელი` and `Start create new quote`/`ახალი ციტატა` are per-language static labels describing the input language, not UI chrome. Rendering them via `t()` would swap them with the app locale. | Routing these through `t()` |
| JSON files in `public/js/locales/` not `resources/js/` | i18next HTTP backend fetches files via HTTP at runtime. `resources/` isn't served directly — Vite bundles JS/CSS, not arbitrary JSON for runtime fetching. | Import JSON in JS (bundled, not lazy), Vite public directory plugin |
| Full page reload on language switch | Prevents stale form errors and i18n state from persisting across locale changes. Clean reset of all React state. | `router.visit()` (preserves component state, stale errors) |
| `URL::defaults()` in SetLocale middleware | Wayfinder reads defaults at code generation time and makes route parameters optional in TypeScript types. Without it, `register()` requires `lang` arg even though `setUrlDefaults` fills it at runtime. | Passing `locale` explicitly in every route call |
| Keep PHP `lang/` files alongside client JSON | PHP files are the source of truth for Laravel framework messages. Duplicating them as JSON would create maintenance burden with no benefit. | Merging everything into client-side i18n |
| No translation packages (`laravel-translatable`, etc.) | Only 2 locales, trivial complexity, no need for database-driven or package-based solutions. | `laravel-translatable`, database translations, Spatie translatable |
| `LocaleLink` wrapper component | Drop-in replacement for `<Link>` that auto-prepends locale to href. Avoids manually adding `/${locale}` to every Link in the app. Reads locale from shared Inertia props internally. | Manual `useLocaleLink()` hook (requires function call on every href), manual `/${locale}` prefix on every Link |
| Brand suffix composed once via Inertia `title` callback | `createInertiaApp({ title })` appends ` - Movie Quotes` for every `<Head>` automatically — no custom helper/hook. "Movie Quotes" is a brand constant, never translated. Pages pass only their (localized or dynamic) prefix. | Custom `usePageTitle()` hook; repeating `- Movie Quotes` inline in every page; `t("movie_quotes")` (brand is not translatable) |

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

### Message screens returned keys instead of translated text
- **Symptom:** `getMessageConfig` in `constants/Message.tsx` returned hardcoded English strings, so verification/reset screens ignored the chosen locale
- **Cause:** The constants module is not a React component and could not use the `useTranslation` hook
- **Fix:** Changed the config to hold translation keys (`title`/`subtitle`/`button`), then translated them in `useAuthContent` (`useTranslation("auth")`) before passing the config to `<Message>`. The module stays hook-free and the rendered text stays reactive to the active locale.

### Cross-namespace keys returned raw (Edit/Cancel/Save changes in desktop profile)
- **Symptom:** `t("edit")`, `t("cancel")`, `t("save_changes")`, `t("confirm")` rendered as raw key text ("edit", "cancel") in desktop profile inputs, confirmation modal, and other components that called `useTranslation(["feature", "common"])`
- **Cause:** `react-i18next` v17 `useTranslation` binds `t()` to only the **first** namespace (`namespaces[0]`) unless `nsMode` is `"fallback"`. Keys living only in the second namespace (`common`) were never found and returned the key itself. Individually all locale files and i18next core lookups were correct.
- **Fix:** Set `react: { nsMode: "fallback" }` in `i18n.ts`. Verified by replicating `useTranslation.js:82` against the real locale JSON (all `common` keys resolve in both locales; `i18n.options.react.nsMode` reads back `"fallback"`), then confirmed with `npm run build`.

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
