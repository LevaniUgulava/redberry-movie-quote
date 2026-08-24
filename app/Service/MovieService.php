<?php

namespace App\Service;

use App\Models\Movie;
use Illuminate\Support\Facades\DB;

class MovieService
{
// MovieService
    public function update(Movie $movie, array $data): Movie
    {
        return DB::transaction(function () use ($movie, $data) {
            $movie->update([
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

            if (isset($data['genres'])) {
                $movie->genres()->delete();
                $movie->genres()->createMany(
                    collect($data['genres'])->map(fn($genre) => ['name' => $genre])->toArray()
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
                collect($data['genres'])->map(fn($genre) => ['name' => $genre])->toArray()
            );

            if (isset($data['image'])) {
                $movie->addMedia($data['image'])->toMediaCollection('movie');
            }

            return $movie;
        });
    }
}
