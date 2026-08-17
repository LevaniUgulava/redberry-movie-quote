<?php

use App\Models\User;
use Illuminate\Foundation\Testing\LazilyRefreshDatabase;
use Illuminate\Support\Facades\URL;

uses(LazilyRefreshDatabase::class);

test('email verification succesfully redirect with valid signature', function () {
    $user = User::factory()->unverified()->create();

    $verificationUrl = URL::temporarySignedRoute(
        'verification.verify',
        now()->addMinutes(60),
        ['id' => $user->id, 'hash' => sha1($user->getEmailForVerification())]
    );
    $response = $this->get($verificationUrl);
    $response->assertRedirect('/');
    expect($user->fresh()->hasVerifiedEmail())->toBeTrue();
});
test("email verification failed, invalid verification url", function () {
    $user = User::factory()->unverified()->create();
    $verificationUrl = URL::temporarySignedRoute(
        'verification.verify',
        now()->addMinutes(60),
        ['id' => $user->id, 'hash' => sha1("asdadasdasdadasdasd")]
    );
    $response=$this->get($verificationUrl);
    $response->assertStatus(403);
});
test("",function(){
    $user = User::factory()->unverified()->create();
    $verificationUrl = URL::temporarySignedRoute(
        'verification.verify',
        now()->subMinutes(1),
        ['id' => $user->id, 'hash' => sha1("asdadasdasdadasdasd")]
    );
    $response = $this->get($verificationUrl);
    $response->assertStatus(403);
});
