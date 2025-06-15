import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

export const Logo = () => {
    return (
        <Link href="/" className="shrink-0 items-center flex flex-col z-50" aria-label="Home">
            <Image width={32} height={32} src={'/assets/logo/logo-transparent-dark-mode.png'} alt={"Logo"} className="hidden dark:block" />
            <Image width={32} height={32} src={'/assets/logo/logo-transparent-light-mode.png'} alt={"Logo"} className="dark:hidden" />
            <Badge className="py-0.5 pt-1 h-fit -translate-y-3 bg-background text-[8px] uppercase" variant={"outline"}>PPhat</Badge>
        </Link>
    );
};