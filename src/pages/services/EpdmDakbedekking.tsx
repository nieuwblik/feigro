import { MainLayout } from '@/components/layout/MainLayout';
import { SEO } from '@/components/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { InfoSection } from '@/components/sections/InfoSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTAFooter } from '@/components/sections/CTAFooter';
import { epdmDakbedekkingData } from '@/data/services';

export default function EpdmDakbedekking() {
  const { seo, hero, features, info, faqs } = epdmDakbedekkingData;

  return (
    <MainLayout>
      <SEO {...seo} />
      <HeroSection {...hero} />
      <FeatureGrid features={features} />
      <InfoSection {...info} />
      <FAQSection faqs={faqs} />
      <CTAFooter />
    </MainLayout>
  );
}
