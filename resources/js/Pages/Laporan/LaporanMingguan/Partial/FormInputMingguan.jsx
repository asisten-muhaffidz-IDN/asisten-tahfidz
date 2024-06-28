import { useForm } from '@inertiajs/react';
import { Select } from 'flowbite-react';
import React from 'react'
import Swal from 'sweetalert2';

export default function FormInputMingguan({index, dataSantri}) {
    
    const { data, setData, post, processing, errors } = useForm({
        id_santri: dataSantri.id,
        bulan: '',
        pekan_ke: '',
        awal_tasmi_pekanan: '',
        akhir_tasmi_pekanan: '',
        total_halaman_pekanan: '',
        murojaah: '',
        catatan: '',
        total_hari_aktif: '',
        total_sakit: '',
        total_izin: '',
        total_alpa: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            post(route('laporan-mingguan.store'));
            const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: 'success',
                title: 'Data berhasil disimpan'
            });
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Terjadi kesalahan',
                text: 'Gagal menyimpan data, silakan coba lagi.'
            });
        }
    };

    return (
        <div key={dataSantri.id} className="bg-white overflow-hidden shadow-md sm:rounded-lg mb-5">
            <form className="px-7 py-2" onSubmit={handleSubmit}>
                <div className="flex justify-between my-3">
                    <h5 className="text-xl font-bold me-6">{index + 1}. {dataSantri.nama}</h5>
                    <input type="number" className="hidden" value={dataSantri.id} readOnly />
                    <div className="flex gap-11 me-11">
                        <Select value={data.bulan} onChange={e => setData('bulan', e.target.value)}>
                            <option value="">Pilih Bulan</option>
                            <option value="Januari">Januari</option>
                            <option value="Februari">Februari</option>
                            <option value="Maret">Maret</option>
                            <option value="April">April</option>
                            <option value="Mei">Mei</option>
                            <option value="Juni">Juni</option>
                            <option value="Juli">Juli</option>
                            <option value="Agustus">Agustus</option>
                            <option value="September">September</option>
                            <option value="Oktober">Oktober</option>
                            <option value="November">November</option>
                            <option value="Desember">Desember</option>
                        </Select>
                        {errors.bulan && <span className="mt-2 text-xs text-red-600">{errors.bulan}</span>}
                        
                        <Select value={data.pekan_ke} onChange={e => setData('pekan_ke', e.target.value)}>
                            <option value="">Pilih Pekan</option>
                            <option value="1">Pekan 1</option>
                            <option value="2">Pekan 2</option>
                            <option value="3">Pekan 3</option>
                            <option value="4">Pekan 4</option>
                            <option value="5">Pekan 5</option>
                        </Select>
                        {errors.pekan_ke && <span className="mt-2 text-xs text-red-600">{errors.pekan_ke}</span>}
                    </div>
                </div>
                <div className="grid grid-cols-7 gap-4">
                    <div className="col-span-6 grid grid-cols-4 gap-4">
                        <div className="grid grid-row-2 gap-6">
                            <div>
                                <label htmlFor={`awalTasmi-${dataSantri.id}`} className="block mb-2 text-sm font-medium text-gray-900">Awal Tasmi</label>
                                <input value={data.awal_tasmi_pekanan} onChange={e => setData('awal_tasmi_pekanan', e.target.value)} type="text" id={`awalTasmi-${dataSantri.id}`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                                {errors.awal_tasmi_pekanan && <span className="mt-2 text-xs text-red-600">{errors.awal_tasmi_pekanan}</span>}
                            </div>
                            <div>
                                <label htmlFor={`akhirTasmi-${dataSantri.id}`} className="block mb-2 text-sm font-medium text-gray-900">Akhir Tasmi</label>
                                <input value={data.akhir_tasmi_pekanan} onChange={e => setData('akhir_tasmi_pekanan', e.target.value)} type="text" id={`akhirTasmi-${dataSantri.id}`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                                {errors.akhir_tasmi_pekanan && <span className="mt-2 text-xs text-red-600">{errors.akhir_tasmi_pekanan}</span>}
                                <p id="helper-text-explanation-akhirTasmi" className="mt-2 text-sm text-gray-500">Contoh: Ali Imron:30</p>
                            </div>
                        </div>
                        
                        <div className="grid grid-row-2">
                            <div>
                                <label htmlFor={`totalTasmiPekanan-${dataSantri.id}`} className="block mb-2 text-sm font-medium text-gray-900">Total Tasmi(Halaman)</label>
                                <input value={data.total_halaman_pekanan} onChange={e => setData('total_halaman_pekanan', e.target.value)} type="number" id={`totalTasmiPekanan-${dataSantri.id}`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                                {errors.total_halaman_pekanan && <span className="mt-2 text-xs text-red-600">{errors.total_halaman_pekanan}</span>}
                                <p id="helper-text-explanation-totalTasmiPekanan" className="mt-1 text-sm text-gray-500">Contoh: 10 (Isi angka saja)</p>
                            </div>
                            <div>
                                <label htmlFor={`murojaah-${dataSantri.id}`} className="block mb-2 text-sm font-medium text-gray-900">Muroja'ah</label>
                                <input value={data.murojaah} onChange={e => setData('murojaah', e.target.value)} type="text" id={`murojaah-${dataSantri.id}`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                                {errors.murojaah && <span className="mt-1 text-xs text-red-600">{errors.murojaah}</span>}
                                <p id="helper-text-explanation-murojaah" className="mt-2 text-sm text-gray-500">Contoh: Al-Baqarah:15-Ali Imron:5</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label htmlFor={`totalHariAktif-${dataSantri.id}`} className="block mb-2 text-sm font-medium text-gray-900">Total Sakit</label>
                                    <input value={data.total_hari_aktif} onChange={e => setData('total_hari_aktif', e.target.value)} type="number" id={`totalHariAktif-${dataSantri.id}`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                                    {errors.total_hari_aktif && <span className="mt-2 text-xs text-red-600">{errors.total_hari_aktif}</span>}
                                </div>
                                <div>
                                    <label htmlFor={`totalSakit-${dataSantri.id}`} className="block mb-2 text-sm font-medium text-gray-900">Total Sakit</label>
                                    <input value={data.total_sakit} onChange={e => setData('total_sakit', e.target.value)} type="number" id={`totalSakit-${dataSantri.id}`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                                    {errors.total_sakit && <span className="mt-2 text-xs text-red-600">{errors.total_sakit}</span>}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 mt-6">
                                <div>
                                    <label htmlFor={`totalIzin-${dataSantri.id}`} className="block mb-2 text-sm font-medium text-gray-900">Total Izin</label>
                                    <input value={data.total_izin} onChange={e => setData('total_izin', e.target.value)} type="number" id={`totalIzin-${dataSantri.id}`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                                    {errors.total_izin && <span className="mt-2 text-xs text-red-600">{errors.total_izin}</span>}
                                </div>
                                <div>
                                    <label htmlFor={`totalAlpa-${dataSantri.id}`} className="block mb-2 text-sm font-medium text-gray-900">Total Alpa</label>
                                    <input value={data.total_alpa} onChange={e => setData('total_alpa', e.target.value)} type="number" id={`totalAlpa-${dataSantri.id}`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                                    {errors.total_alpa && <span className="mt-2 text-xs text-red-600">{errors.total_alpa}</span>}
                                </div>
                            </div>
                            <p id="helper-text-explanation-totalSakit" className="mt-2 text-sm text-gray-500">Contoh: 5(Isi angka saja)</p>
                        </div>
                        <div>
                            <label htmlFor={`catatan-${dataSantri.id}`} className="block mb-2 text-sm font-medium text-gray-900">Catatan</label>
                            <textarea value={data.catatan} onChange={e => setData('catatan', e.target.value)} type="text" id={`catatan-${dataSantri.id}`} rows="6" className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "/>
                            {errors.catatan && <span className="mt-2 text-xs text-red-600">{errors.catatan}</span>}
                        </div>
                    </div>
                    <div className="flex justify-center pb-6">
                        <button type="submit"  disabled={processing} className="flex items-center justify-center text-white bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-tl focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-lg text-center px-4">
                            Simpan
                            <i className="fa fa-solid fa-angle-right ml-2 text-2xl"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
        )
}
