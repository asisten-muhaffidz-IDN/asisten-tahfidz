<?php

namespace App\Http\Controllers;

use App\Models\Ustadz;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UstadzController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Ustadz/HomeUstadz', [
            'dataUstadz' => Ustadz::with(['user', 'santris', 'halaqoh', 'artikels'])->get(),
        ]);
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
    public function edit(string $idUstadz)
    {

        $dataUstadzSelected = Ustadz::with('user')->find($idUstadz);

        if (!$dataUstadzSelected) {
            // Handle ketika data tidak ditemukan, misalnya redirect atau tampilkan pesan kesalahan
            return redirect()->route('route_name')->with('error', 'Data tidak ditemukan.');
        }

        return Inertia::render('Ustadz/EditUstadz', [
            'dataUstadzSelected' => $dataUstadzSelected,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'nip' => 'nullable|numeric',
            'nama' => 'nullable|string',
            'status' => 'nullable|string',
            'posisi' => 'nullable|string',
            'jabatan' => 'nullable|string',
        ]);

        // dd($request->all());
        $ustadz = Ustadz::findOrFail($id);

        $ustadz->update([
            'nip' => $request->nip,
            'nama' => $request->nama,
            'status' => $request->status,
            'posisi' => $request->posisi,
            'jabatan' => $request->jabatan,
        ]);

        return redirect()->route('ustadz.edit', $ustadz->id)->with('success', 'Data berhasil disimpan');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
