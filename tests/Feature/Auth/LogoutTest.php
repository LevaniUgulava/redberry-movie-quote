<?php

use App\Models\User;

test('authenticated users can log out', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(localeUrl('/logout'))
        ->assertRedirect('/');

    $this->assertGuest('web');
});

test('logout invalidates the session', function () {
    $user = User::factory()->create();

    $session = $this->actingAs($user, 'web')->app['session'];

    $sessionId = $session->getId();

    $this->post(localeUrl('/logout'))->assertRedirect('/');

    expect($session->getId())->not->toBe($sessionId);
});

test('guests are redirected when trying to log out', function () {
    $this->post(localeUrl('/logout'))->assertRedirect('/');
});
