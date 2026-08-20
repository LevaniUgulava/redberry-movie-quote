<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/email/verify/{id}/{hash}', [AuthController::class, 'verify'])->middleware('signed')->name('verification.verify');
Route::post('/resend', [AuthController::class, 'resend'])->name('verify.resend');
