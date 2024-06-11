<?php
    namespace App\Interface;
    use Illuminate\Http\Request;
    Interface CategoryInterface {
        public function getList(Request $request);
        public function getDetails($id);
        public function save(Request $request, $id=null);
        public function destroy($id);
        public function updateStatus($id);
    }
?>