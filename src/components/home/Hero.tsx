import React, { useState, useEffect, useRef } from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { PrimaryFlipButton, EmergencyFlipButton } from '@/components/buttons';

export const Hero = () => {
  const [buttonSize, setButtonSize] = useState<'default' | 'large'>('default');
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    const handleResize = () => {
      setButtonSize(window.innerWidth >= 1024 ? 'large' : 'default');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex items-start overflow-hidden bg-black">
      {/* Hero Background with Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
          alt="Professional roofing work"
          className="w-full h-full object-cover opacity-40 animate-slow-zoom"
          style={{ y: backgroundY }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <motion.div
        className="container mx-auto px-6 relative z-10 pt-32 md:pt-40 lg:pt-52 pb-20 flex flex-col items-start"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 md:gap-3 bg-white/5 border border-white/10 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full mb-8 backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
            <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]">Uw Gecertificeerde Dakspecialist</span>
          </motion.div>

          {/* Heading with Aldrich Font */}
          <motion.h1
            variants={itemVariants}
            className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading leading-[0.9] mb-8 md:mb-12 tracking-tighter uppercase"
          >
            Meesters in <br />
            <span className="text-brand-green italic">Dakwerken</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-white/70 text-lg md:text-xl mb-10 md:mb-12 max-w-2xl leading-relaxed font-light"
          >
            FEIGRO Dakwerken biedt duurzame bescherming voor elk gebouw.
            Van renovatie tot onderhoud, wij leveren vakmanschap van de hoogste plank.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start justify-start gap-8 md:gap-10 w-full lg:w-auto"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 w-full lg:w-auto">
              <PrimaryFlipButton
                label="Vraag offerte aan"
                hoverLabel="Direct Advies"
                size={buttonSize}
                icon={<ArrowRight size={buttonSize === 'large' ? 22 : 18} className="-rotate-45" />}
                onClick={() => {
                  const el = document.getElementById('contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              />

              <Link
                to="/spoedservice"
                className={cn(
                  "group flex items-center gap-3 bg-red-950/20 border border-red-500/20 px-6 h-[56px] md:h-[72px] rounded-2xl md:rounded-3xl hover:bg-red-500/10 transition-all duration-300",
                  buttonSize === 'large' ? 'px-8' : 'px-6'
                )}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-red-500 font-bold text-xs md:text-sm uppercase tracking-[0.2em] whitespace-nowrap">
                  SPOEDSERVICE ACTIEF
                </span>
              </Link>
            </div>

            <div className="flex flex-col items-start group cursor-pointer" onClick={() => window.location.href = 'tel:+31612345678'}>
              <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Liever bellen?</span>
              <a href="tel:+31612345678" className="text-white font-bold text-xl md:text-2xl group-hover:text-brand-green transition-colors">+31 (0) 6 123 456 78</a>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="mt-16 md:mt-20 flex flex-wrap justify-start gap-10 md:gap-20 border-t border-white/10 pt-10 md:pt-12 w-full"
          >
            <div className="flex flex-col items-start">
              <p className="text-brand-green text-3xl md:text-5xl font-heading mb-1 leading-none tracking-tighter">100%</p>
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Lekkagevrij</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-brand-green text-3xl md:text-5xl font-heading mb-1 leading-none tracking-tighter">24u</p>
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Noodservice</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-brand-green text-3xl md:text-5xl font-heading mb-1 leading-none tracking-tighter">15jr</p>
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Ervaring</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Visual Accents */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-brand-green/10 blur-[150px] rounded-full translate-x-1/4 translate-y-1/4 -z-10"></div>
    </section>
  );
};
