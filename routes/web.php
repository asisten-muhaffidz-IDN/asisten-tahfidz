<?php

use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HalaqohController;
use App\Http\Controllers\HasilLaporanController;
use App\Http\Controllers\LaporanBulananController;
use App\Http\Controllers\LaporanMingguanController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SantriController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UstadzController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/laporan', function() {
    return Inertia::render('Laporan/HomeLaporan');
})->middleware(['auth', 'verified'])->name('laporan');

Route::resource('/laporan-mingguan', LaporanMingguanController::class)->except([
    'create'
])->middleware(['auth', 'verified']);

Route::get('/input-laporan-mingguan/{idHalaqoh}', [LaporanMingguanController::class, 'create'])
->middleware(['auth', 'verified'])
->name('laporan.mingguan.create');

Route::get('/hasil-laporan-mingguan', [HasilLaporanController::class, 'mingguan'])
->middleware(['auth', 'verified'])
->name('hasil.laporan.mingguan');

Route::resource('/laporan-bulanan', LaporanBulananController::class)->except([
    'create'
])->middleware(['auth', 'verified']);

Route::get('/input-laporan-bulanan/{idHalaqoh}', [LaporanBulananController::class, 'create'])
    ->middleware(['auth', 'verified'])
    ->name('laporan.bulanan.create');

Route::resource('/user', UserController::class)->except([
    'create'
])->middleware(['auth', 'verified']);

Route::resource('/halaqoh', HalaqohController::class)->except([
    'create'
])->middleware(['auth', 'verified']);

Route::resource('/santri', SantriController::class)->except([
    'create'
])->middleware(['auth', 'verified']);

Route::resource('/ustadz', UstadzController::class)->except([
    'create'
])->middleware(['auth', 'verified']);

Route::resource('/artikel', ArtikelController::class)->middleware(['auth', 'verified']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
