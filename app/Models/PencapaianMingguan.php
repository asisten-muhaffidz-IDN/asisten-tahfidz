<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PencapaianMingguan extends Model
{
    use HasFactory;

    protected $fillable =[
        'id_santri',
        'bulan',
        'pekan_ke',
        'awal_tasmi_pekanan',
        'akhir_tasmi_pekanan',
        'total_halaman_pekanan',
        'murojaah',
        'catatan',
        'total_hari_aktif',
        'total_sakit',
        'total_izin',
        'total_alpa',
    ];

    public function santri()
    {
        return $this->belongsTo(Santri::class, 'id_santri');
    }
}
