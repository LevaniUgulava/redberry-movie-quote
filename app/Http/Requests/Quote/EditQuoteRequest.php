<?php

namespace App\Http\Requests\Quote;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class EditQuoteRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'en_quote' => ['required', 'string', 'max:255', 'regex:/^[a-zA-Z0-9\s.,!?\'"()\-:;]+$/u'],
            'ka_quote' => ['required', 'string', 'max:255', 'regex:/^[ა-ჰ0-9\s.,!?\'"()\-:;]+$/u'],
            'image' => ['sometimes', 'image'],
        ];
    }
}
