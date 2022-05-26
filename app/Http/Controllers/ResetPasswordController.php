<?php

namespace App\Http\Controllers;

use App\Mail\ResetMail;
use App\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
class ResetPasswordController extends Controller
{
    //test gui email
    public function test()
    {
        $mailData = [
            'title' => 'Reset Pasword',
            'body' => 'Token de reset password!! Hieu luc trong 60 phut!!',
            'token' => Str::random(60)
        ];
        Mail::to('nmquan1234zz@gmail.com')->send(new ResetMail($mailData));
        return response()->json(['message' => 'OK'],200);
    }

    //gui token trong mail de xac nhan reset
    public function sendMail(Request $request)
    {
        // dd($request->all());
        $result = ['status' => 200];
        //check email da reset?
        if(PasswordReset::where('email',$request->email)->exists()){
            $result = [
                'status' => 500,
                'error' => 'Khong co quyen reset!'
            ];
            return response()->json($result,$result['status']);
        }
        //neu chua sua password
        try{
            $user = User::where('email',$request->email)->first();
            //luu vao bang password_resets
            $token = Str::random(60);
            // $passReset = PasswordReset::create([
            //     'email' => $user->email,
            //     'token'=> $token
            // ]);
            $email = $user->email;
            DB::table('password_ressets')->insert(['email' => $email, 'token' => $token, 'created_at' => Carbon::now()]);
            //gui Mail
            $dataMail = [
                'title' => 'Reset Pasword',
                'body' => 'Token de reset password!! Hieu luc trong 60 phut!!',
                'token' => $token
            ];
            // dd($email);
            Mail::to($email)->send(new ResetMail($dataMail));
            $result['message'] = "Mail da duoc gui!";
            return response()->json($result,200);
        } catch(Exception $e){
            $result = [
                'status' => 500,
                'error' => $e->getMessage()
            ];
            return response()->json($result,$result['status']);
        }
    }

    public function resetPassword(Request $request, $token)
    {
        $result =['status' => 200];
        //kiem tra token co dung trong db
        // $passReset = PasswordReset::where('token', $token)->fisrt();
        $passReset =  DB::table('password_resets')
            ->where(['email' => $request->email, 'token' => $request->token])
            ->first();
        if(!$passReset){
            $result = [
                'status' => 500,
                'error' => 'Invalid Token!'
            ];
            return response()->json($result,$result['status']);
        }
        //neu het hieu luc sau 60 phut
        if (Carbon::parse($passReset->updated_at)->addMinutes(60)->isPast()) {
            $passReset->delete();
            $result = [
                'status' => 500,
                'error' => 'Invalid Token!'
            ];
            return response()->json($result,$result['status']);
        }
        //luu mat khau moi
        $user = User::where('email',$request->email)->first();
        $user->password = Hash::make($request->password);
        $user->save();
        $result['message'] = 'reset password success!';
        return response()->json($result,$result['status']);
    }

}
