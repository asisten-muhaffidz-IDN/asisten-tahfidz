<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $userUstadz = User::findOrFail($id);

        if ($request->hasFile('profile_photo')) {
            if (Storage::exists('public/image-ustadz/' . $userUstadz->profile_photo)) { 
                Storage::delete('public/image-ustadz/' . $userUstadz->profile_photo);
            }
            $filename = time() . '_' . rand(1000, 9999) . '.' . $request->profile_photo->extension();
            $request->profile_photo->storeAs('public/image-ustadz', $filename);
            // dd($request->all());

            $userUstadz->profile_photo = $filename;
            $userUstadz->save();
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
