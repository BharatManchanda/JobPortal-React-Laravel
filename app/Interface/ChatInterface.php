<?php

    namespace App\Interface;
    use Illuminate\Http\Request;

    Interface ChatInterface{
        public function getList(Request $request);
        public function save(Request $request, $id=null);
        public function destroy($id);
    }
?>