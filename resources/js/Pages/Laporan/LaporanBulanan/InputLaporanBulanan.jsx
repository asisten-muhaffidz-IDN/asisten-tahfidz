import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React, { useEffect } from 'react'
import FormInputBulanan from './Partial/FormInputBulanan'

export default function InputLaporanMingguan({auth, dataHalaqohSelected}) {

    return (
        <Authenticated
            user={auth.user}
            header={'Input Laporan Mingguan'}>

            <Head title="Input Laporan Mingguan" />
            <div className="flex justify-between items-center">
                <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Halaqoh <mark className="px-2 text-white bg-teal-600 rounded">{dataHalaqohSelected.nama_halaqoh}</mark></h1>
                <button onClick={() => window.history.back()} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-6">
                    <i className="fa fa-solid fa-angle-left me-2"></i>
                    Kembali
                </button>
            </div>
            
            
            {dataHalaqohSelected.santris ?
            (dataHalaqohSelected.santris.map((santri, index) => (
                <FormInputBulanan
                key={santri.id}
                index={index}
                dataSantri={santri}
                />
            )))
            : (
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                Tidak Ada Santri
            </div>
            )}
        </Authenticated>
    )
}
