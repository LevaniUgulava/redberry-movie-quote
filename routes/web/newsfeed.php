<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\QuoteController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('/newsfeed', [QuoteController::class, 'index'])->name('quotes.index');
    Route::post('/quote/store',[QuoteController::class,'store'])->name('quote.store');

    Route::post('/comment/{id}',[CommentController::class,'store'])->name('comment.store');
    Route::post('/like/{id}',[LikeController::class,'store'])->name('like.store');
});

