`# Frontend UI & Interactions

> UI/UX polish applied across two branches — `fix/frontend-missing-styles` (merged) and `fix/frontend-notifications-and-ux-polish` (open). Covers hover/focus states, invalid Tailwind classes, edge-case empty states, and small interaction fixes.

## Overview

Audit-driven cleanup of the entire frontend (`resources/js/`). Goal: remove dead styles, make every interactive element feel responsive (hover), and eliminate UI elements shown when they shouldn't be.

## Modules

### 1. Hover & Cursor Feedback

**Files:** all pages/components (`Landing`, `Movies`, `Movie`, `NewsFeed`, `Profile`, `Error`, `Auth`, `Header`).

- All `bg-main-red` branded buttons/links now use `hover:bg-[#CC0E10]` + `transition-colors` — the convention already used by the Auth submit button and `Message` component. 19 elements updated (CTAs, form submit buttons, empty-state actions, profile actions).
- Bordered/ghost buttons (Google sign-in, Sign In, Lang trigger) use `hover:bg-white/10`.
- `cursor-pointer` added to every clickable element that lacked it (clickable `<div>`s, form submit buttons, profile/cancel buttons, SearchModal back button).

### 2. Focus Indicators

**Files:** `resources/js/pages/Movies/components/MovieForm/components/Input.tsx`, `.../TagsInput/TagsInput.tsx`.

- Inputs previously had `focus:outline-none` with no replacement, leaving **no visible focus** on the dark background.
- Fixed by adding `focus-within:border-[#5E5CE6] focus-within:ring-2 focus-within:ring-[#5E5CE6]/30` on the wrapping border container (the native input is borderless; the border lives on the wrapper).

### 3. Invalid / Incomplete Tailwind Classes (Rendered Nothing)

| Location | Original | Fix |
| --- | --- | --- |
| `Movies/components/Header/Header.tsx` | `font-mediumleading-[150%]` (glued, both lost) | `font-medium leading-[150%]` |
| `Landing/Landing.tsx` | `max-lg:left-` (empty value) | `max-lg:left-0` |
| `Movie/Movie.tsx`, `QuoteForm/components/ActiveMovie.tsx` | `font-lg` (not a Tailwind class) | `text-lg` |
| `Movie/Movie.tsx` | `font-regular` (not a Tailwind class) | `font-normal` |

### 4. Layout Shift Prevention

**File:** `resources/js/shared/components/Sidebar/Sidebar.tsx`.

- Avatar used `hover:border border-main-red`: an idle 0-width border became a 1px border on hover, shifting the image.
- Fixed with `border-2 border-transparent hover:border-main-red` (constant 2px border in every state; `border-main-red` overrides `border-transparent` via `cn()`/tailwind-merge when active on the profile route).

### 5. Notification Modal (`mark all read` Guard)

**File:** `resources/js/shared/components/Header/Notification/NotificationModal.tsx`.

- The "Mark all read" button showed whenever there were **any** notifications — even if all were already read.
- Now guarded by `notifications.some(n => !n.read)`; the button only appears when at least one notification is unread.
- Cleanup: the `notificationsState` prop (a raw number) was never passed by the parent and became dead code; removed from the component signature, the `NotificationModalProps` type, and the `Buttons.tsx` call site.

### 6. Empty States

**Movies page (0 quotes)** — `resources/js/pages/Movie/Movie.tsx`:

- When a movie has no quotes, the desktop and mobile quote lists render a centered empty state instead of an empty area: "No quotes yet" + "Add your first quote to get started."

**QuoteCard (0 comments)** — `resources/js/pages/NewsFeed/components/QuoteCard/QuoteCard.tsx`:

- A muted `text-[#6C757D] text-sm` "No comments yet" line appears above the comment input when `comments.length === 0`.

**Translations:** new keys added to `en`/`ka` locale JSON — `no_quotes_yet`, `no_quotes_hint` (`movies.json`), `no_comments_yet` (`newsfeed.json`).

### 7. Interaction Fixes

**Lang dropdown closes on outside click** — `resources/js/shared/components/Header/components/Lang/Lang.tsx`:

- Added a `useRef` on the wrapper + a `document` `mousedown` listener active only while open; closes the dropdown when the click target is outside the wrapper. Same pattern used by the NewsFeed/Movies header search forms.

**"Load more" button flash** — `resources/js/pages/NewsFeed/components/QuoteCard/hooks/useLoadMoreComments.ts`:

- `hasMore` was initialized to `true`; on first render (before the initial `loadComments(1)` response resolves) the button briefly appeared with no comments. Now `useState(false)` — the button only appears after the first response sets the real value.

**Movie ordering** — `app/Service/MovieService.php`:

- Movies list now queries `->latest()` so newest movies appear first.

## Architectural & Technical Decisions

| Decision | Reasoning | Alternatives rejected |
| --- | --- | --- |
| Single hover convention `hover:bg-[#CC0E10]` for primary | Already used by Auth buttons / `Message`; consistency and zero new tokens | `hover:opacity-80`, per-element colors |
| `focus-within` on the wrapper, not the native input | Movie form inputs are borderless; the visible border is on the parent div | `focus:` on the input (invisible) |
| Persistent `border-2 border-transparent` on avatar | Zero layout shift vs. adding a border on hover | `hover:border` (1px shift) |
| `notifications.some()` guard over a count prop | Correctness — "mark all read" is meaningless when nothing is unread; removes dead prop | `notificationsState > 0` (total count) |
| `hasMore` starts `false` | No misleading "Load more" before the first fetch resolves | `true` (flash) |
| `latest()` on the movies query | Newest-first is the expected ordering for content lists | `orderBy('created_at', 'desc')` (equivalent), `oldest()` |

## Challenges & Solutions

### Buttons.tsx search toggle had no pointer cursor
The mobile search modal was opened by a `<div onClick>` with no `cursor-pointer`, so hover showed the default arrow. Fixed with `className="cursor-pointer"` on the div.

### Merge conflict on locale files
`en/newsfeed.json` / `ka/newsfeed.json` were changed both in a stale stash (adding `no_comments_yet`) and later on `main` (adding `loading`) before branching. The stash pop produced conflicts; resolved by keeping both keys.

## Rule

Recorded in `.ai/rules/js.md` — Tailwind utility names must be complete and valid; primary-button hover uses `hover:bg-[#CC0E10]`.
