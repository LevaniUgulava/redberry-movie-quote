---
paths:
  - 'app/Http/Controllers/**'
---

# Controllers

## Logout behind auth:sanctum must target the web guard
Routes guarded by auth:sanctum make Laravel's Authenticate middleware call shouldUse('sanctum'), so Auth::logout() resolves to the sanctum RequestGuard, which has no logout() method (BadMethodCallException). For session-based Inertia apps Sanctum authenticates through the web guard — logout must call Auth::guard('web')->logout() followed by session invalidate() + regenerateToken(). In tests, assert logout on the web guard explicitly (assertGuest('web')) because the sanctum RequestGuard caches the user during the request.
