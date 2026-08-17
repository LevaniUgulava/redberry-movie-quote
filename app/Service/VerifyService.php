<?php

namespace App\Service;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Inertia\Inertia;

class VerifyService
{
    public function verify(int $id, string $hash): void
    {
        $user = User::findOrFail($id);

        if (! hash_equals((string) $hash, sha1($user->getEmailForVerification()))) {
            abort(403);
        }

        $alreadyVerified = $user->hasVerifiedEmail();

        if (! $alreadyVerified) {
            $user->markEmailAsVerified();
            Inertia::flash('type', 'VERIFIED');
        }

    }

    public function resend(string $email): void
    {
        $result = 'VERIFY_SENT';
        $user = User::where('email', $email)->first();
        if (! $user) {
            $result = 'ERROR';
        }

        event(new Registered($user));

        Inertia::flash('type', $result);

    }
}
