<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Translatable\Attributes\Translatable;
use Spatie\Translatable\HasTranslations;

#[Fillable('quote', 'movie_id', 'user_id')]
#[Translatable('quote')]
class Quote extends Model implements HasMedia
{
    use InteractsWithMedia, HasTranslations;


    protected function casts(): array
    {
        return [
            'quote' => 'json'
        ];
    }

    public function movie(): BelongsTo
    {
        return $this->belongsTo(Movie::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function likes(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'likes');
    }

    public function scopeSearch(Builder $query, string $search)
    {
        $locale = app()->getLocale();

        if (str_starts_with($search, '@')) {
            $term = ltrim($search, '@');
            $query->whereHas('movie', function ($q) use ($term, $locale) {
                $q->where("title->{$locale}", 'like', "%{$term}%");
            });
        } elseif (str_starts_with($search, '#')) {
            $term = ltrim($search, '#');
            $query->where("quote->{$locale}", 'like', "%{$term}%");
        } else {
            $term = $search;
            $query->where(function ($q) use ($term, $locale) {
                $q->whereHas('movie', function ($sub) use ($term, $locale) {
                    $sub->where("title->{$locale}", 'like', "%{$term}%");
                })->orWhere("quote->{$locale}", 'like', "%{$term}%");
            });
        }
    }
}
