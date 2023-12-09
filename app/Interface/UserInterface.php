<?php
    namespace App\Repository;
    use Illuminate\Http\Request;

    Interface UserInterface {
        public function getList($role=null);
        public function saveUser(Request $request);
        public function getDetails($id);
    } 
?>