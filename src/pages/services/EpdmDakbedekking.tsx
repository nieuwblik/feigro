import { SEO } from '@/components/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { InfoSection } from '@/components/sections/InfoSection';
import { FAQSection } from '@/components/sections/FAQSection';

import { epdmDakbedekkingData } from '@/data/services';

export default function EpdmDakbedekking() {
  const { seo, hero, features, featureTitle, info, faqs } = epdmDakbedekkingData;

  return (
    <>
      <SEO {...seo} />
      <HeroSection {...hero} />
      <FeatureGrid features={features} title={featureTitle} />
      <InfoSection {...info} />
      <FAQSection faqs={faqs} />

    </>
  );
}
