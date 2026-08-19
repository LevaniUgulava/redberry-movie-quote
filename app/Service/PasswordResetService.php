<?php

namespace App\Service;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;

class PasswordResetService
{
    public function sendResetEmail(array $data): string
    {
        $status = Password::sendResetLink(
            $data
        );
        return $status;
    }

    public function resetPassword(array $data): string
    {
        $status = Password::reset($data, function ($user, $password) {
            $user->forceFill([
                'password' => Hash::make($password),
            ])->setRememberToken(Str::random(60));
            $user->save();

        });
        return $status;
    }
}
