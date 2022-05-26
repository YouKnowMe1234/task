<?php

namespace App\Services;

use App\Repositories\CalendarInterface;
use App\Services\CalendarServiceInterface;
use Illuminate\Support\Facades\Validator;

class CalendarService implements CalendarServiceInterface
{
    protected $calendarRepo;

    public function __construct(CalendarInterface $calendarRepo)
    {
        $this->calendarRepo = $calendarRepo;
    }

    public function index()
    {
        return $this->calendarRepo->index();
    }

    public function store($data)
    {
        $validator = Validator::make($data,[
            'user_id' =>'required',
            'type' => 'required',
            'day' => 'required'
        ]);
        return $this->calendarRepo->store($data);
    }

    public function edit($id)
    {
        return $this->calendarRepo->edit($id);
    }

    public function delete($id)
    {
        $calendar = $this->calendarRepo->delete($id);
        return $calendar;
    }

    public function getPersonalCalendar($id)
    {
        return $this->calendarRepo->getPersonalCalendar($id);
    }

    public function search($data)
    {
        return $this->calendarRepo->search($data);
    }
}
