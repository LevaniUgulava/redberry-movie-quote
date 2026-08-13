<?php

use App\Models\User;
use Illuminate\Foundation\Testing\LazilyRefreshDatabase;

uses(LazilyRefreshDatabase::class);

test('authenticated users can log out', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post('/logout')
        ->assertRedirect('/');

    $this->assertGuest('web');
});

test('logout invalidates the session', function () {
    $user = User::factory()->create();

    $session = $this->actingAs($user, 'web')->app['session'];

    $sessionId = $session->getId();

    $this->post('/logout')->assertRedirect('/');

    expect($session->getId())->not->toBe($sessionId);
});

test('guests are redirected when trying to log out', function () {
    $this->post('/logout')->assertRedirect(route('login'));
});
