import React, { useRef } from 'react';
import { Mail, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);

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

  const socialLinks = [
    { name: 'Instagram', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Youtube', href: '#' },
  ];

  const galleryImages = [
    '/images/roof_gallery_1.png',
    '/images/roof_gallery_2.png',
    '/images/roof_gallery_3.png',
    '/images/roof_gallery_4.png',
  ];

  return (
    <footer ref={footerRef} className="relative bg-black min-h-screen flex flex-col overflow-hidden">
      {/* Top Section with Background Image */}
      <div className="relative h-[45vh] lg:h-[45vh] w-full flex flex-col justify-end overflow-hidden">
        <motion.img
          src="/images/footer_bg_roofing.png"
          alt="Modern Roofing"
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] brightness-[0.4] scale-110"
          style={{ y: backgroundY }}
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
      <div className="flex-grow container mx-auto px-6 py-12 lg:py-24">
        {/* Row 1: Link Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-16 lg:gap-12 mb-20 lg:mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-10 group">
              <img
                src="/images/feigro-logo-wit.png"
                alt="FEIGRO"
                className="h-10 w-auto group-hover:brightness-125 transition-all"
              />
            </Link>
          </div>

          <div>
            <h4 className="text-white text-[11px] uppercase tracking-[0.2em] font-bold mb-8">DIENSTEN</h4>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white/50 hover:text-white transition-colors text-sm font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[11px] uppercase tracking-[0.2em] font-bold mb-8">ONTDEK</h4>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white/50 hover:text-white transition-colors text-sm font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[11px] uppercase tracking-[0.2em] font-bold mb-8">SUPPORT</h4>
            <ul className="space-y-4">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white/50 hover:text-white transition-colors text-sm font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[11px] uppercase tracking-[0.2em] font-bold mb-8">SOCIAL MEDIA</h4>
            <ul className="space-y-4">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-white/50 hover:text-white transition-colors text-sm font-medium">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Row 2: Contact on left, Photos on right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-12">
          {/* Contact Column (aligned with logo) */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h4 className="text-white text-[11px] uppercase tracking-[0.2em] font-bold mb-8">CONTACT</h4>
              <div className="space-y-6">
                <div>
                  <a href="mailto:info@feigro.nl" className="text-white/50 hover:text-white transition-colors text-sm font-medium block">info@feigro.nl</a>
                </div>
                <div>
                  <a href="tel:+31612345678" className="text-white/50 hover:text-white transition-colors text-sm font-medium block">+31 (0) 6 123 456 78</a>
                </div>
              </div>
            </div>
          </div>

          {/* Photos Row (next 4 columns) */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className="aspect-[4/5] md:aspect-[5/6] rounded-xl overflow-hidden bg-white/5 border border-white/5"
              >
                <img
                  src={src}
                  alt={`Project ${idx + 1}`}
                  className="w-full h-full object-cover grayscale-[0.2]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar Row */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-medium">
            © {currentYear} FEIGRO DAKWERKEN — ALLE RECHTEN VOORBEHOUDEN
          </p>

          <div className="flex items-center gap-3">
            <span className="text-white/20 text-[9px] uppercase tracking-[0.3em] font-medium">MADE BY</span>
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
