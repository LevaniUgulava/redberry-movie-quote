<?php

namespace Database\Factories;

use App\Models\Quote;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Quote>
 */
class QuoteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'quote' => [
                'en' => $this->faker->sentence(),
                'ka' => $this->faker->sentence(),
            ],
            'created_at' => $this->faker->dateTimeBetween('-1 years', 'now'),
            'updated_at' => $this->faker->dateTimeBetween('-1 years', 'now'),

        ];
    }

    public function configure(): static
    {
        return $this->afterCreating(function (Quote $quote) {
            $quote->addMedia(storage_path('app/public/seeder/'.fake()->numberBetween(1, 20).'.jpg'))
                ->preservingOriginal()
                ->toMediaCollection('quote');
        });
    }
}
