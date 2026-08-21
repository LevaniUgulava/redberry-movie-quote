<?php

use Inertia\Inertia;

Route::prefix('/movies')->middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Movies/Movies');
    })->name('movies.index');
});
