<?php

use App\Models\User;

test('guests are forbidden from accessing the newsfeed', function () {
    $this->get(localeUrl('/newsfeed'))->assertForbidden();
});

test('authenticated and verified users can access the newsfeed', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(localeUrl('/newsfeed'))
        ->assertOk();
});
