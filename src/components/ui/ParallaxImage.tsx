import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    containerClassName?: string;
    speed?: number; // Speed of parallax. 0 = no parallax, higher = more movement
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
    src,
    alt,
    className = '',
    containerClassName = '',
    speed = 40
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Transform value: moves the image vertically as you scroll
    const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

    return (
        <div
            ref={ref}
            className={`relative overflow-hidden ${containerClassName}`}
        >
            <motion.img
                src={src}
                alt={alt}
                className={`w-full h-[120%] object-cover absolute top-[-10%] left-0 ${className}`}
                style={{ y }}
            />
        </div>
    );
};
