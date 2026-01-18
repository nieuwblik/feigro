import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, Settings, Hammer, Layers, Flame, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { InversedFlipButton, PrimaryFlipButton } from '@/components/buttons';
import { Link, useLocation } from 'react-router-dom';

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
      name: 'Dakinspectie',
      href: '/dakinspectie',
      desc: 'Grondige controle van uw dakconditie.',
      icon: <Search size={20} className="text-brand-green" />,
      badge: 'Populair'
    },
    {
      name: 'Dakonderhoud',
      href: '/dakonderhoud',
      desc: 'Voorkom schade door tijdig onderhoud.',
      icon: <Settings size={20} className="text-brand-green" />
    },
    {
      name: 'Dakrenovatie',
      href: '/dakrenovatie',
      desc: 'Complete vernieuwing van uw dak.',
      icon: <Hammer size={20} className="text-brand-green" />
    },
    {
      name: 'Dakbedekking Vervangen',
      href: '/dakbedekking-vervangen',
      desc: 'Nieuwe toplaag voor jarenlange bescherming.',
      icon: <Layers size={20} className="text-brand-green" />
    },
    {
      name: 'Bitumen Dakbedekking',
      href: '/bitumen-dakbedekking',
      desc: 'Specialist in bitumineuze daken.',
      icon: <Flame size={20} className="text-brand-green" />
    },
    {
      name: 'EPDM Dakbedekking',
      href: '/epdm-dakbedekking',
      desc: 'Duurzame rubberen dakbedekking.',
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
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const Logo = () => (
    <Link to="/" className="flex items-center gap-3 group cursor-pointer" onClick={() => setIsMenuOpen(false)}>
      <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center shadow-lg shadow-brand-green/20 group-hover:scale-110 transition-transform">
        <span className="text-black font-bold text-xl">F</span>
      </div>
      <div className="flex flex-col text-left">
        <span className="text-white font-heading text-xl tracking-tight leading-none uppercase">FEIGRO</span>
        <span className="text-brand-green font-semibold text-[9px] uppercase tracking-[0.25em] mt-1">Dakwerken</span>
      </div>
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
            <button className="flex items-center gap-1.5 text-white/90 hover:text-brand-green transition-colors text-[10px] font-bold uppercase tracking-widest outline-none py-2">
              Diensten
              <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'diensten' ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === 'diensten' && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-2"
                >
                  <div className="flex flex-col gap-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="group flex items-center gap-4 px-4 py-3 hover:bg-white/5 rounded-2xl transition-all"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-green/20 transition-colors shrink-0">
                          {service.icon}
                        </div>
                        <div className="flex flex-col flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-white font-bold text-[12px] uppercase tracking-wide group-hover:text-brand-green transition-colors">
                              {service.name}
                            </span>
                            {service.badge && (
                              <span className="text-[9px] bg-brand-green/20 text-brand-green px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                                {service.badge}
                              </span>
                            )}
                          </div>
                          <span className="text-white/40 text-[10px] font-medium leading-tight mt-0.5">
                            {service.desc}
                          </span>
                        </div>
                      </Link>
                    ))}
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
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                              {service.icon}
                            </div>
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Link
                      to={link.href}
                      className={`text-4xl md:text-6xl font-heading hover:text-brand-green transition-colors tracking-tighter uppercase flex items-center gap-4 ${link.isEmergency ? 'text-red-500' : 'text-white'
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.isEmergency && <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />}
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div variants={itemVariants} className="mt-12">
                  <PrimaryFlipButton
                    label="Offerte Aanvragen"
                    onClick={() => { setIsMenuOpen(false); window.location.href = '/contact'; }}
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
