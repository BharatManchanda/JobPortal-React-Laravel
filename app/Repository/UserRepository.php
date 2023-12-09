<?php
    namespace App\Repository;
    use App\Interface\UserInterface;
    class UserRepository implements UserInterface{

        public function getList($role=null) {

        }

        public function saveUser(Request $request) {
            if($request->id) {
                dd('write code for update user');
            } else {
                dd('write code for add');
            }
        }

        public function getDetails($id) {

        }
    }
?>