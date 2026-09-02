<?php

namespace App\Http\Resources\Landing;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LandingResource extends JsonResource
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
            'image'=>$this->getFirstMediaUrl('quote'),
            'quote'=>$this->getTranslation('quote',$locale),
            'movie'=>$this->movie->getTranslation('title',$locale),
            'year'=>$this->movie->year
        ];
    }
}
