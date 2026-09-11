<?php

namespace App\Http\Resources\Quote;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class QuoteEditResource extends JsonResource
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
            'ka_quote' => $this->getTranslation('quote', 'ka'),
            'en_quote' => $this->getTranslation('quote', 'en'),
            'image' => $this->resource->getFirstMediaUrl('quote'),
            'comment_quantity' => $this->comments_count,
            'reaction_quantity' => $this->likes_count,

        ];
    }
}
