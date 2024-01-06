<?php
    namespace App\Interface;
    use Illuminate\Http\Request;
    Interface JobInterface {
        public function getList(Request $request);
        public function getDetails($id);
        public function save(Request $request, $id=null);
    }
?>