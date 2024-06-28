import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function LaporanMingguan({auth, dataHalaqoh}) {
    return (
        <Authenticated
            user={auth.user}
            header={'Laporan Mingguan'}
        >
            <Head title="Laporan Mingguan" />
                <button onClick={() => window.history.back()} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center ms-6">
                    <i className="fa fa-solid fa-angle-left me-2"></i>
                    Kembali
                </button>
                <div className="w-full px-6 py-6 mx-auto">
                    <div className="flex flex-wrap -mx-3">
                        {dataHalaqoh.length > 0 ?
                        (dataHalaqoh.map((dataHalaqoh, index) => (
                            <Link href={route('laporan.mingguan.create', dataHalaqoh.id)} key={dataHalaqoh.id} className="w-full max-w-full px-3 mb-6 transition duration-200 hover:scale-105 sm:w-1/2 sm:flex-none xl:w-1/3">
                            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                                <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p className="mb-0 font-sans text-xs font-semibold leading-normal">Pengampu: Ustadz {dataHalaqoh.ustadz ? dataHalaqoh.ustadz.nama : 'Tidak Ada'}</p>
                                        <h5 className="mb-1 font-bold text-lg">{dataHalaqoh.nama_halaqoh}</h5>
                                        <span className="text-xs leading-normal font-bold text-pink-600 ">Jumlah Santri: {dataHalaqoh.santris.length}</span>
                                    </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                                        <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white" />
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </Link>
                        )))
                    :   <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/3">
                            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                                <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <h5 className="mb-0 font-bold"></h5>
                                    </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                                        <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white" />
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    }
                        
                    </div>
                </div>


        </Authenticated>
    )
}



