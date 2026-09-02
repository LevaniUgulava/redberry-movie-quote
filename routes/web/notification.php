<?php

use App\Http\Controllers\NotificationController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth:sanctum', 'verified'])->prefix('notification')->name('notification.')->group(function () {
    Route::post('/mark-as-read/{id}', [NotificationController::class, 'markAsRead'])->name('mark-as-read');
    Route::post('/mark-all-read', [NotificationController::class, 'markAllAsRead'])->name('mark-all-read');
});
