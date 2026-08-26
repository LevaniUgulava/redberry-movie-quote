<?php

namespace App\Http\Resources\Quote;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class QuoteResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $locale = app()->getLocale();
        return [
            'id' => $this->id,
            'quote' => $this->getTranslation('quote', $locale),
            'image' => $this->resource->getFirstMediaUrl('quote'),
            'comment_quantity' => $this->comments_count,
            'reaction_quantity' => $this->likes_count,
            'comments' => $this->comments->map(function ($comment) {
                return [
                    'comment' => $comment->comment,
                    'user' => [
                        'id' => $comment->user->id,
                        'username' => $comment->user->username,
                        'avatar' => $comment->user->avatar,
                    ]

                ];
            }),
            'movie' => [
                'title' => $this->movie->getTranslation('title', $locale),
                'year' => $this->movie->year,
            ],
            'user' => [
                'username' => $this->user->username,
                'avatar' => $this->user->avatar,
            ],
            'is_liked' => $this->likes->contains('id', auth()->id()),
        ];
    }
}
