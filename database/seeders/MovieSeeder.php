<?php

namespace Database\Seeders;

use App\Models\Movie;
use App\Models\User;
use Database\Factories\GeorgianData;
use Illuminate\Database\Seeder;

class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Movie::factory()
            ->count(100)
            ->create([
                'user_id' => fn () => User::inRandomOrder()->first()->id,
            ])
            ->each(function (Movie $movie) {
                $movie->genres()->createMany(
                    collect(GeorgianData::genres(fake()->numberBetween(1, 4)))
                        ->map(fn (string $name) => ['name' => $name])
                        ->toArray()
                );
            });
    }
}
