# Localization

> Georgian and English locale files for the Movie Quotes app.

## Overview

The application supports two locales: **English** (`en`) and **Georgian** (`ka`). Laravel's built-in localization is used with files in `lang/{locale}/`.

## Supported Locales

| Locale | Code | Directory |
| --- | --- | --- |
| English | `en` | `lang/en/` |
| Georgian (Qartuli) | `ka` | `lang/ka/` |

## Locale Files

| File | Purpose |
| --- | --- |
| `auth.php` | Authentication messages (failed login, wrong password, throttle) |
| `pagination.php` | Paginator previous/next labels |
| `passwords.php` | Password reset flow messages |
| `validation.php` | Full validation error messages with attribute placeholders |

## Decisions

| Decision | Reasoning | Alternatives rejected |
| --- | --- | --- |
| Manual translation files over package | Only 2 locales, 4 files — no complexity justifying a translation package | `laravel-translatable`, database-driven translations |
| Full `validation.php` translation | Ensures all Laravel validation errors display in the user's language | Partial translation, relying on English fallback |

## Challenges & Solutions

None encountered — straightforward file creation matching existing English structure.
