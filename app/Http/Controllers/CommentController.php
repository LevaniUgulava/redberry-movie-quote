<?php

namespace App\Http\Controllers;

use App\Enums\NotificationType;
use App\Events\CommentAdded;
use App\Events\NotificationUpdated;
use App\Http\Requests\Comment\StoreCommentRequest;
use App\Models\Notification;
use App\Models\Quote;
use App\Service\NotificationService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    function __construct(public NotificationService $notificationService)
    {

    }
    public function store(string $id, StoreCommentRequest $request): RedirectResponse
    {
        $user = Auth::user();

        $quote = Quote::with("user")->findOrFail($id);
        $user->comments()->create([
            'comment' => $request->comment,
            'quote_id' => $quote->id,
        ]);

        $data = [
            'comment' => $request->comment,
            'user' => [
                'id' => $user->id,
                'username' => $user->username,
                'avatar' => $user->avatar
            ]
        ];

        event(new CommentAdded($id, $data));

        $receiver_id = $quote->user->id;

        if ($receiver_id !== $user->id) {
            $this->notificationService->store( $user,$receiver_id,'comment');
        }
        return redirect()->back();

    }
}
