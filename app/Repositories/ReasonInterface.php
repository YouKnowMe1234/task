<?php
namespace App\Repositories;

interface ReasonInterface
{
    public function index();
    public function store($data);
    public function update($data, $id);
    public function delete($id);
    public function edit($id);
    public function search($data);
}
