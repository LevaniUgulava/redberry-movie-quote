<?php

namespace App\Http\Requests\Quote;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreQuoteRequest extends FormRequest
{


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'ka_quote' => ['required', 'string', 'regex:/^[\x{10A0}-\x{10FF}0-9\s\.,!?\'"-]+$/u'],
            'en_quote' => ['required', 'string', 'regex:/^[a-zA-Z0-9\s\.,!?\'"-]+$/'],
            'movie_id' => ['required', 'integer', 'exists:movies,id'],
            'image' => ['required', 'image'],
        ];
    }
}
