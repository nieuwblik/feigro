import { SEO } from '@/components/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { InfoSection } from '@/components/sections/InfoSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ServiceCTA } from '@/components/sections/ServiceCTA';

import { vveVastgoedbeheerData } from '@/data/services';

export default function VveVastgoedbeheer() {
  const { seo, hero, features, featureTitle, info, faqs } = vveVastgoedbeheerData;

  return (
    <>
      <SEO {...seo} />
      <HeroSection {...hero} />
      <FeatureGrid features={features} title={featureTitle} titleHighlight="Voordelen" />
      <InfoSection {...info} />
      <FAQSection faqs={faqs} />
      <ServiceCTA />
    </>
  );
}
