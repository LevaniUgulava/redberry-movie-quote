<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\Quote;
use App\Models\User;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $quotes = Quote::all();
        Comment::factory()->count(600)->sequence(fn () => [
            'quote_id' => ($quote = $quotes->random())->id,
            'user_id' => User::whereNot('id', $quote->user_id)->inRandomOrder()->first()->id,
        ])->create();
    }
}
