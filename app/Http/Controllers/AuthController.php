<?php

namespace App\Http\Controllers;

use App\Models\Peserta;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function signin(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        $pengguna = Peserta::where('username', $request->username)
            ->where('password', $request->password)->first();
        if (!$pengguna) return Controller::failed('Gagal signin');

        $token = md5($request->username);
        $pengguna->update(['token' => $token]);

        return Controller::success('Berhasil signin', $pengguna);
    }

    public function singout(Request $request)
    {
        $token = $request->query('token');

        $pengguna = Peserta::where('token', $token)->first();

        $pengguna->update(['token' => null]);

        return Controller::success('Berhasil signout');
    }
}

