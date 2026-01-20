import React from 'react';
import { SEO } from '@/components/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServiceCTA } from '@/components/sections/ServiceCTA';
import { VveForm } from '@/components/forms/VveForm';
import { vveVastgoedbeheerData } from '@/data/services';
import { CheckCircle2, Users, FileText, Calendar } from 'lucide-react';
import { FadeIn } from '@/components/ui/ParallaxImage';

export default function VveVastgoedbeheer() {
  const { seo, hero, features, info, faqs } = vveVastgoedbeheerData;

  // Custom formatted date
  const currentDate = new Date().toLocaleDateString('nl-NL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <>
      <SEO {...seo} />
      {/* We keep the hero but maybe simpler or just as visual header */}
      <HeroSection {...hero} />

      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">

            {/* Left Content Column */}
            <div className="lg:col-span-2">
              <FadeIn>
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 mb-8 text-sm font-medium text-slate-500">
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-brand-green" />
                    <span>Feigro Dakwerken</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText size={18} className="text-brand-green" />
                    <span>VvE & Vastgoed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-brand-green" />
                    <span>{currentDate}</span>
                  </div>
                </div>

                {/* Main Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-2 leading-tight">
                  VvE en Vastgoedbeheerders
                </h1>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-green mb-12 leading-tight">
                  in Nederland
                </h1>

                {/* Quote Block */}
                <div className="border-l-4 border-brand-green pl-6 py-2 mb-10 bg-slate-50/50 rounded-r-lg">
                  <p className="text-lg md:text-xl text-slate-700 italic font-medium leading-relaxed">
                    Een samenwerking met Feigro Dakwerken biedt uw VvE en Vastgoed de
                    garantie van duurzame dakduurzaamheid, kostenefficiënte oplossingen en snelle
                    service voor alle onderhouds- en herstelwerkzaamheden.
                  </p>
                </div>

                <p className="text-slate-600 leading-relaxed mb-10">
                  Samenwerking tussen een dakdekkersbedrijf en VvE beheerders kan tal van voordelen opleveren voor beide partijen. Hier zijn enkele van de belangrijkste voordelen:
                </p>

                {/* Compact Features List */}
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-16">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <div className="bg-brand-green rounded-full p-0.5">
                          <CheckCircle2 size={16} className="text-white" strokeWidth={3} />
                        </div>
                      </div>
                      <span className="text-slate-700 font-medium text-sm md:text-base">
                        {feature.title}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Info Text Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">
                    {info.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-lg mb-6">
                    {info.description}
                  </p>
                  {info.paragraphs.map((para, idx) => (
                    <p key={idx} className="text-slate-600 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <FadeIn delay={0.2}>
                  <VveForm />
                </FadeIn>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ServiceCTA />
    </>
  );
}
