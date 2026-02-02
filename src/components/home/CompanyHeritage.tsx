import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { FadeIn } from '@/components/ui/ParallaxImage';
import { PrimaryFlipButton } from '@/components/buttons';
import { GoogleReviewCard } from '@/components/ui/GoogleReviewCard';

const COMPANY_DATA = {
  feitsma: {
    name: 'Feitsma Dakwerken',
    abbr: 'FEI',
    rating: 4.7,
    reviewCount: '19+',
    googleUrl: 'https://www.google.com/search?sxsrf=ANbL-n66AiS6rGRTdIEQ-jXw2FZlag3S-Q:1770033470519&q=FEITSMA+DAKWERKEN&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOfXETfLpu6FeggdPhBHaypUTIcTOg5gRUkEfKdDv1Y5R5om9_jjiEQzwnTxqsfMs15mTV3E%3D&uds=ALYpb_lYhTQoihMExfBHVPUjHWLhoOxWyfFds83MA55BVXMRHqxBLhl8h49aUHvvd1Xo4BXc72j5L0Xvh64CnVJjPFgFLIz6dmEDd8caAGLRISFe44r7DN0&aic=0',
  },
  groen: {
    name: 'Groen Dakwerken',
    abbr: 'GRO',
    rating: 5.0,
    reviewCount: '130+',
    googleUrl: 'https://www.google.com/search?sca_esv=358352e6032d6e12&sxsrf=ANbL-n6vCdS9U7A0_YII1si5z16TEDjSWg:1770033263112&q=groen+dakwerken&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOVNddeclMJ1hYx2VBoGNsJgArN7hZobVuA2K6bmQG3LEdaIBLSyKajtTyIkaifBrTQJRcQQ%3D&uds=ALYpb_n_EM_B_ErB9c5NX69H4GoWc8DiUuVMlava_ObHRlkvsWcrqqDA_hwTS-Ux5q0UTQUmLz6XpTVmpvuLPVDuwTyVGOQKuHoSDkIzWlOM6cszs4UzRls&sa=X&ved=2ahUKEwjJuY3f37qSAxUHgf0HHbchOQ8Q3PALegQIHBAE&biw=1413&bih=983&dpr=0.9&aic=0',
  },
};

export const CompanyHeritage = () => {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-gradient-to-br from-[#2E383F] via-[#3a464d] to-[#2E383F] overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#91A3AB]/15 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#91A3AB]/10 blur-[120px] rounded-full"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-green/5 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <FadeIn className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="w-8 md:w-12 h-[2px] bg-brand-green"></div>
            <span className="text-brand-green font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em]">
              ONZE OORSPRONG
            </span>
            <div className="w-8 md:w-12 h-[2px] bg-brand-green"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white leading-[0.9] tracking-tighter uppercase mb-6 md:mb-8">
            De Kracht van <span className="text-brand-green italic">Twee</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light">
            FEIGRO is ontstaan uit de samenwerking van twee gevestigde dakdekkersbedrijven met jarenlange ervaring en uitstekende beoordelingen.
          </p>
        </FadeIn>

        {/* Fusion Visual */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand-green/20 border border-brand-green/30 flex items-center justify-center">
                <span className="text-brand-green font-heading text-xl md:text-2xl font-bold">FEI</span>
              </div>
              <span className="text-white/40 font-heading text-sm">Feitsma</span>
            </div>
            <div className="text-brand-green text-3xl md:text-4xl font-bold">+</div>
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand-green/20 border border-brand-green/30 flex items-center justify-center">
                <span className="text-brand-green font-heading text-xl md:text-2xl font-bold">GRO</span>
              </div>
              <span className="text-white/40 font-heading text-sm">Groen</span>
            </div>
            <div className="text-white/40 text-3xl md:text-4xl">=</div>
            <div className="px-6 py-3 bg-brand-green rounded-lg">
              <span className="text-slate-900 font-heading text-2xl md:text-3xl font-bold tracking-tight">FEIGRO</span>
            </div>
          </div>
        </FadeIn>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto mb-12 md:mb-16">
          <FadeIn delay={0.2}>
            <GoogleReviewCard
              companyName={COMPANY_DATA.feitsma.name}
              rating={COMPANY_DATA.feitsma.rating}
              reviewCount={COMPANY_DATA.feitsma.reviewCount}
              googleUrl={COMPANY_DATA.feitsma.googleUrl}
            />
          </FadeIn>
          <FadeIn delay={0.3}>
            <GoogleReviewCard
              companyName={COMPANY_DATA.groen.name}
              rating={COMPANY_DATA.groen.rating}
              reviewCount={COMPANY_DATA.groen.reviewCount}
              googleUrl={COMPANY_DATA.groen.googleUrl}
            />
          </FadeIn>
        </div>

        {/* Combined Stats */}
        <FadeIn delay={0.4}>
          <div className="text-center bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-10 md:mb-12">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-[#FBBC05] fill-[#FBBC05]" />
              ))}
            </div>
            <p className="text-white/80 text-lg md:text-xl mb-2">
              <span className="font-bold text-white">79+ tevreden klanten</span> gaven ons gemiddeld
            </p>
            <p className="text-brand-green text-4xl md:text-5xl font-heading">4.9 / 5.0</p>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.5} className="text-center">
          <PrimaryFlipButton
            label="Ontdek ons verhaal"
            icon={<ArrowRight />}
            onClick={() => window.location.href = '/over-ons'}
          />
        </FadeIn>
      </div>
    </section>
  );
};
