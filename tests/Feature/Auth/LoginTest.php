<?php

use App\Models\User;

test('users can log in with their email', function () {
    $user = User::factory()->create([
        'email' => 'test@example.com',
        'password' => 'password',
    ]);

    $this->post(localeUrl('/login'), [
        'login' => 'test@example.com',
        'password' => 'password',
    ])->assertRedirect('/');

    $this->assertAuthenticatedAs($user);
});

test('users can log in with their name', function () {
    $user = User::factory()->create([
        'name' => 'Test User',
        'password' => 'password',
    ]);

    $this->post(localeUrl('/login'), [
        'login' => 'Test User',
        'password' => 'password',
    ])->assertRedirect('/');

    $this->assertAuthenticatedAs($user);
});

test('users cannot log in with a wrong password', function () {
    $user = User::factory()->create(['password' => 'correct-password']);

    $this->post(localeUrl('/login'), [
        'login' => $user->email,
        'password' => 'wrong-password',
    ])->assertSessionHasErrors('login');

    $this->assertGuest();
});

test('users cannot log in with an unregistered email', function () {
    $this->post(localeUrl('/login'), [
        'login' => 'unknown@example.com',
        'password' => 'password',
    ])->assertSessionHasErrors('login');

    $this->assertGuest();
});

test('users cannot log in with an unregistered name', function () {
    $this->post(localeUrl('/login'), [
        'login' => 'Unknown User',
        'password' => 'password',
    ])->assertSessionHasErrors('login');

    $this->assertGuest();
});

test('users can log in with remember me', function () {
    $user = User::factory()->create(['password' => 'password']);

    $this->post(localeUrl('/login'), [
        'login' => $user->email,
        'password' => 'password',
        'remember' => true,
    ])->assertRedirect('/');

    $this->assertAuthenticatedAs($user);

    $this->assertNotNull($user->fresh()->remember_token);
});
