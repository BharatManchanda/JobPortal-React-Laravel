<?php

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

    #User API
    Route::prefix('user')->controller(UserController::class)->group(function () {
        Route::post('/','list');
    });

    Route::post('logout',[AuthController::class, 'logout']);
});
