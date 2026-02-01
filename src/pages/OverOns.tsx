import React from 'react';
import { CheckCircle, Users, Award, Heart, ArrowRight } from 'lucide-react';
import { PrimaryFlipButton } from '@/components/buttons';
import { SEO } from '@/components/SEO';
import { seoMetadata } from '@/data/seo-metadata';
import { FadeIn, ParallaxImage } from '@/components/ui/ParallaxImage';
import imgHero from '@/assets/dakrenovatie-noordholland.jpg';
import imgStory from '@/assets/lekvrij-dak-nederland.jpg';

export default function OverOns() {
  const values = [
    {
      icon: Users,
      title: 'Vakmanschap',
      description: 'Ons team bestaat uit ervaren, gecertificeerde dakdekkers die hun vak door en door kennen.',
    },
    {
      icon: Award,
      title: 'Kwaliteit',
      description: 'We werken uitsluitend met hoogwaardige materialen en leveren gegarandeerd werk van topkwaliteit.',
    },
    {
      icon: Heart,
      title: 'Klantgericht',
      description: 'Uw tevredenheid staat centraal. We denken graag met u mee en leveren maatwerk.',
    },
    {
      icon: CheckCircle,
      title: 'Betrouwbaar',
      description: 'Op ons kunt u rekenen. We houden ons aan afspraken en leveren wat we beloven.',
    },
  ];

  return (
    <div className="w-full">
      <SEO {...seoMetadata.overOns} />

      {/* Hero */}
      <section className="bg-black pt-24 pb-16 md:pt-40 md:pb-20 relative overflow-hidden h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src={imgHero}
            alt="Wie wij zijn"
            speed={80}
            containerClassName="w-full h-full"
            className="opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-left">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="w-12 h-[2px] bg-brand-green"></div>
              <span className="text-brand-green font-bold text-xs uppercase tracking-widest">Wie wij zijn</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-heading tracking-tighter leading-none mb-6 md:mb-10 uppercase">
              Uw Partner in <br /><span className="text-brand-green italic">Dakwerken</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/70 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed font-light mb-8 md:mb-10">
              Met ruim 20 jaar ervaring zijn wij uw vertrouwde partner voor hoogwaardige dakoplossingen. Wij combineren traditioneel vakmanschap met moderne innovatie.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <PrimaryFlipButton
              label="Vraag offerte aan"
              icon={<ArrowRight />}
              size="default"
              onClick={() => window.location.href = '/contact'}
            />
          </FadeIn>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 blur-[120px] rounded-full translate-x-1/4 -z-0"></div>
      </section>

      {/* Company Story */}
      <section className="py-20 md:py-28 lg:py-36 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-28 items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-slate-900 mb-8 md:mb-12 tracking-tight uppercase">
                  Het Verhaal van <span className="text-brand-green italic">Feigro</span>
                </h2>
                <div className="space-y-6 md:space-y-8 text-base md:text-lg text-slate-600 leading-relaxed font-light">
                  <p>
                    Feigro Dakwerken is uw gespecialiseerde dakdekkersbedrijf voor Noord-Holland (West-Friesland).
                    Tommie Feitsma en Jan Groen staan als gezamenlijke eigenaren aan het roer van de organisatie. Met hun gedeelde passie voor het vak
                    en jarenlange ervaring in de dakbedekking, waarborgen zij persoonlijk de kwaliteit en service waar Feigro voor staat.
                  </p>
                  <p>
                    Bij Feigro staat persoonlijk contact centraal. Omdat we korte lijnen hanteren, kunnen we snel schakelen
                    en direct inspelen op uw wensen. Of het nu gaat om het verhelpen van een daklekkage, planmatig onderhoud
                    of een complete dakrenovatie: wij gaan graag het gesprek aan om de beste oplossing voor uw situatie te vinden.
                  </p>
                  <p>
                    Ons team van gediplomeerde en gecertificeerde dakdekkers staat voor kwaliteit, duurzaamheid en betrouwbaarheid.
                    Wij zetten onze passie voor het vak in om u volledig te ontzorgen en een resultaat te leveren waar u jarenlang
                    op kunt bouwen.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn scale={0.95} className="relative aspect-square lg:aspect-video rounded-[1.5rem] overflow-hidden border border-slate-200">
              <ParallaxImage
                src={imgStory}
                alt="Expert roofers at work"
                speed={50}
                containerClassName="h-full w-full"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* De Kracht van Twee - Feitsma + Groen */}
      <section className="py-20 md:py-28 lg:py-36 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12 md:mb-20">
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="w-8 md:w-12 h-[2px] bg-brand-green"></div>
              <span className="text-brand-green font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em]">
                ONZE OORSPRONG
              </span>
              <div className="w-8 md:w-12 h-[2px] bg-brand-green"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-slate-900 leading-[0.9] tracking-tighter uppercase mb-6 md:mb-8">
              De Kracht van <span className="text-brand-green italic">Twee</span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light">
              FEIGRO is ontstaan uit de samenwerking van twee gevestigde dakdekkersbedrijven.
              <span className="font-bold text-slate-900"> FEI</span> = Feitsma en
              <span className="font-bold text-slate-900"> GRO</span> = Groen.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-4xl mx-auto mb-16 md:mb-20">
            {/* Feitsma Card */}
            <FadeIn delay={0.1}>
              <a
                href="https://feitsmadakwerken.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border border-slate-200 rounded-xl md:rounded-[1.25rem] p-6 md:p-8 lg:p-10 hover:border-brand-green/30 hover:-translate-y-2 transition-all duration-300 h-full"
              >
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <span className="text-brand-green font-heading text-xl md:text-2xl font-bold">FEI</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading text-slate-900 uppercase group-hover:text-brand-green transition-colors">
                      Feitsma Dakwerken
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm">feitsmadakwerken.nl</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm md:text-base font-light mb-6 md:mb-8">
                  Onder leiding van Tommie Feitsma heeft dit bedrijf jarenlange expertise opgebouwd in dakwerk en lekkageoplossingen.
                </p>
                <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-slate-400 group-hover:text-brand-green transition-colors">
                  Bezoek Website <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </FadeIn>

            {/* Groen Card */}
            <FadeIn delay={0.2}>
              <a
                href="https://groendakwerken.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border border-slate-200 rounded-xl md:rounded-[1.25rem] p-8 md:p-10 lg:p-12 hover:border-brand-green/30 hover:-translate-y-2 transition-all duration-300 h-full"
              >
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <span className="text-brand-green font-heading text-xl md:text-2xl font-bold">GRO</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading text-slate-900 uppercase group-hover:text-brand-green transition-colors">
                      Groen Dakwerken
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm">groendakwerken.nl</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm md:text-base font-light mb-6 md:mb-8">
                  Jan Groen bracht zijn uitgebreide kennis en ervaring in dakonderhoud en renovatie mee naar deze samenwerking.
                </p>
                <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-slate-400 group-hover:text-brand-green transition-colors">
                  Bezoek Website <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
                Door onze krachten te bundelen bieden wij nu als <span className="font-bold text-brand-green">FEIGRO</span> de beste service in heel West-Friesland.
                Twee bedrijven, één missie: uw dak in topconditie houden.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 lg:py-36 bg-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-left mb-16 md:mb-24">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-slate-900 mb-6 md:mb-8 uppercase tracking-tighter">
                Onze <span className="text-brand-green italic">Kernwaarden</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl font-light">
                De fundamenten waar FEIGRO op gebouwd is.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <FadeIn key={index} delay={index * 0.05} distance={20} className="h-full">
                  <div className="group relative bg-white border border-slate-200 p-8 md:p-10 lg:p-12 rounded-xl md:rounded-[1.25rem] overflow-hidden hover:border-brand-green/30 transition-all duration-300 hover:-translate-y-2 select-none h-full">
                    <div className="relative z-10">
                      <div className="text-brand-green mb-8 md:mb-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center [&>svg]:transition-transform [&>svg]:duration-300 group-hover:[&>svg]:scale-[1.15]">
                        <IconComponent size={32} className="md:hidden" />
                        <IconComponent size={40} className="hidden md:block" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-heading text-slate-900 mb-4 md:mb-5 uppercase group-hover:text-brand-green transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base font-light mb-8 md:mb-10">
                        {value.description}
                      </p>
                      <div className="flex justify-between items-center group/btn">
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-slate-400 group-hover:text-brand-green transition-colors font-heading">Onze Waarde</span>
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-brand-green group-hover:bg-brand-green transition-all duration-300">
                          <CheckCircle size={16} className="text-slate-400 group-hover:text-black transition-colors md:hidden" />
                          <CheckCircle size={18} className="text-slate-400 group-hover:text-black transition-colors hidden md:block" />
                        </div>
                      </div>
                    </div>
                    {/* Hover Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 via-brand-green/0 to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 lg:py-36 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-20 lg:gap-28 items-center">
            <div className="lg:w-1/2">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-slate-900 mb-8 md:mb-12 leading-none uppercase tracking-tighter">
                  Waarom Kiezen voor <span className="text-brand-green italic">FEIGRO?</span>
                </h2>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {[
                  '20+ Jaar Ervaring',
                  'Gecertificeerde Vakmensen',
                  'Lekkage melden',
                  'A-Merk Materialen',
                  'Transparante Prijzen',
                  'Gratis Advies',
                ].map((item, index) => (
                  <FadeIn key={index} delay={index * 0.05} direction="left" distance={20}>
                    <div className="flex items-center gap-3 md:gap-4 group">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-green/20 flex items-center justify-center group-hover:bg-brand-green transition-colors shrink-0">
                        <CheckCircle size={12} className="text-brand-green group-hover:text-black transition-colors md:hidden" />
                        <CheckCircle size={14} className="text-brand-green group-hover:text-black transition-colors hidden md:block" />
                      </div>
                      <span className="text-base md:text-lg text-slate-600 group-hover:text-slate-900 transition-colors font-light">{item}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
            <FadeIn className="lg:w-1/2 w-full" scale={0.98}>
              <div className="bg-slate-100 p-8 md:p-12 lg:p-16 rounded-xl md:rounded-[2rem] border border-slate-200">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading text-slate-900 mb-8 md:mb-10 italic uppercase tracking-tighter leading-none">Direct een <br />expert spreken?</h3>
                <p className="text-slate-600 text-base md:text-lg mb-8 md:mb-12 font-light">Wij staan 24/7 klaar voor al uw vragen en spoedgevallen rondom uw dak.</p>
                <PrimaryFlipButton
                  label="Bel voor advies"
                  icon={<ArrowRight />}
                  onClick={() => window.location.href = 'tel:+31612345678'}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
