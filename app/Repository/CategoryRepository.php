<?php

namespace App\Repository;
use App\Interface\CategoryInterface;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

    class CategoryRepository implements CategoryInterface{

        public function getList(Request $request) {
            $list = Category::paginate($request->rowsPerPage);
            return $list;
        }

        public function save(Request $request, $id=null) {
            $data = $request->only([ 'title', 'description', 'industry_type', 'department', 'category_type',
                'education','key_skills','category_location','benefits','responsibilities', 'preferred_skills',
                'experience', 'ability_to_relocate', 'speak_employe_phone_no', 'shift_schedule', 'status',
            ]);
            $data['user_id'] = Auth::user()->id;
            if ($id) {
                $category = Category::findOrFail($id);
                $category->update($data);
            } else {
                $category = Category::create($data);
            }

            return $category;
        }

        public function getDetails($id) {
            $data = Category::findOrFail($id);
            return $data;
        }

        public function destroy($id) {
            $category = Category::findOrFail($id);
            $category->delete();
            return $category;
        }

        public function updateStatus($id) {
            $category = Category::findOrFail($id);
            $category->update([
                'status' => $category->status == 1 ? 0 : 1,
            ]);
            return $category;
        }
    }
?>