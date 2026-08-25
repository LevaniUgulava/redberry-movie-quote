<?php

namespace App\Service;

use App\Http\Resources\Movie\MovieResource;
use App\Http\Resources\Quote\QuoteResource;
use App\Models\Movie;
use App\Models\Quote;
use Illuminate\Support\Facades\DB;

class QuoteService
{
    public function index(?string $modal): array
    {
        $user = auth()->user();

        $quotes = Quote::with(['user:id,username', 'user.media', 'movie:id,title,year', 'media'])->get();

        return [
            'currentModal' => $modal,
            'movies' => $modal === 'create' ? MovieResource::collection($user->movies) : [],
            'quotes' => QuoteResource::collection($quotes),
        ];

    }

    public function store(array $data): Quote
    {
        $user = auth()->user();
        $movie = Movie::findOrFail($data['movie_id']);

        return DB::transaction(function () use ($user, $movie, $data) {
            $quote = $user->quotes()->create([
                'movie_id' => $movie->id,
                'quote' => [
                    'ka' => $data['ka_quote'],
                    'en' => $data['en_quote'],
                ]
            ]);

            $quote->addMediaFromRequest('image')->toMediaCollection('quote');

            return $quote;
        });

    }

}
