<?php

namespace App\Http\Controllers;

use App\Models\Faculty;
use App\Models\University;
use Illuminate\Http\Request;

class UniversityController extends Controller
{
    protected $university;
    protected $faculty;

    public function __construct(University $university, Faculty $faculty)
    {
        $this->university = $university;
        $this->faculty = $faculty;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $all = $this->university->with('faculties')->get();
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
            'name' => 'required',
            'description' => 'required',
            'address' => 'required',
            'faculties' => 'required|array'
        ]);

        $create = collect($request->only($this->university->getFillable()))
            ->toArray();
        $new = $this->university->create($create);

        foreach ($request->faculties as $value) {
            $this->faculty->create([
                'name' => $value,
                'university_id' => $new->id
            ]);
        }

        $createdUniversity = $this->university->with('faculties')->findOrFail($new->id);

        return Controller::success('Created university successfully', $createdUniversity);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $data = $this->university->with('faculties')->findorFail($id);
        return Controller::success('Get single', $data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(University $university)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, Request $request)
    {
        $university = $this->university->findOrFail($id);
        $update = collect($request->only($this->university->getFillable()))
            ->toArray();

        $university->update($update);

        if ($request->has('faculties')) {

            $university->faculties()->delete();

            foreach ($request->faculties as $value) {
                $this->faculty->create([
                    'name' => $value,
                    'university_id' => $id
                ]);
            }
        }

        $updatedUniversity = $this->university->with('faculties')->findOrFail($id);

        return Controller::success('Updated successfully', $updatedUniversity);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $this->university->findOrFail($id)->delete();
        return Controller::success('Deteted successfully');
    }
}
