import { MainLayout } from '@/components/layout/MainLayout';
import { SEO } from '@/components/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { InfoSection } from '@/components/sections/InfoSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTAFooter } from '@/components/sections/CTAFooter';
import { daklekkageData } from '@/data/services';

export default function Daklekkage() {
  const { seo, hero, features, info, faqs } = daklekkageData;

  return (
    <MainLayout>
      <SEO {...seo} />
      <HeroSection {...hero} />
      <FeatureGrid features={features} />
      <InfoSection {...info} />
      <CTAFooter
        title="Daklekkage? Bel Direct!"
        description="Onze spoedservice staat 24/7 voor u klaar. Wacht niet met bellen bij acute lekkage."
        primaryCTA={{ text: 'Bel Nu: +31 6 1234 5678', href: 'tel:+31612345678' }}
        secondaryCTA={{ text: 'Meer over Spoedservice', href: '/spoedservice' }}
      />
    </MainLayout>
  );
}
