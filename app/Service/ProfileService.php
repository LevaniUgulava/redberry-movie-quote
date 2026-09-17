<?php

namespace App\Service;

use App\Models\User;
use App\Notifications\CustomEmailVerifyNotification;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use Illuminate\Validation\ValidationException;

class ProfileService
{
    public function passwordChange(array $data, User $user): string
    {
        if (! Hash::check($data['current_password'], $user->password)) {
            throw ValidationException::withMessages([
                'current_password' => __('The current password is incorrect.'),
            ]);
        }

        return Hash::make($data['password']);
    }

    public function emailChange(array $data, User $user): void
    {
        $user->emailChanges()->updateOrCreate(
            ['user_id' => $user->id],
            ['new_email' => $data['email']]
        );

        Notification::route('mail', $data['email'])
            ->notify(new CustomEmailVerifyNotification($user, $data['email']));
    }

    public function changeAvatar(User $user): void
    {
        if ($user->hasMedia('avatar')) {
            $user->clearMediaCollection('avatar');
        }

        $user->addMediaFromRequest('avatar')->toMediaCollection('avatar');
    }
}
