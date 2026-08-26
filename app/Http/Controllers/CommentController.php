<?php

namespace App\Http\Controllers;

use App\Events\CommentAdded;
use App\Http\Requests\Comment\StoreCommentRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function store(string $id, StoreCommentRequest $request): RedirectResponse
    {
        $user = Auth::user();
        $user->comments()->create([
            'comment' => $request->comment,
            'quote_id' => $id,
        ]);
        $data = [
            'comment' => $request->comment,
            'user' => [
                'id'=>$user->id,
                'username'=>$user->username,
                'avatar'=>$user->avatar
            ]
        ];
        event(new CommentAdded($id, $data));
        return redirect()->back();

    }
}
