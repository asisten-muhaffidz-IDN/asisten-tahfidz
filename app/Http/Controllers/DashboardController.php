<?php

namespace App\Http\Controllers;

use App\Models\Halaqoh;
use App\Models\Kegiatan;
use App\Models\Santri;
use App\Models\User;
use App\Models\Ustadz;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index() {

        return inertia('Dashboard', [
            'totalSantri'   => Santri::count(),
            'totalUstadz'   => Ustadz::count(),
            'totalHalaqoh'  => Halaqoh::count(),
            'todayActivity' => Kegiatan::select('nama')->whereDate('tgl_mulai_kegiatan', now())->get()
        ]);
    }
}
