<?php

namespace App\Http\Controllers;

use App\Http\Requests\Movie\EditMovieRequest;
use App\Http\Requests\Movie\StoreMovieRequest;
use App\Models\Movie;
use App\Service\MovieService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MovieController extends Controller
{
    use AuthorizesRequests;

    public function __construct(public MovieService $movieService) {}

    public function index(Request $request): Response
    {
        return Inertia::render('Movies/Movies', $this->movieService->index([
            'modal' => $request->query('modal'),
            'id' => $request->query('id'),
        ]));
    }

    public function show(Movie $movie, Request $request): Response
    {
        $this->authorize('view', $movie);

        return Inertia::render('Movie/Movie', $this->movieService->show($movie, $request->query('modal'), $request->query('quote_id')));
    }

    public function update(EditMovieRequest $request, Movie $movie): RedirectResponse
    {
        $this->authorize('update', $movie);
        $this->movieService->update($movie, $request->validated());

        return redirect()->route('movies.index');
    }

    public function store(StoreMovieRequest $request): RedirectResponse
    {
        $this->movieService->store($request->validated());

        return redirect()->route('movies.index');

    }

    public function destroy(Movie $movie): RedirectResponse
    {
        $this->authorize('delete', $movie);
        $movie->delete();

        return redirect()->route('movies.index');
    }
}
