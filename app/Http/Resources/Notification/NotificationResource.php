<?php

namespace App\Http\Resources\Notification;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NotificationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'type'=>$this->type,
            'read'=>$this->read,
            'user'=>[
                'id' => $this->sender->id,
                'username' => $this->sender->username,
                'avatar' => $this->sender->avatar
            ],
            'time' => $this->created_at->diffForHumans(),
            ];
    }
}
