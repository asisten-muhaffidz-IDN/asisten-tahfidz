import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react'

export default function HomeSantri({auth, dataSantri}) {
    console.log(dataSantri)
    return (
        <Authenticated
        user={auth.user}
        header={'Data Santri'}
        >
            <Head title='Santri' />

            <div className="w-full px-6 py-6 mx-auto">
        

            <div className="flex flex-wrap -mx-3">
                <div className="flex-none w-full max-w-full px-3">
                    <div className="relative flex flex-col min-w-0 mb-3 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                    <div className="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                        <h6>Daftar Santri</h6>
                    </div>
                    <div className="flex-auto px-0 pt-0 pb-2">
                        <div className="p-0 overflow-x-auto">
                        <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                            <thead className="align-bottom">
                                <tr>
                                    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Nama</th>
                                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Halaqoh</th>
                                    <th className="py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Jumlah Hafalan</th>
                                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Muhaffidz</th>
                                    <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataSantri.data ?
                                (dataSantri.data.map((santri, index) => (
                                    <tr key={santri.id}>
                                    <td className="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent">
                                        <div className="flex px-2 py-1">
                                            <div>
                                            <img src="../assets/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl" alt="user1" />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                            <h6 className="mb-0 text-sm leading-normal">{santri.nama}</h6>
                                            <p className="mb-0 text-xs leading-tight text-slate-400">NIS: {santri.nis}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent">
                                        <p className="mb-0 text-xs font-semibold leading-tight">{santri.halaqoh.nama_halaqoh}</p>
                                    </td>
                                    <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-t whitespace-nowrap shadow-transparent">
                                        <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">{santri.hafalan_awal} Juz</span>
                                    </td>
                                    <td className="p-2 text-center align-middle bg-transparent border-t whitespace-nowrap shadow-transparent">
                                        <span className="text-xs font-semibold leading-tight text-slate-400">Ustadz {santri.ustadz ? santri.ustadz.nama : 'Tidak ada'}</span>
                                    </td>
                                    <td className="p-2 align-middle bg-transparent border-t whitespace-nowrap shadow-transparent">
                                        <a className="text-xs font-semibold leading-tight text-slate-400"> Edit </a>
                                    </td>
                                </tr>
                                
                                ))
                                
                                )
                                :
                                <tr key={'no-data'}>
                                    <td colspan="5" className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">Tidak ada data</td>
                                </tr>
                                }
                                
                            </tbody>
                        </table>
                        </div>
                    </div>
                    
                    </div>
                    {dataSantri.links && (
                        
                            
                        <div className="flex items-center p-3 justify-between mt-4 bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
                            {/* Previous Button */}
                            <span className="text-sm text-slate-400">Menampilkan halaman {dataSantri.current_page} dari {dataSantri.last_page}</span>
                            <div className="flex">

                                {dataSantri.prev_page_url && (
                                <a href={dataSantri.prev_page_url} className="cursor-pointer text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center me-2">
                                    <i className="fa fa-solid fa-angle-left me-2"/>
                                    Pervious
                                </a>)}

                                {dataSantri.next_page_url && (
                                <a href={dataSantri.next_page_url} className="cursor-pointer text-white bg-gradient-to-l from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center me-2">
                                    Next
                                    <i className="fa fa-solid fa-angle-right ms-2"/>
                                </a>)}

                            </div>
                        </div>
                            
                            
                        
                    )}
                </div>
                
            </div>
            
            </div>
        </Authenticated>
    )
}
