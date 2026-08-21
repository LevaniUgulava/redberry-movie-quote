<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('/newsfeed', function () {
        return Inertia::render('NewsFeed/NewsFeed');
    });
});

