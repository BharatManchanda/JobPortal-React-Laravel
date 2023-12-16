<?php
    namespace App\Interface;
    use Illuminate\Http\Request;

    Interface UserInterface {
        public function getList($role=null);
        public function getDetails($id);
        public function save(Request $userDetails);
    } 
?>