<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reason extends Model
{
    //
    protected $table= "reasons";
    protected $fillable = [
        'id',
        'title',
        'description'
    ];

    public function calendar()
    {
        return $this->hasMany(Calendar::class,'reason_id','id');
    }
}
