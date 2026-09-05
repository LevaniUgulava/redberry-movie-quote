<?php

use App\Http\Controllers\LandingController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->get('/', [LandingController::class, 'index'])->name('landing');
