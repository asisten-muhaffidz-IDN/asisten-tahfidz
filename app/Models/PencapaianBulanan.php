<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PencapaianBulanan extends Model
{
    use HasFactory;

    protected $fillable =[
        'id_santri',
        'bulan',
        'awal_tasmi_bulanan',
        'akhir_tasmi_bulanan',
        'total_halaman_bulanan',
        'total_hafalan',
        'murojaah',
        'catatan',
    ];

    public function santri()
    {
        return $this->belongsTo(Santri::class, 'id_santri');
    }
}
