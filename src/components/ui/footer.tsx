'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Logo } from '../logo';
import { APP_SHORT_NAME, FIGMA_URL, GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from '@/lib/constant';
import { GitHubIcon } from '../icons/github';
import { LinkedInIcon } from '../icons/linkedin';
import { FigmaIcon } from '../icons/figma';
import { XIcon } from '../icons/x';

interface FooterLink {
    title: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
    label: string;
    links: FooterLink[];
}

const footerLinks: FooterSection[] = [
    {
        label: 'Social Links',
        links: [
            { title: 'Figma', href: FIGMA_URL, icon: FigmaIcon },
            { title: 'LinkedIn', href: LINKEDIN_URL, icon: LinkedInIcon },
            { title: 'Twitter', href: TWITTER_URL, icon: XIcon },
        ],
    },
    // {
    //     label: 'Company',
    //     links: [
    //         { title: 'FAQs', href: '/faqs' },
    //         { title: 'About Us', href: '/about' },
    //         { title: 'Privacy Policy', href: '/privacy' },
    //         { title: 'Terms of Services', href: '/terms' },
    //     ],
    // },
    {
        label: 'Resources',
        links: [
            { title: 'Portfolio V1', href: 'https://sophat.top' },
            { title: 'Portfolio V2', href: 'https://v2.sophat.top' },
            { title: 'Portfolio V3', href: 'https://v3.pphat.top' },
            { title: 'All', href: GITHUB_URL },
        ],
    },
    {
        label: 'Open Source',
        links: [
            { title: 'GitHub', href: GITHUB_URL, icon: GitHubIcon },
        ],
    },
];

export function Footer() {
    return (
        <footer className="md:rounded-t-6xl max-sm:rounded-none max-sm:mt-2 relative w-full z-50 mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
            <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />
            <div className="grid w-full max-w-6xl max-sm:gap-0 gap-8 xl:grid-cols-3 xl:gap-8">
                <AnimatedContainer className="space-y-4 max-sm:order-last max-sm:py-10 py-12 max-sm:text-center lg:py-16 px-6 max-sm:flex flex-col items-center justify-center">
                    <Logo/>
                    <p className="text-muted-foreground max-sm:mt-0 mt-8 text-sm md:mt-0">
                        © {new Date().getFullYear()} {APP_SHORT_NAME}. All rights reserved.
                    </p>
                </AnimatedContainer>

                <div className="sm:mt-10 grid grid-cols-2 max-sm:gap-0 gap-8 sm:grid-cols-3 md:col-span-2 xl:mt-0 max-sm:px-4 max-sm:border-b px-6 py-12 lg:py-16">
                    {footerLinks.map((section, index) => (
                        <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                            <div className="max-sm:mb-5 mb-10 md:mb-0 divide divide-foreground/10">
                                <h3 className="text-xs">{section.label}</h3>
                                <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                                    {section.links.map((link) => (
                                        <li key={link.title}>
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-foreground inline-flex items-center transition-all duration-300"
                                            >
                                                {link.icon && <link.icon className="me-1 size-5" />}
                                                {link.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedContainer>
                    ))}
                </div>
            </div>
        </footer>
    );
};

type ViewAnimationProps = {
    delay?: number;
    className?: ComponentProps<typeof motion.div>['className'];
    children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return children;
    }

    return (
        <motion.div
            initial={{ filter: 'blur(4px)', y: -8, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};