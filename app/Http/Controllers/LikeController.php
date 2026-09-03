<?php

namespace App\Http\Controllers;

use App\Events\LikeUpdated;
use App\Models\Quote;
use App\Service\NotificationService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    public function __construct(public NotificationService $notificationService) {}

    public function store(Quote $quote): JsonResponse
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

        return response()->json(['liked' => $isLiked]);
    }
}
