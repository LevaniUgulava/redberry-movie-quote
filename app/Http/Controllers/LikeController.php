<?php

namespace App\Http\Controllers;

use App\Events\LikeUpdated;
use App\Models\Quote;
use App\Service\NotificationService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    function __construct(public NotificationService $notificationService)
    {

    }
    public function store(int $id): RedirectResponse
    {
        $user = Auth::user();

        $quote = Quote::with("user")->findorfail($id);
        $result = $quote->likes()->toggle(auth()->id());
        $isLiked = count($result['attached']) > 0;
        $data = [
            'user'=>auth()->id(),
            'isLiked'=>$isLiked,
        ];
        event(new LikeUpdated($id, $data));

        $receiver_id = $quote->user->id;

        if ($receiver_id !== $user->id && $isLiked) {
            $this->notificationService->store( $user,$receiver_id,'like');
        }

        return redirect()->back();

    }
}
