<?php

namespace App\Service;

use App\Http\Resources\Movie\MovieEditResource;
use App\Http\Resources\Movie\MovieResource;
use App\Http\Resources\Movie\MovieWithQuotesResource;
use App\Http\Resources\Quote\QuoteEditResource;
use App\Models\Movie;
use Illuminate\Support\Facades\DB;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class MovieService
{
    public function index(array $data): array
    {
        $user = auth()->user();
        $editingMovie = $data['id']
            ? $user->movies()->with('genres')->findOrFail($data['id'])
            : null;
        $movies = QueryBuilder::for(
            $user->movies()->withCount('comments')
        )
            ->allowedFilters(
                AllowedFilter::scope('search')
            )
            ->latest()
            ->paginate(9);

        return [
            'currentModal' => $data['modal'],
            'editingMovie' => $editingMovie ? (new MovieEditResource($editingMovie))->resolve() : null,
            'movies' => MovieResource::collection($movies),
        ];
    }

    public function show(Movie $movie, ?string $modal, string|int|null $quote_id): array
    {
        $movie->load(['genres', 'quotes' => function ($query) {
            $query->withCount(['comments', 'likes'])
                ->withExists(['likes as is_liked' => function ($q) {
                    $q->where('user_id', auth()->id());
                }])->latest();
        }]);

        $quote = is_numeric($quote_id)
            ? $movie->quotes()->withCount(['comments', 'likes'])
                ->withExists(['likes as is_liked' => function ($q) {
                    $q->where('user_id', auth()->id());
                }])->find((int) $quote_id)
            : null;

        return [
            'quote' => $quote ? (new QuoteEditResource($quote))->resolve() : null,
            'movie' => (new MovieWithQuotesResource($movie))->resolve(),
            'currentModal' => $modal,
        ];
    }

    public function update(Movie $movie, array $data): Movie
    {
        return DB::transaction(function () use ($movie, $data) {
            $movie->update([
                'title' => [
                    'en' => $data['en_title'] ?? $movie->getTranslation('title', 'en'),
                    'ka' => $data['ka_title'] ?? $movie->getTranslation('title', 'ka'),
                ],
                'year' => $data['year'] ?? $movie->year,
                'director' => [
                    'en' => $data['en_director'] ?? $movie->getTranslation('director', 'en'),
                    'ka' => $data['ka_director'] ?? $movie->getTranslation('director', 'ka'),
                ],
                'description' => [
                    'en' => $data['en_description'] ?? $movie->getTranslation('description', 'en'),
                    'ka' => $data['ka_description'] ?? $movie->getTranslation('description', 'ka'),
                ],
            ]);

            if (isset($data['genres'])) {
                $movie->genres()->delete();
                $movie->genres()->createMany(
                    collect($data['genres'])->map(fn ($genre) => ['name' => $genre])->toArray()
                );
            }

            if (isset($data['image'])) {
                $movie->clearMediaCollection('movie');
                $movie->addMedia($data['image'])->toMediaCollection('movie');
            }

            return $movie;
        });
    }

    public function store(array $data): Movie
    {
        return DB::transaction(function () use ($data) {

            $user = auth()->user();

            $movie = $user->movies()->create([
                'title' => [
                    'en' => $data['en_title'],
                    'ka' => $data['ka_title'],
                ],
                'year' => $data['year'],
                'director' => [
                    'en' => $data['en_director'],
                    'ka' => $data['ka_director'],
                ],
                'description' => [
                    'en' => $data['en_description'],
                    'ka' => $data['ka_description'],
                ],
            ]);

            $movie->genres()->createMany(
                collect($data['genres'])->map(fn ($genre) => ['name' => $genre])->toArray()
            );

            if (isset($data['image'])) {
                $movie->addMedia($data['image'])->toMediaCollection('movie');
            }

            return $movie;
        });
    }
}
