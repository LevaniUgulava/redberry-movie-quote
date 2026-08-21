<?php

Route::get('/', function () {
    $lang = config('app.locale');
    return redirect("/$lang");
});
Route::prefix('{lang}')->group(function () {
    require __DIR__ . '/web/landing.php';

    require __DIR__ . '/web/auth.php';

    require __DIR__ . '/web/profile.php';

    require __DIR__ . '/web/newsfeed.php';


});
