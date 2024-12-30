<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;

Route::post('/register', [UserController::class, 'store']);
Route::post('/login', [UserController::class, 'login']);
Route::middleware('auth:sanctum')->get('user', [UserController::class, 'showProfile']);
Route::middleware('auth:sanctum')->put('user', [UserController::class, 'updateProfile']);
Route::middleware('auth:sanctum')->delete('user', [UserController::class, 'destroy']);
Route::middleware('auth:sanctum')->post('/logout', [UserController::class, 'logout']);


// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

