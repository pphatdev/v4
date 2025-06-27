export const LaravelIcon = (props: React.ComponentProps<'svg'>) => {
    return (
        <svg
            className='size-4 flex-shrink-0 stroke-[0.7px] text-neutral-500 md:size-10'
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}>
            <path d="M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5z" />
            <path d="M11 18v4" />
            <path d="M7 15.5l7 -4" />
            <path d="M14 7.5v4" />
            <path d="M14 11.5l4 2.5" />
            <path d="M11 13v-7.5l-4 -2.5l-4 2.5" />
            <path d="M7 8l4 -2.5" />
            <path d="M18 10l4 -2.5" />
        </svg>
    );
}