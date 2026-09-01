<?php

namespace App\Http\Controllers;

use App\Http\Resources\Landing\LandingResource;
use App\Models\Quote;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LandingController extends Controller
{
    public function index(Request $request): Response
    {
        $quotes = Quote::select('id', 'quote', 'movie_id')->with('movie:id,title,year')->inRandomOrder()->limit(3)->get();
        return Inertia::render('Landing/Landing', [
            'currentModal' => $request->query('modal'),
            'quotes' => LandingResource::collection($quotes)->resolve(),
        ]);
    }
}
