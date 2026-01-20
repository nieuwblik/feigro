import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, Zap, Shield, CheckCircle } from 'lucide-react';
import { PrimaryFlipButton } from '@/components/buttons';
import { SEO } from '@/components/SEO';
import { seoMetadata } from '@/data/seo-metadata';
import { FadeIn, ParallaxImage } from '@/components/ui/ParallaxImage';

export default function Spoedservice() {
  const containerRef = React.useRef<HTMLElement>(null);

  const features = [
    {
      icon: Clock,
      title: '24/7 Bereikbaar',
      description: 'Dag en nacht, ook in het weekend en op feestdagen staan we klaar voor spoedgevallen.',
    },
    {
      icon: Zap,
      title: 'Snelle Respons',
      description: 'Wij streven ernaar binnen 2-4 uur ter plaatse te zijn bij acute daklekkages.',
    },
    {
      icon: Shield,
      title: 'Direct Actie',
      description: 'Noodreparatie om verdere waterschade aan uw woning direct te voorkomen.',
    },
    {
      icon: Phone,
      title: 'Expert Advies',
      description: 'Ervaren dakspecialisten die direct weten wat er moet gebeuren om uw dak te redden.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Bel Direct',
      description: 'Bel ons spoednummer en beschrijf de situatie. Onze adviseurs staan 24/7 klaar.',
    },
    {
      number: '02',
      title: 'Snelle Respons',
      description: 'Een monteur komt met spoed naar uw locatie in Noord-Holland (West-Friesland) en omstreken.',
    },
    {
      number: '03',
      title: 'Noodreparatie',
      description: 'We stoppen de lekkage direct om de schade aan uw interieur te beperken.',
    },
    {
      number: '04',
      title: 'Definitieve Oplossing',
      description: 'We plannen direct een afspraak for de definitieve en duurzame reparatie.',
    },
  ];

  return (
    <div className="w-full bg-white">
      <SEO {...seoMetadata.spoedservice} />

      {/* Hero */}
      <section ref={containerRef} className="bg-black pt-24 pb-16 md:pt-40 md:pb-20 relative overflow-hidden h-screen flex items-center">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
            alt="Daklekkage spoed"
            speed={56}
            containerClassName="w-full h-full"
            className="opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-left">
          <FadeIn scale={0.9}>
            <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest">SPOEDSERVICE ACTIEF</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-heading tracking-tighter leading-none mb-8 uppercase">
              Acute Lekkage? <br /><span className="text-brand-green italic">Bel Direct</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/60 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed mb-8 md:mb-10 font-light">
              Heeft u een daklekkage of andere acute dakproblemen? Aarzel niet. Onze specialisten zijn binnen enkele uren ter plaatse om uw woning te beschermen.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <PrimaryFlipButton
              label="Nu direct bellen"
              size="default"
              icon={<Phone />}
              onClick={() => window.location.href = 'tel:+31612345678'}
            />
          </FadeIn>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/5 blur-[120px] rounded-full translate-x-1/4 -z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-green/5 blur-[150px] rounded-full -translate-x-1/4 translate-y-1/4 -z-0"></div>
      </section>

      {/* Features Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <FadeIn key={index} delay={index * 0.05} distance={20}>
                  <div className="bg-white border border-slate-200 rounded-[1.25rem] p-10 hover:border-brand-green/30 transition-all duration-300 group select-none hover:-translate-y-2 h-full">
                    <div className="mb-10 text-brand-green group-hover:scale-[1.15] transition-transform duration-300">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-heading text-slate-900 mb-4 uppercase">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm font-light">
                      {feature.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <div>
              <h2 className="text-4xl md:text-7xl font-heading text-slate-900 mb-6 uppercase tracking-tighter">Onze <span className="text-brand-green italic">Werkwijze</span> bij Spoed</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto uppercase tracking-widest font-bold opacity-40">Van melding tot oplossing</p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Progress Line */}
            <div className="hidden lg:block absolute top-[40px] left-[12.5%] right-[12.5%] h-[2px] bg-slate-200 overflow-hidden z-0">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.8, ease: "linear" }}
                className="w-full h-full bg-brand-green origin-left"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {steps.map((step, index) => (
                <FadeIn key={index} delay={index * 0.1} distance={30} className="relative flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-full border-2 border-brand-green flex items-center justify-center text-brand-green font-heading text-2xl mb-8 group-hover:bg-brand-green group-hover:text-black group-hover:scale-110 transition-all duration-500 bg-white z-10">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-heading text-slate-900 mb-4 uppercase tracking-tighter group-hover:text-brand-green transition-colors">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-light">{step.description}</p>
                  <div className="lg:hidden w-[2px] h-12 bg-gradient-to-b from-brand-green to-transparent mt-8 last:hidden opacity-20"></div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Do Checklist */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn scale={0.98} className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-[2rem] p-12 md:p-20 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading text-slate-900 mb-12 text-center uppercase tracking-tighter">
                Wat te doen bij <span className="text-red-500 italic">Lekkage?</span>
              </h2>
              <div className="grid gap-6">
                {[
                  { title: 'Bel onze spoedservice', desc: '+31 6 1234 5678 - 24/7 Bereikbaar' },
                  { title: 'Plaats emmers/bakken', desc: 'Direct onder het lek om waterschade te beperken' },
                  { title: 'Bescherm eigendommen', desc: 'Verplaats meubels and elektronica uit de buurt' },
                  { title: 'Maak foto\'s de schade', desc: 'Belangrijk voor uw opstal- of inboedelverzekering' },
                  { title: 'Ga niet zelf het dak op', desc: 'In de regen is een dak extreem glad and onveilig' }
                ].map((item, i) => (
                  <FadeIn key={i} delay={i * 0.05} direction="left" distance={20}>
                    <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-100 hover:border-brand-green/20 transition-all select-none">
                      <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center mt-1 shrink-0">
                        <CheckCircle size={14} className="text-brand-green" />
                      </div>
                      <div>
                        <h4 className="text-slate-900 font-bold mb-1 tracking-tight uppercase">{item.title}</h4>
                        <p className="text-slate-500 text-sm font-light">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 blur-[100px]"></div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
