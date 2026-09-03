<?php

namespace Database\Seeders;

use App\Models\Movie;
use App\Models\User;
use Illuminate\Database\Seeder;

class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Movie::factory()->count(100)->create([
            'user_id' => fn () => User::inRandomOrder()->first()->id,
        ]);

    }
}
