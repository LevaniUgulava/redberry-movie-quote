<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->count(20)->create();

        $this->call([
            MovieSeeder::class,
            QuoteSeeder::class,
            CommentSeeder::class,
            LikeSeeder::class,
        ]);

    }
}
