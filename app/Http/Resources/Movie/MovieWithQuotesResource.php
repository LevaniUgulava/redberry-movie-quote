<?php

namespace App\Http\Resources\Movie;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MovieWithQuotesResource extends JsonResource
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
            'image' => $this->getFirstMediaUrl('movie'),
            'title' => $this->getTranslation('title', $locale),
            'description' => $this->getTranslation('description', $locale),
            'year' => $this->year,
            'director' => $this->getTranslation('director', $locale),
            'genres' => $this->genres->pluck('name'),
            'quotes' => $this->quotes->map(function ($quote) {
                return [
                    'id' => $quote->id,
                    "image" => $quote->getFirstMediaUrl('quote'),
                    'quote' => $quote->quote,
                    "reaction_quantity" => "29",
                    'comment_quantity' => "3"
                ];
            }),
        ];
    }
}
