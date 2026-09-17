<?php

namespace App\Http\Controllers;

use App\Http\Requests\Quote\EditQuoteRequest;
use App\Http\Requests\Quote\StoreQuoteRequest;
use App\Models\Quote;
use App\Service\QuoteService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class QuoteController extends Controller
{
    use AuthorizesRequests;

    public function __construct(public QuoteService $quoteService)
    {
    }

    public function index(Request $request): Response
    {
        $modal = $request->query('modal');
        $search = $request->query('filter')['search'] ?? null;
        $data = $this->quoteService->index($modal);

        return Inertia::render('NewsFeed/NewsFeed', [
            'currentModal' => $data['currentModal'],
            'movies' => $data['movies'],
            'quotes' => Inertia::scroll(fn() => $data['quotes']),
            'filter' => $search ? ['search' => $search] : [],
        ]);

    }

    public function store(StoreQuoteRequest $request): RedirectResponse
    {
        $this->quoteService->store($request->validated());

        return redirect()->back();

    }

    public function update(Quote $quote, EditQuoteRequest $request): RedirectResponse
    {
        $this->authorize('update', $quote);

        $this->quoteService->update($request->validated(), $quote, $request->file('image'));

        return redirect()->back();
    }

    public function destroy(Quote $quote) : RedirectResponse
    {
        $this->authorize('delete', $quote);

        $quote->delete();

        return redirect()->back();
    }
}
