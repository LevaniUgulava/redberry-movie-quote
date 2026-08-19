<?php

namespace App\Http\Requests\Auth\Reset;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class PasswordResetRequest extends FormRequest
{


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'password' => ['required', 'min:8', 'confirmed'],
            'token' => ['required'],
            'email' => ['required', 'email'],
        ];
    }
}
