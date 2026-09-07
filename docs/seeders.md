# Seeders & Factories

> Database seeders and factories for test data. Language of seeded content matches the translatable model format: English (`en`) + Georgian (`ka`).

## Overview

`DatabaseSeeder` creates 20 users and then runs `MovieSeeder`, `QuoteSeeder`, `CommentSeeder`, `LikeSeeder` in order.

### Factories

| Factory | Model | Translatable field(s) | `ka` source |
| --- | --- | --- | --- |
| `MovieFactory` | `Movie` | `title` (word), `director` (name), `description` (paragraph) | `GeorgianData` pool |
| `QuoteFactory` | `Quote` | `quote` (sentence) | `GeorgianData` pool |
| `CommentFactory` | `Comment` | none (plain text) | n/a |
| `UserFactory` | `User` | none | n/a |

### GeorgianData

`database/factories/GeorgianData.php` is a static word pool (titles, directors, descriptions, quotes, genres) so the `ka` fields contain real Georgian-script text instead of faker's Latin fallback. The English (`en`) fields keep using Faker as before. This is throwaway test data — the content is not important, only the format: each locale gets a correctly-shaped value.

### Genres

Genres are attached inline in `MovieSeeder`: each created movie gets a random 1–4 genres from the `GeorgianData::genres()` pool via `$movie->genres()->createMany(...)`. There is no separate `Genre` factory or seeder (genres are a child table of `movies`).

## Decisions

| Decision | Reasoning | Alternatives rejected |
| --- | --- | --- |
| Static `GeorgianData` class for `ka` values | Faker has no real Georgian provider (`ka_GE` falls back to Latin text), so `ka` fields would contain English words. A small curated pool guarantees correct Georgian script in a `ka` value. | Relying on faker `ka_GE` (produces Latin) |
| Genres attached inline in `MovieSeeder` | Genres are a child table (`movie_id`) — attaching during movie creation keeps seed data consistent without a separate seeder. | Standalone `GenreSeeder` |
| Content is generic test data | The goal is correct shape/locale, not realistic movie data. | Curating real famous movies/sourced quotes |

## Challenges & Solutions

- **Faker `ka_GE` does not produce Georgian** — `Faker\Factory::create("ka_GE")` returns Latin words like "est". Fixed with the static `GeorgianData` pool.
- **Leftover test genre** — a stray `"ეეე"` row (movie 6) existed in `genres`. Deleted via tinker: `Genre::where("name", "ეეე")->delete()`.
