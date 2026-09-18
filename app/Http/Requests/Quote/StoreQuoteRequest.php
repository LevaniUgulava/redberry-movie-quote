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
            'ka_quote' => ['required', 'string', 'max:255', 'regex:/^[ა-ჰ0-9\s.,!?\'"()\-:;]+$/u'],
            'en_quote' => ['required', 'string', 'max:255', 'regex:/^[a-zA-Z0-9\s.,!?\'"()\-:;]+$/'],
            'movie_id' => ['required', 'integer', 'exists:movies,id'],
            'image' => ['required', 'image'],
        ];
    }
}
