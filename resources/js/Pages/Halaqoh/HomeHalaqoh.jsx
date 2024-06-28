import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function HomeHalaqoh({auth, dataHalaqohs}) {
    console.log(dataHalaqohs)
    return (
        <Authenticated
            user={auth.user}
            header={'Halaqoh'}>

            <Head title="Halaqoh" />

            <div className="w-full p-6 mx-auto">
                <div className="flex flex-wrap -mx-3">

                    {dataHalaqohs? 
                    (dataHalaqohs.map((dataHalaqoh, index) => (
                        <div className="w-full max-w-full px-3 xl:w-4/12 h-96 my-4">
                            <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                                <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                                <div className="flex flex-wrap -mx-3">
                                    <div className="items-center w-full max-w-full px-3">
                                        <h1 className="mt-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 text-center">{dataHalaqoh.nama_halaqoh}</h1>
                                    </div>
                                    <div className="flex-auto px-4">
                                        <hr className="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent" />
                                        <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                            <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit"><strong className="text-slate-700">Muhaffidz:</strong> &nbsp; {dataHalaqoh.ustadz ? dataHalaqoh.ustadz.nama : 'Tidak ada'}</li>
                                            <li className="relative block px-4 py-1 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit"><strong className="text-slate-700">Anggota:</strong> &nbsp; {dataHalaqoh.santris.length} Santri</li>
                                            <li className="relative block px-4 py-1 ms-2.5 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                                                <ul className="grid grid-cols-2 gap-1 mt-3 items-center justify-center text-gray-500 list-none">
                                                {dataHalaqoh.santris.length > 0 ? (
                                                    dataHalaqoh.santris.map((santri, index) => (
                                                        <li key={index}>
                                                            <span className="inline-flex items-center px-2 py-1 me-2 font-medium text-slate-800 bg-gray-100 rounded">
                                                                {index < 9 ?
                                                                    (santri.nama.length > 15 ? `${santri.nama.substring(0, 15)}...` : santri.nama)
                                                                    : 'dll'
                                                                }
                                                            </span>
                                                        </li>
                                                    ))
                                                ) : (
                                                    <li>
                                                        <span className="inline-flex items-center px-2 py-1 me-2 font-medium text-slate-800 bg-gray-100 rounded">
                                                            Tidak ada anggota
                                                        </span>
                                                    </li>
                                                )}
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    )))
                    : <div>Tidak Ada</div>
                    }
                    
                    
                </div>
            </div>


        </Authenticated>
    )
}
