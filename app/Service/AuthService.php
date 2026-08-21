<?php

namespace App\Service;

use App\Models\User;
use App\Notifications\CustomEmailVerifyNotification;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use function Laravel\Prompts\notify;

class AuthService
{
    public function register(array $data): void
    {
        $user = User::create($data);
        $user->notify(new CustomEmailVerifyNotification($user));
        Inertia::flash('type', 'VERIFY_SENT');

    }

    public function login(array $data, bool $remember): void
    {
        $login = $data['login'];

        $field = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        $credentials = [$field => $login, 'password' => $data['password']];

        if (!Auth::validate($credentials)) {
            throw ValidationException::withMessages([
                'login' => __('auth.failed'),
            ]);
        }

        $user = User::where($field, $login)->firstOrFail();

        if (!$user->hasVerifiedEmail()) {
            Inertia::flash('unverified_email', $user->email);
            throw ValidationException::withMessages([
                'login' => 'Please verify your email before logging in.',
            ]);
        }

        Auth::login($user, $remember);

    }
}
