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
        return $this->jobInterface->getList($request);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return $this->jobInterface->save($request);
    }
    
    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return $this->jobInterface->getDetails($id);
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        return $this->jobInterface->save($request, $id);
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        return $this->jobInterface->delete($id);
    }
}
