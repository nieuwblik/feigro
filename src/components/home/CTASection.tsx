import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PrimaryFlipButton } from '@/components/buttons';

export const CTASection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    // Track scroll progress of the section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Transform values based on scroll progress
    // Scale from 1 to full viewport (simulated with scale)
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 1.15]);

    // Border radius: from rounded to sharp
    const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], [24, 12, 0]);

    // Opacity for dramatic effect
    const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9]);

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="py-16 md:py-24 bg-white overflow-hidden"
        >
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    className="bg-black p-8 md:p-16 lg:p-24 text-center md:text-left relative overflow-hidden shadow-2xl border border-white/5"
                    style={{
                        scale,
                        borderRadius,
                        transition: 'none'
                    }}
                >
                    {/* Dynamic Background Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]"></div>

                    <motion.div
                        className="relative z-10 max-w-4xl mx-auto md:mx-0"
                        style={{
                            opacity: contentOpacity,
                            transition: 'none'
                        }}
                    >
                        <h2 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading mb-6 md:mb-8 leading-[1] tracking-tighter uppercase">
                            Klaar voor een <br /><span className="text-brand-green italic">nieuw dak?</span>
                        </h2>
                        <p className="text-white/60 text-base md:text-lg lg:text-2xl mb-10 md:mb-14 leading-relaxed max-w-2xl font-light mx-auto md:mx-0">
                            Ontvang binnen 24 uur een vrijblijvende offerte voor uw dakwerken. Geen verrassingen achteraf, enkel puur vakmanschap.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-8 md:gap-10">
                            <PrimaryFlipButton
                                label="Vraag offerte aan"
                                hoverLabel="Direct contact"
                                size="default"
                                className="!min-w-[240px] md:!min-w-[280px]"
                                onClick={() => {
                                    const el = document.getElementById('contact-form');
                                    if (el) {
                                        el.scrollIntoView({ behavior: 'smooth' });
                                    } else {
                                        window.location.href = '/contact';
                                    }
                                }}
                            />
                            <div className="flex flex-col items-center md:items-start group cursor-pointer" onClick={() => window.location.href = 'tel:+31612345678'}>
                                <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-1">Liever bellen?</span>
                                <a href="tel:+31612345678" className="text-white font-bold text-2xl md:text-3xl group-hover:text-brand-green transition-all">+31 (0) 6 123 456 78</a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
