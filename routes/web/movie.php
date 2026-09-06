<?php

use App\Http\Controllers\MovieController;

Route::prefix('/movies')->middleware(['ensure.authenticated', 'verified'])->group(function () {
    Route::get('/', [MovieController::class, 'index'])->name('movies.index');
    Route::get('/{movie}', [MovieController::class, 'show'])->name('movies.show');
    Route::post('/store', [MovieController::class, 'store'])->name('movies.store');
    Route::patch('/update/{movie}', [MovieController::class, 'update'])->name('movies.update');
    Route::delete('/destroy/{movie}', [MovieController::class, 'destroy'])->name('movies.destroy');
});
