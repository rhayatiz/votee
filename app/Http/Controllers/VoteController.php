<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class VoteController extends Controller
{
    public function submit(Request $request)
    {
        dd($request->getClientIp());
    }
}
