<?php

namespace App\Http\Controllers;

use App\Mail\ResetMail;
use Illuminate\Http\Request;
use App\Services\EmployeeService;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Mail;

class EmployeeController extends Controller
{
    protected $employeeService;

    public function __construct(EmployeeService $employeeService)
    {
        $this->employeeService = $employeeService;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = ['status' => 200];

        try {
            $result['data'] = $this->employeeService->index();
        } catch (Exception $e) {
            $result = [
                'status' => 500,
                'error' => $e->getMessage()
            ];
        }
        return response()->json($result, $result['status']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $result = ['status' => 200];
        $data = [
            'name' => $request->name,
            'dob' => $request->dob,
            'phone' => $request->phone,
            'photo' => $request->photo,
            'role' => 'user',
            'password'=> $request->password,
            'email'=> $request->email,
            'level' => $request->level,
            'status' => $request->status
        ];
        try {
            $result['data'] = $this->employeeService->store($data);
        } catch (Exception $e) {
            $result = [
                'status' => 500,
                'error' => $e->getMessage()
            ];
        }
        return response()->json($result,$result['status']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $result = ['status' => 200];

        try {
            $result['data'] = $this->employeeService->edit($id);
        } catch (Exception $e) {
            $result = [
                'status' => 500,
                'error' => $e->getMessage()
            ];
        }
        return response()->json($result,$result['status']);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = null;
        $data = [
            'name' => $request->name,
            'dob' => $request->dob,
            'phone' => $request->phone,
            'photo' => $request->photo,
            'role' => $request->role,
            'email'=> $request->email,
            'level' => $request->level,
            'status' => $request->status,
            'unsub' => null
        ];
        if($request->status == 'inactive'){
            $data['unsub'] = Carbon::now()->toDateString();
        }
        $result = ['status' => 200];
        // dd($data);
        try {
            $result['data'] = $this->employeeService->update($data, $id);
        } catch (Exception $e) {
            $result = [
                'status' => 500,
                'error' => $e->getMessage()
            ];
        }
        return response()->json($result,$result['status']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = ['status' => 200];
        try {
            $result['data'] = $this->employeeService->delete($id);
        } catch (Exception $e) {
            $result = [
                'status' => 500,
                'error' => $e->getMessage()
            ];
        }
        return response()->json($result, $result['status']);
    }

    public function search(Request $request)
    {
        $result = ['status' => 200];
        $data = $request->search;
        try{
            $result['data'] = $this->employeeService->search($data);
        }catch (Exception $e){
            $result = [
                'status' => 500,
                'error' => $e->getMessage()
            ];
        }
        return response()->json($result, $result['status']);
    }
}
