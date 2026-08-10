import { SEO } from '@/components/SEO';
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateBreadcrumbsFromPath,
  generateServiceSchema,
} from '@/lib/structured-data';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { InfoSection } from '@/components/sections/InfoSection';
import { FAQSection } from '@/components/sections/FAQSection';

import { daklekkageData } from '@/data/services';

import { ServiceCTA } from '@/components/sections/ServiceCTA';
import { EmergencyContactRow } from '@/components/sections/EmergencyContactRow';

export default function Daklekkage() {
  const { seo, hero, features, featureTitle, featureHighlight, info, faqs } = daklekkageData;

  return (
    <>
      <SEO
                {...seo}
                schema={combineSchemas(
                  generateServiceSchema({
                    name: 'Daklekkage verhelpen',
                    description: seo.description,
                    path: seo.canonical,
                  }),
                  generateBreadcrumbSchema(generateBreadcrumbsFromPath(seo.canonical)) as unknown as Record<string, unknown>,
                )}
              />
      <HeroSection {...hero} />
      <InfoSection {...info} />
      <EmergencyContactRow />
      <FeatureGrid features={features} title={featureTitle} titleHighlight={featureHighlight} />
      <FAQSection faqs={faqs} />
      <ServiceCTA />
    </>
  );
}
