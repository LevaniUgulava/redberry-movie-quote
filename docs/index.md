# Documentation Index

Master index of functional documentation. See `Docs.md` at the project root for the stack overview, commands, and general conventions.

| Module | File | Summary |
| --- | --- | --- |
| Auth | [auth.md](./auth.md) | Session-based auth (register / login / logout) with Sanctum |
| Fonts | [fonts.md](./fonts.md) | Helvetica Neue fonts with unicode-range language switching |
| Loading States | [loading-states.md](./loading-states.md) | Shared `useInertiaLoading` hook with 250ms delay spinner for NewsFeed and Movies pages |
| Localization | [localization.md](./localization.md) | Server-side (Laravel PHP) + client-side (i18next) localization for `en` and `ka` |
| Movies | [movies.md](./movies.md) | Movies page and its static test data (`TestMovies.ts`) |
| Profile | [profile.md](./profile.md) | Profile page with separate desktop/mobile layout components (desktop responsive 1024–1920px); desktop vs mobile chosen with `useIsMobile` to keep the shared avatar `fileInputRef` bound to the mounted layout |
| Seeders | [seeders.md](./seeders.md) | Database seeders/factories with English + Georgian translatable test data (`GeorgianData` pool, inline genre seeding) |
| Testing | [testing.md](./testing.md) | Pest setup with global LazilyRefreshDatabase and locale-aware URL helper |
