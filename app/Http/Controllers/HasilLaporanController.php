<?php

namespace App\Http\Controllers;

use App\Models\Halaqoh;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HasilLaporanController extends Controller
{
    public function mingguan() {
        return Inertia::render('Laporan/LaporanMingguan/HasilLaporanMingguan/HomeHasilLaporanMingguan', [
            'dataHalaqoh' => Halaqoh::with(['santris', 'ustadz'])->get(),
        ]
    );
    }
}
