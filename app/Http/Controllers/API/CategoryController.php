<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Interface\CategoryInterface;

class CategoryController extends Controller
{
    //
    private $categoryRepository;
    
    public function __construct(CategoryInterface $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $list = $this->categoryRepository->getList($request);
            return response()->json([
                'status' => true,
                'message' => 'Category list fetched successfully',
                'list' => $list
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ])->setStatusCode(422);
        }
    }
    
    /**
     * Create a newly created resource in storage.
     */
    public function create(Request $request)
    {   
        try {
            $data = $this->categoryRepository->save($request);
            return response()->json([
                'status' => true,
                'message' => 'Category '.($request->id ? 'updated' : 'created').' successfully',
                "data" => $data,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ])->setStatusCode(422);
        }
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            $data = $this->categoryRepository->save($request, $id);
            return response()->json([
                'status' => true,
                'message' => 'Update category successfully',
                'data' => $data,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ])->setStatusCode(422);
        }
    }
    
    /**
     * Display the specified resource.
     */
    public function get(int $id)
    {
        try {
            $data = $this->categoryRepository->getDetails($id);
            return response()->json([
                'status' => true,
                'message' => 'Get category successfully',
                'data' => $data,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ])->setStatusCode(422);
        }
    }
    
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $category = $this->categoryRepository->destroy($id);
            return response()->json([
                'status' => true,
                'message' => 'category deleted successfully',
                'data' => $category,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ])->setStatusCode(422);
        }
    }

    public function updateStatus($id) {
        try {
            $category = $this->categoryRepository->updateStatus($id);
            return response()->json([
                'status' => true,
                'message' => 'Category status update successfully',
                'data' => $category,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ])->setStatusCode(422);
        }
    }
}
