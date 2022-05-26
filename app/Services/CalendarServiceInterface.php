<?php
namespace App\Services;

interface CalendarServiceInterface
{
    public function index();
    public function store($data);
    public function edit($id);
    public function delete($id);
    public function getPersonalCalendar($id);
    public function search($data);
}
