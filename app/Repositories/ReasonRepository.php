<?php
namespace App\Repositories;

use App\Models\Reason;

class ReasonRepository implements ReasonInterface
{
    protected $reason;

    public function __construct(Reason $reason)
    {
        $this->reason = $reason;
    }

    public function index()
    {
        return $this->reason->get();
    }

    public function store($data)
    {
        $reason = new $this->reason;
        $reason->title = $data['title'];
        $reason->description = $data['description'];
        $reason->save();
        return $reason->fresh();
    }

    public function edit($id)
    {
        return $this->reason->where('id', $id)->get();
    }

    public function update($data, $id)
    {
        $reason = $this->reason->find($id);
        $reason->title = $data['title'];
        $reason->description = $data['description'];
        $reason->update();
        return $reason;
    }

    public function delete($id)
    {
        $reason = $this->reason->find($id);
        $reason->delete();
        return $reason;
    }

    public function search($data)
    {
        return $this->reason->where('title','LIKE','%'.$data.'%')->get();
    }
}
