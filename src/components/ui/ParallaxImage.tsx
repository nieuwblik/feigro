import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    containerClassName?: string;
    speed?: number; // Relative pixels to move. Positive moves against scroll (parallax), negative moves with scroll
    direction?: 'up' | 'down';
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
    src,
    alt,
    className = '',
    containerClassName = '',
    speed = 50,
    direction = 'up'
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const range = direction === 'up' ? [speed, -speed] : [-speed, speed];
    const y = useTransform(scrollYProgress, [0, 1], range);

    return (
        <div
            ref={ref}
            className={`relative overflow-hidden ${containerClassName}`}
        >
            <motion.img
                src={src}
                alt={alt}
                className={`w-full h-[140%] object-cover absolute top-[-20%] left-0 ${className}`}
                style={{
                    y,
                    transition: 'none'
                }}
            />
        </div>
    );
};

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    distance?: number;
    duration?: number;
    className?: string;
    once?: boolean;
    scale?: number;
    style?: React.CSSProperties;
}

export const FadeIn: React.FC<FadeInProps> = ({
    children,
    delay = 0,
    direction = 'up',
    distance = 30,
    duration = 0.8,
    className = '',
    once = true,
    scale = 1,
    style = {}
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-10% 0px" });

    const directions = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
        none: {}
    };

    const initial = {
        opacity: 0,
        scale,
        ...directions[direction]
    };

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={isInView ? {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                transition: {
                    duration,
                    delay,
                    ease: [0.16, 1, 0.3, 1]
                }
            } : initial}
            className={className}
            style={{ willChange: 'opacity, transform', ...style }}
        >
            {children}
        </motion.div>
    );
};
