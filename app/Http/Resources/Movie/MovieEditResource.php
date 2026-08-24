<?php

namespace App\Http\Resources\Movie;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MovieEditResource extends JsonResource
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
            'en_title' => $this->getTranslation('title', 'en'),
            'ka_title' => $this->getTranslation('title', 'ka'),
            'year' => $this->year,
            'en_director' => $this->getTranslation('director', 'en'),
            'ka_director' => $this->getTranslation('director', 'ka'),
            'en_description' => $this->getTranslation('description', 'en'),
            'ka_description' => $this->getTranslation('description', 'ka'),
            'genres' => $this->genres->pluck('name'),
            'image' => $this->getFirstMediaUrl('movie'),
        ];
    }
}
