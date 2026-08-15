import { SEOHead } from '@/components/seo/SEOHead';
import { SEOBreadcrumb } from '@/components/seo/SEOBreadcrumb';
import { RelatedContent } from '@/components/seo/RelatedContent';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { InfoSection } from '@/components/sections/InfoSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ServiceCTA } from '@/components/sections/ServiceCTA';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { BlogSection } from '@/components/home/BlogSection';
import { getRelatedServices } from '@/lib/related-content';

import { vveVastgoedbeheerData } from '@/data/services';

export default function VveVastgoedbeheer() {
  const { seo, hero, features, featureTitle, info, faqs } = vveVastgoedbeheerData;

  return (
    <>
      <SEOHead {...seo} />
      <SEOBreadcrumb />
      <HeroSection {...hero} />
      <InfoSection {...info} />
      <FeatureGrid features={features} title={featureTitle} titleHighlight="Voordelen" />
      <FeaturedProjects />
      <FAQSection faqs={faqs} />
      <BlogSection />
      <RelatedContent title="Gerelateerde diensten" items={getRelatedServices('/vve-vastgoedbeheer')} />
      <ServiceCTA />
    </>
  );
}
