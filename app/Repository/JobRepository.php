<?php

namespace App\Repository;
use App\Interface\JobInterface;
use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

    class JobRepository implements JobInterface{

        public function getList(Request $request) {
            try {
                $list = Job::where('status', 'active')->paginate($request->rowsPerPage);
                return response()->json([
                    'status' => true,
                    'message' => 'Job list fetched successfully',
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
                
                $data ="test";
                return response()->json([
                    'status' => true,
                    'message' => 'Job '.($request->id ? 'updated' : 'created').' successfully',
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
                $data = Job::findOrFail($id);
                return response()->json([
                    'status' => true,
                    'message' => 'Get job successfully',
                    'data' => $data
                ]);
            } catch (\Throwable $th) {
                return response()->json([
                    'status' => false,
                    'message' => $th->getMessage(),
                ])->setStatusCode(422);
            }
        }
    }
?>