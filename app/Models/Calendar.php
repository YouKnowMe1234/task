<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Calendar extends Model
{
    //
    protected $table = "calendars";
    protected $fillable = [
        'id',
        'user_id',
        'type',
        'day',
        'time_start',
        'time_end'
    ];

    public function users()
    {
        return $this->belongsTo(User::class,'user_id','id');
    }

    public function reasons()
    {
        return $this->belongsTo(Reason::class,'reason_id','id');
    }
}
