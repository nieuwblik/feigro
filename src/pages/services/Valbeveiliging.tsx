import { SEO } from '@/components/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { InfoSection } from '@/components/sections/InfoSection';
import { FAQSection } from '@/components/sections/FAQSection';

import { valbeveiligingssysteemData } from '@/data/services';

import { ServiceCTA } from '@/components/sections/ServiceCTA';

export default function Valbeveiliging() {
    const { seo, hero, features, featureTitle, featureHighlight, info, faqs } = valbeveiligingssysteemData;

    return (
        <>
            <SEO {...seo} />
            <HeroSection {...hero} />
            <InfoSection {...info} />
            <FeatureGrid features={features} title={featureTitle} titleHighlight={featureHighlight} />
            <FAQSection faqs={faqs} />
            <ServiceCTA />
        </>
    );
}
