<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserPolicy
{
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }

    public function list(User $user) {
        return  $user->role == 'admin';
    }
    
    public function get(User $user) {
        return  $user->role == 'admin';
    }
    
    public function create(User $user) {
        return  true;
    }
    
    public function update(User $user) {
        return  $user->role == 'admin';
    }
    
    public function delete(User $user) {
        return  $user->role == 'admin';
    }

}
