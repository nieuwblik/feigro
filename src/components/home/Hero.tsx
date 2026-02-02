import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { PrimaryFlipButton } from '@/components/buttons';
import { FadeIn } from '@/components/ui/ParallaxImage';
import heroImage from '@/assets/herosectiefeigro.jpg';
export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Background parallax speed set to ~0.7x (moves 30% of scroll distance)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  return <section ref={containerRef} className="relative min-h-screen w-full flex items-center overflow-hidden bg-black py-20">
    {/* Hero Background with Parallax */}
    <div className="absolute inset-0 z-0">
      <motion.img src={heroImage} alt="Professional roofing work" className="w-full h-[130%] object-cover brightness-50 animate-slow-zoom" style={{
        y: backgroundY,
        top: "-15%"
      }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      <div className="absolute inset-0 bg-black/40"></div>
    </div>

    <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20 md:pt-24 lg:pt-28 pb-8 flex flex-col items-start">
      <div className="max-w-5xl flex flex-col items-start text-left">
        {/* Badge */}
        <FadeIn distance={20}>
          <div className="inline-flex items-center gap-2 md:gap-3 bg-white/5 border border-white/10 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full mb-6 md:mb-8 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
            <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]">Uw Gecertificeerde Dakspecialist</span>
          </div>
        </FadeIn>

        {/* Heading with Aldrich Font */}
        <FadeIn delay={0.1}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading leading-[0.9] mb-4 md:mb-6 tracking-tighter uppercase break-words text-white">
            Meesters in <br />
            <span className="text-brand-green italic">Dakwerken</span>
          </h1>
        </FadeIn>

        {/* Paragraph */}
        <FadeIn delay={0.2}>
          <p className="text-white/70 text-sm md:text-base lg:text-lg mb-4 md:mb-6 max-w-2xl leading-relaxed font-light">
            FEIGRO Dakwerken biedt duurzame bescherming voor elk gebouw.
            Van renovatie tot onderhoud, wij leveren vakmanschap van de hoogste plank.
            <span className="block mt-2 text-white/50 text-xs md:text-sm">
              Werkzaam in Noord-Holland, Flevoland en Utrecht.
            </span>
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="w-full">
          <div className="flex flex-col sm:flex-row items-start justify-start gap-4 md:gap-6 w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 w-full lg:w-auto">
              <PrimaryFlipButton label="Gratis Dakinspectie" hoverLabel="Plan Inspectie" icon={<ArrowRight size={18} className="-rotate-45" />} onClick={() => {
                window.location.href = '/contact';
              }} />

              <Link to="/spoedservice" className="group flex items-center gap-2 md:gap-3 bg-red-950/20 border border-red-500/20 px-4 md:px-6 h-[48px] md:h-[52px] rounded-xl hover:bg-red-500/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-red-500 font-bold text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] whitespace-nowrap">
                  SPOEDSERVICE
                </span>
              </Link>
            </div>

            <div className="hidden sm:flex flex-col items-start group cursor-pointer" onClick={() => window.location.href = 'tel:+31612345678'}>
              <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Liever bellen?</span>
              <a href="tel:+31612345678" className="text-white font-bold text-base md:text-lg lg:text-2xl group-hover:text-brand-green transition-colors">+31 (0) 6 123 456 78</a>
            </div>
          </div>
        </FadeIn>

        {/* Stats Bar */}
        <div className="mt-8 md:mt-12 flex flex-wrap justify-start gap-6 sm:gap-8 md:gap-12 lg:gap-16 border-t border-white/10 pt-6 md:pt-8 w-full">
          {[{
            val: '100%',
            label: 'Lekkagevrij'
          }, {
            val: '24u',
            label: 'Noodservice'
          }, {
            val: '15jr',
            label: 'Ervaring'
          }].map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start"
            >
              <p className="text-brand-green text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading mb-1 leading-none tracking-tighter">{stat.val}</p>
              <p className="text-white/40 text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* Visual Accents */}
    <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-brand-green/10 blur-[150px] rounded-full translate-x-1/4 translate-y-1/4 -z-10"></div>
  </section>;
};