import { SEOHead } from '@/components/seo/SEOHead';
import { SEOBreadcrumb } from '@/components/seo/SEOBreadcrumb';
import { RelatedContent } from '@/components/seo/RelatedContent';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { InfoSection } from '@/components/sections/InfoSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { getRelatedServices } from '@/lib/related-content';

import { dakinspectieData } from '@/data/services';

import { ServiceCTA } from '@/components/sections/ServiceCTA';

export default function Dakinspectie() {
  const { seo, hero, features, featureTitle, featureHighlight, info, faqs } = dakinspectieData;

  return (
    <>
      <SEOHead {...seo} />
      <SEOBreadcrumb />
      <HeroSection {...hero} />
      <InfoSection {...info} />
      <FeatureGrid features={features} title={featureTitle} titleHighlight={featureHighlight} />
      <FAQSection faqs={faqs} />
      <RelatedContent title="Gerelateerde diensten" items={getRelatedServices('/dakinspectie')} />
      <ServiceCTA />
    </>
  );
}
