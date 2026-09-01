<?php

namespace App\Service;

use App\Http\Resources\Movie\MovieResource;
use App\Http\Resources\Quote\QuoteResource;
use App\Models\Movie;
use App\Models\Quote;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\UploadedFile;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class QuoteService
{
    public function index(?string $modal, ?string $search): array
    {
        $user = auth()->user();

        $quotes = QueryBuilder::for(Quote::class)->with([
            'user:id,username',
            'user.media',
            'movie:id,title,year',
            'media',
            'comments' => function ($query) {
                $query->latest()->limit(2);
            },
            'comments.user:id,username',
            'likes'
        ])->withCount(['comments', 'likes'])
            ->allowedFilters(
                AllowedFilter::scope('search')
            )->get();

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

    public function update(array $data, Quote $quote, ?UploadedFile $image = null): Quote
    {
        $quote->update([
            'quote' => [
                'en' => $data['en_quote'],
                'ka' => $data['ka_quote'],
            ]
        ]);

        if ($image) {
            $quote->getFirstMedia('quote')?->delete();
            $quote->addMedia($image)->toMediaCollection('quote');
        }

        return $quote;
    }

}
