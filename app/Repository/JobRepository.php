<?php

namespace App\Repository;
use App\Interface\JobInterface;
use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

    class JobRepository implements JobInterface{

        public function getList(Request $request) {
            $list = Job::where('status', 'active')->paginate($request->rowsPerPage);
            return $list;
        }

        public function save(Request $request, $id=null) {
            $data = $request->only([ 'title', 'description', 'industry_type', 'department', 'job_type',
                'education','key_skills','job_location','benefits','responsibilities', 'preferred_skills',
                'experience', 'ability_to_relocate', 'speak_employe_phone_no', 'shift_schedule', 'status',
            ]);

            if ($id) {
                $job = Job::findOrFail($id);
                $job->update($data);
            } else {
                $job = Job::create($data);
            }

            return $job;
        }

        public function getDetails($id) {
            $data = Job::findOrFail($id);
            return $data;
        }

        public function destroy($id) {
            $job = Job::findOrFail($id);
            $job->delete();
            return $job;
        }
    }
?>