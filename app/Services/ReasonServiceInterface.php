<?php
namespace App\Services;

interface ReasonServiceInterface
{
    public function index();
    public function store($data);
    public function update($data, $id);
    public function edit($id);
    public function delete($id);
    public function search($data);
}
