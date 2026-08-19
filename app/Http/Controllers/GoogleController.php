<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class GoogleController extends Controller
{
    public function redirectToProvider(): RedirectResponse
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleProviderCallback(): RedirectResponse
    {
        $socialUser = Socialite::driver('google')->user();

        $user = User::firstOrCreate([
            'google_id' => $socialUser->getId(),
        ], [
            'username' => $socialUser->getName(),
            'email' => $socialUser->getEmail(),
            'email_verified_at' => now(),
            'google_id' => $socialUser->getId(),
        ]);
        Auth::login($user);

        return redirect()->intended('/');
    }
}
