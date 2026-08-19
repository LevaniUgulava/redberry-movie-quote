<?php

use App\Models\User;
use Illuminate\Foundation\Testing\LazilyRefreshDatabase;

uses(LazilyRefreshDatabase::class);

test('update user profile partially, only username', function () {
    $user = User::factory()->create(['username' => 'old_name']);
    $this->actingAs($user)
        ->from(route('profile.edit'))
        ->patch(route('profile.update'), [
            'username' => 'new_name',
        ])
        ->assertRedirect(route('profile.edit'));
    expect($user->fresh()->username)->toBe('new_name');

});

test('update user profile partially, only password', function () {
    $user = User::factory()->create();
    $oldPasswordHash = $user->password;

    $this->actingAs($user)
        ->from(route('profile.edit'))
        ->patch(route('profile.update'), [
            'password' => 'new-secure-password',
            'password_confirmation' => 'new-secure-password',
        ])
        ->assertRedirect(route('profile.edit'));

    $user->refresh();

    expect($user->password)->not->toBe($oldPasswordHash);
    expect(Hash::check('new-secure-password', $user->password))->toBeTrue();
});

