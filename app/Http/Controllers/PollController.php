<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class PollController extends Controller
{
    public function index()
    {
        return Inertia::render('Poll/New', []);
    }
}
