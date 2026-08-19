<?php

use App\Http\Controllers\ProfileController;

Route::prefix('/profile')->middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('/', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::middleware(['precognition'])->patch('/update', [ProfileController::class, 'update'])->name('profile.update');

});
