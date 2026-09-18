<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use App\Service\NotificationService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;

class NotificationController extends Controller
{
    use AuthorizesRequests;

    public function __construct(public NotificationService $notificationService) {}

    public function markAsRead(int $id): RedirectResponse
    {
        $this->authorize('update', Notification::findOrFail($id));

        $this->notificationService->markAsRead(auth()->user(), $id);

        return back();
    }

    public function markAllAsRead(): RedirectResponse
    {
        $this->authorize('updateAny', Notification::class);

        $this->notificationService->markAllAsRead(auth()->user());

        return back();
    }
}