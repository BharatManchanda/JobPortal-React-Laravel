<?php
    namespace App\Interface;
    use Illuminate\Http\Request;

    Interface UserInterface {
        public function getList($role=null);
        public function saveUser(Request $userDetails);
        public function getDetails($id);
    } 
?>