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
        Schema::table('pencapaian_bulanans', function (Blueprint $table) {
            $table->integer('total_hari_aktif')->nullable()->after('catatan');
            $table->integer('total_sakit')->nullable()->after('total_hari_aktif');
            $table->integer('total_izin')->nullable()->after('total_sakit');
            $table->integer('total_alpa')->nullable()->after('total_izin');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('pencapaian_bulanans', function (Blueprint $table) {
            //
        });
    }
};
