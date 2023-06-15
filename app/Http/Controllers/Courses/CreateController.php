<?php

namespace App\Http\Controllers\Courses;

use App\Http\Controllers\Controller;
use App\Http\Requests\Courses\StoreRequest;
use App\Models\Courses;

class CreateController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $data =$request->validated();
        $course = Courses::create($data);
        return $course;
    }
}
