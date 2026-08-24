<?php

use App\Http\Controllers\MovieController;

Route::prefix('/movies')->middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('/', [MovieController::class, 'index'])->name('movies.index');
    Route::post('/store', [MovieController::class, 'store'])->name('movies.store');
    Route::patch('/update/{movie}', [MovieController::class, 'update'])->name('movies.update');

});
