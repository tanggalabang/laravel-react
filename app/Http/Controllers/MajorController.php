<?php

namespace App\Http\Controllers;

use App\Models\Faculty;
use App\Models\Major;
use Illuminate\Http\Request;

class MajorController extends Controller
{
    protected $major;
    protected $faculty;

    public function __construct(Faculty $faculty, Major $major)
    {
        $this->faculty = $faculty;
        $this->major = $major;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
            'faculty_id' => 'required',
        ]);

        $create = collect($request->only($this->major->getFillable()))
        ->toArray();
        $new = $this->major->create($create);

       
        // $createdUniversity = $this->university->with('faculties')->findOrFail($new->id);

        return Controller::success('Created university successfully', $new);
  
    }

    /**
     * Display the specified resource.
     */
    public function show(Major $major)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Major $major)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Major $major)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Major $major)
    {
        //
    }
}
