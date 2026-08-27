<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Notifications\CustomEmailVerifyNotification;
use App\Notifications\CustomResetPasswordNotification;
use Database\Factories\UserFactory;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Override;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

#[Fillable(['username', 'email', 'password', 'google_id', 'email_verified_at'])]
#[Hidden(['password', 'remember_token'])]
class User extends Authenticatable implements MustVerifyEmail, HasMedia
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable, InteractsWithMedia;

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    #[Override]
    public function sendEmailVerificationNotification(): void
    {
        $this->notify(new CustomEmailVerifyNotification());
    }

    public function Avatar(): Attribute
    {
        //?: spatie return empty string instead if null, ?: is correct check to check any falsy value
        return Attribute::make(get: fn(): string => $this->getFirstMediaUrl('avatar') ?: asset('storage/DefaultProfile.png'));
    }

    public function sendPasswordResetNotification(#[\SensitiveParameter] $token): void
    {
        $this->notify(new CustomResetPasswordNotification($token));
    }

    public function emailChanges(): hasOne
    {
        return $this->hasOne(EmailChange::class);
    }


    public function movies(): HasMany
    {
        return $this->hasMany(Movie::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function quotes(): HasMany
    {
        return $this->hasMany(Quote::class);
    }

    public function likes(): BelongsToMany
    {
        return $this->belongsToMany(Quote::class, 'likes');
    }

    public function notifications(): HasMany
    {
        return $this->hasMany(Notification::class, 'receiver_id');
    }

    public function sendNotification(): HasMany
    {
        return $this->hasMany(Notification::class, 'sender_id');
    }
}
