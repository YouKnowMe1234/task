<?php
namespace App\Repositories;

use App\User;
use Illuminate\Support\Facades\Hash;
use App\Repositories\EmployeeInterface;
use Symfony\Component\VarDumper\Cloner\Data;

class EmployeeRepository implements EmployeeInterface
{
    protected $employee;

    public function __construct(User $employee)
    {
        $this->employee = $employee;
    }

    public function index()
    {
        return $this->employee->where('role','user')->get();
    }

    public function store($data)
    {
        $employee = new $this->employee;
        $employee->name = $data['name'];
        $employee->dob = $data['dob'];
        $employee->phone = $data['phone'];
        $employee->photo = $data['photo'];
        $employee->role = $data['role'];
        $employee->password = Hash::make($data['password']);
        $employee->email = $data['email'];
        $employee->level = $data['level'];
        $employee->status = $data['status'];
        $employee->save();
        return $employee->fresh();
    }

    public function edit($id)
    {
        return $this->employee->where('id',$id)->get();
    }

    public function update($data, $id)
    {
        //save nhan vien
        $employee = $this->employee->find($id);
        $employee->name = $data['name'];
        $employee->dob = $data['dob'];
        $employee->phone = $data['phone'];
        $employee->photo = $data['photo'];
        $employee->role = $data['role'];
        // $employee->password = $data['password'];
        $employee->email = $data['email'];
        $employee->level = $data['level'];
        $employee->status = $data['status'];
        if($data['unsub'] != null){
            $employee->unsub = $data['unsub'];
        }
        $employee->update();
        return $employee;
    }

    public function delete($id)
    {
        $employee = $this->employee->find($id);
        $employee->delete();
        return $employee;
    }

    public function search($data)
    {
        return $this->employee->where('name','LIKE','%'.$data.'%')->where('role','user')->get();
    }
}
