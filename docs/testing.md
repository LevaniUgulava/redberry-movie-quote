# Testing

> Pest test setup with global database refresh and locale-aware URL helper.

## Overview

All routes in this app are prefixed with `{lang}` (e.g., `/en/login`, `/ka/register`). Tests must include this prefix. A reusable `localeUrl()` helper and global `LazilyRefreshDatabase` trait handle this cleanly.

## Global Setup

### TestCase.php

`LazilyRefreshDatabase` is applied globally in `tests/TestCase.php`:

```php
abstract class TestCase extends BaseTestCase
{
    use LazilyRefreshDatabase;
}
```

Individual test files do **not** need `uses(LazilyRefreshDatabase::class)`.

### Pest.php — localeUrl() helper

```php
function localeUrl(string $path): string
{
    return '/' . app()->getLocale() . $path;
}
```

Reads the current locale from `app()->getLocale()` (set by `SetLocale` middleware or config). Available in all test files without imports.

## Usage

### Making requests

```php
$this->post(localeUrl('/login'), [
    'login' => 'test@example.com',
    'password' => 'password',
]);

$this->get(localeUrl('/google/redirect'));
```

### Named routes with lang parameter

`route()` does not auto-include `{lang}`. Pass it explicitly:

```php
route('login', ['lang' => app()->getLocale()])
```

### Signed URLs (verification)

```php
URL::temporarySignedRoute(
    'verification.verify',
    now()->addMinutes(60),
    ['lang' => app()->getLocale(), 'id' => $user->id, 'hash' => sha1($hash)]
);
```

## Decisions

| Decision | Reasoning | Alternatives rejected |
| --- | --- | --- |
| `localeUrl()` uses `app()->getLocale()` | Locale is already set by middleware/config. Reading it is simpler than passing or hardcoding. | `setLocale()` in beforeEach (redundant), hardcoded `/en` prefix |
| `LazilyRefreshDatabase` in TestCase | Applies to all feature tests globally. No per-file `uses()` repetition. | Putting it in `Pest.php` with `->use()` (same result but less conventional) |
| Explicit `lang` in `route()` calls | Named routes don't include `{lang}` prefix. Passing explicitly is clear and avoids hidden coupling. | `URL::defaults()` in tests (works but adds setup boilerplate) |

## Challenges & Solutions

### Missing required parameter for Route: login

- **Symptom:** `UrlGenerationException: Missing required parameter for [Route: login] [URI: {lang}/login] [Missing parameter: lang]`
- **Cause:** `route('login')` called without `lang` param. The `{lang}` route parameter is required.
- **Fix:** Pass `['lang' => app()->getLocale()]` to all `route()` calls. For middleware redirects, configure `redirectGuestsTo` in `bootstrap/app.php`.
