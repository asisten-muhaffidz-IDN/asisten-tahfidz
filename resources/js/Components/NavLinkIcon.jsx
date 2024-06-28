import { Link } from '@inertiajs/react';

export default function NavLinkIcon({ active = false, className = '', children, ...props }) {
    return (
        <div
            {...props}
            className={
                ' shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5 text-lg ' +
                (active
                    ? 'bg-gradient-to-tl from-purple-700 to-pink-500'
                    : '') +
                className
            }
        >
            {children}
        </div>
    );
}
