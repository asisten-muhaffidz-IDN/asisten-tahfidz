<?php

namespace App\Http\Controllers;

use App\Models\Halaqoh;
use App\Models\PencapaianBulanan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use RealRashid\SweetAlert\Facades\Alert;

class LaporanBulananController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Laporan/LaporanBulanan/LaporanBulanan', [
            'dataHalaqoh' => Halaqoh::with(['santris', 'ustadz'])->get(), 
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($idHalaqoh)
    {
        $dataHalaqohSelected = Halaqoh::with(['santris', 'ustadz'])->find($idHalaqoh);

        if (!$dataHalaqohSelected) {
            // Handle ketika data tidak ditemukan, misalnya redirect atau tampilkan pesan kesalahan
            return redirect()->route('route_name')->with('error', 'Data tidak ditemukan.');
        }

        return Inertia::render('Laporan/LaporanBulanan/InputLaporanBulanan', [
            'dataHalaqohSelected' => $dataHalaqohSelected,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)


    {
        $request->validate([
            'id_santri'             => 'required',
            'bulan'                 => 'required|string',
            'awal_tasmi_bulanan'    => 'required|string',
            'akhir_tasmi_bulanan'   => 'required|string',
            'total_halaman_bulanan' => 'required|numeric',
            'total_hafalan'         => 'required|numeric',
            'murojaah'              => 'required|string',
            'catatan'               => 'required|string',
        ]);

        PencapaianBulanan::create([
            'id_santri'             => $request->id_santri,
            'bulan'                 => $request->bulan,
            'awal_tasmi_bulanan'    => $request->awal_tasmi_bulanan,
            'akhir_tasmi_bulanan'   => $request->akhir_tasmi_bulanan,
            'total_halaman_bulanan' => $request->total_halaman_bulanan,
            'total_hafalan'         => $request->total_hafalan,
            'murojaah'              => $request->murojaah,
            'catatan'               => $request->catatan,
        ]);
        
        return redirect()->back()->with('success', 'Data laporan bulanan berhasil ditambahkan.');
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
