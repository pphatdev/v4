"use client";

import { Badge } from '@/components/ui/badge';
import { Title } from '@/components/ui/title';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { bgGradientLine45deg } from '@/components/ui/gradient-line';


export const AboutMeSection = () => {
    const title = "About me!";

    const description = `My name is <span className="text-primary font-semibold">Leat Sophat</span>, also known as <span className="text-primary font-semibold">PPhat</span>.
        I'm a Senior Front-end Developer at <a href="https://turbotech.com.kh/" target="_blank" rel="noopener noreferrer">TURBOTECH CO., LTD</a>, and as a Freelance UI/UX Designer.
        I'm from <a href="https://en.wikipedia.org/wiki/Phnom_Penh" target="_blank" rel="noopener noreferrer">Phnom Penh, Cambodia</a>.

        I started my career as a Front-end Developer in 2021, and I have a passion for creating beautiful and functional user interfaces. I love to learn new technologies and improve my skills every day. I am also a big fan of open-source projects and I enjoy contributing to the community. I believe that sharing knowledge is the key to success in this field.
    `;

    return (
        <motion.section
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                    opacity: 0.9,
                    y: 0,
                    transition: { duration: 0.6, delay: 0.8, staggerChildren: 0.1 }
                }
            }}
            initial="hidden"
            animate="visible" className='mx-auto w-full bg-gradient-to-b from-background/5 to-primary/5 py-10'>
            <div className="grid grid-cols-1 max-w-5xl mx-auto gap-8 items-start md:grid-cols-2">
                <div className="grid grid-cols-2 max-md:gap-5 max-lg:gap-2 gap-8 max-md:p-5">
                    <div>
                        <div className={cn("relative flex aspect-square w-full rotate-12 hover:rotate-0 duration-300 transition-all transform-3d rounded-4xl px-1 items-center justify-center overflow-hidden border text-foreground/10 bg-[size:8px_8px] bg-top-left",bgGradientLine45deg)}>
                            <div
                                className="h-full w-full bg-center m-1 bg-no-repeat mask-size-[105%_100%] mask-center mask-no-repeat"
                                style={{
                                    backgroundSize: "contain",
                                    backgroundImage: `url('/assets/avatars/krate-1.webp')`,
                                    maskImage: `url('/assets/masks/mask.webp')`,
                                }}
                            />
                        </div>
                    </div>
                    <div className='row-span-2'>
                        <div className={cn("relative flex w-full h-full rounded-4xl px-2 items-center justify-center overflow-hidden border text-foreground/10 bg-[size:8px_8px] bg-top-left",bgGradientLine45deg)}>
                            <div
                                className="h-full w-full bg-center bg-no-repeat mask-size-[130%_100%] mask-center mask-no-repeat"
                                style={{
                                    backgroundSize: "contain",
                                    backgroundImage: `url('/assets/avatars/rom-lech.webp')`,
                                    maskImage: `url('/assets/masks/mask.webp')`,
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={cn("relative flex hover:scale-105 transition-all scale-3d aspect-square w-full rounded-4xl items-center justify-center overflow-hidden border text-foreground/10 bg-[size:8px_8px] bg-top-left",bgGradientLine45deg)}>
                            <div
                                className="h-full w-full bg-center bg-no-repeat mask-size-[105%_100%] mask-center mask-no-repeat"
                                style={{
                                    backgroundSize: "cover",
                                    backgroundImage: `url('/assets/avatars/kampot-2.webp')`,
                                    maskImage: `url('/assets/masks/mask.webp')`,
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 flex-col">
                    <div className='px-5'>
                        <Badge variant="outline" className='py-1.5 px-3'>{title}</Badge>
                    </div>
                    <div className="flex gap-4 flex-col">
                        <Title as='h2' title={["Who", "the hell am I ?"]} description={description} />
                    </div>
                </div>
            </div>
        </motion.section>
    )
}