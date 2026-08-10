import { SEO } from '@/components/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { InfoSection } from '@/components/sections/InfoSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ServiceCTA } from '@/components/sections/ServiceCTA';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { BlogSection } from '@/components/home/BlogSection';

import { VveForm } from '@/components/forms/VveForm';

import { vveVastgoedbeheerData } from '@/data/services';

export default function VveVastgoedbeheer() {
  const { seo, hero, features, featureTitle, info, faqs } = vveVastgoedbeheerData;

  return (
    <>
      <SEO {...seo} />
      <HeroSection {...hero} />
      <InfoSection {...info} />
      <FeatureGrid features={features} title={featureTitle} titleHighlight="Voordelen" />
      <FeaturedProjects />
      <FAQSection faqs={faqs} />
      <BlogSection />
      <section className="bg-white py-20 md:py-28 px-6 border-t border-slate-100">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-brand-green/30"></div>
              <span className="text-brand-green font-bold text-xs uppercase tracking-[0.2em]">Vrijblijvend advies</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 leading-[1.1] uppercase tracking-tighter">
              Advies voor uw <span className="text-brand-green italic">VvE of vastgoed</span>
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Laat uw gegevens achter en wij nemen binnen 24 uur contact met u op voor een vrijblijvend
              advies over onderhoud, inspectie en meerjarenplanning van uw daken.
            </p>
          </div>
          <VveForm />
        </div>
      </section>
      <ServiceCTA />
    </>
  );
}
