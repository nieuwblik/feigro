import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn, ParallaxImage } from '@/components/ui/ParallaxImage';
import footerImg1 from '@/assets/dakrenovatie-noordholland.jpg';
import footerImg2 from '@/assets/dakdekking-nederland-enkhuizen.jpg';
import footerImg3 from '@/assets/Lekkage-Feitsma.jpg';
import footerImg4 from '@/assets/dak-valbeveiliging-montage.jpg';

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
    footerImg1,
    footerImg2,
    footerImg3,
    footerImg4,
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
              <FadeIn>
                <h2 className="text-white text-4xl md:text-5xl lg:text-7xl font-heading font-medium leading-[0.85] tracking-tighter uppercase mb-8">
                  KLAAR VOOR EEN <br />
                  <span className="text-brand-green italic">DUURZAAM</span> DAK?
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-white/60 text-lg border-l border-brand-green pl-6 max-w-md font-light hidden md:block">
                  Uw dak is onze passie. Samen realiseren we een resultaat dat staat als een huis.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} className="flex flex-col items-start lg:items-end gap-8 pb-2">
              <div className="text-left lg:text-right">
                <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-black block mb-2">LOCATIE</span>
                <address className="text-white/60 not-italic text-sm lg:text-base border-r-0 lg:border-r lg:pr-4 border-brand-green/30">
                  Noord-Holland<br />
                  West-Friesland
                </address>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow container mx-auto px-6 py-12 lg:py-24">
        {/* Row 1: Link Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-16 lg:gap-12 mb-20 lg:mb-24">
          {/* Brand Column */}
          <FadeIn className="lg:col-span-1">
            <Link to="/" className="inline-block mb-10 group">
              <img
                src="/images/feigro-logo-wit.png"
                alt="FEIGRO"
                className="h-10 w-auto group-hover:brightness-125 transition-all"
              />
            </Link>
          </FadeIn>

          {[
            { title: 'DIENSTEN', items: services },
            { title: 'ONTDEK', items: navigation },
            { title: 'SUPPORT', items: resources },
            { title: 'SOCIAL MEDIA', items: socialLinks }
          ].map((col, i) => (
            <FadeIn key={col.title} delay={i * 0.05}>
              <div>
                <h4 className="text-white text-[11px] uppercase tracking-[0.2em] font-bold mb-8">{col.title}</h4>
                <ul className="space-y-4">
                  {col.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={'href' in item ? (item as any).href : '#'}
                        className="text-white/50 hover:text-white transition-colors text-sm font-medium"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Row 2: Contact on left, Photos on right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-12">
          {/* Contact Column (aligned with logo) */}
          <FadeIn className="lg:col-span-1 space-y-12">
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
          </FadeIn>

          {/* Photos Row (next 4 columns) */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((src, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} distance={20} className="parallax-fast" style={{ '--parallax-speed': (0.05 + idx * 0.02) } as any}>
                <div className="aspect-[4/5] md:aspect-[5/6] rounded-xl overflow-hidden bg-white/5 border border-white/5 h-full">
                  <ParallaxImage
                    src={src}
                    alt={`Project ${idx + 1}`}
                    speed={30}
                    containerClassName="h-full w-full"
                    className="grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Bottom Bar Row */}
        <FadeIn className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
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
        </FadeIn>
      </div>
    </footer>
  );
};
