<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;

class GoogleController extends Controller
{
    public function redirectToProvider(): RedirectResponse
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleProviderCallback(): RedirectResponse
    {
        try {
            $socialUser = Socialite::driver('google')->user();

            $email = $socialUser->getEmail();
            if (! $email) {
                return redirect()->route('landing');
            }

            $user = User::where('email', $email)->first();

            if (! $user) {
                $user = User::create([
                    'username' => $this->uniqueUsername($socialUser->getName()),
                    'email' => $email,
                    'google_id' => $socialUser->getId(),
                    'email_verified_at' => now(),
                ]);
            } elseif (is_null($user->google_id)) {
                $user->update([
                    'google_id' => $socialUser->getId(),
                ]);
            }

            Auth::login($user);
        } catch (\Throwable) {
            return redirect()->route('landing');
        }

        return redirect()->intended('/');
    }

    private function uniqueUsername(?string $name): string
    {
        $username = $name ?: 'user';

        while (User::where('username', $username)->exists()) {
            $username = ($name ?: 'user').'_'.Str::lower(Str::random(5));
        }

        return $username;
    }
}
