<?php

namespace App\Services;

interface EmployeeServiceInterface
{
    public function index();
    public function store($data);
    public function edit($id);
    public function update($data, $id);
    public function delete($id);
    public function search($data);
}
