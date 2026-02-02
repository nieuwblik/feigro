import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PrimaryFlipButton } from '@/components/buttons';
import { seoMetadata } from '@/data/seo-metadata';
import { ParallaxImage } from '@/components/ui/ParallaxImage';
import imgHero from '@/assets/dakreparatie-nederland-enkhuizen.jpg';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Bedankt! We hebben uw bericht ontvangen.');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="w-full bg-white">
      <SEO {...seoMetadata.contact} />

      {/* Hero */}
      <section className="bg-black pt-24 pb-16 md:pt-40 md:pb-20 relative overflow-hidden h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ParallaxImage src={imgHero} alt="Contact" speed={80} containerClassName="w-full h-full" className="opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-[1] text-left">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="w-12 h-[2px] bg-brand-green"></div>
            <span className="text-brand-green font-bold text-xs uppercase tracking-widest">Contact</span>
          </motion.div>
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.1
        }} className="text-white text-3xl md:text-4xl lg:text-5xl font-heading tracking-tighter leading-none mb-6 md:mb-10 uppercase">
            Laten we <br /><span className="text-brand-green italic">Praten</span>
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="text-white/70 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed font-light mb-8 md:mb-10">
            Vragen, advies of een offerte? Ons team staat klaar om u te helpen.
            Eerlijk advies en een eerlijke prijs.
            <span className="block mt-3 text-white/50 text-sm">
              Werkzaam in Noord-Holland, Flevoland en Utrecht.
            </span>
          </motion.p>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3
        }}>
            <PrimaryFlipButton label="Vraag offerte aan" icon={<Phone size={18} />} size="default" onClick={() => {
            const el = document.getElementById('contact-form');
            el?.scrollIntoView({
              behavior: 'smooth'
            });
          }} />
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 blur-[120px] rounded-full translate-x-1/4 -z-0"></div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 md:py-28 lg:py-36 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-28">
            {/* Left Column: Info */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-slate-900 mb-8 md:mb-10 tracking-tight uppercase">Onze <span className="text-brand-green italic">Gegevens</span></h2>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 md:mb-14 font-light">
                  U kunt ons direct bellen for spoed of mailen for algemene vragen.
                  We reageren doorgaans binnen één werkdag.
                </p>
              </div>

              <div className="grid gap-8 md:gap-10">
                {/* Direct Contact - Jan & Tommie */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a href="tel:+31637158612" className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-brand-green/30 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-brand-green transition-all duration-300 shrink-0">
                      <Phone size={20} className="text-brand-green group-hover:text-black transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-slate-400 text-[9px] uppercase tracking-widest font-bold mb-1">Jan Groen</p>
                      <span className="text-base md:text-lg text-slate-900 font-heading group-hover:text-brand-green transition-colors uppercase tracking-tight">+31 6 37158612</span>
                    </div>
                  </a>
                  <a href="tel:+31613731303" className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-brand-green/30 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-brand-green transition-all duration-300 shrink-0">
                      <Phone size={20} className="text-brand-green group-hover:text-black transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-slate-400 text-[9px] uppercase tracking-widest font-bold mb-1">Tommie Feitsma</p>
                      <span className="text-base md:text-lg text-slate-900 font-heading group-hover:text-brand-green transition-colors uppercase tracking-tight">+31 6 13731303</span>
                    </div>
                  </a>
                </div>

                {/* Other Contact Info */}
                {[{
                icon: Mail,
                label: 'Email',
                value: 'info@feigro.nl',
                sub: 'Voor offertes en advies',
                href: 'mailto:info@feigro.nl'
              }, {
                icon: MapPin,
                label: 'Locatie',
                value: 'Noord-Holland, Flevoland & Utrecht',
                sub: 'Actief in de Randstad',
                href: '#'
              }, {
                icon: Clock,
                label: 'Werktijden',
                value: '08:00 - 18:00',
                sub: 'Weekend op afspraak',
                href: '#'
              }].map((item, i) => <div key={i} className="flex items-center gap-4 md:gap-6 group select-none">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-brand-green transition-all duration-300 shrink-0">
                      <item.icon size={20} className="text-brand-green group-hover:text-black transition-colors md:hidden" />
                      <item.icon size={24} className="text-brand-green group-hover:text-black transition-colors hidden md:block" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-slate-400 text-[9px] md:text-[10px] uppercase tracking-widest font-bold mb-1">{item.label}</p>
                      <a href={item.href} className="text-base md:text-xl text-slate-900 font-heading hover:text-brand-green transition-colors uppercase tracking-tight break-words">{item.value}</a>
                      <p className="text-slate-400 text-[10px] md:text-xs mt-1 font-light">{item.sub}</p>
                    </div>
                  </div>)}
              </div>

              <div className="p-8 md:p-12 bg-slate-50 border border-slate-200 rounded-xl md:rounded-[1.5rem]">
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <CheckCircle className="text-brand-green w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-slate-900 font-bold tracking-tight uppercase text-sm md:text-base">Gecertificeerd Vakmanschap</span>
                </div>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-light">
                  Al onze medewerkers zijn VCA-gecertificeerd en werken volgens de strengste veiligheidsnormen.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="relative">
              <div className="bg-slate-50 border border-slate-200 p-8 md:p-12 lg:p-16 rounded-xl md:rounded-[2rem] relative z-10 select-none" id="contact-form">
                <h3 className="text-2xl md:text-3xl font-heading text-slate-900 mb-8 md:mb-10 uppercase tracking-tighter">Stuur een <span className="text-brand-green italic">Bericht</span></h3>
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2">
                      <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-3 md:ml-4">Naam</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Uw naam" required className="w-full bg-white border border-slate-200 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-brand-green transition-colors text-sm md:text-base" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-3 md:ml-4">Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="uw@email.nl" required className="w-full bg-white border border-slate-200 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-brand-green transition-colors text-sm md:text-base" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-3 md:ml-4">Onderwerp</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Waar gaat het over?" required className="w-full bg-white border border-slate-200 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-brand-green transition-colors text-sm md:text-base" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-3 md:ml-4">Bericht</label>
                    <textarea rows={5} name="message" value={formData.message} onChange={handleChange} placeholder="Uw bericht..." required className="w-full bg-white border border-slate-200 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-brand-green transition-colors resize-none text-sm md:text-base"></textarea>
                  </div>

                  <div className="pt-4">
                    <PrimaryFlipButton label="Verstuur bericht" icon={<Send size={18} />} className="w-full" onClick={() => {}} // Form handles submit
                  />
                  </div>
                </form>
              </div>
              {/* Background Blur */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-green/10 blur-[100px] -z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>;
}