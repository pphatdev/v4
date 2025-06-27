export const MotionIcon = (props: React.ComponentProps<'svg'>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 flex-shrink-0 stroke-1 text-neutral-500 md:size-10"
            {...props}
        >
            <path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path>
            <path d="M20 12l-8 8l-4 -4"></path>
        </svg>
    );
};
