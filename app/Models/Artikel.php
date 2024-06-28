<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artikel extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_ustadz',
        'judul',
        'slug',
        'gambar',
        'content',
    ];

    public function ustadz()
    {
        return $this->belongsTo(Ustadz::class, 'id_ustadz');
    }
}
