<?php

namespace App\Http\Controllers;

use App\Http\Requests\Quote\StoreQuoteRequest;
use App\Http\Resources\Movie\MovieResource;
use App\Http\Resources\Quote\QuoteResource;
use App\Models\Movie;
use App\Models\Quote;
use App\Service\QuoteService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuoteController extends Controller
{
    function __construct(public QuoteService $quoteService)
    {

    }

    public function index(Request $request)
    {
        $modal = $request->query('modal');
        return Inertia::render('NewsFeed/NewsFeed', $this->quoteService->index($modal));

    }

    public function store(StoreQuoteRequest $request): RedirectResponse
    {
        $this->quoteService->store($request->validated());
        return redirect()->route('quotes.index');

    }
}
