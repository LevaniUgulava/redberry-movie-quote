<?php

use Laravel\Socialite\Two\User;

test('user redirected to google auth', function () {
    $response = $this->get(localeUrl('/google/redirect'));
    $response->assertStatus(302);
});

test('google callback successfully', function () {
    Socialite::fake('google', User::fake([
        'id' => 'google_123',
        'name' => 'google_123',
        'email' => 'google@gmail.com',
    ]));

    $response = $this->get(localeUrl('/google/callback'));

    $response->assertRedirect('/');

    $this->assertDatabaseHas('users', [
        'google_id' => 'google_123',
        'name' => 'google_123',
        'email' => 'google@gmail.com',
    ]);

    $this->assertAuthenticated();
});
