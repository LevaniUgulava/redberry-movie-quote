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
            'en_title' => ['required', 'string', 'max:255', 'regex:/^[a-zA-Z0-9\s.,!?\'"()\-:;]+$/u'],
            'ka_title' => ['required', 'string', 'max:255', 'regex:/^[ა-ჰ0-9\s.,!?\'"()\-:;]+$/u'],

            'genres' => ['required', 'array', 'min:1'],
            'genres.*' => ['required', 'string', 'max:255'],

            'year' => ['required', 'integer', 'min:1888', 'max:'.date('Y')],

            'en_director' => ['required', 'string', 'max:255', 'regex:/^[a-zA-Z0-9\s.,!?\'"()\-:;]+$/u'],
            'ka_director' => ['required', 'string', 'max:255', 'regex:/^[ა-ჰ0-9\s.,!?\'"()\-:;]+$/u'],

            'en_description' => ['required', 'string', 'max:1000', 'regex:/^[a-zA-Z0-9\s.,!?\'"()\-:;]+$/u'],
            'ka_description' => ['required', 'string', 'max:1000', 'regex:/^[ა-ჰ0-9\s.,!?\'"()\-:;]+$/u'],

            'image' => ['required', 'image'],
        ];
    }
}
