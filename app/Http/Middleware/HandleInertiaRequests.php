<?php

namespace App\Http\Middleware;

use App\Http\Resources\Notification\NotificationResource;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = auth()->user();

        return [
            ...parent::share($request),
            'auth' => fn() => rescue(function () use ($user) {

                return $user ? [
                    'id' => $user->id,
                    'username' => $user->username,
                    'email' => $user->email,
                    'isGoogleAuthenticate' => (bool)$user->google_id,
                    'avatar' => $user->avatar
                ] : null;
            }, null, false),
            'locale' => fn() => app()->getLocale(),
            'notificationsQuantity' => fn() => $user?->notifications()->where('read', false)->count() ?? 0,
            'notifications' => Inertia::optional(fn() => $request->user()
                ? (NotificationResource::collection($user->notifications()->with(['sender:id,username'])->latest()->limit(5)->get()))->resolve()
                : [])
        ];
    }
}
