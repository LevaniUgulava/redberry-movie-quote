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

    public function store(Quote $quote): RedirectResponse
    {
        $user = Auth::user();

        $result = $quote->likes()->toggle($user->id);
        $isLiked = count($result['attached']) > 0;
        $data = [
            'user' => $user->id,
            'isLiked' => $isLiked,
        ];
        event(new LikeUpdated($quote->id, $data));

        $receiver_id = $quote->user_id;

        if ($receiver_id !== $user->id && $isLiked) {
            $this->notificationService->store($user, $receiver_id, 'like');
        }

        return redirect()->back();

    }
}
