<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    //
    public function login(Request $request){
        try {
            $user = User::where('email', $request->email)->first();
            if ($user) {
                if (Hash::check($request->password, $user->password)) {
                    $token = $user->createToken('aceess token')->accessToken;
                }
            }
            return response()->json([
                'status'=>true,
                'token'=>$token,
                'data'=>$user,
                'message'=>"Login Successfully",
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status'=>false,
                'message'=>$th->getMessage(),
            ]);
        }
    }

    public function logout(Request $request){
        $token = $request->user()->token();
        $token->revoke();
        return response()->json([
            'status'=>true,
            'message' => 'You have been successfully logged out!'
        ]);
    }
    
    public function resetPassword(Request $request, $hash_link){
        try {
            $user = User::where('hash_link',$hash_link)->firstOrFail();
            $user->password = Hash::make($request->password);
            $user->hash_link = null;
            $user->save();
        } catch (\Throwable $th) {
            return response()->json([
                'status'=>false,
                'message' => $th->getMessage(),
            ]);
        }
    }
    
    public function resetPasswordLink(Request $request){
        try {
            $user = User::where('email',$request->email)->firstOrFail();
            $user->hash_link = Str::uuid(18);
            $user->save();
            return response()->json([
                'status'=>true,
                'message' => 'Please follow the link in the email to change your password.'
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status'=>false,
                'message' => $th->getMessage(),
            ]);
        }
    }
}
