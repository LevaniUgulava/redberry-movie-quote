<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\Reset\ForgetPasswordRequest;
use App\Http\Requests\Auth\Reset\PasswordResetRequest;
use App\Service\PasswordResetService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PasswordResetController extends Controller
{
    function __construct(public PasswordResetService $passwordResetService)
    {

    }

    public function redirectToReset(string $token, string $email): RedirectResponse
    {
        return redirect()->route('landing', ['modal' => 'reset', 'token' => $token, 'email' => $email]);

    }

    public function forgetPassword(ForgetPasswordRequest $request): RedirectResponse
    {
        $status = $this->passwordResetService->sendResetEmail($request->only('email'));

        $type = match ($status) {
            Password::ResetLinkSent => "CHECK",
            Password::RESET_THROTTLED => "EMAIL_THROTTLE",
            default => "ERROR"
        };
        Inertia::flash('type', $type);

        return redirect()->route('landing');
    }

    public function resetPassword(PasswordResetRequest $request): RedirectResponse
    {
        $status = $this->passwordResetService->resetPassword($request->validated());

        $type = match ($status) {
            Password::PasswordReset => 'RESET_SUCCESS',
            Password::InvalidToken => 'INVALID_TOKEN',
            default => 'ERROR',
        };
        Inertia::flash('type', $type);
        return redirect()->route('landing');

    }
}
