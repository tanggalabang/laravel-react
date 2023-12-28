<?php

namespace App\Http\Controllers;

use App\Models\Laporan;
use App\Models\Actor;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    protected $laporan;

    public function __construct(Actor $actor)
    {
        $this->actor = $actor;
    }

    public function signin(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        $actor = Actor::where('email', $request->email)
            ->where('password', $request->password)->first();
        if (!$actor) return Controller::failed('Failed signin');

        $token = md5($request->email);
        $actor->update(['token' => $token]);

        return Controller::success('Berhasil signin', $actor);
    }

    public function singout(Request $request)
    {
        $token = $request->query('token');

        $actor = Actor::where('token', $token)->first();

        $actor->update(['token' => null]);

        return Controller::success('Signout successfully');
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:actors,email', 
            'password' => 'required',
        ]);

        $create = collect($request->only($this->actor->getFillable()))
            ->toArray();
        $new = $this->actor->create($create);
        return Controller::success('Register successfully', $new);
    }
}