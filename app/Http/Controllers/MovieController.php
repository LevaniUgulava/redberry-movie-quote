<?php

namespace App\Http\Controllers;

use App\Http\Requests\Movie\EditMovieRequest;
use App\Http\Requests\Movie\StoreMovieRequest;
use App\Http\Resources\Movie\MovieEditResource;
use App\Http\Resources\Movie\MovieResource;
use App\Models\Movie;
use App\Service\MovieService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MovieController extends Controller
{
    function __construct(public MovieService $movieService)
    {
    }

    public function index(Request $request): Response
    {
        $user = auth()->user();
        $editingMovie = $request->query('id')
            ? $user->movies()->findOrFail($request->query('id'))
            : null;
        return Inertia::render('Movies/Movies', [
            'currentModal' => $request->query('modal'),
            'editingMovie' => $editingMovie ? (new MovieEditResource($editingMovie))->resolve() : null,
            'movies' => MovieResource::collection($user->movies)
        ]);
    }

    public function update(EditMovieRequest $request, Movie $movie): RedirectResponse
    {
        $this->movieService->update($movie, $request->validated());
        return redirect()->route('movies.index');
    }

    public function store(StoreMovieRequest $request): RedirectResponse
    {
        $this->movieService->store($request->validated());
        return redirect()->route('movies.index');

    }
}
