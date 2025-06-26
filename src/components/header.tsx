import { cn } from '@/lib/utils';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import React, { ReactNode, SVGProps, useState, type MouseEvent as ReactMouseEvent, } from 'react';

interface NavLinkProps {
    href?: string;
    children: ReactNode;
    hasDropdown?: boolean;
    className?: string;
    onClick?: (event: ReactMouseEvent<HTMLAnchorElement>) => void;
}


interface DropdownMenuProps {
    children: ReactNode;
    isOpen: boolean;
}

const CloseIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

const MenuIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children, isOpen }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 origin-top z-40"
            >
                <div className="bg-foreground border border-gray-700/50 rounded-md shadow-xl p-2">
                    {children}
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

interface DropdownItemProps {
    href?: string;
    children: ReactNode;
    icon?: React.ReactElement<SVGProps<SVGSVGElement>>;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ href = "#", children, icon }) => (
    <a
        href={href}
        className="group flex items-center justify-between w-full px-3 py-2 text-sm text-foreground/70 hover:text-foreground rounded-md transition-colors duration-150"
    >
        <span>{children}</span>
        {icon && React.cloneElement(icon, { className: "w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" })}
    </a>
);


const NavLink: React.FC<NavLinkProps> = ({ href = "#", children, hasDropdown = false, className = "", onClick }) => (
    <motion.a
        href={href}
        onClick={onClick}
        className={cn("relative group text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 flex items-center py-1", className)}
        whileHover="hover"
    >
        {children}
        {hasDropdown && <ChevronDownIcon />}
        {!hasDropdown && (
            <motion.div
                className="absolute bottom-[-2px] left-0 right-0 h-[1px] bg-primary"
                variants={{ initial: { scaleX: 0, transformOrigin: '50%' }, hover: { scaleX: 1, transformOrigin: '50%' } }}
                initial="initial"
                transition={{ duration: 0.3, ease: "easeOut" }}
            />
        )}
    </motion.a>
);

const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.15, ease: "easeIn" } }
};

interface Menu {
    name: string;
    href: string;
    dropdown?: { name: string; href: string; icon?: React.ReactElement<SVGProps<SVGSVGElement>> }[];
}


export const Header = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const menus: Menu[] = [
        { name: 'Blogs', href: '#' },
        { name: 'Contributes', href: '#' },
        // {
        //     name: 'Resources',
        //     href: '#',
        //     dropdown: [
        //         { name: 'Blog', href: '#', icon: <ExternalLinkIcon /> },
        //         { name: 'Guides', href: '#' },
        //         { name: 'Help Center', href: '#' },
        //         { name: 'API Reference', href: '#' }
        //     ]
        // },
        { name: 'Docs', href: '#' },
        { name: 'Pricing', href: '#' }
    ];

    return (
        <></>
    )
}