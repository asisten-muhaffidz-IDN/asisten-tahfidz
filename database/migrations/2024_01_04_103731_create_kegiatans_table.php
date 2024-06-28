<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('kegiatans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_ustadz')->references('id')->on('ustadzs');
            $table->string('nama', 100);
            $table->string('gambar')->nullable();
            $table->date('tgl_mulai_kegiatan');
            $table->date('tgl_selesai_kegiatan');
            $table->string('tempat', 100);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kegiatans');
    }
};
