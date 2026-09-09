<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\Auth\ResendVerifyRequest;
use App\Service\AuthService;
use App\Service\VerifyService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function __construct(
        private AuthService $authService,
        private VerifyService $service) {}

    public function register(RegisterRequest $request): RedirectResponse
    {

        $this->authService->register($request->validated());

        return redirect()->intended('/');
    }

    public function login(LoginRequest $request): RedirectResponse
    {
        $this->authService
            ->login(
                $request->only('login', 'password'),
                $request->boolean('remember'));
        $request->session()->regenerate();

        return redirect()->intended('/');
    }

    public function logout(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('landing');
    }

    public function verify(int $id, string $hash): RedirectResponse
    {
        $this->service->verify($id, $hash);

        return redirect('/');
    }

    public function resend(ResendVerifyRequest $request): RedirectResponse
    {
        $this->service->resend($request->email);

        return redirect('/');

    }
}
