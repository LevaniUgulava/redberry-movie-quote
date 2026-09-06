<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\QuoteController;
use Illuminate\Support\Facades\Route;

Route::middleware(['ensure.authenticated', 'verified'])->group(function () {
    Route::name('quotes.')->group(function () {
        Route::get('/newsfeed', [QuoteController::class, 'index'])->name('index');
        Route::prefix('quote')->group(function () {
            Route::post('/store', [QuoteController::class, 'store'])->name('store');
            Route::put('/update/{quote}', [QuoteController::class, 'update'])->name('update');
            Route::delete('/delete/{quote}', [QuoteController::class, 'destroy'])->name('destroy');
        });
    });
    Route::post('/comment/{quote}', [CommentController::class, 'store'])->name('comment.store');
    Route::post('/like/{quote}', [LikeController::class, 'store'])->name('like.store');
});
