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
            'en_title' => ['sometimes', 'string', 'max:255'],
            'ka_title' => ['sometimes', 'string', 'max:255'],

            'genres' => ['sometimes', 'array', 'min:1'],
            'genres.*' => ['sometimes', 'string', 'max:255'],

            'year' => ['sometimes', 'integer', 'min:1888', 'max:' . date('Y')],

            'en_director' => ['sometimes', 'string', 'max:255'],
            'ka_director' => ['sometimes', 'string', 'max:255'],

            'en_description' => ['sometimes', 'string'],
            'ka_description' => ['sometimes', 'string'],

            'image' => ['sometimes', 'image'],
        ];
    }
}
