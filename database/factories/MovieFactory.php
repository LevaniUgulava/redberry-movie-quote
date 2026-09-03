<?php

namespace Database\Factories;

use App\Models\Movie;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Movie>
 */
class MovieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => [
                'en' => $this->faker->word(),
                'ka' => $this->faker->word(),
            ],
            'year' => $this->faker->year(),
            'director' => [
                'en' => $this->faker->name(),
                'ka' => $this->faker->name(),
            ],
            'description' => [
                'en' => $this->faker->paragraph(),
                'ka' => $this->faker->paragraph(),
            ],
            'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'updated_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (Movie $movie) {
            $movie->addMedia(storage_path('app/public/seeder/'.fake()->numberBetween(1, 20).'.jpg'))
                ->preservingOriginal()
                ->toMediaCollection('movie');
        });
    }
}
