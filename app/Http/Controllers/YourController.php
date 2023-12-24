<?php

namespace App\Http\Controllers;

use App\Models\YourModel;
use Illuminate\Http\Request;

class YourController extends Controller
{
    public function index()
    {
        return YourModel::all();
    }

    public function store(Request $request)
    {
        return YourModel::create($request->all());
    }

    public function show($id)
    {
        return YourModel::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $model = YourModel::findOrFail($id);
        $model->update($request->all());
        return $model;
    }

    public function destroy($id)
    {
        $model = YourModel::findOrFail($id);
        $model->delete();
        return response()->json(null, 204);
    }
}
