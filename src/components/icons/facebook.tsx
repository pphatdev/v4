export const FacebookIcon = (props: React.ComponentProps<'svg'>) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 flex-shrink-0 text-neutral-500 md:size-10"
            {...props}
        >
            <path d="M18 2h-3a5 5 0 0 0 -5 5v3h-3v4h3v8h4v-8h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3z" />
        </svg>
    );
}