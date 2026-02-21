import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FadeIn, ParallaxImage } from '@/components/ui/ParallaxImage';

import footerImg1 from '@/assets/dakrenovatie-noordholland.webp';
import footerImg2 from '@/assets/dakdekking-nederland-enkhuizen.webp';
import footerImg3 from '@/assets/dakdekker-werk.webp';
import footerImg4 from '@/assets/dak-valbeveiliging-montage.webp';
import feigroLogoKleur from '@/assets/feigro-logo-kleur-nieuw.png';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);
  const services = [{
    name: 'Dakinspectie',
    href: '/dakinspectie'
  }, {
    name: 'Dakonderhoud',
    href: '/dakonderhoud'
  }, {
    name: 'Dakrenovatie',
    href: '/dakrenovatie'
  }, {
    name: 'Daklekkage',
    href: '/daklekkage'
  }, {
    name: 'Valbeveiliging',
    href: '/valbeveiliging'
  }, {
    name: 'VVE & Vastgoedbeheer',
    href: '/vve-vastgoedbeheer'
  }];
  const navigation = [{
    name: 'Over Ons',
    href: '/over-ons'
  }, {
    name: 'Onze Projecten',
    href: '/projecten'
  }, {
    name: 'Lekkage melden',
    href: '/spoedservice'
  }, {
    name: 'Contact Opnemen',
    href: '/contact'
  }];
  const resources = [{
    name: 'Dakdekkers Nieuws',
    href: '/nieuws'
  }, {
    name: 'Vacatures',
    href: '/vacatures'
  }, {
    name: 'Privacy en Cookiebeleid',
    href: '/cookies'
  }];
  const socialLinks = [{
    name: 'Instagram',
    href: '#'
  }, {
    name: 'Facebook',
    href: '#'
  }, {
    name: 'LinkedIn',
    href: '#'
  }];
  const galleryImages = [footerImg1, footerImg2, footerImg3, footerImg4];
  return <footer ref={footerRef} className="relative bg-white flex flex-col overflow-hidden">
    {/* Top Section with Background Image */}
    <div className="relative min-h-[500px] md:h-[60vh] w-full flex flex-col justify-center overflow-hidden">
      <motion.img src="/images/footer_bg_roofing.png" alt="Modern Roofing" className="absolute inset-0 w-full h-full object-cover brightness-[0.45] scale-110" style={{
        y: backgroundY
      }} />

      <div className="relative container mx-auto px-4 md:px-6 z-10 py-12 md:py-20 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <div className="max-w-3xl text-left">
            <FadeIn>
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-medium leading-[0.85] tracking-tighter uppercase mb-6 md:mb-10 lg:text-7xl">
                KLAAR VOOR EEN <br />
                <span className="text-brand-green italic">DUURZAAM</span> DAK?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-white/70 text-sm md:text-lg border-l border-brand-green pl-4 md:pl-6 max-w-md font-light hidden md:block mb-8">
                Uw dak is onze passie. Samen realiseren we een resultaat dat staat als een huis.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col gap-4">
                <Link to="/contact" className="text-white hover:text-brand-green transition-colors text-sm md:text-base font-medium flex items-center gap-2">
                  Neem contact op <ArrowRight size={16} />
                </Link>
                <a href="tel:+31613731303" className="text-white/60 hover:text-brand-green transition-colors text-xs md:text-sm">
                  Feigro: +31 6 13731303
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} className="flex flex-col items-start lg:items-end gap-8 pb-2">
            <div className="text-left lg:text-right">
              <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-black block mb-2">LOCATIE</span>
              <address className="text-white/60 not-italic text-sm lg:text-base border-r-0 lg:border-r lg:pr-4 border-brand-green/30">
                Noord-Holland<br />
                Utrecht<br />
                Flevoland
              </address>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>

    {/* Main Content Area */}
    <div className="flex-grow container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-28">
      {/* Row 1: Logo and Link Columns */}
      <div className="flex flex-col gap-10 mb-20 md:mb-24">
        {/* Brand Column */}
        <FadeIn>
          <Link to="/" className="inline-block mb-2 group">
            <img src={feigroLogoKleur} alt="FEIGRO" className="h-8 md:h-10 w-auto group-hover:opacity-80 transition-all" />
          </Link>
        </FadeIn>

        <div className="grid grid-cols-2 lg:flex lg:justify-between gap-y-12 lg:gap-y-0 gap-x-10">
          {[{
            title: 'DIENSTEN',
            items: services
          }, {
            title: 'ONTDEK',
            items: navigation
          }, {
            title: 'SUPPORT',
            items: resources
          }, {
            title: 'SOCIAL MEDIA',
            items: socialLinks
          }].map((col, i) => <FadeIn key={col.title} delay={0.1 + i * 0.05} className="w-full lg:w-auto">
            <div className="text-left">
              <h4 className="text-slate-900 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold mb-8 md:mb-10">{col.title}</h4>
              <ul className="space-y-3 md:space-y-4">
                {col.items.map(item => <li key={item.name}>
                  <Link to={item.href} className="text-slate-500 hover:text-brand-green transition-colors text-xs md:text-sm font-medium">
                    {item.name}
                  </Link>
                </li>)}
              </ul>
            </div>
          </FadeIn>)}
        </div>
      </div>

      {/* Row 2: Contact info on left, Photos on right */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-12 pt-16 md:pt-24">
        {/* Contact Section (Spans 3 columns to align with Logo/Services/Explore) */}
        <FadeIn className="lg:col-span-3" delay={0.3}>
          <h4 className="text-slate-900 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold mb-8 md:mb-10 text-left">CONTACT</h4>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-8">
            {/* Row 1: Algemeen & Spoed */}
            <div>
              <span className="text-slate-400 text-[9px] uppercase tracking-[0.2em] font-bold block mb-2">Algemeen</span>
              <a href="mailto:info@feigro.nl" className="text-slate-500 hover:text-brand-green transition-colors text-xs md:text-sm font-medium block">info@feigro.nl</a>
            </div>
            <div>
              <span className="text-slate-400 text-[9px] uppercase tracking-[0.2em] font-bold block mb-2">Spoed & Service</span>
              <a href="mailto:service@feigro.nl" className="text-slate-500 hover:text-brand-green transition-colors text-xs md:text-sm font-medium block">service@feigro.nl</a>
            </div>

            {/* Row 2: Facturatie */}
            <div>
              <span className="text-slate-400 text-[9px] uppercase tracking-[0.2em] font-bold block mb-2">Facturatie</span>
              <a href="mailto:facturen@feigro.nl" className="text-slate-500 hover:text-brand-green transition-colors text-xs md:text-sm font-medium block">facturen@feigro.nl</a>
            </div>

            {/* Row 3: Direct Contact Links */}
            <div>
              <span className="text-slate-400 text-[9px] uppercase tracking-[0.2em] font-bold block mb-2">FEIGRO Dakwerken</span>
              <a href="tel:+31613731303" className="text-slate-500 hover:text-brand-green transition-colors text-xs md:text-sm font-medium block">+31 6 13731303</a>
              <a href="mailto:info@feigro.nl" className="text-slate-500 hover:text-brand-green transition-colors text-[11px] font-medium block mt-1">info@feigro.nl</a>
            </div>
          </div>
        </FadeIn>

        {/* Photos Grid (Spans 2 columns, bottom right) */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-3 md:gap-4 h-fit lg:mt-0">
          {galleryImages.map((src, idx) => <FadeIn key={idx} delay={0.4 + idx * 0.1} distance={20} className="parallax-fast" style={{
            '--parallax-speed': 0.05 + idx * 0.02
          } as any}>
            <div className="aspect-square rounded-lg md:rounded-xl overflow-hidden bg-white border border-slate-100 h-full shadow-sm">
              <ParallaxImage src={src} alt={`Project ${idx + 1}`} speed={30} containerClassName="h-full w-full" className="transition-all duration-700" />
            </div>
          </FadeIn>)}
        </div>
      </div>

      {/* Bottom Bar Row */}
      <FadeIn className="mt-12 md:mt-24 pt-6 md:pt-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
        <p className="text-slate-400 text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium text-center md:text-left">
          © {currentYear} FEIGRO DAKWERKEN — ALLE RECHTEN VOORBEHOUDEN
        </p>

        <div className="flex items-center gap-2 md:gap-3">
          <span className="text-slate-300 text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium">MADE BY</span>
          <a href="https://www.nieuwblik.com" target="_blank" rel="noopener noreferrer" className="text-slate-900 text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-black hover:text-brand-green transition-all">
            NIEUWBLIK
          </a>
        </div>
      </FadeIn>
    </div>
  </footer>;

};