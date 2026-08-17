<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function (Request $request) {
    return Inertia::render('Landing/Landing', [
        'currentModal' => $request->query('modal'),
    ]);
})->name('landing');
