
export default function NavLinkPath({ active = false, className = '', children, ...props }) {
    return (
        <div
            {...props}
            className={
                ' ' +
                (active
                    ? ' text-white'
                    : ' text-slate-800') +
                className
            }
        >
            {children}
        </div>
    );
}
