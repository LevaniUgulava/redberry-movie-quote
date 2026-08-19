<?php

use Illuminate\Foundation\Testing\LazilyRefreshDatabase;
use Laravel\Socialite\Two\User;

uses(LazilyRefreshDatabase::class);

test('user redirected to google auth', function () {
    $response = $this->get('/google/redirect');
    $response->assertStatus(302);
});
test('google callback successfully', function () {
    Socialite::fake('google', User::fake([
        'id' => 'google_123',
        'username' => 'Test User',
        'email' => 'google@gmail.com',
    ]));

    $response = $this->get('/google/callback');

    $response->assertRedirect('/');

    $this->assertDatabaseHas('users', [
        'google_id' => 'google_123',
        'username' => 'Test User',
        'email' => 'google@gmail.com',
    ]);

    $this->assertAuthenticated();
});
