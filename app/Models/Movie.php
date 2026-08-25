<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Translatable\Attributes\Translatable;
use Spatie\Translatable\HasTranslations;

#[Fillable('title', 'year', 'director', 'description')]
#[Translatable('title', 'director', 'description')]
class Movie extends Model implements HasMedia
{
    use HasTranslations, InteractsWithMedia;

    protected function casts(): array
    {
        return [
            'title' => 'json',
            'description' => 'json',
            'director' => 'json',
        ];
    }

    public function genres(): HasMany
    {
        return $this->hasMany(Genre::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function quotes(): HasMany
    {
        return $this->hasMany(Quote::class);
    }
}
