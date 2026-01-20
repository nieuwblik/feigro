import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, Settings, Hammer, Layers, Flame, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { InversedFlipButton, PrimaryFlipButton } from '@/components/buttons';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

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

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const services = [
    {
      name: 'VVE & Vastgoedbeheer',
      href: '/vve-vastgoedbeheer',
      desc: 'Professioneel dakbeheer voor VVE\'s en vastgoedbeheerders.',
      icon: <Settings size={20} className="text-brand-green" />
    },
    {
      name: 'Daklekkage',
      href: '/daklekkage',
      desc: 'Snelle detectie en reparatie van daklekkages.',
      icon: <Hammer size={20} className="text-brand-green" />
    },
    {
      name: 'Dakreparatie',
      href: '/dakreparatie',
      desc: 'Efficiënte dakreparaties met duurzame materialen.',
      icon: <Hammer size={20} className="text-brand-green" />,
      badge: 'Populair'
    },
    {
      name: 'Dakonderhoud',
      href: '/dakonderhoud',
      desc: 'Voorkom verrassingen met periodiek dakonderhoud.',
      icon: <Settings size={20} className="text-brand-green" />
    },
    {
      name: 'Dakrenovatie',
      href: '/dakrenovatie',
      desc: 'Complete dakrenovaties voor comfort en energiebesparing.',
      icon: <Layers size={20} className="text-brand-green" />
    },
    {
      name: 'Valbeveiliging',
      href: '/valbeveiliging',
      desc: 'Veilige werkplekken met gecertificeerde valbeveiliging.',
      icon: <ShieldCheck size={20} className="text-brand-green" />
    }
  ];

  const navLinks = [
    { name: 'Over Ons', href: '/over-ons' },
    { name: 'Projecten', href: '/projecten' },
    { name: 'Spoedservice', href: '/spoedservice', isEmergency: true },
    { name: 'Contact', href: '/contact' },
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

  const dropdownVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
      x: "-50%",
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    visible: {
      opacity: 1,
      y: 0,
      x: "-50%",
      scale: 1,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const Logo = () => (
    <Link to="/" className="flex items-center gap-3 group cursor-pointer" onClick={() => setIsMenuOpen(false)}>
      <img
        src="/images/feigro-logo-wit.png"
        alt="FEIGRO Dakwerken"
        className="h-8 md:h-10 w-auto group-hover:scale-105 transition-transform"
      />
    </Link>
  );

  return (
    <header className={`fixed w-full z-[9999] transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center relative z-[110]">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {/* Diensten Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('diensten')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to="/diensten"
              className="flex items-center gap-1.5 text-white/90 hover:text-brand-green transition-colors text-[10px] font-bold uppercase tracking-widest outline-none py-2"
            >
              Diensten
              <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'diensten' ? 'rotate-180' : ''}`} />
            </Link>

            <AnimatePresence>
              {activeDropdown === 'diensten' && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute top-full mt-4 w-[680px] bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4"
                  style={{ left: '50%' }}
                >
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((service, idx) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05, duration: 0.4 }}
                      >
                        <Link
                          to={service.href}
                          className="group flex items-start gap-4 px-4 py-4 hover:bg-white/5 rounded-xl transition-all duration-300"
                        >
                          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-green/20 group-hover:scale-110 transition-all duration-500 shrink-0">
                            {React.cloneElement(service.icon as React.ReactElement, { size: 24 })}
                          </div>
                          <div className="flex flex-col flex-1 pt-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-white font-bold text-[13px] uppercase tracking-wider group-hover:text-brand-green transition-colors">
                                {service.name}
                              </span>
                              {service.badge && (
                                <span className="text-[8px] bg-brand-green/10 text-brand-green border border-brand-green/20 px-2 py-0.5 rounded-full font-black uppercase tracking-widest">
                                  {service.badge}
                                </span>
                              )}
                            </div>
                            <span className="text-white/40 text-[11px] font-medium leading-relaxed group-hover:text-white/60 transition-colors">
                              {service.desc}
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Strip */}
                  <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center px-4">
                    <p className="text-white/20 text-[10px] uppercase tracking-widest font-bold">FEIGRO Dakwerken — Kwaliteit over de hele linie</p>
                    <Link to="/contact" className="text-brand-green text-[10px] uppercase tracking-widest font-black hover:text-white transition-colors flex items-center gap-2">
                      VRAAG ADVIES <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.filter(link => !link.isEmergency).map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-white/90 hover:text-brand-green transition-colors text-[10px] font-bold uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}

          <Link to="/spoedservice" className="hidden lg:flex items-center gap-2 group">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse group-hover:scale-110 transition-transform" />
            <span className="text-white font-bold text-[10px] uppercase tracking-widest group-hover:text-red-500 transition-colors">
              Spoed
            </span>
          </Link>
          <PrimaryFlipButton
            label="Offerte"
            size="default"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/contact';
              }
            }}
          />
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-white hover:text-brand-green transition-colors relative w-10 h-10 flex items-center justify-center z-[10000]"
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
                {/* Mobile Diensten Dropdown */}
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'diensten-mobile' ? null : 'diensten-mobile')}
                    className="text-white text-4xl md:text-6xl font-heading hover:text-brand-green transition-colors tracking-tighter flex justify-between items-center group"
                  >
                    DIENSTEN
                    <ChevronDown size={32} className={`transition-transform duration-300 ${activeDropdown === 'diensten-mobile' ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === 'diensten-mobile' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex flex-col gap-4 pl-4 overflow-hidden"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center gap-4 text-white/60 text-xl font-heading hover:text-brand-green transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                              {service.icon}
                            </div>
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinks.filter(link => !link.isEmergency).map((link) => (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Link
                      to={link.href}
                      className="text-4xl md:text-6xl font-heading text-white hover:text-brand-green transition-colors tracking-tighter uppercase flex items-center gap-4"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <div className="flex flex-col gap-6 mt-12 pb-12">
                  <motion.div variants={itemVariants}>
                    <PrimaryFlipButton
                      label="Offerte Aanvragen"
                      onClick={() => { setIsMenuOpen(false); window.location.href = '/contact'; }}
                      className="w-full sm:max-w-md"
                    />
                  </motion.div>

                  {navLinks.filter(link => link.isEmergency).map((link) => (
                    <motion.div key={link.name} variants={itemVariants}>
                      <Link
                        to={link.href}
                        className="group flex items-center justify-center gap-3 bg-red-950/20 border border-red-500/20 px-6 h-[56px] rounded-2xl md:rounded-3xl hover:bg-red-500/10 transition-all duration-300 w-full sm:max-w-md"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_12px_rgba(239,68,68,0.5)]"></div>
                        <span className="text-red-500 font-bold text-xs uppercase tracking-[0.2em] whitespace-nowrap">
                          SPOEDSERVICE ACTIEF
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

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
