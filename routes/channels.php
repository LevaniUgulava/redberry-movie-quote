<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int)$user->id === (int)$id;
});

Broadcast::channel('quote.{id}', function ($user, $id) {
    return $user !== null;
});

Broadcast::channel('notification.{id}', function ($user, $id) {
    return $user !== null;
});

