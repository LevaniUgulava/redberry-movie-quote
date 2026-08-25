<?php

use App\Http\Controllers\QuoteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('/newsfeed', [QuoteController::class, 'index'])->name('quotes.index');
    Route::post('/quote/store',[QuoteController::class,'store'])->name('quote.store');
});

