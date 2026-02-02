import { SEO } from '@/components/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { InfoSection } from '@/components/sections/InfoSection';
import { FAQSection } from '@/components/sections/FAQSection';

import { dakonderhoudData } from '@/data/services';

import { ServiceCTA } from '@/components/sections/ServiceCTA';

export default function Dakonderhoud() {
  const { seo, hero, features, featureTitle, featureHighlight, info, faqs } = dakonderhoudData;

  return (
    <>
      <SEO {...seo} />
      <HeroSection {...hero} />
      <FeatureGrid features={features} title={featureTitle} titleHighlight={featureHighlight} />
      <InfoSection {...info} />
      <FAQSection faqs={faqs} />
      <ServiceCTA />
    </>
  );
}
