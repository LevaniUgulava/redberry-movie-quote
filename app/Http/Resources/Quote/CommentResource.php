<?php

namespace App\Http\Resources\Quote;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'comment' => $this->comment,
            'user' => [
                'id' => $this->user->id,
                'username' => $this->user->username,
                'avatar' => $this->user->avatar,
            ],
        ];
    }
}
