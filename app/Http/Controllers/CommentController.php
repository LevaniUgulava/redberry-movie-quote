<?php

namespace App\Http\Controllers;

use App\Events\CommentAdded;
use App\Http\Requests\Comment\StoreCommentRequest;
use App\Models\Comment;
use App\Models\Quote;
use App\Service\NotificationService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function __construct(public NotificationService $notificationService) {}

    public function index(Quote $quote): JsonResponse
    {
        $comments = $quote->comments()
            ->with('user:id,username')
            ->with('user.media')
            ->latest()
            ->paginate(2);

        $data = $comments->map(function (Comment $comment) {
            return [
                'id' => $comment->id,
                'comment' => $comment->comment,
                'user' => [
                    'id' => $comment->user->id,
                    'username' => $comment->user->username,
                    'avatar' => $comment->user->avatar,
                ],
            ];
        });

        return response()->json([
            'data' => $data,
            'has_more' => $comments->hasMorePages(),
        ]);
    }

    public function store(Quote $quote, StoreCommentRequest $request): JsonResponse
    {
        $user = Auth::user();

        $comment = $user->comments()->create([
            'comment' => $request->comment,
            'quote_id' => $quote->id,
        ]);

        $data = [
            'id' => $comment->id,
            'comment' => $request->comment,
            'user' => [
                'id' => $user->id,
                'username' => $user->username,
                'avatar' => $user->avatar,
            ],
        ];

        event(new CommentAdded($quote->id, $data));

        $receiver_id = $quote->user_id;

        if ($receiver_id !== $user->id) {
            $this->notificationService->store($user, $receiver_id, 'comment');
        }

        return response()->json($data);

    }
}
