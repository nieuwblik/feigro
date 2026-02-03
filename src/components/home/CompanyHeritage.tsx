import React from 'react';
import { Star } from 'lucide-react';
import { FadeIn } from '@/components/ui/ParallaxImage';
import { GoogleReviewCard } from '@/components/ui/GoogleReviewCard';
import { PrimaryFlipButton } from '@/components/buttons';

const COMPANY_DATA = {
  feitsma: {
    name: 'Feitsma Dakwerken',
    abbr: 'FEI',
    rating: 4.7,
    reviewCount: '19+',
    googleUrl: 'https://www.google.com/search?sxsrf=ANbL-n66AiS6rGRTdIEQ-jXw2FZlag3S-Q:1770033470519&q=FEITSMA+DAKWERKEN&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOfXETfLpu6FeggdPhBHaypUTIcTOg5gRUkEfKdDv1Y5R5om9_jjiEQzwnTxqsfMs15mTV3E%3D&uds=ALYpb_lYhTQoihMExfBHVPUjHWLhoOxWyfFds83MA55BVXMRHqxBLhl8h49aUHvvd1Xo4BXc72j5L0Xvh64CnVJjPFgFLIz6dmEDd8caAGLRISFe44r7DN0&aic=0'
  },
  groen: {
    name: 'Groen Dakwerken',
    abbr: 'GRO',
    rating: 5.0,
    reviewCount: '130+',
    googleUrl: 'https://www.google.com/search?sca_esv=358352e6032d6e12&sxsrf=ANbL-n6vCdS9U7A0_YII1si5z16TEDjSWg:1770033263112&q=groen+dakwerken&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOVNddeclMJ1hYx2VBoGNsJgArN7hZobVuA2K6bmQG3LEdaIBLSyKajtTyIkaifBrTQJRcQQ%3D&uds=ALYpb_n_EM_B_ErB9c5NX69H4GoWc8DiUuVMlava_ObHRlkvsWcrqqDA_hwTS-Ux5q0UTQUmLz6XpTVmpvuLPVDuwTyVGOQKuHoSDkIzWlOM6cszs4UzRls&sa=X&ved=2ahUKEwjJuY3f37qSAxUHgf0HHbchOQ8Q3PALegQIHBAE&biw=1413&bih=983&dpr=0.9&aic=0'
  }
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
          <p className="text-white/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            FEIGRO is ontstaan uit de samenwerking van twee gevestigde dakdekkersbedrijven met jarenlange ervaring en uitstekende beoordelingen.
          </p>
        </FadeIn>

        {/* Fusion Visual - Vertical on mobile, horizontal on desktop */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
            {/* FEI */}
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="w-16 h-16 md:w-16 md:h-16 rounded-full bg-brand-green/20 border-2 border-brand-green/30 flex items-center justify-center">
                <span className="text-brand-green font-heading text-xl md:text-2xl font-bold">FEI</span>
              </div>
              <span className="text-white/50 font-heading text-sm">Feitsma</span>
            </div>
            
            {/* Plus */}
            <div className="text-brand-green text-3xl md:text-4xl font-bold my-2 md:my-0">+</div>
            
            {/* GRO */}
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="w-16 h-16 md:w-16 md:h-16 rounded-full bg-brand-green/20 border-2 border-brand-green/30 flex items-center justify-center">
                <span className="text-brand-green font-heading text-xl md:text-2xl font-bold">GRO</span>
              </div>
              <span className="text-white/50 font-heading text-sm">Groen</span>
            </div>
            
            {/* Equals */}
            <div className="text-white/50 text-3xl md:text-4xl my-2 md:my-0">=</div>
            
            {/* FEIGRO */}
            <div className="px-6 py-3 bg-brand-green rounded-xl flex items-center justify-center">
              <img 
                src="/images/feigro-logo-zwart.png" 
                alt="FEIGRO Dakwerken" 
                className="h-8 md:h-10 w-auto"
              />
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
          <div className="text-center bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-[#FBBC05] fill-[#FBBC05]" />
              ))}
            </div>
            <p className="text-white/80 text-lg md:text-xl mb-2">
              <span className="font-bold text-white">149+ tevreden klanten</span> gaven ons gemiddeld
            </p>
            <p className="text-brand-green text-4xl md:text-5xl font-heading mb-6">4.9 / 5.0</p>
            <PrimaryFlipButton
              label="Plaats een review voor FEIGRO"
              onClick={() => {
                window.open('https://g.page/r/CdIXIr0TrqC8EBM/review', '_blank');
              }}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
