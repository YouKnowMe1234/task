<?php

namespace App\Services;

use App\Repositories\ReasonInterface;
use Illuminate\Support\Facades\Validator;
use InvalidArgumentException;

class ReasonService implements ReasonServiceInterface
{
    protected $reasonRepo;

    public function __construct(ReasonInterface $reasonRepo)
    {
        $this->reasonRepo = $reasonRepo;
    }

    public function index()
    {
        return $this->reasonRepo->index();
    }

    public function store($data)
    {
        $validator = Validator::make($data,[
            'title' => 'required',
            'description' => 'required'
        ]);
        if($validator->fails()){
            throw new InvalidArgumentException($validator->errors()->first());
        }
        return $this->reasonRepo->store($data);
    }

    public function edit($id)
    {
        return $this->reasonRepo->edit($id);
    }

    public function update($data, $id)
    {
        $reason = $this->reasonRepo->update($data, $id);
        return $reason;
    }
    public function delete($id)
    {
        $reason = $this->reasonRepo->delete($id);
        return $reason;
    }

    public function search($data)
    {
        return $this->reasonRepo->search($data);
    }
}
