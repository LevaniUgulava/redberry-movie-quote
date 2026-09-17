<?php

namespace App\Policies;

use App\Models\User;

class UserPolicy
{
    public function view(User $authenticated, User $user): bool
    {
        return $authenticated->id === $user->id;
    }

    public function update(User $authenticated, User $user): bool
    {
        return $authenticated->id === $user->id;
    }
}
