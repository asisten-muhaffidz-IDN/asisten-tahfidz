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
        Schema::create('pencapaian_bulanans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_santri')->references('id')->on('santris');
            $table->string('bulan');
            $table->string('awal_tasmi_bulanan');
            $table->string('akhir_tasmi_bulanan');
            $table->integer('total_halaman_bulanan');
            $table->float('total_hafalan');
            $table->string('murojaah');
            $table->text('catatan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pencapaian_bulanans');
    }
};
