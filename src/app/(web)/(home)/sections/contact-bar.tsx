"use client";
import { FacebookIcon } from '@/components/icons/facebook';
import { FigmaIcon } from '@/components/icons/figma';
import { GitHubIcon } from '@/components/icons/github';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const ContactBar = () => {

    const headlineVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.3 } }
    };

    return (
        <motion.div
            variants={headlineVariants}
            initial="hidden"
            animate="visible"
            className='flex-col flex absolute max-sm:right-3 right-0 max-sm:top-3 top-1/4'>
            <ol className='items-center flex flex-col gap-5'>
                <li>
                    <Link href="https://fb.me/chat.leatsophat" target='_blank'> <FacebookIcon className='size-6 text-foreground/50 hover:text-foreground' /> </Link>
                </li>
                <li>
                    <Link href="https://github.com/pphatdev" target='_blank'> <GitHubIcon className='size-6 text-foreground/50 hover:text-foreground' /> </Link>
                </li>
                <li>
                    <Link href="https://t.me/SophatLEAT" target='_blank'> <FigmaIcon className='stroke-1 size-6 text-foreground/50 hover:text-foreground' /> </Link>
                </li>
            </ol>
        </motion.div>
    );
}