import { SEO } from '@/components/SEO';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { InfoSection } from '@/components/sections/InfoSection';
import { FAQSection } from '@/components/sections/FAQSection';

import { valbeveiligingssysteemData } from '@/data/services';

export default function Valbeveiligingssysteem() {
    const { seo, hero, features, featureTitle, info, faqs } = valbeveiligingssysteemData;

    return (
        <>
            <SEO {...seo} />
            <HeroSection {...hero} />
            <InfoSection {...info} />
            <FeatureGrid features={features} title={featureTitle} />
            <FAQSection faqs={faqs} />

        </>
    );
}
