<?php

namespace App\Repository;
use App\Interface\UserInterface;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

    class UserRepository implements UserInterface{

        public function getList($role=null) {

        }

        public function saveUser(Request $request) {
            try {
                dd(12);
                $userDetail = $request->only(['name', 'email', 'password']);
                $authUser = Auth::user();
                if ($authUser && $authUser->role == 'admin') {
                    $userDetail['role'] = $request->role;
                }

                if($request->id) {
                    $userDetail = User::findOrFail($request->id);
                    $userDetail->update($userDetail);
                } else {
                    User::create($userDetail);
                }

                return response()->json([
                    'status' => true,
                    'message' => 'User '.($request->id ? 'updated' : 'created').' successfully',
                ]);
            } catch (\Throwable $th) {
                return response()->json([
                    'status' => false,
                    'message' => $th->getMessage(),
                ]);
            }
        }

        public function getDetails($id) {

        }
    }
?>