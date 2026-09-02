# Profile

> Profile page (`resources/js/pages/Profile/Profile.tsx`) — My profile card with avatar upload and inline username/email/password editing. Desktop layout responsive for **1024px–1920px**; mobile layout is a separate component. Only one layout is rendered at a time via the `useIsMobile` hook (see avatar upload challenge).

## Overview

The Profile page renders a "My profile" heading and a card containing the avatar (with upload) and three inline-editable fields (username, email, password), plus a Save changes / Cancel action row that appears when any field is opened. Edit state is managed by the `useProfile` hook.

Since desktop and mobile use **different layouts** (same functionality), the page is split into two layout components: a desktop card layout and a mobile layout. `Profile.tsx` is the shared entry that renders the right one based on the `lg` (1024px) breakpoint.

## Files & Structure

| File | Purpose |
| --- | --- |
| `Profile.tsx` | Shared entry: toggles which layout renders via `lg`, holds the shared auth modal |
| `components/desktop/DesktopProfile.tsx` | Desktop layout — heading, card, fields column, Form + save actions |
| `components/desktop/components/InputField.tsx` | Desktop-only labelled input with an Edit toggle (used only by desktop layout) |
| `components/mobile/MobileProfile.tsx` | Mobile layout — renders `ProfileView` (avatar + inputs) and `ProfileForm` (edit) |
| `components/mobile/components/ProfileView.tsx` | Mobile view: avatar `<Form>` + username/email/password read rows |
| `components/shared/AvatarField.tsx` | Shared file input + circular preview + "Upload new photo" trigger (used by both layouts) |
| `hooks/useProfile.ts` | State: preview, showField, handleFileChange, open/cancel |
| `hooks/useIsMobile.ts` | `useSyncExternalStore` hook returning `window.innerWidth < 1024` |
| `ProfileTypes.ts` | Shared prop types: `ProfileProps` (desktop & mobile layouts), `AvatarProps`, `InputFieldProps` |

### Layout switching

`Profile.tsx` renders **only one** layout at a time, chosen with the `useIsMobile` hook (`window.innerWidth < 1024`):

- **Mobile viewport** (< 1024px): renders `MobileProfile`
- **Desktop viewport** (≥ 1024px): renders `DesktopProfile`

This is a `useSyncExternalStore`-based hook wired to resize events, so the rendered layout swaps live as the viewport crosses the 1024px boundary.

## Desktop Responsive Sizing (1024px–1920px)

Base styles target the largest size (≈1536–1920px) and shrink via `max-2xl` (<1536px) and `max-xl` (<1280px) variants.

| Element | Base (1536–1920) | `max-2xl` (1280–1536) | `max-xl` (1024–1280) |
| --- | --- | --- | --- |
| Container left padding | `pl-45` (180px) | `pl-30` (120px) | `pl-18` (72px), then `pl-0` below `lg` |
| Card width | `max-w-249.5` (fluid `w-full`, rem-based) | `max-w-[880px]` | `max-w-[720px]` |
| Fields column | `w-125` (500px) | `w-110` (440px) | `w-92.5` (370px) |
| Avatar | `h-47 w-47` (188px) | `h-42 w-42` (168px) | `h-36 w-36` (144px) |

The card uses `w-full max-w-249.5` (fluid) so it fills the available space and never overflows at 1024px, rather than hard-coding three fixed pixel widths.

## Decisions

| Decision | Reasoning | Alternatives rejected |
| --- | --- | --- |
| Split layout into `desktop/` and `mobile/` components | Desktop and mobile have genuinely different layouts — separate components give an accurate, isolated layout per viewport with shared functionality. | One responsive component trying to serve both (mobile layout too different, gets messy). |
| `Profile.tsx` toggles visibility at `lg` (1024px) | Clean single switch point for desktop vs mobile; `lg` matches the project's main desktop/mobile boundary. | Applying desktop-only responsive scaling below 1024 (conflicts with the separate mobile layout). |
| Render exactly one layout via `useIsMobile` (not CSS-hide both) | Only one layout is mounted, so the shared `fileInputRef` is bound to the layout actually on screen. See the avatar upload challenge below. | Mounting both layouts and hiding one with `hidden lg:block` / `lg:hidden` (breaks the shared avatar `fileInputRef` — see Challenges). |
| `InputField` lives in `components/desktop/components/`; `AvatarField` lives in `components/shared/` | Desktop-only pieces (like `InputField`) live under `desktop/components/`, while reusable pieces (like `AvatarField`, used by both layouts) live under `shared/`. | Keeping all field components flat in `components/`. |
| Shared `ProfileProps` interface in `ProfileTypes.ts` | `DesktopProfileProps` and `MobileProfileProps` were identical, so a single shared `ProfileProps` interface in the existing `ProfileTypes.ts` keeps components clean without duplication. | Two identical per-layout type files, or two identical collapsed in-place interfaces. |
| Base = largest (1920), shrink with `max-*` variants | Layout authored top-down from the 1920px design; `max-2xl` / `max-xl` map cleanly onto the 1024–1920 target range. | Using `min-*` bottom-up variants (would require rewriting each element from a 1024 base). |
| Fluid card with `max-w-249.5` (rem, not px) | rem-based spacing keeps the max width on the same scale as the rest of the design; fluid guarantees no overflow at 1024px. | Fixed `max-w-[998px]` in px (breaks the rem convention used elsewhere). |
| `pl-45` shrinks at breakpoints, `pl-0` below `lg` | Keeps content clear of the fixed sidebar on desktop while giving the card more room; mobile padding is owned by the mobile layout. | Keeping `pl-45` fixed (card would get too cramped below ~1280px). |
| Shared auth modal stays in `Profile.tsx` | The modal (`AuthModalWrapper`/`Message`) is shared by both layouts, so it renders once in the entry rather than duplicated. | Rendering it inside each layout (duplicated DOM + state). |

## Challenges & Solutions

| Challenge | Solution |
| --- | --- |
| Fixed card `w-249.5` (998px) + fixed `pl-50` (200px) overflowed below 1920px | Card made fluid and capped (`w-full max-w-249.5`), reduced `pl-45` at `max-2xl` / `max-xl`. |
| Fixed inner field width (`w-125`) and avatar size (`h-47 w-47`) lived inside `InputField.tsx` / `AvatarField.tsx` | Added the same responsive scale directly in both component files. |
| **Mobile avatar image sent as `null` on upload (blob preview worked)** | **Root cause was the shared `fileInputRef`, not the form or the file.** `Profile.tsx` mounted **both** desktop and mobile layouts and CSS-hid one (`hidden lg:block` / `lg:hidden`). Both layouts received the **same `fileInputRef`**. The ref binds to the **last component rendered** — the desktop one (rendered after mobile) — so on mobile, clicking "Upload new photo" fired `fileInputRef.current.click()` on the **desktop** `<input>`. The blob preview appeared (from `handleFileChange`), but the mobile `<Form>` read its **own** mobile input, which had no file → backend got `avatar: null` (only `_method`). Desktop worked because its input was the one the ref pointed to. **Fix:** stop relying on CSS hiding — render only the active layout via a `useIsMobile()` hook (`window.innerWidth < 1024`, `useSyncExternalStore`), so the `fileInputRef` only ever attaches to the mounted component (`Profile.tsx:36-40`). Also switched the mobile `<Form>` to `method="post"` to match the working movie upload pattern. |

## Pending

- Mobile-specific input components will live under `components/mobile/` if they differ from the shared ones.
