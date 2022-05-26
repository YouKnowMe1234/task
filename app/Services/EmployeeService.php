<?php

namespace App\Services;

use App\Repositories\EmployeeInterface;
use Illuminate\Support\Facades\Validator;
use InvalidArgumentException;

class EmployeeService implements EmployeeServiceInterface
{
    protected $employeeRepo;

    public function __construct(EmployeeInterface $employeeRepo)
    {
        $this->employeeRepo = $employeeRepo;
    }

    public function index()
    {
        return $this->employeeRepo->index();
    }

    public function store($data)
    {
        // $validator = Validator::make($data,[
        //     'name' => 'required',
        //     'phone'=> 'required|unique:users|length:10',
        //     'dob' => 'required',
        //     'email' => 'required|unique:users',
        //     'level' => 'required',
        //     'status' => 'required'
        // ]);
        // if($validator->fails()){
        //     return new InvalidArgumentException($validator->errors()->first());
        // }
        return $this->employeeRepo->store($data);
    }

    public function edit($id)
    {
        return $this->employeeRepo->edit($id);
    }

    public function update($data, $id)
    {
        $employee = $this->employeeRepo->update($data, $id);
        return $employee;
    }

    public function delete($id)
    {
        $employee = $this->employeeRepo->delete($id);
        return $employee;
    }

    public function search($data)
    {
        return $this->employeeRepo->search($data);
    }
}
