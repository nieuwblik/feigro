import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PrimaryFlipButton } from '@/components/buttons';
import { HeroData } from '@/types';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface HeroSectionProps extends HeroData {
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaHref,
  backgroundImage,
  highlightWordCount = 1,
  className,
}: HeroSectionProps) {
  const words = title.split(' ');
  const mainText = words.slice(0, -highlightWordCount).join(' ');
  const highlightText = words.slice(-highlightWordCount).join(' ');

  return (
    <section
      className={cn(
        'relative bg-black pt-24 pb-16 md:pt-40 md:pb-20 px-4 md:px-6 overflow-hidden h-screen flex items-center',
        className
      )}
    >
      {/* Background Image with Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      )}

      <div className="container mx-auto relative z-10 text-left">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6 md:mb-8"
          >
            <div className="w-12 h-[2px] bg-brand-green"></div>
            <span className="text-brand-green font-bold text-xs uppercase tracking-[0.3em]">Expertise</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-3xl md:text-4xl lg:text-5xl font-heading tracking-tighter leading-none mb-6 md:mb-10 uppercase"
          >
            {mainText && (
              <>
                {mainText} <br />
              </>
            )}
            <span className="text-brand-green italic">{highlightText}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/70 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed mb-8 md:mb-10 font-light"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/contact">
              <PrimaryFlipButton
                label="Vraag offerte aan"
                icon={<ArrowRight />}
                size="default"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-green/10 blur-[120px] rounded-full translate-x-1/4 -z-0"></div>
    </section>
  );
}
