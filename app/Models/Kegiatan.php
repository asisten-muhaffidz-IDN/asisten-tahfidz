<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kegiatan extends Model
{
    use HasFactory;

    protected $fillable =[
        'id_ustadz',
        'nama',
        'gambar',
        'tgl_mulai_kegiatan',
        'tgl_selesai_kegiatan',
        'tempat',
    ];

    public function ustadz()
    {
        return $this->belongsTo(Ustadz::class, 'id_ustadz');
    }
}
