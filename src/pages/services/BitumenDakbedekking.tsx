import { SEO } from '@/components/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { InfoSection } from '@/components/sections/InfoSection';
import { FAQSection } from '@/components/sections/FAQSection';

import { bitumenDakbedekkingData } from '@/data/services';

export default function BitumenDakbedekking() {
  const { seo, hero, features, featureTitle, info, faqs } = bitumenDakbedekkingData;

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
