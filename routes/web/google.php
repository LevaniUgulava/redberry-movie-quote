<?php

use App\Http\Controllers\GoogleController;
use Illuminate\Support\Facades\Route;

Route::prefix('/google')->group(function () {
    Route::get('/redirect', [GoogleController::class, 'redirectToProvider'])->name('redirect');
    Route::get('/callback', [GoogleController::class, 'handleProviderCallback'])->name('callback');
});
