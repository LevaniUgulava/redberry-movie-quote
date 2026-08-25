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
            'comment_quantity' => 0,// coming soon...
            'reaction_quantity' => 0,// coming soon...
            'comments' => [
                //collection no added functional
            ],
            'movie' => [
                'title' => $this->movie->getTranslation('title', $locale),
                'year' => $this->movie->year,
            ],
            'user' => [
                'username' => $this->user->username,
                'avatar' => $this->user->avatar,
            ],
        ];
    }
}
