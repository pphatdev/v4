"use client"

import { ShinyText } from "@/components/shiny-text";
import { motion, type Variants, } from "framer-motion";

export const Announcing = () => {

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
        >
            <ShinyText text="Hello World Post! >" className="bg-foreground/5 border border-foreground/5 text-primary order-first px-4 py-1.5 rounded-full text-xs xl:text-sm font-medium cursor-pointer hover:border-primary/50 transition-colors" />
        </motion.div>
    );
}