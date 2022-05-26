<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Middleware\Authenticate;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    //
    public function userLogin(Request $request)
    {
        $request->validate([
            'email' => ['required'],
            'password' => ['required']
        ],
    );
    if (Auth::attempt($request->only('email', 'password'))){
        $data = [];
        $user = $request->user();
        $token= $user->createToken('Personal Access Token')->plainTextToken;
        $data=[
            'user' => Auth::user(),
            'code' => 200,
            'access_token' => $token,
        ];

        return response()->json($data, 200);

    }
    throw ValidationException::withMessages([
        'email' =>['Email hoặc mật khẩu không đúng.']
    ]);
    }

    public function logout()
    {

    }
}
