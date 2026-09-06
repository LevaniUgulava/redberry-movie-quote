# Loading States

Shared loading indicator pattern for Inertia page navigations. Uses a reusable `useInertiaLoading` hook with a centered spinner, applied to the NewsFeed and Movies pages.

## Hook

**File:** `resources/js/hooks/useInertiaLoading.ts`

```ts
const inertiaLoading = useInertiaLoading(hasData);
```

- `hasData` (`boolean`) — pass `true` when the page's data array is non-empty. This prevents the spinner from flashing on initial server-rendered load where data is already available.
- Returns `boolean` — `true` when a loading indicator should be shown.

## Spinner Component

**File:** `resources/js/components/ui/Spinner.tsx`

A simple `Loader2` icon from lucide-react with `animate-spin` in the project's primary purple (`#5E5CE6`). Accepts an optional `className` prop for sizing overrides.

## Architectural & Technical Decisions

### Spinner over Skeleton

Skeleton screens were considered (and initially implemented) for the NewsFeed QuoteCard. Rejected because:

- Skeletons require a dedicated component per card layout, adding maintenance overhead.
- The dark theme (`bg-[#11101A]`) made skeleton contrast poor without custom colors.
- A centered spinner is simpler, universally understood, and sufficient for the navigation duration (typically < 1s).

A spinner provides clear "something is loading" feedback without needing to mirror each page's exact layout.

### 250ms Delay on Showing Spinner

The Inertia docs explicitly recommend delaying the loading indicator by 250–500ms:

> "It's often preferable to delay showing the loading indicator until a request has taken longer than 250-500 milliseconds. This prevents the loading indicator from appearing constantly on quick page visits, which can be visually distracting."

Without the delay, the spinner would flash on every fast client-side navigation (e.g., clicking a sidebar link that resolves in <100ms). The 250ms timeout ensures the spinner only appears when the user would actually notice a wait.

### `router.on('start')` / `router.on('finish')` Events

This is the **official Inertia v3 pattern** for page-level loading indicators. From the docs:

> "The `start` event fires when a request to the server has started. This is useful for displaying loading indicators."

Alternatives considered and rejected:

| Approach | Why rejected |
| --- | --- |
| `usePage().props` comparison | No built-in "is loading" prop in Inertia v3 for page transitions |
| `useForm().processing` | Only tracks form submissions, not page visits |
| Custom fetch interceptor | Overcomplicates what Inertia already handles natively |
| NProgress library | Heavier dependency for a simple spinner; requires CSS import and global setup |

The `router.on` approach is lightweight, official, and works for both initial page visits and client-side navigation.

### Extraction into `useInertiaLoading` Hook

The loading state logic (event listeners, timeout, cleanup) was duplicated across NewsFeed and Movies. Extracting it into a shared hook:

- Follows DRY — one source of truth for the loading pattern.
- Makes it trivial to add loading indicators to any new page (`useInertiaLoading(data.length > 0)`).
- Keeps page components clean — they only call the hook and render conditionally.
- Cleanup (removing event listeners, clearing timeouts) is handled centrally.

### `hasData` Parameter

The hook accepts `hasData: boolean` to handle the initial page load case. When Inertia uses eager page loading (the default), data is available on first render. Passing `data.length > 0` ensures the spinner doesn't flash when data is already present. The spinner only activates during actual Inertia navigation events.

## Usage

### NewsFeed (`resources/js/pages/NewsFeed/NewsFeed.tsx`)

- Shows spinner during Inertia page navigation (via `useInertiaLoading`).
- Shows a second spinner at the bottom of the list during infinite scroll loading (via `InfiniteScroll`'s `{loading}` render prop).

### Movies (`resources/js/pages/Movies/Movies.tsx`)

- Shows spinner during Inertia page navigation (via `useInertiaLoading`).

## Challenges & Solutions

### Skeleton Mount/Unmount Layout Bounce

Initially, skeleton components were conditionally rendered with `{loading && <Skeleton/>}`, causing layout shift. Fixed by wrapping in a div with `transition-all duration-300` and `max-h` toggling. Later replaced entirely with a spinner, eliminating the issue.

### `quote.comment` / `quote.setComment` Undefined

`useQuoteCard` returned `data` and `setData` (raw `useHttp` objects), but `QuoteCard` destructured `comment` and `setComment`. Fixed by aliasing in the hook's return: `comment: data.comment` and `setComment: (value) => setData('comment', value)`.
