<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repository\UserRepository;

class UserController extends Controller {
    //
    public function  __construct() {

    }

    public function create(Request $request) {
        dd($request->all());
    }
}
