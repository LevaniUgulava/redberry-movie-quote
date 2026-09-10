<?php

use App\Models\User;
use Illuminate\Foundation\Testing\LazilyRefreshDatabase;

test('update user profile partially, only username', function () {
    $user = User::factory()->create(['username' => 'old_name']);

    $this->actingAs($user)
        ->from(localeUrl('/profile'))
        ->patch(localeUrl('/profile/update'), [
            'username' => 'new_name',
        ])
        ->assertRedirect(localeUrl('/profile'));

    expect($user->fresh()->username)->toBe('new_name');
});

test('update user profile partially, only password', function () {
    $user = User::factory()->create();
    $oldPasswordHash = $user->password;

    $this->actingAs($user)
        ->from(localeUrl('/profile'))
        ->patch(localeUrl('/profile/update'), [
            'current_password' => 'password',
            'password' => 'new-secure-password',
            'password_confirmation' => 'new-secure-password',
        ])
        ->assertRedirect(localeUrl('/profile'));

    $user->refresh();

    expect($user->password)->not->toBe($oldPasswordHash);
    expect(Hash::check('new-secure-password', $user->password))->toBeTrue();
});

