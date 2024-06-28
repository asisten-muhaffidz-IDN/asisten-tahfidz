import { useForm } from '@inertiajs/react';
import { Select } from 'flowbite-react';
import React from 'react'
import Swal from 'sweetalert2';

export default function FormInputBulanan({index, dataSantri}) {
    
    const { data, setData, post, processing, errors } = useForm({
        id_santri: dataSantri.id,
        bulan: '',
        awal_tasmi_bulanan: '',
        akhir_tasmi_bulanan: '',
        total_halaman_bulanan: '',
        total_hafalan: '',
        murojaah: '',
        catatan: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            post(route('laporan-bulanan.store'));
            const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: false,
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
                <div className="flex items-center gap-9 my-3">
                    <h5 className="text-xl font-bold me-6">{index + 1}. {dataSantri.nama}</h5>
                    <input type="number" className="hidden" value={dataSantri.id} readOnly />
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
                </div>
                <div className="grid grid-cols-7 gap-4">
                    <div className="col-span-6 grid grid-cols-7 gap-4">
                        <div className="col-span-2 grid grid-row-2 gap-7    ">
                            <div>
                                <label htmlFor={`awalTasmi-${dataSantri.id}`} className="block mb-2 text-sm font-medium text-gray-900">Awal Tasmi</label>
                                <input value={data.awal_tasmi_bulanan} onChange={e => setData('awal_tasmi_bulanan', e.target.value)} type="text" id={`awalTasmi-${dataSantri.id}`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                                {errors.awal_tasmi_bulanan && <span className="mt-2 text-xs text-red-600">{errors.awal_tasmi_bulanan}</span>}
                            </div>
                            <div>
                                <label htmlFor={`akhirTasmi-${dataSantri.id}`} className="block mb-2 text-sm font-medium text-gray-900">Akhir Tasmi</label>
                                <input value={data.akhir_tasmi_bulanan} onChange={e => setData('akhir_tasmi_bulanan', e.target.value)} type="text" id={`akhirTasmi-${dataSantri.id}`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                                {errors.akhir_tasmi_bulanan && <span className="mt-2 text-xs text-red-600">{errors.akhir_tasmi_bulanan}</span>}
                                <p id="helper-text-explanation-akhirTasmi" className="mt-2 text-sm text-gray-500">Contoh: Ali Imron:30</p>
                            </div>
                        </div>
                        
                        <div className="col-span-2 grid grid-row-2">
                            <div>
                                <label htmlFor={`totalTasmiPekanan-${dataSantri.id}`} className="block mb-2 text-sm font-medium text-gray-900">Total Tasmi(Halaman)</label>
                                <input value={data.total_halaman_bulanan} onChange={e => setData('total_halaman_bulanan', e.target.value)} type="number" id={`totalTasmiPekanan-${dataSantri.id}`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                                {errors.total_halaman_bulanan && <span className="mt-2 text-xs text-red-600">{errors.total_halaman_bulanan}</span>}
                                <p id="helper-text-explanation-totalTasmiPekanan" className="mt-1 text-sm text-gray-500">Contoh: 10 (Isi angka saja)</p>
                            </div>
                            <div>
                                <label htmlFor={`totalHafalan-${dataSantri.id}`} className="block mb-2 text-sm font-medium text-gray-900">Total Hafalan(Juz)</label>
                                <input value={data.total_hafalan} onChange={e => setData('total_hafalan', e.target.value)} type="number" id={`totalHafalan-${dataSantri.id}`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                                {errors.total_hafalan && <span className="mt-2 text-xs text-red-600">{errors.total_hafalan}</span>}
                                <p id="helper-text-explanation-totalHafalan" className="mt-1 text-sm text-gray-500">Contoh: 10.3 (Isi angka saja)</p>
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-row-2 gap-1">
                            <div>
                                <label htmlFor={`catatan-${dataSantri.id}`} className="block mb-2 text-sm font-medium text-gray-900">Catatan</label>
                                <textarea value={data.catatan} onChange={e => setData('catatan', e.target.value)} type="text" id={`catatan-${dataSantri.id}`} rows="2" className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "/>
                                {errors.catatan && <span className="mt-2 text-xs text-red-600">{errors.catatan}</span>}
                            </div>
                            <div>
                                <label htmlFor={`murojaah-${dataSantri.id}`} className="block mb-2 text-sm font-medium text-gray-900">Muroja'ah</label>
                                <input value={data.murojaah} onChange={e => setData('murojaah', e.target.value)} type="text" id={`murojaah-${dataSantri.id}`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                                {errors.murojaah && <span className="mt-1 text-xs text-red-600">{errors.murojaah}</span>}
                                <p id="helper-text-explanation-murojaah" className="mt-2 text-sm text-gray-500">Contoh: Al-Baqarah:15-Ali Imron:5</p>
                            </div>
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
