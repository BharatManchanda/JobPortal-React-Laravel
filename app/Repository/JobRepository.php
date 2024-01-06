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
                $data = $request->only([ 'title', 'description', 'industry_type', 'department', 'job_type',
                    'education','key_skills','job_location','benefits','responsibilities', 'preferred_skills',
                    'experience', 'ability_to_relocate', 'speak_employe_phone_no', 'shift_schedule', 'status',
                ]);

                if ($id) {
                    $job = Job::findOrFail($id);
                    $job->update($data);
                } else {
                    Job::create($data);
                }
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

        public function delete($id) {
            try {
                $job = Job::findOrFail($id);
                $job->delete();
                return response()->json([
                    'status' => true,
                    'message' => 'Job Delete Successfully',
                    'data' => $job,
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