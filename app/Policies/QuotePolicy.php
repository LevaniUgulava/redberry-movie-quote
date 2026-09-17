<?php

namespace App\Policies;

use App\Models\Quote;
use App\Models\User;

class QuotePolicy
{
    public function viewAny(User $user): bool
    {
        return $user->hasVerifiedEmail();
    }

    public function create(User $user, int $movieId): bool
    {
        return $user->movies()->whereKey($movieId)->exists();
    }

    public function update(User $user, Quote $quote): bool
    {
        return $user->id === $quote->user_id;
    }

    public function delete(User $user, Quote $quote): bool
    {
        return $user->id === $quote->user_id;
    }

    public function like(User $user, Quote $quote): bool
    {
        return $user->hasVerifiedEmail();
    }
}
