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
        Schema::create('santris', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_user')->references('id')->on('users');
            $table->integer('nis');
            $table->string('nama', 50);
            $table->string('kelas', 15);
            $table->string('kamar', 25);
            $table->date('tgl_masuk');
            $table->string('hafalan_awal');
            $table->foreignId('id_ustadz')->references('id')->on('ustadzs');
            $table->foreignId('id_halaqoh')->references('id')->on('halaqohs');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('santris');
    }
};
