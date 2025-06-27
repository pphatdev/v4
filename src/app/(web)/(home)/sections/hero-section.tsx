"use client";
import React, { useEffect, useRef, useState, useCallback, forwardRef, useImperativeHandle, useMemo, } from 'react';
import { Announcing } from '@/app/(web)/(home)/sections/announcing';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, type Transition, type VariantLabels, type TargetAndTransition, type Variants, } from 'framer-motion';
import { Profile } from '@/app/(web)/(home)/sections/profile';
import { MagneticArea } from '@/components/magnetic-aria';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ui/theme-switch';
import TechStack from '@/components/tech-stack';

interface RotatingTextRef {
    next: () => void;
    previous: () => void;
    jumpTo: (index: number) => void;
    reset: () => void;
}

interface RotatingTextProps extends Omit<React.ComponentPropsWithoutRef<typeof motion.span>, "children" | "transition" | "initial" | "animate" | "exit"> {
    texts: string[];
    transition?: Transition;
    initial?: boolean | TargetAndTransition | VariantLabels;
    animate?: boolean | VariantLabels | TargetAndTransition;
    exit?: TargetAndTransition | VariantLabels;
    animatePresenceMode?: "sync" | "wait";
    animatePresenceInitial?: boolean;
    rotationInterval?: number;
    staggerDuration?: number;
    staggerFrom?: "first" | "last" | "center" | "random" | number;
    loop?: boolean;
    auto?: boolean;
    splitBy?: "characters" | "words" | "lines" | string;
    onNext?: (index: number) => void;
    mainClassName?: string;
    splitLevelClassName?: string;
    elementLevelClassName?: string;
}

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>(({
    texts,
    transition = { type: "spring", damping: 25, stiffness: 300 },
    initial = { y: "100%", opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: "-120%", opacity: 0 },
    animatePresenceMode = "wait",
    animatePresenceInitial = false,
    rotationInterval = 2200,
    staggerDuration = 0.01,
    staggerFrom = "last",
    loop = true,
    auto = true,
    splitBy = "characters",
    onNext,
    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
    ...rest
}, ref) => {
    const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

    const splitIntoCharacters = (text: string): string[] => {
        if (typeof Intl !== "undefined" && Intl.Segmenter) {
            try {
                const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
                return Array.from(segmenter.segment(text), (segment) => segment.segment);
            } catch (error) {
                console.error("Intl.Segmenter failed, falling back to simple split:", error);
                return text.split('');
            }
        }
        return text.split('');
    };

    const elements = useMemo(() => {
        const currentText: string = texts[currentTextIndex] ?? '';
        if (splitBy === "characters") {
            const words = currentText.split(/(\s+)/);
            let charCount = 0;
            return words.filter(part => part.length > 0).map((part) => {
                const isSpace = /^\s+$/.test(part);
                const chars = isSpace ? [part] : splitIntoCharacters(part);
                const startIndex = charCount;
                charCount += chars.length;
                return { characters: chars, isSpace: isSpace, startIndex: startIndex };
            });
        }
        if (splitBy === "words") {
            return currentText.split(/(\s+)/).filter(word => word.length > 0).map((word, i) => ({
                characters: [word], isSpace: /^\s+$/.test(word), startIndex: i
            }));
        }
        if (splitBy === "lines") {
            return currentText.split('\n').map((line, i) => ({
                characters: [line], isSpace: false, startIndex: i
            }));
        }
        return currentText.split(splitBy).map((part, i) => ({
            characters: [part], isSpace: false, startIndex: i
        }));
    }, [texts, currentTextIndex, splitBy]);

    const totalElements = useMemo(() => elements.reduce((sum, el) => sum + el.characters.length, 0), [elements]);

    const getStaggerDelay = useCallback(
        (index: number, total: number): number => {
            if (total <= 1 || !staggerDuration) return 0;
            const stagger = staggerDuration;
            switch (staggerFrom) {
                case "first": return index * stagger;
                case "last": return (total - 1 - index) * stagger;
                case "center":
                    const center = (total - 1) / 2;
                    return Math.abs(center - index) * stagger;
                case "random": return Math.random() * (total - 1) * stagger;
                default:
                    if (typeof staggerFrom === 'number') {
                        const fromIndex = Math.max(0, Math.min(staggerFrom, total - 1));
                        return Math.abs(fromIndex - index) * stagger;
                    }
                    return index * stagger;
            }
        },
        [staggerFrom, staggerDuration]
    );

    const handleIndexChange = useCallback(
        (newIndex: number) => {
            setCurrentTextIndex(newIndex);
            onNext?.(newIndex);
        },
        [onNext]
    );

    const next = useCallback(() => {
        const nextIndex = currentTextIndex === texts.length - 1 ? (loop ? 0 : currentTextIndex) : currentTextIndex + 1;
        if (nextIndex !== currentTextIndex) handleIndexChange(nextIndex);
    }, [currentTextIndex, texts.length, loop, handleIndexChange]);

    const previous = useCallback(() => {
        const prevIndex = currentTextIndex === 0 ? (loop ? texts.length - 1 : currentTextIndex) : currentTextIndex - 1;
        if (prevIndex !== currentTextIndex) handleIndexChange(prevIndex);
    }, [currentTextIndex, texts.length, loop, handleIndexChange]);

    const jumpTo = useCallback(
        (index: number) => {
            const validIndex = Math.max(0, Math.min(index, texts.length - 1));
            if (validIndex !== currentTextIndex) handleIndexChange(validIndex);
        },
        [texts.length, currentTextIndex, handleIndexChange]
    );

    const reset = useCallback(() => {
        if (currentTextIndex !== 0) handleIndexChange(0);
    }, [currentTextIndex, handleIndexChange]);

    useImperativeHandle(ref, () => ({ next, previous, jumpTo, reset }), [next, previous, jumpTo, reset]);

    useEffect(() => {
        if (!auto || texts.length <= 1) return;
        const intervalId = setInterval(next, rotationInterval);
        return () => clearInterval(intervalId);
    }, [next, rotationInterval, auto, texts.length]);

    return (
        <motion.span
            className={cn("inline-flex flex-wrap whitespace-pre-wrap relative align-bottom", mainClassName)}
            {...rest}
            layout
        >
            <span className="sr-only">{texts[currentTextIndex]}</span>
            <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
                <motion.div
                    key={currentTextIndex}
                    className={cn(
                        "inline-flex flex-wrap relative",
                        splitBy === "lines" ? "flex-col items-start w-full" : "flex-row items-baseline"
                    )}
                    layout
                    aria-hidden="true"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {elements.map((elementObj, elementIndex) => (
                        <span
                            key={elementIndex}
                            className={cn("inline-flex", splitBy === 'lines' ? 'w-full' : '', splitLevelClassName)}
                            style={{ whiteSpace: 'pre' }}
                        >
                            {elementObj.characters.map((char, charIndex) => {
                                const globalIndex = elementObj.startIndex + charIndex;
                                return (
                                    <motion.span
                                        key={`${char}-${charIndex}`}
                                        initial={initial}
                                        animate={animate}
                                        exit={exit}
                                        transition={{
                                            ...transition,
                                            delay: getStaggerDelay(globalIndex, totalElements),
                                        }}
                                        className={cn("inline-block leading-none tracking-tight", elementLevelClassName)}
                                    >
                                        {char === ' ' ? '\u00A0' : char}
                                    </motion.span>
                                );
                            })}
                        </span>
                    ))}
                </motion.div>
            </AnimatePresence>
        </motion.span>
    );
}
);

RotatingText.displayName = "RotatingText";

interface Dot {
    x: number;
    y: number;
    baseColor: string;
    targetOpacity: number;
    currentOpacity: number;
    opacitySpeed: number;
    baseRadius: number;
    currentRadius: number;
}

const NextLogo = () => {
    return (
        <svg viewBox="0 0 512 512" className='size-7 text-foreground' fill='currentColor'>
            <path d="m386.3985596 35.5079727c-169.3385315-99.5687332-384.5140285 22.0419274-386.3862926 218.3738175-1.8282685 191.716507 201.0625916 315.5454712 370.0206604 231.1632233l-184.4725331-271.408722.0000305 167.9969177c0 18.6138916-35.6191101 18.6138916-35.6191101 0v-225.2124176c0-14.7758484 27.4472504-15.9884033 35.2252045-3.1443481l210.2631683 317.2959595c157.9509888-101.737259 155.8170166-338.1359864-9.0311279-435.0644303zm-23.7556153 317.9385605-35.7316284-54.5765381v-149.4116669c0-13.9324646 35.7316284-13.9324646 35.7316284 0z" />
        </svg>
    )
}

const HomeHeroSection: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameId = useRef<number | null>(null);
    const [isMobileMenuOpen] = useState<boolean>(false);
    // const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        // setIsScrolled(latest > 10);
    });

    const dotsRef = useRef<Dot[]>([]);
    const gridRef = useRef<Record<string, number[]>>({});
    const canvasSizeRef = useRef<{ width: number; height: number }>({ width: 0, height: 0 });
    const mousePositionRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

    const DOT_SPACING = 25;
    const BASE_OPACITY_MIN = 0.40;
    const BASE_OPACITY_MAX = 0.50;
    const BASE_RADIUS = 1;
    const INTERACTION_RADIUS = 150;
    const INTERACTION_RADIUS_SQ = INTERACTION_RADIUS * INTERACTION_RADIUS;
    const OPACITY_BOOST = 0.6;
    const RADIUS_BOOST = 2.5;
    const GRID_CELL_SIZE = Math.max(50, Math.floor(INTERACTION_RADIUS / 1.5));

    const handleMouseMove = useCallback((event: globalThis.MouseEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) {
            mousePositionRef.current = { x: null, y: null };
            return;
        }
        const rect = canvas.getBoundingClientRect();
        const canvasX = event.clientX - rect.left;
        const canvasY = event.clientY - rect.top;
        mousePositionRef.current = { x: canvasX, y: canvasY };
    }, []);

    const createDots = useCallback(() => {
        const { width, height } = canvasSizeRef.current;
        if (width === 0 || height === 0) return;

        const newDots: Dot[] = [];
        const newGrid: Record<string, number[]> = {};
        const cols = Math.ceil(width / DOT_SPACING);
        const rows = Math.ceil(height / DOT_SPACING);

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const x = i * DOT_SPACING + DOT_SPACING / 2;
                const y = j * DOT_SPACING + DOT_SPACING / 2;
                const cellX = Math.floor(x / GRID_CELL_SIZE);
                const cellY = Math.floor(y / GRID_CELL_SIZE);
                const cellKey = `${cellX}_${cellY}`;

                if (!newGrid[cellKey]) {
                    newGrid[cellKey] = [];
                }

                const dotIndex = newDots.length;
                newGrid[cellKey].push(dotIndex);

                const baseOpacity = Math.random() * (BASE_OPACITY_MAX - BASE_OPACITY_MIN) + BASE_OPACITY_MIN;
                newDots.push({
                    x,
                    y,
                    baseColor: `rgba(87, 220, 205, ${BASE_OPACITY_MAX})`,
                    targetOpacity: baseOpacity,
                    currentOpacity: baseOpacity,
                    opacitySpeed: (Math.random() * 0.005) + 0.002,
                    baseRadius: BASE_RADIUS,
                    currentRadius: BASE_RADIUS,
                });
            }
        }
        dotsRef.current = newDots;
        gridRef.current = newGrid;
    }, [DOT_SPACING, GRID_CELL_SIZE, BASE_OPACITY_MIN, BASE_OPACITY_MAX, BASE_RADIUS]);

    const handleResize = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const container = canvas.parentElement;
        const width = container ? container.clientWidth : window.innerWidth;
        const height = container ? container.clientHeight : window.innerHeight;

        if (canvas.width !== width || canvas.height !== height ||
            canvasSizeRef.current.width !== width || canvasSizeRef.current.height !== height) {
            canvas.width = width;
            canvas.height = height;
            canvasSizeRef.current = { width, height };
            createDots();
        }
    }, [createDots]);

    const animateDots = useCallback(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const dots = dotsRef.current;
        const grid = gridRef.current;
        const { width, height } = canvasSizeRef.current;
        const { x: mouseX, y: mouseY } = mousePositionRef.current;

        if (!ctx || !dots || !grid || width === 0 || height === 0) {
            animationFrameId.current = requestAnimationFrame(animateDots);
            return;
        }

        ctx.clearRect(0, 0, width, height);

        const activeDotIndices = new Set<number>();
        if (mouseX !== null && mouseY !== null) {
            const mouseCellX = Math.floor(mouseX / GRID_CELL_SIZE);
            const mouseCellY = Math.floor(mouseY / GRID_CELL_SIZE);
            const searchRadius = Math.ceil(INTERACTION_RADIUS / GRID_CELL_SIZE);
            for (let i = -searchRadius; i <= searchRadius; i++) {
                for (let j = -searchRadius; j <= searchRadius; j++) {
                    const checkCellX = mouseCellX + i;
                    const checkCellY = mouseCellY + j;
                    const cellKey = `${checkCellX}_${checkCellY}`;
                    if (grid[cellKey]) {
                        grid[cellKey].forEach(dotIndex => activeDotIndices.add(dotIndex));
                    }
                }
            }
        }

        dots.forEach((dot, index) => {
            dot.currentOpacity += dot.opacitySpeed;
            if (dot.currentOpacity >= dot.targetOpacity || dot.currentOpacity <= BASE_OPACITY_MIN) {
                dot.opacitySpeed = -dot.opacitySpeed;
                dot.currentOpacity = Math.max(BASE_OPACITY_MIN, Math.min(dot.currentOpacity, BASE_OPACITY_MAX));
                dot.targetOpacity = Math.random() * (BASE_OPACITY_MAX - BASE_OPACITY_MIN) + BASE_OPACITY_MIN;
            }

            let interactionFactor = 0;
            dot.currentRadius = dot.baseRadius;

            if (mouseX !== null && mouseY !== null && activeDotIndices.has(index)) {
                const dx = dot.x - mouseX;
                const dy = dot.y - mouseY;
                const distSq = dx * dx + dy * dy;

                if (distSq < INTERACTION_RADIUS_SQ) {
                    const distance = Math.sqrt(distSq);
                    interactionFactor = Math.max(0, 1 - distance / INTERACTION_RADIUS);
                    interactionFactor = interactionFactor * interactionFactor;
                }
            }

            const finalOpacity = Math.min(1, dot.currentOpacity + interactionFactor * OPACITY_BOOST);
            dot.currentRadius = dot.baseRadius + interactionFactor * RADIUS_BOOST;

            const colorMatch = dot.baseColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
            const r = colorMatch ? colorMatch[1] : '87';
            const g = colorMatch ? colorMatch[2] : '220';
            const b = colorMatch ? colorMatch[3] : '205';

            ctx.beginPath();
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${finalOpacity.toFixed(3)})`;
            ctx.arc(dot.x, dot.y, dot.currentRadius, 0, Math.PI * 2);
            ctx.fill();
        });

        animationFrameId.current = requestAnimationFrame(animateDots);
    }, [GRID_CELL_SIZE, INTERACTION_RADIUS, INTERACTION_RADIUS_SQ, OPACITY_BOOST, RADIUS_BOOST, BASE_OPACITY_MIN, BASE_OPACITY_MAX]);

    useEffect(() => {
        handleResize();
        const handleMouseLeave = () => {
            mousePositionRef.current = { x: null, y: null };
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('resize', handleResize);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);

        animationFrameId.current = requestAnimationFrame(animateDots);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [handleResize, handleMouseMove, animateDots]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    const contentDelay = 0.3;
    const itemDelayIncrement = 0.1;

    const headlineVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 0.9, transition: { duration: 0.5, delay: contentDelay + itemDelayIncrement * 3 } }
    };

    return (
        <>
            <canvas ref={canvasRef} className="absolute inset-0 z-10 w-full overflow-hidden pointer-events-none opacity-80" />
            <div className='w-full max-w-6xl sticky flex-grow mt-10 flex flex-col items-start justify-start mx-auto px-1 md:px-14 md:pt-10 lg:px-4 h-full max-sm:pb-5 pb-14 z-10'>
                <div className='flex gap-5 max-lg:items-center max-lg:flex-col items-start w-full justify-between'>
                    <div className='w-full max-sm:text-center flex flex-col max-w-4xl'>
                        {/* <Announcing className='w-full max-lg:text-center max-md:mt-10 max-sm:order-1 order-0' /> */}

                        <motion.h1
                            variants={headlineVariants}
                            initial="hidden"
                            animate="visible"
                            className="max-sm:text-3xl max-sm:order-first inline-flex max-md:justify-center justify-start items-center w-full text-4xl lg:text-5xl xl:text-6xl font-black text-foreground max-md:text-left text-left leading-tight max-w-4xl"
                        >
                            {`Hello, I'm`}
                            <RotatingText
                                texts={[' Sophat LEAT', ' PPhat']}
                                mainClassName="text-primary mr-1 leading-tight"
                                staggerFrom={"first"}
                                initial={{ y: "-100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: "100%", opacity: 0 }}
                                staggerDuration={0.01}
                                transition={{ type: "keyframes", damping: 18, stiffness: 210 }}
                                rotationInterval={3200}
                                splitBy="characters"
                                auto={true}
                                loop={true}
                            />
                        </motion.h1>

                        <motion.div
                            variants={headlineVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-2xl sm:text-3xl max-sm:order-first lg:text-4xl font-semibold text-foreground/80 max-md:text-center max-sm:mb-5 mb-12"
                        >
                            <RotatingText
                                texts={['Senior Frontend Developer', 'UI/UX Designer']}
                                mainClassName="text-primary mr-1 max-sm:text-xl leading-tight"
                                staggerFrom={"first"}
                                initial={{ y: "0%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: "100%", opacity: 0 }}
                                staggerDuration={0.01}
                                transition={{ type: "decay", damping: 18, stiffness: 210 }}
                                rotationInterval={2200}
                                splitBy="characters"
                                auto={true}
                                loop={true}
                            />
                        </motion.div>

                        <div className='hidden max-sm:block'>
                            <TechStack />
                        </div>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 0.9, y: 0, transition: { duration: 0.5, delay: contentDelay + itemDelayIncrement * 2 } }
                            }}
                            initial="hidden"
                            animate="visible"
                            className="text-sm max-md:px-3 lg:px-1 sm:text-lg max-md:text-start font-sans text-foreground/80 mx-auto"
                        >
                            I started my career as a Front-end Developer in 2021, and I have a passion for creating beautiful and functional user interfaces. I love to learn new technologies and improve my skills every day.
                        </motion.p>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 0.9, y: 0, transition: { duration: 0.5, delay: contentDelay + itemDelayIncrement * 3 } }
                            }}
                            initial="hidden"
                            animate="visible"
                            className="text-sm max-md:px-3 lg:px-1 sm:text-lg max-md:text-start text-foreground/80 lg:mt-8"
                        >
                            I am also a big fan of open-source projects and I enjoy contributing to the community. I believe that sharing knowledge is the key to success in this field.
                        </motion.p>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 0.9, y: 0, transition: { duration: 0.5, delay: contentDelay + itemDelayIncrement * 4 } }
                            }}
                            initial="hidden"
                            animate="visible"
                            className="flex items-center max-sm:my-6 max-sm:-order-1 justify-start space-x-3 sm:mt-8 max-md:justify-center"
                        >
                            <ThemeToggle />
                        </motion.div>

                    </div>

                    <MagneticArea className='max-xs:scale-100 shrink-0 max-lg:order-first max-sm:size-52 my-2 w-80 items-center justify-center'>
                        <Profile />
                    </MagneticArea>
                </div>
                <div className='hidden sm:block w-full'>
                    <TechStack />
                </div>
            </div>
        </>
    );
};

export default HomeHeroSection;