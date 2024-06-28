import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react'

export default function HomeUstadz({auth, dataUstadz}) {
    console.log(dataUstadz)
    return (
        <Authenticated
        user={auth.user}
        header={'Data Ustadz'}
        >
            <Head title='Ustadz' />

            <div className="w-full p-6 mx-auto">
                <div className="flex flex-wrap -mx-3">
                    {dataUstadz ?
                    (dataUstadz.map((ustadz, index) => (
                        <div className="w-full max-w-full px-3 xl:w-4/12 h-96 my-4">
                        <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                                <div className="relative flex flex-col items-center -mx-3 px-5">
                                    <a href={route('ustadz.edit', ustadz.id)} title={`Edit Data Ustadz ${ustadz.nama}`} type="button" className="absolute top-0 right-4 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full p-2 flex items-center justify-center">
                                        <i className="fas fa-user-pen -me-1" />
                                    </a>
                                    <div className="flex flex-col items-center mb-3">
                                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg border-2" src="assets/img/default.jpg" alt="Bonnie image" />
                                        <h5 className="text-xl font-medium text-gray-900">{ustadz.nama}</h5>
                                        
                                        <span className={`px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white ${
                                            ustadz.status === 'Aktif' ? 'bg-gradient-to-tl from-green-600 to-lime-400' :
                                            ustadz.status === 'Sakit' ? 'bg-gradient-to-tl from-red-700 to-pink-400' :
                                            'bg-gradient-to-tl from-yellow-600 to-yellow-300'
                                        }`}>                                            
                                            {ustadz.status}
                                        </span>
                                    </div>
                                    <div className="px-3 w-full">
                                        <ul>
                                            <li className="relative block px-4 pt-0.5 pl-0 leading-normal bg-white border-0 text-sm text-inherit"><strong className="text-slate-700">NIP:</strong> &nbsp; {ustadz.nip}</li>
                                            <li className="relative block px-4 pt-0.5 pl-0 leading-normal bg-white border-0 text-sm text-inherit"><strong className="text-slate-700">Email:</strong> &nbsp; {ustadz.user.email}</li>
                                            <li className="relative block px-4 pt-0.5 pl-0 leading-normal bg-white border-0 text-sm text-inherit"><strong className="text-slate-700">Username:</strong> &nbsp; {ustadz.user.user_name}</li>
                                            <li className="relative block px-4 pt-0.5 pl-0 leading-normal bg-white border-0 text-sm text-inherit"><strong className="text-slate-700">Jabatan:</strong> &nbsp; {ustadz.jabatan}</li>
                                            <li className="relative block px-4 pt-0.5 pl-0 leading-normal bg-white border-0 text-sm text-inherit"><strong className="text-slate-700">Halaqoh:</strong> &nbsp; {ustadz.halaqoh.nama_halaqoh}</li>
                                            <li className="relative block px-4 pt-0.5 pl-0 leading-normal bg-white border-0 text-sm text-inherit"><strong className="text-slate-700">Bio:</strong> &nbsp; {ustadz.user.bio}</li>
                                            
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
