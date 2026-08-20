<?php

namespace App\Service;

use App\Models\EmailChange;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Inertia\Inertia;

class VerifyService
{
    public function verify(int $id, string $hash): void
    {
        $emailChange = EmailChange::where('user_id', $id)->first();
        $user = $emailChange?->user ?? User::findOrFail($id);

        $emailToVerify = $emailChange
            ? $emailChange->new_email
            : $user->getEmailForVerification();

        if (!hash_equals((string)$hash, sha1($emailToVerify))) {
            abort(403);
        }

        if ($emailChange) {
            $user->update([
                'email' => $emailChange->new_email,
                'email_verified_at' => now(),
            ]);
            $emailChange->delete();
            Inertia::flash('type', 'EMAIL_CHANGED');
            return;
        }

        if (!$user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
            Inertia::flash('type', 'VERIFIED');
        }
    }

    public function resend(string $email): void
    {
        $result = 'VERIFY_SENT';
        $user = User::where('email', $email)->first();
        if (!$user) {
            $result = 'ERROR';
        }

        event(new Registered($user));

        Inertia::flash('type', $result);

    }
}
