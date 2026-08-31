<?php

namespace App\Service;

use App\Enums\NotificationType;
use App\Events\NotificationUpdated;
use App\Models\User;

class NotificationService
{
    public function markAllAsRead(User $user): void
    {
        $user->notifications()->update(['read' => true]);
    }
    public function markAsRead(User $user, int $notificationId): bool
    {
        $notification = $user->notifications()->where('id', $notificationId)->first();

        if ($notification) {
            $notification->update(['read' => true]);
            return true;
        }

        return false;
    }
    public function store(User $user, int $receiver_id, string $type) : void
    {
        $notification = $user->sendNotification()->create([
            'receiver_id' => $receiver_id,
            'type' => $type,
        ]);
        $info = [
            'id'=>$notification->id,
            'type' => $type,
            'user' => [
                'id' => $user->id,
                'username' => $user->username,
                'avatar' => $user->avatar
            ],
            'time' => now()->diffForHumans(),
        ];
        event(new NotificationUpdated($receiver_id, $info));
    }
}
