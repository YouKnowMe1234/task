<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\CalendarService;
use Exception;
use Illuminate\Support\Facades\Auth;

class CalendarController extends Controller
{
    protected $calendarService;

    public function __construct(CalendarService $calendarService)
    {
        $this->calendarService = $calendarService;
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
            $result['data'] = $this->calendarService->index();
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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $result = ['status' => 200];
        if(Auth::check()){
            if(Auth::user()){
                $user_id = Auth::user()->id;
                $data = [
                    'user_id' => $user_id,
                    'type' => $request->type,
                    'day' => $request->day,
                    'time_start' => $request->time_start,
                    'time_end' => $request->time_end,
                    'reason_id' =>$request->reason_id
                ];
                try {
                    $result['data'] = $this->calendarService->store($data);
                } catch (Exception $e) {
                    $result = [
                        'status' => 500,
                        'error' => $e->getMessage()
                    ];
                }
                return response()->json($result,$result['status']);
            }
        }

        // $data = [
        //     'user_id' => $request->user_id,
        //     'type' => $request->type,
        //     'day' => $request->day,
        //     'time_start' => $request->time_start,
        //     'time_end' => $request->time_end,
        //     'reason_id' => $request->reason_id
        // ];
        // try {
        //     $result['data'] = $this->calendarService->store($data);
        // } catch (Exception $e) {
        //     $result = [
        //         'status' => 500,
        //         'error' => $e->getMessage()
        //     ];
        // }
        // return response()->json($result,$result['status']);

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
        $result = ['status' => 200];

        try {
            $result['data'] = $this->calendarService->edit($id);
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
        $result = ['status' => 200];
        try {
            $result['data'] = $this->calendarService->delete($id);
        } catch (Exception $e) {
            $result = [
                'status' => 500,
                'error' => $e->getMessage()
            ];
        }
        return response()->json($result, $result['status']);
    }


    public function getPersonalCalendar()
    {
        $result = ['status' => 200];
        $user_id = Auth::user()->id;
        try {
            $result['data'] = $this->calendarService->getPersonalCalendar($user_id);
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
        try {
            $result['data'] = $this->calendarService->search($data);
        } catch (Exception $e) {
            $result = [
                'status' => 500,
                'error' => $e->getMessage()
            ];
        }
        return response()->json($result, $result['status']);
    }
}
