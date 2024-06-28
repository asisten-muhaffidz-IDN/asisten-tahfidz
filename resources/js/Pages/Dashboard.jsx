import hasAnyPermission from '@/Components/Permissions';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, totalSantri, totalUstadz, totalHalaqoh, todayActivity }) {
    return (
        <Authenticated
            user={auth.user}
            header={'Dashboard'}
        >
            <Head title="Dashboard" />

            
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Assalamualaikum, {auth.user.user_name}!</div>
                    </div>
                    <div className="w-full px-6 py-6 mx-auto">
                        {/* row 1 */}
                        <div className="flex flex-wrap -mx-3">
                        { hasAnyPermission(['lihat data santri']) &&
                            /* card1 */
                            <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                                <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p className="mb-0 font-sans text-sm font-semibold leading-normal">Total Santri</p>
                                        <h5 className="mb-0 font-bold">
                                            {totalSantri}
                                        <span className="text-sm leading-normal font-weight-bolder text-pink-700"> Santri</span>
                                        </h5>
                                    </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                                        <i className="fa fa-solid fa-user text-xl relative top-2.5 text-white" />
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        }

                        { hasAnyPermission(['lihat data ustadz']) &&
                            /* card2 */
                            <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                                <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p className="mb-0 font-sans text-sm font-semibold leading-normal">Total Muhafidz</p>
                                        <h5 className="mb-0 font-bold">
                                        {totalUstadz}
                                        <span className="text-sm leading-normal font-weight-bolder text-purple-600"> Ustadz</span>
                                        </h5>
                                    </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                                        <i className="fa fa-solid fa-user-tie text-xl relative top-2.5 text-white" />
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        }   

                        { hasAnyPermission(['lihat data halaqoh']) &&
                            /* card3 */
                            <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                                <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p className="mb-0 font-sans text-sm font-semibold leading-normal">Total Halaqoh</p>
                                        <h5 className="mb-0 font-bold">
                                            {totalHalaqoh}
                                        <span className="text-sm leading-normal text-red-600 font-weight-bolder"> Halaqoh</span>
                                        </h5>
                                    </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                                        <i className="fa fa-solid fa-users text-xl relative top-2.5 text-white" />
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        }
                        

                            {/* card4 */}
                            <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                                <div className="flex-auto p-4">
                                <div className="flex flex-row -mx-3">
                                    <div className="flex-none w-2/3 max-w-full px-3">
                                    <div>
                                        <p className="mb-0 font-sans text-sm font-semibold leading-normal">Kegiatan Hari Ini</p>
                                        <h5 className="mb-0 font-bold">
                                            {todayActivity.length != 0 ? todayActivity : 'Tidak ada kegiatan'}
                                        
                                        </h5>
                                    </div>
                                    </div>
                                    <div className="px-3 text-right basis-1/3">
                                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                                        <i className="fa fa-solid fa-calendar-day text-xl relative top-2.5 text-white" />
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                

        </Authenticated>
    );
}
