<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $user = Auth::user();
        $rules = [
            "name" => "required | min:3 | max:50",
            'phone' => 'required|string|digits:10',
            "email" => "required|email|unique:users,email",
        ];
        if($user && $user->role == 'admin') {
            $rules["role"] = "required | in:admin, client, business";
        }

        if($this->isMethod('post')){
            $rules["password"] = "required | min:8";
            $rules["confirm_password"] = "required | same:password";
        }
        return $rules;
    }
}
