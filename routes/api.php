<?php

use Illuminate\Http\Request;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/athenticated', function () {
    return true;
});

Route::group(['middleware' => 'auth:sanctum'],function(){
    Route::resource('employee','EmployeeController');
    Route::resource('calendar', 'CalendarController');
    Route::get('user-calendar','CalendarController@getPersonalCalendar');
    Route::resource('reason','ReasonController');
    Route::get('search-reason','ReasonController@search');
    Route::get('search-employee','EmployeeController@search');
    Route::get('search-calendar','CalendarController@search');

});

//auth
Route::post('register','AuthController@register');
Route::post('login','AuthController@login');
Route::post('logout','AuthController@logout')->middleware('auth:sanctum');
Route::post('user-login','UserController@userLogin');

//reset password
Route::post('send-mail','ResetPasswordController@sendMail');
Route::post('reset-password/{token}', 'ResetPasswordController@resetPassword');
//test gui mail den gmail
Route::get('sendemail','ResetPasswordController@test');
