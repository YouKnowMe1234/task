<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Employee extends Model
{
    //
    use HasApiTokens, Authenticatable;
    protected $tabble = "employees";
    protected $fillable = [
        'id',
        'name',
        'dob',
        'phone',
        'photo',
        'account',
        'password',
        'email',
        'level',
        'status'
    ];

}
