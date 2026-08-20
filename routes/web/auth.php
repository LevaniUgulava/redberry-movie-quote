<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GoogleController;
use App\Http\Controllers\PasswordResetController;
use Illuminate\Support\Facades\Route;

Route::middleware(['guest'])->group(function (): void {
    Route::middleware('precognition')->group(function (): void {
        Route::post('/register', [AuthController::class, 'register'])->name('register');
        Route::post('/login', [AuthController::class, 'login'])->name('login');

        Route::post('/forgot-password', [PasswordResetController::class, 'forgetPassword'])->name('password.email');
        Route::post('/reset-password', [PasswordResetController::class, 'resetPassword'])->name('password.update');

    });
    Route::get('/reset-password/{token}/{email}', [PasswordResetController::class, 'redirectToReset'])->name('password.reset');

});

Route::middleware('auth:sanctum')->group(function (): void {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});
