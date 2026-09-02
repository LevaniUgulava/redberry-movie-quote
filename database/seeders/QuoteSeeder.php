<?php

namespace Database\Seeders;

use App\Models\Movie;
use App\Models\Quote;
use Illuminate\Database\Seeder;

class QuoteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = Movie::all();

        Quote::factory()
            ->count(300)
            ->sequence(fn () => [
                'movie_id' => ($movie = $movies->random())->id,
                'user_id' => $movie->user_id,
            ])
            ->create();
    }
}
