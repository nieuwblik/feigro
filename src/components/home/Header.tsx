import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { InversedFlipButton, PrimaryFlipButton } from '@/components/buttons';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Diensten', href: '#diensten' },
    { name: 'Over Ons', href: '#over' },
    { name: 'Projecten', href: '#projecten' },
    { name: 'Contact', href: '#contact' },
  ];

  // Dynamic origin point based on header state (scrolled vs not scrolled)
  const originY = isScrolled ? "36px" : "52px";

  const menuBgVariants: Variants = {
    closed: {
      clipPath: `circle(0% at calc(100% - 40px) ${originY})`,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        delay: 0.4 
      }
    },
    opened: {
      clipPath: `circle(150% at calc(100% - 40px) ${originY})`,
      transition: {
        type: "spring",
        stiffness: 100,
        restDelta: 2
      }
    }
  };

  const contentVariants: Variants = {
    closed: { 
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    },
    opened: { 
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    opened: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
      } 
    }
  };

  const Logo = () => (
    <div className="flex items-center gap-3 group cursor-pointer" onClick={() => { window.scrollTo({top: 0, behavior: 'smooth'}); setIsMenuOpen(false); }}>
      <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center shadow-lg shadow-brand-green/20 group-hover:scale-110 transition-transform">
        <span className="text-black font-bold text-xl">F</span>
      </div>
      <div className="flex flex-col text-left">
        <span className="text-white font-heading text-xl tracking-tight leading-none uppercase">FEIGRO</span>
        <span className="text-brand-green font-semibold text-[9px] uppercase tracking-[0.25em] mt-1">Dakwerken</span>
      </div>
    </div>
  );

  return (
    <header className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center relative z-[110]">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-white/90 hover:text-brand-green transition-colors text-[10px] font-bold uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <PrimaryFlipButton 
            label="Offerte" 
            size="default"
            onClick={() => window.location.href = '#contact'}
          />
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          className="lg:hidden text-white hover:text-brand-green transition-colors relative w-10 h-10 flex items-center justify-center z-[120]" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <X size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <Menu size={28} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuBgVariants}
            className="lg:hidden fixed inset-0 z-[100] bg-black flex flex-col h-screen w-screen overflow-hidden"
          >
            {/* Background Header Spacer to keep logo visible during transition */}
            <div className={`container mx-auto px-6 transition-all duration-500 flex justify-between items-center ${isScrolled ? 'py-4' : 'py-8'}`}>
                <Logo />
                <div className="w-10 h-10"></div>
            </div>

            <motion.div 
              variants={contentVariants}
              className="flex-1 flex flex-col p-8 pt-4 container mx-auto overflow-y-auto"
            >
              <nav className="flex flex-col gap-6 text-left">
                {navLinks.map((link) => (
                  <motion.a 
                    key={link.name}
                    variants={itemVariants}
                    href={link.href} 
                    className="text-white text-4xl md:text-6xl font-heading hover:text-brand-green transition-colors tracking-tighter" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
                
                <motion.div variants={itemVariants} className="mt-12">
                   <PrimaryFlipButton 
                     label="Offerte Aanvragen" 
                     onClick={() => { setIsMenuOpen(false); window.location.href = '#contact'; }}
                     className="w-full sm:max-w-md"
                   />
                </motion.div>

                <motion.div variants={itemVariants} className="mt-auto pb-12 pt-10">
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-4">Neem contact op</p>
                  <a href="tel:+31612345678" className="text-white text-2xl font-bold hover:text-brand-green transition-colors">+31 (0) 6 123 456 78</a>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
