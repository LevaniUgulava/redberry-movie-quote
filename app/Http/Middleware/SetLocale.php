<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SetLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $lang = $request->lang;
        $allowedLocales = explode(',', config('app.locales'));
        if(in_array($lang,$allowedLocales)) {
            app()->setLocale($lang);
        }

        $request->route()->forgetParameter('lang');
        return $next($request);
    }
}
