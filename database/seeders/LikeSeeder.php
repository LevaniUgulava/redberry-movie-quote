<?php

namespace Database\Seeders;

use App\Models\Quote;
use App\Models\User;
use Illuminate\Database\Seeder;

class LikeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $quotes = Quote::all();
        $users = User::all();

        $quotes->each(function ($quote) use ($users) {
            $quote->likes()->attach(
                $users->random(rand(1, 10))->pluck('id')
            );
        });
    }
}
