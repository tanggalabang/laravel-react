<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UniversityController;
use App\Http\Controllers\FacultyController;
use App\Http\Controllers\MajorController;
use App\Http\Middleware\TokenValidation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('signin', [AuthController::class, 'signin']);
Route::post('register', [AuthController::class, 'register']);

Route::middleware(TokenValidation::class)->group(function () {
    Route::post('signout', [AuthController::class, 'singout']);

});
Route::resource('university', UniversityController::class);
Route::resource('faculty', FacultyController::class);
Route::resource('major', MajorController::class);