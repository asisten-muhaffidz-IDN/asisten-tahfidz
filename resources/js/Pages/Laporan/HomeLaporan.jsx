import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Inertia } from '@inertiajs/inertia'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function HomeLaporan({auth}) {
    return (
        <Authenticated
            user={auth.user}
            header={'Laporan'}
        >
            <Head title="Laporan" />
            <div className="w-full px-6 py-6 mx-auto">
            {/* row 1 */}
                <div className="flex flex-wrap -mx-3">
                    {/* card1 */}
                    <div className="w-full max-w-full px-3 cursor-pointer mb-6 sm:w-1/2 sm:flex-none xl:w-2/4 transition duration-200 hover:scale-105">
                        <Link href={route('laporan-mingguan.index')}>
                            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                                <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div className="h-full flex items-center">
                                            <h5 className="mb-0 font-bold text-2xl">
                                            Mingguan
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                                        <i className="fa fa-solid fa-pencil text-lg relative top-2.5 text-white" />
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/* card2 */}
                    <div className="w-full max-w-full px-3 cursor-pointer mb-6 sm:w-1/2 sm:flex-none xl:w-2/4 transition duration-200 hover:scale-105">
                        <Link href={route('laporan-bulanan.index')}>
                            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                                <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                        <div className="h-full flex items-center">
                                            <h5 className="mb-0 font-bold text-2xl">
                                            Bulanan
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                                        <i className="fa fa-solid fa-marker text-lg relative top-2.5 text-white" />
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </Link>
                    </div>  
                    
                </div>

            {/* row 2 */}
                <div className="flex flex-wrap mt-6 -mx-3">
                    <div className="w-full px-3 mb-6 lg:flex-none">
                        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border py-7 px-10">
                            <h6 class="my-6 ml-2 font-bold text-purple-800 text-xl">Hasil Laporan</h6>
                            <div className="flex flex-wrap -mx-3">
                                {/* card1 */}
                                <div className="w-full max-w-full px-3 cursor-pointer mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-2/4 transition duration-200 hover:scale-105">
                                    <Link href={route('hasil.laporan.mingguan')}>
                                        <div className="relative flex flex-col min-w-0 break-words shadow-soft-2xl rounded-2xl bg-clip-border">
                                            <div className="flex-auto p-4">
                                            <div className="flex flex-row -mx-3">
                                                <div className="flex-none w-2/3 max-w-full px-3">
                                                    <div className="h-full flex items-center">
                                                        <h5 className="mb-0 font-bold text-2xl">
                                                        Mingguan
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="px-3 text-right basis-1/3">
                                                <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                                                    <i className="fa fa-regular fa-newspaper text-lg relative top-2.5 text-white" />
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                {/* card2 */}
                                <div className="w-full max-w-full px-3 cursor-pointer mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-2/4 transition duration-200 hover:scale-105">
                                    <div className="relative flex flex-col min-w-0 break-words shadow-soft-2xl rounded-2xl bg-clip-border">
                                        <div className="flex-auto p-4">
                                        <div className="flex flex-row -mx-3">
                                            <div className="flex-none w-2/3 max-w-full px-3">
                                                <div className="h-full flex items-center">
                                                    <h5 className="mb-0 font-bold text-2xl">
                                                    Bulanan
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="px-3 text-right basis-1/3">
                                            <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                                                <i className="fa fa-solid fa-newspaper text-lg relative top-2.5 text-white" />
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>  
                                
                            </div>
                        </div>
                    </div>
                </div>

            
                
            </div>


        </Authenticated>
    )
}
