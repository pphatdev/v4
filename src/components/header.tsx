import { cn } from '@/lib/utils';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import React, { ReactNode, SVGProps, useState, type MouseEvent as ReactMouseEvent, } from 'react';
import { Logo } from './logo';
import { ThemeSwitch } from './theme-switch';


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

    const headerVariants: Variants = {
        top: {
            // backgroundColor: "rgba(17, 17, 17, 0.8)",
            // borderBottomColor: "rgba(55, 65, 81, 0.5)",
            position: 'fixed',
            boxShadow: 'none',
        },
        scrolled: {
            // backgroundColor: "rgba(17, 17, 17, 0.95)",
            // borderBottomColor: "rgba(75, 85, 99, 0.7)",
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            position: 'fixed'
        }
    };

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
        <motion.header
            variants={headerVariants}
            initial="top"
            animate={isScrolled ? "scrolled" : "top"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full md:px-10 sticky top-0 z-30 backdrop-blur-sm bg-background/10 border-b"
        >
            <nav className="flex justify-between items-center px-4 py-2 max-w-screen-xl mx-auto md:h-[70px]">
                <div className="flex items-center flex-shrink-0">
                    <Logo />
                </div>

                <div className="hidden md:flex items-center justify-center flex-grow space-x-6 lg:space-x-8 px-4">
                    {/* Main Navigation Links */}

                    {menus.map((menu) => (
                        <div
                            key={menu.name}
                            className="relative"
                            onMouseEnter={() => menu.dropdown && setOpenDropdown(menu.name)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <NavLink href={menu.href} hasDropdown={!!menu.dropdown}>
                                {menu.name}
                            </NavLink>
                            {menu.dropdown && (
                                <DropdownMenu isOpen={openDropdown === menu.name}>
                                    {menu.dropdown.map((item) => (
                                        <DropdownItem key={item.name} href={item.href} icon={item.icon}>
                                            {item.name}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex items-center flex-shrink-0 gap-x-2 lg:gap-6">
                    {/* <NavLink href="#" className="hidden md:inline-block">Sign in</NavLink> */}

                    <ThemeSwitch/>

                    <motion.a
                        href="#"
                        className="bg-primary text-primary-foreground px-4 py-[6px] rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors duration-200 whitespace-nowrap"
                        whileHover={{ scale: 1.03, y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                        Contact
                    </motion.a>

                    <motion.button
                        className="md:hidden ring ring-primary text-primary bg-foreground/5 p-1.5 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors duration-200 whitespace-nowrap shadow-sm hover:shadow-md"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                    >
                        {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </motion.button>
                </div>
            </nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        variants={mobileMenuVariants} initial="hidden" animate="visible" exit="exit"
                        className="md:hidden absolute top-full left-0 right-0 backdrop-blur-sm shadow-lg py-4 border-t border-gray-800/50"
                    >
                        <div className="flex flex-col items-center space-y-4 px-6">
                            <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Product</NavLink>
                            <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Customers</NavLink>
                            <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Channels</NavLink>
                            <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Resources</NavLink>
                            <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Docs</NavLink>
                            <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Pricing</NavLink>
                            <hr className="w-full border-t border-gray-700/50 my-2" />
                            <NavLink href="#" onClick={() => setIsMobileMenuOpen(false)}>Sign in</NavLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>

    )
}