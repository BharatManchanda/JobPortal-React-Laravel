<?php

namespace App\Http\Controllers\API;

use App\Models\Job;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Interface\JobInterface;

class JobController extends Controller
{
    private $jobInterface;
    
    public function __construct(JobInterface $jobInterface)
    {
        $this->jobInterface = $jobInterface;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $list = $this->jobInterface->getList($request);
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
            $data = $this->jobInterface->save($request);
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
            $data = $this->jobInterface->save($request, $id);
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
    public function get($id)
    {
        try {
            $data = $this->jobInterface->getDetails($id);
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
            $job = $this->jobInterface->destroy($id);
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
