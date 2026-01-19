import React from 'react';
import { Mail, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PrimaryFlipButton } from '@/components/buttons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Dakinspectie', href: '/dakinspectie' },
    { name: 'Dakonderhoud', href: '/dakonderhoud' },
    { name: 'Dakrenovatie', href: '/dakrenovatie' },
    { name: 'Dakbedekking Vervangen', href: '/dakbedekking-vervangen' },
    { name: 'EPDM Dakbedekking', href: '/epdm-dakbedekking' },
  ];

  const navigation = [
    { name: 'Over Ons', href: '/over-ons' },
    { name: 'Onze Projecten', href: '/projecten' },
    { name: 'Spoedservice 24/7', href: '/spoedservice' },
    { name: 'Contact Opnemen', href: '/contact' },
  ];

  const resources = [
    { name: 'Blog', href: '#' },
    { name: 'Carrière', href: '#' },
    { name: 'Privacybeleid', href: '#' },
    { name: 'Algemene Voorwaarden', href: '#' },
  ];

  const social = [
    { name: 'Instagram', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Twitter', href: '#' },
  ];

  const galleryImages = [
    '/images/roof_gallery_1.png',
    '/images/roof_gallery_2.png',
    '/images/roof_gallery_3.png',
    '/images/roof_gallery_4.png',
  ];

  return (
    <footer className="relative bg-black min-h-screen flex flex-col overflow-hidden">
      {/* Top Section with Background Image */}
      <div className="relative h-[45vh] lg:h-[45vh] w-full flex flex-col justify-end overflow-hidden">
        <img
          src="/images/footer_bg_roofing.png"
          alt="Modern Roofing"
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] brightness-[0.4] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="relative container mx-auto px-6 h-full flex flex-col justify-end pb-12 lg:pb-16 pt-24">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
            <div className="max-w-3xl text-left">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-white text-4xl md:text-5xl lg:text-7xl font-heading font-medium leading-[0.85] tracking-tighter uppercase mb-8"
              >
                KLAAR VOOR EEN <br />
                <span className="text-brand-green italic">DUURZAAM</span> DAK?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-white/60 text-lg border-l border-brand-green pl-6 max-w-md font-light hidden md:block"
              >
                Uw dak is onze passie. Samen realiseren we een resultaat dat staat als een huis.
              </motion.p>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-8 pb-2">
              <div className="text-left lg:text-right">
                <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-black block mb-2">LOCATIE</span>
                <address className="text-white/60 not-italic text-sm lg:text-base border-r-0 lg:border-r lg:pr-4 border-brand-green/30">
                  Amsterdam, Nederland<br />
                  Business Center Noord
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow container mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-16 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-10 group">
              <img
                src="/images/feigro-logo-wit.png"
                alt="FEIGRO"
                className="h-10 w-auto group-hover:brightness-125 transition-all"
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-[260px]">
              Kwaliteit die generaties lang meegaat. Uw vertrouwde specialist in dakwerken door heel Nederland.
            </p>
            <div className="flex gap-3">
              {['Instagram', 'Facebook'].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-white/40 text-[10px] font-bold hover:bg-brand-green hover:text-black hover:border-brand-green transition-all"
                >
                  {name.substring(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-8">
            <h4 className="text-brand-green text-[10px] uppercase tracking-[0.3em] font-black">DIENSTEN</h4>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white/60 hover:text-white transition-colors text-sm font-medium flex items-center group">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-brand-green mr-0 group-hover:mr-2 transition-all"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-brand-green text-[10px] uppercase tracking-[0.3em] font-black">ONTDEK</h4>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white/60 hover:text-white transition-colors text-sm font-medium flex items-center group">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-brand-green mr-0 group-hover:mr-2 transition-all"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-brand-green text-[10px] uppercase tracking-[0.3em] font-black">SUPPORT</h4>
            <ul className="space-y-4">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white/60 hover:text-white transition-colors text-sm font-medium flex items-center group">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-brand-green mr-0 group-hover:mr-2 transition-all"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-brand-green text-[10px] uppercase tracking-[0.3em] font-black">FOTOGALERIJ</h4>
            <div className="grid grid-cols-2 gap-3">
              {galleryImages.map((src, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
                  className="aspect-square rounded-xl overflow-hidden bg-white/5 border border-white/10 group cursor-pointer relative"
                >
                  <img
                    src={src}
                    alt={`Project ${idx + 1}`}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ArrowUpRight className="text-black w-5 h-5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="container mx-auto px-6">
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-medium">
              © {currentYear} FEIGRO DAKWERKEN
            </p>
            <div className="flex gap-4">
              <a href="mailto:info@feigro.nl" className="text-white/50 text-xs hover:text-brand-green transition-colors">info@feigro.nl</a>
              <a href="tel:+31612345678" className="text-white/50 text-xs hover:text-brand-green transition-colors">+31 (0) 6 123 456 78</a>
            </div>
          </div>

          <div className="flex items-center gap-3 group">
            <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-medium group-hover:text-white/50 transition-colors">MADE BY</span>
            <a
              href="https://www.nieuwblik.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[10px] uppercase tracking-[0.4em] font-black hover:text-brand-green transition-all"
            >
              NIEUWBLIK
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
