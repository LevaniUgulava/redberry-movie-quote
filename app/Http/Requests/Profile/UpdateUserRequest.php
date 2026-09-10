<?php

namespace App\Http\Requests\Profile;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'avatar' => ['sometimes', 'image'],
            'username' => ['sometimes', 'string', 'min:3', 'max:15', 'unique:users,username,' . $this->user()->id],
            'email' => ['sometimes', 'string', 'email', 'unique:users,email,' . $this->user()->id],
            'current_password' => ['sometimes', 'string', 'min:8'],
            'password' => ['sometimes', 'string', 'min:8', 'confirmed'],
        ];
    }
}
