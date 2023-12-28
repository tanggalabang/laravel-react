<?php

namespace App\Http\Controllers;

use App\Models\Faculty;
use Illuminate\Http\Request;

class FacultyController extends Controller
{
    protected $faculty;

    public function __construct(Faculty $faculty)
    {
        $this->faculty = $faculty;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $all = $this->faculty->all();
        return Controller::success('Get all datas', $all);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);

        $create = collect($request->only($this->faculty->getFillable()))
            ->toArray();
        $new = $this->faculty->create($create);
        return Controller::success("Created data sucessfyully", $new);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $data = $this->faculty->findorFail($id);
        return Controller::success('Get single', $data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Faculty $faculty)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $faculty = $this->faculty->findOrFail($id);

        $update = collect($request->only($this->faculty->getFillable()))
            ->toArray();
        $faculty->update($update);

        return Controller::success('Updated successfully', $faculty);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $this->faculty->findOrFail($id)->delete();
        return Controller::success("Delete successfully");
    }
}
