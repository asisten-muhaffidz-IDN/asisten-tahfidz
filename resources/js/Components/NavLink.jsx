import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors' +
                (active
                    ? 'shadow-soft-xl rounded-lg bg-white font-bold text-slate-700'
                    : '') +
                className
            }
        >
            {children}
        </Link>
    );
}
