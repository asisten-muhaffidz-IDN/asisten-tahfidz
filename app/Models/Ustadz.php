<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ustadz extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_user',
        'id_halaqoh',
        'nip',
        'nama',
        'jabatan',
        'posisi',
        'tgl_masuk',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    public function halaqoh()
    {
        return $this->belongsTo(Halaqoh::class, 'id_halaqoh');
    }

    public function santris()
    {
        return $this->hasMany(Santri::class, 'id_ustadz');
    }

    public function kegiatans()
    {
        return $this->hasMany(Kegiatan::class, 'id_ustadz');
    }

    public function artikels()
    {
        return $this->hasMany(Artikel::class, 'id_ustadz');
    }
}
