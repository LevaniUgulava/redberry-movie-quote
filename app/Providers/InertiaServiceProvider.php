<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\ExceptionResponse;
use Inertia\Inertia;

class InertiaServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        Inertia::handleExceptionsUsing(function (ExceptionResponse $response) {
            return $response->render('Error/ErrorPage', [
                'status' => $response->statusCode(),
            ])->withSharedData();
        });
    }
}
