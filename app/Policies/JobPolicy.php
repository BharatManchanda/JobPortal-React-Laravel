<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Job;

class JobPolicy
{
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }

    public function list(User $user, Job $job) {
        return true;
    }

    public function create(User $user) {
        return ($user->role == 'admin' || $user->role == 'recruiter');
    }
    
    public function update(User $user, Job $job) {
        return $user->role == 'admin' || $user->id == $job->user_id;
    }
    
    public function delete(User $user, Job $job) {
        return $user->role == 'admin' || $user->id == $job->user_id;
    }
    
    public function detail(User $user, Job $job) {
        return true;
    }
}
