<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Santri extends Model
{
    use HasFactory;

    protected $fillable =[
        'id_user',
        'nis',
        'nama',
        'kelas',
        'kamar',
        'tgl_masuk',
        'hafalan_awal',
        'id_ustadz',
        'id_halaqoh',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    public function halaqoh()
    {
        return $this->belongsTo(Halaqoh::class, 'id_halaqoh');
    }

    public function ustadz()
    {
        return $this->belongsTo(Ustadz::class, 'id_ustadz');
    }

    public function pencapaianMingguans()
    {
        return $this->hasMany(PencapaianMingguan::class, 'id_santri');
    }

    public function pencapaianBulanans()
    {
        return $this->hasMany(PencapaianBulanan::class, 'id_santri');
    }
}
