import { CheckCircle, Users, Award, Heart } from 'lucide-react';
import { MainLayout } from '@/components/layout/MainLayout';
import { SEO } from '@/components/SEO';
import { CTAFooter } from '@/components/sections/CTAFooter';
import { seoMetadata } from '@/data/seo-metadata';

export default function OverOns() {
  const values = [
    {
      icon: Users,
      title: 'Vakmanschap',
      description: 'Ons team bestaat uit ervaren, gecertificeerde dakdekkers die hun vak door en door kennen.',
    },
    {
      icon: Award,
      title: 'Kwaliteit',
      description: 'We werken uitsluitend met hoogwaardige materialen en leveren gegarandeerd werk van topkwaliteit.',
    },
    {
      icon: Heart,
      title: 'Klantgericht',
      description: 'Uw tevredenheid staat centraal. We denken graag met u mee en leveren maatwerk.',
    },
    {
      icon: CheckCircle,
      title: 'Betrouwbaar',
      description: 'Op ons kunt u rekenen. We houden ons aan afspraken en leveren wat we beloven.',
    },
  ];

  return (
    <MainLayout>
      <SEO {...seoMetadata.overOns} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-feigro-dark to-feigro-dark/80 text-white py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
              Over FEIGRO Dakwerken
            </h1>
            <p className="text-lg md:text-xl text-feigro-grey leading-relaxed">
              Al meer dan 20 jaar uw betrouwbare partner voor professionele dakwerkzaamheden in Zuid-Holland.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-feigro-dark mb-6">
                Onze Geschiedenis
              </h2>
              <div className="space-y-4 text-base md:text-lg text-feigro-grey leading-relaxed">
                <p>
                  FEIGRO Dakwerken werd opgericht met één duidelijke missie: vakkundig dakwerk leveren
                  met persoonlijke aandacht voor elke klant. Wat begon als een klein familiebedrijf is
                  uitgegroeid tot een gerenommeerd dakdekkersbedrijf in Zuid-Holland.
                </p>
                <p>
                  Met meer dan 20 jaar ervaring hebben we duizenden daken geïnspecteerd, onderhouden en
                  gerenoveerd. Van kleine particuliere woningen tot grote bedrijfspanden - elk project
                  behandelen we met dezelfde toewijding en zorg voor detail.
                </p>
                <p>
                  Ons team van gecertificeerde vakmensen blijft zich continu ontwikkelen om u de nieuwste
                  technieken en materialen te kunnen bieden. Daarbij houden we vast aan onze kernwaarden:
                  kwaliteit, betrouwbaarheid en persoonlijke service.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-feigro-grey/10 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-feigro-dark mb-4">
              Onze Kernwaarden
            </h2>
            <p className="text-lg md:text-xl text-feigro-grey max-w-3xl mx-auto">
              Deze waarden vormen de basis van alles wat we doen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-sm border border-feigro-grey/20 hover:border-feigro-accent/50 transition-all"
                >
                  <IconComponent className="h-12 w-12 text-feigro-accent mb-4" />
                  <h3 className="text-2xl font-semibold text-feigro-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-base text-feigro-grey leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-feigro-dark mb-6">
              Waarom Kiezen voor FEIGRO?
            </h2>
          </div>

          <div className="space-y-6">
            {[
              'Ruim 20 jaar ervaring in alle soorten dakwerkzaamheden',
              'Gecertificeerde vakmensen met continue bijscholing',
              '24/7 spoedservice voor acute problemen',
              'Werken met A-merk materialen en fabrieksgarantie',
              'Transparante prijzen zonder verborgen kosten',
              'Persoonlijke begeleiding van start tot oplevering',
              'Gratis advies en vrijblijvende offertes',
              'Uitgebreide garanties op materiaal en arbeid',
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-feigro-accent flex-shrink-0 mt-1" />
                <span className="text-lg text-feigro-grey">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAFooter />
    </MainLayout>
  );
}
