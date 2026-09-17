<?php

namespace App\Policies;

use App\Models\Notification;
use App\Models\User;

class NotificationPolicy
{
    public function update(User $user, Notification $notification): bool
    {
        return $user->id === $notification->receiver_id;
    }

    public function updateAny(User $user): bool
    {
        return $user->notifications()->exists();
    }
}
