<?php

namespace App\Http\Controllers\API;

use App\Models\Job;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Interface\JobInterface;

class JobController extends Controller
{
    private $jobRepository;
    
    public function __construct(JobInterface $jobRepository)
    {
        $this->jobRepository = $jobRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $list = $this->jobRepository->getList($request);
            return response()->json([
                'status' => true,
                'message' => 'Job list fetched successfully',
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
            $data = $this->jobRepository->save($request);
            return response()->json([
                'status' => true,
                'message' => 'Job '.($request->id ? 'updated' : 'created').' successfully',
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
            $data = $this->jobRepository->save($request, $id);
            return response()->json([
                'status' => true,
                'message' => 'Update job successfully',
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
            $data = $this->jobRepository->getDetails($id);
            return response()->json([
                'status' => true,
                'message' => 'Get job successfully',
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
            $job = $this->jobRepository->destroy($id);
            return response()->json([
                'status' => true,
                'message' => 'Job deleted successfully',
                'data' => $job,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ])->setStatusCode(422);
        }
    }
}
