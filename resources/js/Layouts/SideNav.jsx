import ApplicationLogo from '@/Components/ApplicationLogo'
import NavLink from '@/Components/NavLink'
import NavLinkIcon from '@/Components/NavLinkIcon'
import NavLinkPath from '@/Components/NavLinkPath'
import React from 'react'

export default function SideNav() {
    return (
        <aside className="max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent">
            <div className="h-19.5">
                <i className="absolute top-0 right-0 hidden p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden" sidenav-close="true" />
                <a className="px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700 flex items-center">
                    <ApplicationLogo width="50px" height="50px"/>
                    <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">Asisten Tahfidz</span>
                </a>
            </div>
            <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
            <div className="mt-3 items-center block w-auto max-h-screen overflow-auto grow basis-full">
                <ul className="flex flex-col pl-0 mb-0">
                    {/* Menu Home */}
                <li className="mt-0.5 w-full">
                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                        <NavLinkIcon active={route().current('dashboard')}>
                            <NavLinkPath active={route().current('dashboard')} >
                                <i className="fa fa-solid fa-house"></i>
                            </NavLinkPath>
                        </NavLinkIcon>
                    <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Home</span>
                    </NavLink>
                </li>
                    {/* Menu Laporan */}
                <li className="mt-0.5 w-full">
                    <NavLink href={route('laporan')} active={route().current('laporan')}>
                        <NavLinkIcon active={route().current('laporan')}>
                            <NavLinkPath active={route().current('laporan')} >
                                <i className="fa fa-solid fa-pen-to-square"></i>
                            </NavLinkPath>
                        </NavLinkIcon>
                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Laporan</span>
                    </NavLink>
                </li>
        
                    {/* Menu Halaqoh */}
                <li className="mt-0.5 w-full">
                    <NavLink href={route('halaqoh.index')} active={route().current('halaqoh.index')}>
                        <NavLinkIcon active={route().current('halaqoh.index')}>
                            <NavLinkPath active={route().current('halaqoh.index')} >
                                <i className="fa fa-solid fa-users"></i>
                            </NavLinkPath>
                        </NavLinkIcon>
                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Halaqoh</span>
                    </NavLink>
                </li>
        
                    {/* Menu Santri */}
                <li className="mt-0.5 w-full">
                    <NavLink href={route('santri.index')} active={route().current('santri.index')}>
                        <NavLinkIcon active={route().current('santri.index')}>
                            <NavLinkPath active={route().current('santri.index')} >
                            <i className="fa fa-solid fa-user" />
                            </NavLinkPath>
                        </NavLinkIcon>
                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Data Santri</span>
                    </NavLink>
                </li>
        
                    {/* Menu Ustadz */}
                <li className="mt-0.5 w-full">
                    <NavLink href={route('ustadz.index')} active={route().current('ustadz.index')}>
                        <NavLinkIcon active={route().current('ustadz.index')}>
                            <NavLinkPath active={route().current('ustadz.index')} >
                            <i className="fa fa-solid fa-user-tie" />
                            </NavLinkPath>
                        </NavLinkIcon>
                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Data Ustadz</span>
                    </NavLink>
                </li>
        
                    {/* Menu Artikel */}
                <li className="mt-0.5 w-full">
                    <NavLink href={route('artikel.index')} active={route().current('artikel.index')}>
                        <NavLinkIcon active={route().current('artikel.index')}>
                            <NavLinkPath active={route().current('artikel.index')} >
                            <i className="fa fa-solid fa-user-tie" />
                            </NavLinkPath>
                        </NavLinkIcon>
                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Data Artikel</span>
                    </NavLink>
                </li>
        
                <li className="w-full mt-4">
                    <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase opacity-60">Account pages</h6>
                </li>
                <li className="mt-0.5 w-full">
                    <a className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="./pages/profile.html">
                    <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                        <svg width="12px" height="12px" viewBox="0 0 46 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>customer-support</title>
                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <g transform="translate(-1717.000000, -291.000000)" fill="#FFFFFF" fillRule="nonzero">
                            <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(1.000000, 0.000000)">
                                <path className="fill-slate-800 opacity-60" d="M45,0 L26,0 C25.447,0 25,0.447 25,1 L25,20 C25,20.379 25.214,20.725 25.553,20.895 C25.694,20.965 25.848,21 26,21 C26.212,21 26.424,20.933 26.6,20.8 L34.333,15 L45,15 C45.553,15 46,14.553 46,14 L46,1 C46,0.447 45.553,0 45,0 Z" />
                                <path className="fill-slate-800" d="M22.883,32.86 C20.761,32.012 17.324,31 13,31 C8.676,31 5.239,32.012 3.116,32.86 C1.224,33.619 0,35.438 0,37.494 L0,41 C0,41.553 0.447,42 1,42 L25,42 C25.553,42 26,41.553 26,41 L26,37.494 C26,35.438 24.776,33.619 22.883,32.86 Z" />
                                <path className="fill-slate-800" d="M13,28 C17.432,28 21,22.529 21,18 C21,13.589 17.411,10 13,10 C8.589,10 5,13.589 5,18 C5,22.529 8.568,28 13,28 Z" />
                                </g>
                            </g>
                            </g>
                        </g>
                        </svg>
                    </div>
                    <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Profile</span>
                    </a>
                </li>
                </ul>
            </div>
        </aside>

    )
}
