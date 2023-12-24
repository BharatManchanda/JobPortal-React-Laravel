<?php

namespace App\Repository;
use App\Interface\UserInterface;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

    class UserRepository implements UserInterface{

        public function getList(Request $request) {
            try {
                $query = User::query();
                $list = $request->rowsPerPage ? $query->paginate($request->rowsPerPage) : $query->get();
                return response()->json([
                    'status' => true,
                    'message' => 'User List fetched successfully',
                    'list' => $list
                ]);
            } catch (\Throwable $th) {
                return response()->json([
                    'status' => true,
                    'message' => $th->getMessage(),
                ]);
            }
        }

        public function save(Request $request) {
            try {
                $userDetail = $request->only(['name', 'email', 'password']);
                $authUser = Auth::user();
                $userDetail['password'] = Hash::make($request->password);

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