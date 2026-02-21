import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PrimaryFlipButton } from '@/components/buttons';
import { FadeIn } from '@/components/ui/ParallaxImage';
import heroSlide1 from '@/assets/hero-slide-1.webp';
import heroSlide2 from '@/assets/hero-slide-2.webp';
import heroSlide3 from '@/assets/hero-slide-3.webp';
const heroImages = [heroSlide1, heroSlide2, heroSlide3];
export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return <section ref={containerRef} className="relative h-screen w-full flex flex-col lg:flex-row lg:items-center overflow-hidden bg-slate-100">
    {/* Desktop Visual (Right Side - Clipped Image Container) */}
    <div className="absolute top-0 right-0 w-full lg:w-[50%] h-full z-0 hidden lg:block">
      <div
        className="relative w-full h-full overflow-hidden"
        style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
      >
        {heroImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Professional roofing work ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.9] contrast-[1.05] scale-100"
            loading={index === 0 ? "eager" : "lazy"}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100/10 to-transparent text-slate-100"></div>
      </div>
    </div>

    {/* Mobile Visual (Top 65%) */}
    <div className="relative h-[65%] sm:h-[68%] w-full lg:hidden overflow-hidden">
      {heroImages.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.9] scale-100"
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1.2 }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden"></div>
    </div>

    {/* Content Area (Bottom 35% / Full Desktop) */}
    <div className="relative h-[35%] sm:h-[32%] lg:h-full lg:absolute lg:inset-0 z-10 flex flex-col lg:flex-row lg:items-center -mt-6 sm:-mt-8 lg:mt-0">
      <div className="w-full lg:container lg:mx-auto lg:px-6 h-full lg:h-auto flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch lg:items-center h-full lg:h-auto">
          <div className="lg:col-span-12 xl:col-span-7 h-full lg:h-auto">
            {/* Slate Card: Flush on mobile, Transparent on desktop */}
            <div className="bg-slate-100 lg:bg-transparent rounded-t-[24px] lg:rounded-none h-full p-4 sm:p-7 md:p-10 lg:p-0 shadow-[0_-10px_40px_rgba(0,0,0,0.06)] lg:shadow-none flex flex-col items-center lg:items-start text-center lg:text-left">

              <div className="w-full max-w-xl md:max-w-2xl lg:max-w-none flex flex-col items-center lg:items-start lg:grow-0 justify-start pt-2 lg:pt-0">
                {/* Badge */}
                <FadeIn distance={15}>
                  <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 px-2.5 py-0.5 sm:py-1 rounded-full mb-2 sm:mb-3 md:mb-6 lg:mb-8 backdrop-blur-md">
                    <div className="w-1 rounded-full bg-brand-green animate-pulse aspect-square"></div>
                    <span className="text-brand-green text-[7px] md:text-[11px] font-bold uppercase tracking-[0.2em]">​Regio Noord-Holland & Utrecht</span>
                  </div>
                </FadeIn>

                {/* Heading */}
                <FadeIn delay={0.1} className="w-full">
                  <h1 className="text-[2.75rem] sm:text-[3.25rem] md:text-6xl lg:text-[4.2rem] xl:text-[5rem] font-heading leading-[0.95] mb-4 sm:mb-5 md:mb-6 lg:mb-8 tracking-tighter uppercase text-slate-900 w-full">
                    Meesters in <br />
                    <span className="text-brand-green italic">Dakwerken</span>
                  </h1>
                </FadeIn>

                {/* Paragraph */}
                <FadeIn delay={0.2} className="w-full">
                  <p className="text-slate-600 text-base sm:text-lg md:text-lg lg:text-lg mb-4 sm:mb-6 md:mb-8 lg:mb-10 max-w-lg leading-relaxed font-light">
                    FEIGRO Dakwerken biedt duurzame bescherming voor elk gebouw. Wij leveren vakmanschap van de hoogste plank.
                  </p>
                </FadeIn>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Visual Accents (Desktop only) */}
    <div className="absolute top-1/2 left-0 w-1/4 h-1/2 bg-brand-green/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 -z-10 hidden lg:block"></div>
  </section>;


};