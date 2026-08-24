<?php

namespace App\Http\Controllers;

use App\Http\Requests\Movie\StoreMovieRequest;
use App\Http\Resources\Movie\MovieResource;
use App\Models\Movie;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Service\MovieService;
use Inertia\Response;

class MovieController extends Controller
{
    function __construct(public MovieService $movieService)
    {
    }

    public function index(Request $request): Response
    {
        $user = auth()->user();
        return Inertia::render('Movies/Movies', [
            'currentModal' => $request->query('modal'),
            'movies' => MovieResource::collection($user->movies)
        ]);
    }

    public function store(StoreMovieRequest $request): RedirectResponse
    {
        $this->movieService->store($request->validated());
        return redirect()->route('movies.index');

    }
}
