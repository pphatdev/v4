"use client"

import { ShinyText } from "@/components/shiny-text";
import { cn } from "@/lib/utils";
import { motion, type Variants, } from "framer-motion";

export const ButtonAnimation = ({ className, text, type }: { className?: string, text: string, type?: "button" | "submit" | "reset" }) => {

    const contentDelay = 0.3;
    const bannerVariants: Variants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: contentDelay } }
    };

    return (
        <motion.button
            variants={bannerVariants}
            initial="hidden"
            animate="visible"
            type={type || "button"}
            className={cn("w-full max-lg:text-center max-md:mt-10 order-1", className)}
        >
            <ShinyText text={text} className="bg-foreground/5 border text-sm border-foreground/5 text-primary order-first px-4 py-1.5 rounded-full font-medium cursor-pointer hover:border-primary/50 transition-colors" />
        </motion.button>
    );
}