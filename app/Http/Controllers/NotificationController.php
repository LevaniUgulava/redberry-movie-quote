<?php

namespace App\Http\Controllers;

use App\Service\NotificationService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificationController extends Controller
{

    function __construct(public NotificationService $notificationService)
    {

    }

    public function markAsRead(int $id, NotificationService $notificationService) : RedirectResponse
    {
        $user = auth()->user();

        $notificationService->markAsRead($user, $id);

        return back();
    }

    public function markAllAsRead(NotificationService $notificationService) : RedirectResponse
    {
        $user = auth()->user();

        $notificationService->markAllAsRead($user);

        return back();
    }
}
