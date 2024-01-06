<?php

use App\Http\Controllers\API\JobController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

# Auth Controller
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\AuthController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('register',[UserController::class, 'create']);
Route::post('login',[AuthController::class, 'login']);

Route::middleware('auth:api')->group(function () {

    # User API
    Route::prefix('user')->controller(UserController::class)->group(function () {
        Route::post('/','list');
        Route::get('/{id}','get');
        Route::post('/create','create');
        Route::put('/{id}/update','update');
        Route::post('/chat','chatMessage');
    });

    # Job API
    Route::resource('job', JobController::class);
    // Route::prefix('job')->controller(JobController::class)->group(function () {
        // Route::post('/','list');
        // Route::get('/{id}','get');
        // Route::post('/create','create');
        // Route::put('/{id}/update','update');
        // Route::post('/chat','chatMessage');
        // Route::resource('/job','chatMessage');
    // });

    Route::post('logout',[AuthController::class, 'logout']);
});
