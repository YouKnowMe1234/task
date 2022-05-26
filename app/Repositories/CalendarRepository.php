<?php

namespace App\Repositories;

use App\Models\Calendar;
use App\Repositories\CalendarInterface;

class CalendarRepository implements CalendarInterface
{
    protected $calendar;

    public function __construct(Calendar $calendar)
    {
        $this->calendar = $calendar;
    }

    public function index()
    {
        return $this->calendar->with('reasons','users')->orderBy('day','ASC')->get();
    }

    public function store($data)
    {
        $calendar = new $this->calendar;
        $calendar->user_id = $data['user_id'];
        $calendar->type = $data['type'];
        $calendar->day = $data['day'];
        $calendar->time_start = $data['time_start'];
        $calendar->time_end = $data['time_end'];
        $calendar->reason_id = $data['reason_id'];
        $calendar->save();
        return $calendar->fresh();
    }

    public function edit($id)
    {
        return $this->calendar->where('id',$id)->get();
    }

    public function delete($id)
    {
       $calendar = $this->calendar->find($id);
       $calendar->delete();
       return $calendar;
    }

    public function getPersonalCalendar($id)
    {
        return $this->calendar->where('user_id',$id)->with('users','reasons')->get();
    }

    public function search($data)
    {
        return $this->calendar->where('reason_id','LIKE','%'.$data.'%')->with('users','reasons')->get();
    }
}
