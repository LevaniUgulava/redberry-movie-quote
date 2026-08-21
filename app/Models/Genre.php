<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable('name', 'movie_id')]
class Genre extends Model
{
    public function movie(): BelongsTo
    {
        return $this->belongsTo(Movie::class);
    }
}
