"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
    {
        tempId: 0,
        testimonial: "A website for searching and reading books online. It is a web application that allows users to search for books, read them online.",
        by: "Nintrea eLibrary",
        imgSrc: "https://i.pravatar.cc/150?img=1"
    },
    {
        tempId: 1,
        testimonial: "A github my github page. It's enabled to generate coding daily coding activity.",
        by: "pphatdev/pphatdev",
        imgSrc: "https://i.pravatar.cc/150?img=2"
    },
    {
        tempId: 2,
        testimonial: "Nintrea official website. Developed with Next.js and Tailwind CSS.",
        by: "nintrea.website",
        imgSrc: "https://i.pravatar.cc/150?img=3"
    },
    {
        tempId: 3,
        testimonial: "A template project for NodeJS API. It is a simple and easy to use template for creating RESTful APIs using Node.js and Express.js.",
        by: "Sample NodeJS API",
        imgSrc: "https://i.pravatar.cc/150?img=4"
    },
    {
        tempId: 4,
        testimonial: "Personal project for blogging. create for testing purpose.",
        by: "blog-post",
        imgSrc: "https://i.pravatar.cc/150?img=5"
    },
    {
        tempId: 5,
        testimonial: "My personal web portfolio. Build with Webpack, Vanilla JS, and CSS.",
        by: "leatsophat.me",
        imgSrc: "https://i.pravatar.cc/150?img=6"
    },
    {
        tempId: 6,
        testimonial: "My personal web blog. Build with NextJS and TailwindCss.",
        by: "Blog",
        imgSrc: "https://i.pravatar.cc/150?img=7"
    },
    {
        tempId: 7,
        testimonial: "This project provides a set of utility functions for interacting with browser cookies. The Cookies class offers methods to set, get, update,...",
        by: "cookies",
        imgSrc: "https://i.pravatar.cc/150?img=8"
    },
    {
        tempId: 8,
        testimonial: "This project provides a set of utility functions for interacting with the browser's session storage. The Sessions class offers methods to",
        by: "sessions",
        imgSrc: "https://i.pravatar.cc/150?img=9"
    }
];

interface TestimonialCardProps {
    position: number;
    testimonial: typeof testimonials[0];
    handleMove: (steps: number) => void;
    cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    position,
    testimonial,
    handleMove,
    cardSize
}) => {
    const isCenter = position === 0;

    return (
        <div
            onClick={() => handleMove(position)}
            className={cn(
                "absolute left-1/2 top-1/2 cursor-pointer border-2 rounded-4xl p-8 transition-all duration-500 ease-in-out",
                isCenter
                    ? "z-10 bg-primary text-foreground border-primary"
                    : "z-0 bg-background text-card-foreground border-border hover:border-primary/50"
            )}
            style={{
                width: cardSize,
                height: cardSize,
                clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
                transform: `
                    translate(-50%, -50%)
                    translateX(${(cardSize / 1.5) * position}px)
                    translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
                    rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
                `,
                boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
            }}
        >
            <span className="absolute block origin-top-right rotate-45 bg-border" style={{ right: -2, top: 48, width: SQRT_5000, height: 2 }} />
            <Image
                src={testimonial.imgSrc}
                width={50}
                height={50}
                alt={`${testimonial.by.split(',')[0]}`}
                className="mb-4 size-12 bg-muted object-cover object-top rounded-full"
            />
            <h3 className={cn(
                "text-base sm:text-xl font-medium",
                isCenter ? "text-primary-foreground" : "text-foreground"
            )}>
                "{testimonial.testimonial}"
            </h3>
            <p className={cn("absolute bottom-8 left-8 right-8 mt-2 text-sm italic", isCenter ? "text-primary-foreground/80" : "text-muted-foreground")}>
                - {testimonial.by}
            </p>
        </div>
    );
};

export const StaggerTestimonials: React.FC = () => {
    const [cardSize, setCardSize] = useState(365);
    const [testimonialsList, setTestimonialsList] = useState(testimonials);

    const handleMove = (steps: number) => {
        const newList = [...testimonialsList];
        if (steps > 0) {
            for (let i = steps; i > 0; i--) {
                const item = newList.shift();
                if (!item) return;
                newList.push({ ...item, tempId: Math.random() });
            }
        } else {
            for (let i = steps; i < 0; i++) {
                const item = newList.pop();
                if (!item) return;
                newList.unshift({ ...item, tempId: Math.random() });
            }
        }
        setTestimonialsList(newList);
    };


    const contentDelay = 0.3;
    const itemDelayIncrement = 0.1;

    useEffect(() => {
        const updateSize = () => {
            const { matches } = window.matchMedia("(min-width: 640px)");
            setCardSize(matches ? 365 : 290);
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <motion.div
            className="relative w-full overflow-hidden h-[600px] rounded-2xl"
            variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, delay: contentDelay + itemDelayIncrement * 5 } }
            }}
            initial="hidden"
            animate="visible"
        >
            {testimonialsList.map((testimonial, index) => {
                const position = testimonialsList.length % 2
                    ? index - (testimonialsList.length + 1) / 2
                    : index - testimonialsList.length / 2;
                return (
                    <TestimonialCard
                        key={testimonial.tempId}
                        testimonial={testimonial}
                        handleMove={handleMove}
                        position={position}
                        cardSize={cardSize}
                    />
                );
            })}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                <button
                    onClick={() => handleMove(-1)}
                    className={cn(
                        "flex h-14 w-14 items-center justify-center text-2xl transition-colors cursor-pointer",
                        "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground rounded-full",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    )}
                    aria-label="Previous testimonial">
                    <ChevronLeft />
                </button>
                <button
                    onClick={() => handleMove(1)}
                    className={cn(
                        "flex h-14 w-14 items-center justify-center text-2xl transition-colors cursor-pointer",
                        "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground rounded-full",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    )}
                    aria-label="Next testimonial">
                    <ChevronRight />
                </button>
            </div>
        </motion.div>
    );
};