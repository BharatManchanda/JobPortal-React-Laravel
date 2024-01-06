<?php

namespace App\Repository;
use App\Interface\UserInterface;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use PhpParser\Node\Stmt\TryCatch;

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
                    'status' => false,
                    'message' => $th->getMessage(),
                ])->setStatusCode(422);
            }
        }

        public function save(Request $request, $id=null) {
            try {
                $userDetail = $request->only(['name', 'email', 'password', 'phone']);
                $authUser = Auth::user();
                $userDetail['password'] = Hash::make($request->password);

                if ($authUser && $authUser->role == 'admin') {
                    $userDetail['role'] = $request->role;
                }

                if($id) {
                    $data = User::findOrFail($id);
                    $data->update($userDetail);
                } else {
                    $data = User::create($userDetail);
                }

                return response()->json([
                    'status' => true,
                    'message' => 'User '.($request->id ? 'updated' : 'created').' successfully',
                    'data' => $data,
                ]);
            } catch (\Throwable $th) {
                return response()->json([
                    'status' => false,
                    'message' => $th->getMessage(),
                ])->setStatusCode(422);
            }
        }

        public function getDetails($id) {
            try {
                $data = User::findOrFail($id);
                return response()->json([
                    'status' => true,
                    'message' => 'Get user successfully',
                    'data' => $data
                ]);
            } catch (\Throwable $th) {
                return response()->json([
                    'status' => true,
                    'message' => $th->getMessage(),
                    ])->setStatusCode(422);
                }
            }
            
            public function delete($id=null){
                try {
                    $user = User::findOrFail($id);
                    $user->delete();
                    return response()->json([
                        'status' => true,
                        'message' => 'User Delete Successfully',
                        'data' => $user,
                    ]);
                } catch (\Throwable $th) {
                return response()->json([
                    'status' => true,
                    'message' => $th->getMessage(),
                ])->setStatusCode(422);
            }
        }
    }
    ?>