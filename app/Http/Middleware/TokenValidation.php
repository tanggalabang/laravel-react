<?php

namespace App\Http\Middleware;

use App\Models\Actor;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TokenValidation
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $token = $request->query('token');

        if(!$token) return response()->json(['message'=> 'Session expired']);

        $val = Actor::where('token', $token)->first();

        if(!$val) return response()->json(['message'=> 'Session expired']);

        return $next($request);
    }
}