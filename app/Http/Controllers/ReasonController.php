<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ReasonService;
use Exception;

class ReasonController extends Controller
{

    protected $reasonService;

    public function __construct(ReasonService $reasonSerivce)
    {
        $this->reasonService = $reasonSerivce;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $result = ['status' => 200];

        try {
            $result['data'] = $this->reasonService->index();
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
            'title' => $request->title,
            'description' => $request->description
        ];
        try {
            $result['data'] = $this->reasonService->store($data);
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
            $result['data'] = $this->reasonService->edit($id);
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
        //
        $result = ['status' => 200];

        $data = [
            'title' => $request->title,
            'description' => $request->description
        ];
        try {
            $result['data'] = $this->reasonService->update($data,$id);
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
        //
        // dd($id);
        $result = ['status' => 200];
        try {
            $result['data'] = $this->reasonService->delete($id);
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
            $result['data'] = $this->reasonService->search($data);
        }catch (Exception $e){
            $result = [
                'status' => 500,
                'error' => $e->getMessage()
            ];
        }
        return response()->json($result, $result['status']);
    }
}
