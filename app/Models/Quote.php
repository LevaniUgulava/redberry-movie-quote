<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Translatable\Attributes\Translatable;
use Spatie\Translatable\HasTranslations;

#[Fillable('quote', 'movie_id', 'user_id')]
#[Translatable('quote')]
class Quote extends Model implements HasMedia
{
    use HasFactory, HasTranslations, InteractsWithMedia;

    protected function casts(): array
    {
        return [
            'quote' => 'json',
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
            $lowerTerm = $this->getCleanText($search, '@');
            $query->whereHas('movie', function ($q) use ($lowerTerm, $locale) {
                $q->whereRaw("LOWER(title->>'\$.{$locale}') LIKE ?", ["%{$lowerTerm}%"]);
            });
        } elseif (str_starts_with($search, '#')) {
            $lowerTerm = $this->getCleanText($search, '#');
            $query->whereRaw("LOWER(quote->>'\$.{$locale}') LIKE ?", ["%{$lowerTerm}%"]);
        } else {
            $lowerTerm = $this->getCleanText($search);
            $query->where(function ($q) use ($lowerTerm, $locale) {
                $q->whereHas('movie', function ($sub) use ($lowerTerm, $locale) {
                    $sub->whereRaw("LOWER(title->>'\$.{$locale}') LIKE ?", ["%{$lowerTerm}%"]);
                })->orWhereRaw("LOWER(quote->>'\$.{$locale}') LIKE ?", ["%{$lowerTerm}%"]);
            });
        }
    }

    private function getCleanText(string $text, ?string $prefix = null): string
    {
        $term = $prefix ? ltrim($text, $prefix) : $text;

        return strtolower(trim($term));
    }
}
