<?php

namespace App\Http\Controllers;

use App\Models\Halaqoh;
use App\Models\PencapaianMingguan;
use App\Models\Santri;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LaporanMingguanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Laporan/LaporanMingguan/LaporanMingguan', [
            'dataHalaqoh' => Halaqoh::with(['santris', 'ustadz'])->get(), 
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($idHalaqoh)
    {
        // return Inertia::render('Laporan/LaporanMingguan/InputLaporanMingguan');
        $dataHalaqohSelected = Halaqoh::with(['santris', 'ustadz'])->find($idHalaqoh);

        if (!$dataHalaqohSelected) {
            // Handle ketika data tidak ditemukan, misalnya redirect atau tampilkan pesan kesalahan
            return redirect()->route('route_name')->with('error', 'Data tidak ditemukan.');
        }

        return Inertia::render('Laporan/LaporanMingguan/InputLaporanMingguan', [
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
            'pekan_ke'              => 'required|numeric',
            'awal_tasmi_pekanan'    => 'required|string',
            'akhir_tasmi_pekanan'   => 'required|string',
            'total_halaman_pekanan' => 'required|numeric',
            'murojaah'              => 'required|string',
            'catatan'               => 'required|string',
            'total_hari_aktif'      => 'required|numeric',
            'total_sakit'           => 'required|numeric',
            'total_izin'            => 'required|numeric',
            'total_alpa'            => 'required|numeric',
        ]);

        PencapaianMingguan::create([
            'id_santri' => $request->id_santri,
            'bulan' => $request->bulan,
            'pekan_ke' => $request->pekan_ke,
            'awal_tasmi_pekanan' => $request->awal_tasmi_pekanan,
            'akhir_tasmi_pekanan' => $request->akhir_tasmi_pekanan,
            'total_halaman_pekanan' => $request->total_halaman_pekanan,
            'murojaah' => $request->murojaah,
            'catatan' => $request->catatan,
            'total_hari_aktif' => $request->total_hari_aktif,
            'total_sakit' => $request->total_sakit,
            'total_izin' => $request->total_izin,
            'total_alpa' => $request->total_alpa,
        ]);

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
        $request->validate([
            'id_santri' => 'required',
            'bulan' => 'required|string',
            'pekan_ke' => 'required|numeric',
            'awal_tasmi_pekanan' => 'required|string',
            'akhir_tasmi_pekanan' => 'required|string',
            'total_halaman_pekanan' => 'required|numeric',
            'murojaah' => 'required|string',
            'catatan' => 'required|string',
            'total_hari_aktif' => 'required|numeric',
            'total_sakit' => 'required|numeric',
            'total_izin' => 'required|numeric', 
            'total_alpa' => 'required|numeric',
        ]);

        $santri = Santri::findOrfail();


        PencapaianMingguan::updateOrCreate(
            ['id_santri' => $id], // Kriteria pencarian
            [
                'id_santri' => $request->id_santri,
                'bulan' => $request->bulan,
                'pekan_ke' => $request->pekan_ke,
                'awal_tasmi_pekanan' => $request->awal_tasmi_pekanan,
                'akhir_tasmi_pekanan' => $request->akhir_tasmi_pekanan,
                'total_halaman_pekanan' => $request->total_halaman_pekanan,
                'murojaah' => $request->murojaah,
                'catatan' => $request->catatan,
                'total_hari_aktif' => $request->total_hari_aktif,
                'total_sakit' => $request->total_sakit,
                'total_izin' => $request->total_izin,
                'total_alpa' => $request->total_alpa,
            ]
        );
    
        dd($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
