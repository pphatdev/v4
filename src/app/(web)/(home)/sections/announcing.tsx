"use client"

import { ShinyText } from "@/components/shiny-text";
import { cn } from "@/lib/utils";
import { motion, type Variants, } from "framer-motion";

export const Announcing = ({ className }: { className?: string }) => {

    const contentDelay = 0.3;
    const bannerVariants: Variants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: contentDelay } }
    };

    return (
        <motion.div
            variants={bannerVariants}
            initial="hidden"
            animate="visible"
            className={cn("w-full max-lg:text-center max-md:mt-10 order-1", className)}
        >
            <ShinyText text="Hello World Post! >" className="bg-foreground/5 border border-foreground/5 text-primary order-first px-4 max-sm:px-2 max-sm:py-1 py-1.5 rounded-full text-xs xl:text-sm font-medium cursor-pointer hover:border-primary/50 transition-colors" />
        </motion.div>
    );
}