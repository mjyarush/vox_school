<?php

namespace App\Http\Controllers\Courses;

use App\Models\Courses;
use App\Http\Controllers\Controller;
use App\Http\Requests\Courses\StoreRequest;

class IndexController extends Controller
{
    public function __invoke()
    {
        return Courses::all();
    }
}
