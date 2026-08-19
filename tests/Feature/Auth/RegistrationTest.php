<?php

use App\Models\User;
use Illuminate\Support\Facades\Hash;

test('new users can register', function () {
    $response = $this->post(localeUrl('/register'), [
        'username' => 'Test User',
        'email' => 'test@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    $response->assertRedirect('/');

    $user = User::where('email', 'test@example.com')->firstOrFail();

    $this->assertModelExists($user);

    expect(Hash::check('password', $user->password))->toBeTrue();
});

test('registration requires a name', function () {
    $this->post(localeUrl('/register'), [
        'email' => 'test@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ])->assertSessionHasErrors('username');
});

test('registration requires a valid email', function () {
    $this->post(localeUrl('/register'), [
        'username' => 'Test User',
        'email' => 'not-an-email',
        'password' => 'password',
        'password_confirmation' => 'password',
    ])->assertSessionHasErrors('email');
});

test('registration requires a password confirmation', function () {
    $this->post(localeUrl('/register'), [
        'username' => 'Test User',
        'email' => 'test@example.com',
        'password' => 'password',
        'password_confirmation' => 'different-password',
    ])->assertSessionHasErrors('password');
});

test('registration rejects duplicate emails', function () {
    User::factory()->create(['email' => 'test@example.com']);

    $this->post(localeUrl('/register'), [
        'username' => 'Test User',
        'email' => 'test@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ])->assertSessionHasErrors('email');
});
