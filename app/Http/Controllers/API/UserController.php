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

    public function update(UserRequest $request, $id) {
        return $this->userRepository->save($request, $id);
    }

    public function index(Request $request) {
        return $this->userRepository->getList($request);
    }

    public function get(Request $request, $id) {
        return $this->userRepository->getDetails($id);
    }
    
    public function destroy($id) {
        return $this->userRepository->destroy($id);
    }

}