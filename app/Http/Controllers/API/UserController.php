<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use Illuminate\Http\Request;
use App\Interface\UserInterface;


class UserController extends Controller {
    //
    private UserInterface $userRepository;
    
    public function __construct(UserInterface $userRepository) {
        $this->userRepository = $userRepository;
    }

    public function create(UserRequest $request) {
        return $this->userRepository->save($request);
    }

    public function update(UserRequest $request) {
        return $this->userRepository->save($request);
    }

    public function list(Request $request) {
        return $this->userRepository->getList($request);
    }

}