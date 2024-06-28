<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Halaqoh extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_halaqoh'
    ];

    public function ustadz()
    {
        return $this->hasOne(Ustadz::class, 'id_halaqoh');
    }

    public function santris()
    {
        return $this->hasMany(Santri::class, 'id_halaqoh');
    }
}
