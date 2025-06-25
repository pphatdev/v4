"use client";
import { motion, type Variants } from 'framer-motion';
import { useCallback } from 'react';
import { RainbowGlow } from './rainbow-glow';
import { useProjects } from '@/hooks/projects';


export const Profile = () => {

    const { projects, loading, error } = useProjects();

    const loadImage = (src: string): Promise<HTMLImageElement> => new Promise<HTMLImageElement>(resolve => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = src;
    });

    const renderCanvas = useCallback((canvas: HTMLCanvasElement | null): void => {
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = 500;
        canvas.height = 500;

        Promise.all([
            loadImage('/assets/gallery/WEBP/IMG_1915.webp'),
            loadImage('/assets/masks/mask.webp')
        ]).then(([img, mask]) => {
            const scale = Math.max(
                canvas.width / img.width,
                canvas.height / img.height
            );
            const x = (canvas.width - img.width * scale) / 2;
            const y = (canvas.height - img.height * scale) / 2;

            // Draw image with object-cover behavior
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

            // Apply mask
            ctx.globalCompositeOperation = 'destination-in';
            ctx.drawImage(mask, 0, 0, 500, 500);
        });
    }, []);

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
            className="max-w-sm w-full relative"
            // style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))' }}
        >
            <canvas ref={renderCanvas} className="h-full w-full bg-center m-1" />
            <RainbowGlow className="opacity-20" />
        </motion.div>
    );
}