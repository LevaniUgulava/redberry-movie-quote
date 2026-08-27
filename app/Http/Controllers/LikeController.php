<?php

namespace App\Http\Controllers;

use App\Events\LikeUpdated;
use App\Models\Quote;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function store(int $id): RedirectResponse
    {
        $quote = Quote::findorfail($id);
        $result = $quote->likes()->toggle(auth()->id());
        $isLiked = count($result['attached']) > 0;
        $data = [
            'user'=>auth()->id(),
            'isLiked'=>$isLiked,
        ];
        event(new LikeUpdated($id, $data));

        return redirect()->back();

    }
}
