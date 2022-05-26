<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    //dang ky
    public function register(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'dob' => $request->dob,
            'phone' => $request->phone,
            'level' => $request ->level,
            'role' => $request->role,
            'password' => Hash::make($request->password)
        ]);
    }

    public function login(Request $request)
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
        if(Auth::check()){
            if(Auth::user()){
                DB::table('personal_access_tokens')->where('tokenable_id',Auth::user()->id)->delete();
                Auth::guard('web')->logout();
            }
        }
        return response()->json([
            'code' => 200,
            'message' => 'Log out'
        ]);
    }
}
