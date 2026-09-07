<?php

namespace App\Http\Requests\Movie;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class EditMovieRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'en_title' => ['sometimes', 'string', 'max:255', 'regex:/^[a-zA-Z0-9\s.,!?\'"()\-:;]+$/u'],
            'ka_title' => ['sometimes', 'string', 'max:255', 'regex:/^[ა-ჰ0-9\s.,!?\'"()\-:;]+$/u'],

            'genres' => ['sometimes', 'array', 'min:1'],
            'genres.*' => ['sometimes', 'string', 'max:255'],

            'year' => ['sometimes', 'integer', 'min:1888', 'max:'.date('Y')],

            'en_director' => ['sometimes', 'string', 'max:255', 'regex:/^[a-zA-Z0-9\s.,!?\'"()\-:;]+$/u'],
            'ka_director' => ['sometimes', 'string', 'max:255', 'regex:/^[ა-ჰ0-9\s.,!?\'"()\-:;]+$/u'],

            'en_description' => ['sometimes', 'string', 'regex:/^[a-zA-Z0-9\s.,!?\'"()\-:;]+$/u'],
            'ka_description' => ['sometimes', 'string', 'regex:/^[ა-ჰ0-9\s.,!?\'"()\-:;]+$/u'],

            'image' => ['sometimes', 'image'],
        ];
    }
}
