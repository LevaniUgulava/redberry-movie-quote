<?php

namespace App\Http\Requests\Movie;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreMovieRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'en_title' => ['required', 'string', 'max:255'],
            'ka_title' => ['required', 'string', 'max:255'],

            'genres' => ['required', 'array', 'min:1'],
            'genres.*' => ['required', 'string', 'max:255'],

            'year' => ['required', 'integer', 'min:1888', 'max:' . date('Y')],

            'en_director' => ['required', 'string', 'max:255'],
            'ka_director' => ['required', 'string', 'max:255'],

            'en_description' => ['required', 'string'],
            'ka_description' => ['required', 'string'],

            'image' => ['required', 'image'],
        ];
    }
}
