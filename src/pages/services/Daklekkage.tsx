import { SEO } from '@/components/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { InfoSection } from '@/components/sections/InfoSection';
import { FAQSection } from '@/components/sections/FAQSection';

import { daklekkageData } from '@/data/services';

import { ServiceCTA } from '@/components/sections/ServiceCTA';

export default function Daklekkage() {
  const { seo, hero, features, featureTitle, info, faqs } = daklekkageData;

  return (
    <>
      <SEO {...seo} />
      <HeroSection {...hero} />
      <FeatureGrid features={features} title={featureTitle} />
      <InfoSection {...info} />
      <FAQSection faqs={faqs} />
      <ServiceCTA />
    </>
  );
}
