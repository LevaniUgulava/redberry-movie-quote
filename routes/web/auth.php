<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GoogleController;
use Illuminate\Support\Facades\Route;
use function Pest\Laravel\get;

Route::middleware(['guest', 'precognition'])->group(function (): void {
    Route::post('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
});

Route::middleware('auth:sanctum')->group(function (): void {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});

Route::prefix('/google')->group(function () {
    Route::get('/redirect', [GoogleController::class, 'redirectToProvider'])->name('redirect');
    Route::get('/callback', [GoogleController::class, 'handleProviderCallback'])->name('callback');
});
