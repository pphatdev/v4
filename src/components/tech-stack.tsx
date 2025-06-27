import React from 'react';
import { motion } from 'framer-motion';
import { TailwindCSSIcon } from './icons/tailwindcss';
import { LaravelIcon } from './icons/laravel';
import { NodeJSIcon } from "./icons/nodejs"
import { NextJSIcon } from "./icons/nextjs"
import { MotionIcon } from './icons/motion';
import { GitHubIcon } from './icons/github';

const TECH_STACK_DATA = [
    { icon: NextJSIcon, name: "Next.js" },
    { icon: NodeJSIcon, name: "Node.js" },
    { icon: LaravelIcon, name: "Laravel" },
    { icon: TailwindCSSIcon, name: "Tailwind CSS" },
    { icon: MotionIcon, name: "Motion" },
    { icon: GitHubIcon, name: "GitHub" }
];

const TechStack = () => {

    const contentDelay = 0.3;
    const itemDelayIncrement = 0.1;

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 0.9, y: 0, transition: { duration: 0.5, delay: contentDelay + itemDelayIncrement * 5 } }
            }}
            initial="hidden"
            animate="visible"
            className="flex  order-last flex-col items-center w-full justify-center space-y-2 max-sm:my-4 my-10 sm:pt-10"
        >
            <div>
                <h2 className="text-sm w-full px-1 text-center max-md:px-3 uppercase text-foreground/80 tracking-wider font-medium">Tech stack</h2>
                <div className="no-visible-scrollbar relative z-20 my-4 flex flex-wrap items-center justify-center gap-4" style={{ scrollbarWidth: "none" }}>
                    {TECH_STACK_DATA.map((tech, index) => {
                        const IconComponent = tech.icon;
                        return (
                            <div key={index} className="mr-4 flex items-center space-x-2">
                                <span>
                                    <IconComponent />
                                </span>
                                <span className="flex-shrink-0 text-sm font-semibold text-neutral-500">{tech.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default TechStack;