import React from 'react'
import Swal from 'sweetalert2';
import { Inertia } from '@inertiajs/inertia';

export default function NavBar({user, header}) {
    
    const alertLogout = () => {
        Swal.fire({
            title: "Anda ingin keluar?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Keluar",
            cancelButtonText: "Kembali"
            }).then((result) => {
                if (result.isConfirmed) {
                    Inertia.post('logout')
            }});
    }

    return (
        
        <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start" navbar-main="true" navbar-scroll="true">
            <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
                <nav>
                    {/* breadcrumb */}
                    <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                    <li className="text-sm leading-normal">
                        <a href={route('dashboard')} className="opacity-50 text-slate-700">Home</a>
                    </li>
                    <li className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']" aria-current="page">{header && typeof header === 'string' && header.split(' ').shift()}</li>
                    </ol>
                    <h6 className="mb-0 font-bold capitalize">{header}</h6>
                </nav>
            <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
                <div className="flex items-center md:ml-auto md:pr-4" />

                <ul className="flex flex-row justify-end gap-3 pl-0 mb-0 mr-5 list-none md-max:w-full">
                    <li className="flex items-center" title="Profile Setting">
                        <a href={route('profile.edit')} className="block px-0 py-2 text-sm font-semibold transition-all ease-nav-brand text-slate-500">
                            <img src={user.profile_photo != null ? (`/storage/${user.profile_photo}`) : ('assets/img/default.jpg')} className="inline-flex items-center justify-center mr-2 w-9 h-9 rounded-lg" alt="profile"/>
                            <span className="hidden sm:inline">{user.user_name}</span>
                        </a>
                    </li>
                    <li className="flex items-center pl-4 xl:hidden">
                        <a className="block p-0 text-sm transition-all ease-nav-brand text-slate-500" sidenav-trigger="true">
                        <div className="w-4.5 overflow-hidden">
                            <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all" />
                            <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all" />
                            <i className="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all" />
                        </div>
                        </a>
                    </li>
                    <li className="flex items-center px-4">
                        <a onClick={alertLogout} className="p-0 text-sm transition-all ease-nav-brand text-slate-500 cursor-pointer">
                            <svg width={20} fill="currentColor" className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        
    
    )
}