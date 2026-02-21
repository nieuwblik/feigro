import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Settings, Hammer, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { InversedFlipButton, PrimaryFlipButton } from '@/components/buttons';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import feigroLogoKleur from '@/assets/Feigro logo kleur.png';

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
    { name: 'Nieuws', href: '/nieuws' },
    { name: 'Lekkage melden', href: '/spoedservice', isEmergency: true },
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

  const isHomepage = location.pathname === '/';
  const shouldBeLight = !isMenuOpen;
  const headerTextClass = shouldBeLight ? 'text-slate-900' : 'text-white';
  const headerLinkClass = shouldBeLight ? 'text-slate-900/90 hover:text-brand-green' : 'text-white/90 hover:text-brand-green';

  const Logo = () => (
    <Link to="/" className="flex items-center gap-3 group cursor-pointer" onClick={() => setIsMenuOpen(false)}>
      <img
        src={feigroLogoKleur}
        alt="FEIGRO Dakwerken"
        className="h-8 md:h-10 w-auto group-hover:scale-105 transition-transform"
      />
    </Link>
  );

  return (
    <header className={cn(
      "fixed w-full z-[9999] transition-all duration-500",
      isScrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-xl" : "bg-white py-6 shadow-sm"
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center relative z-[110]">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12">
          {/* Diensten Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('diensten')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to="/diensten"
              className={cn("flex items-center gap-1.5 transition-colors text-[10px] font-bold uppercase tracking-widest outline-none py-2", headerLinkClass)}
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
                  className="absolute top-full mt-4 w-[680px] bg-white backdrop-blur-2xl border border-slate-200 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6"
                  style={{ left: '50%' }}
                >
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service, idx) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05, duration: 0.4 }}
                      >
                        <Link
                          to={service.href}
                          className="group flex items-start gap-4 px-5 py-5 hover:bg-slate-50 rounded-xl transition-all duration-300"
                        >
                          <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-brand-green/20 group-hover:scale-110 transition-all duration-500 shrink-0">
                            {React.cloneElement(service.icon as React.ReactElement, { size: 24 })}
                          </div>
                          <div className="flex flex-col flex-1 pt-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-slate-900 font-bold text-[13px] uppercase tracking-wider group-hover:text-brand-green transition-colors">
                                {service.name}
                              </span>
                              {service.badge && (
                                <span className="text-[8px] bg-brand-green/10 text-brand-green border border-brand-green/20 px-2 py-0.5 rounded-full font-black uppercase tracking-widest">
                                  {service.badge}
                                </span>
                              )}
                            </div>
                            <span className="text-slate-500 text-[11px] font-medium leading-relaxed group-hover:text-slate-700 transition-colors">
                              {service.desc}
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Strip */}
                  <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center px-4">
                    <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">FEIGRO Dakwerken — Kwaliteit over de hele linie</p>
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
              className={cn("transition-colors text-[10px] font-bold uppercase tracking-widest", headerLinkClass)}
            >
              {link.name}
            </Link>
          ))}

          <Link to="/spoedservice" className="hidden lg:flex items-center gap-2 group">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse group-hover:scale-110 transition-transform" />
            <motion.span
              animate={{
                color: ['#ef4444', '#f87171', '#ef4444'],
                textShadow: [
                  '0 0 0px rgba(239, 68, 68, 0)',
                  '0 0 8px rgba(239, 68, 68, 0.4)',
                  '0 0 0px rgba(239, 68, 68, 0)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="font-bold text-[10px] uppercase tracking-widest"
            >
              Lekkage melden
            </motion.span>
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

        {/* Mobile Toggle Buttons */}
        <div className="lg:hidden flex items-center gap-3">
          {/* Emergency Phone Button */}
          <Link
            to="/spoedservice"
            className="relative text-red-500 hover:text-red-400 transition-colors w-10 h-10 flex items-center justify-center z-[10000]"
            aria-label="Spoedservice - Bel nu"
          >
            <Phone size={22} className="animate-pulse" />
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className={cn("transition-colors relative w-10 h-10 flex items-center justify-center z-[10000] text-slate-900")}
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
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuBgVariants}
            className="lg:hidden fixed inset-0 z-[100] bg-white flex flex-col h-screen w-screen overflow-hidden"
          >
            {/* Background Header Spacer to keep spacing during transition */}
            <div className={`container mx-auto px-6 transition-all duration-500 flex justify-between items-center ${isScrolled ? 'py-4' : 'py-8'}`}>
              <div className="h-8 md:h-10 w-auto"></div>
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
                    className="text-slate-900 text-4xl md:text-6xl font-heading hover:text-brand-green transition-colors tracking-tighter flex justify-between items-center group"
                  >
                    DIENSTEN
                    <ChevronDown size={32} className={`transition-transform duration-300 text-slate-900 ${activeDropdown === 'diensten-mobile' ? 'rotate-180' : ''}`} />
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
                            className="flex items-center gap-4 text-slate-900 text-xl font-heading hover:text-brand-green transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
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
                      className="text-4xl md:text-6xl font-heading text-slate-900 hover:text-brand-green transition-colors tracking-tighter uppercase flex items-center gap-4"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <div className="flex flex-col gap-6 mt-12 pb-12">
                  <motion.div variants={itemVariants}>
                    <PrimaryFlipButton
                      label="Offerte aanvragen"
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
                        <motion.span
                          animate={{
                            color: ['#ef4444', '#f87171', '#ef4444']
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="font-bold text-xs uppercase tracking-[0.2em] whitespace-nowrap"
                        >
                          LEKKAGE MELDEN
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={itemVariants} className="mt-auto pb-12 pt-10 border-t border-slate-100">
                  <p className="text-slate-900 text-[10px] uppercase tracking-widest font-bold mb-4">Neem contact op</p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                    <a
                      href="tel:+31637158612"
                      className="flex items-center gap-2 text-slate-900 hover:text-brand-green transition-colors"
                    >
                      <Phone size={16} className="text-brand-green" />
                      <span className="text-sm font-medium">Jan: +31 6 37158612</span>
                    </a>
                    <a
                      href="tel:+31613731303"
                      className="flex items-center gap-2 text-slate-900 hover:text-brand-green transition-colors"
                    >
                      <Phone size={16} className="text-brand-green" />
                      <span className="text-sm font-medium">Tommie: +31 6 13731303</span>
                    </a>
                  </div>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
