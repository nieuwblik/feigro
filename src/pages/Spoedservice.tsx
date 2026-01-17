import { Phone, Clock, Zap, Shield, AlertCircle, CheckCircle } from 'lucide-react';
import { MainLayout } from '@/components/layout/MainLayout';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { seoMetadata } from '@/data/seo-metadata';

export default function Spoedservice() {
  const features = [
    {
      icon: Clock,
      title: '24/7 Bereikbaar',
      description: 'Dag en nacht, ook in het weekend en op feestdagen staan we voor u klaar.',
    },
    {
      icon: Zap,
      title: 'Snelle Respons',
      description: 'We streven ernaar binnen 2-4 uur ter plaatse te zijn bij acute lekkages.',
    },
    {
      icon: Shield,
      title: 'Direct Actie',
      description: 'Noodreparatie om verdere waterschade te voorkomen en uw huis te beschermen.',
    },
    {
      icon: Phone,
      title: 'Deskundig Advies',
      description: 'Ervaren dakspecialisten die precies weten wat er moet gebeuren.',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Bel Direct',
      description: 'Bel ons spoednummer en beschrijf de situatie. We staan 24/7 voor u klaar.',
    },
    {
      number: '2',
      title: 'Snelle Respons',
      description: 'Onze monteur komt zo snel mogelijk naar u toe, meestal binnen 2-4 uur.',
    },
    {
      number: '3',
      title: 'Noodreparatie',
      description: 'We voeren een noodreparatie uit om verdere schade te voorkomen.',
    },
    {
      number: '4',
      title: 'Definitieve Oplossing',
      description: 'We plannen een afspraak voor de definitieve, duurzame reparatie.',
    },
  ];

  return (
    <MainLayout>
      <SEO {...seoMetadata.spoedservice} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-6">
              <AlertCircle className="h-12 w-12 animate-pulse" />
              <span className="text-lg font-semibold uppercase tracking-wide">
                24/7 Spoedservice
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
              Acute Daklekkage?<br />Wij Staan Direct Klaar!
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Heeft u een daklekkage of andere acute dakproblemen? Aarzelniet en bel ons direct.
              Onze spoedservice staat dag en nacht voor u klaar.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-red-600 hover:bg-white/90 text-xl px-10 py-6 h-auto"
            >
              <a href="tel:+31612345678" className="flex items-center space-x-3">
                <Phone className="h-6 w-6" />
                <span>Bel Nu: +31 6 1234 5678</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-feigro-dark mb-4">
              Waarom Onze Spoedservice?
            </h2>
            <p className="text-lg md:text-xl text-feigro-grey max-w-3xl mx-auto">
              Bij acute dakproblemen heeft u snelle en professionele hulp nodig.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-feigro-grey/20 text-center"
                >
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <IconComponent className="h-12 w-12 text-feigro-accent" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-feigro-dark">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-feigro-grey leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-feigro-dark mb-4">
              Hoe Werkt Het?
            </h2>
            <p className="text-lg md:text-xl text-feigro-grey">
              Van melding tot oplossing in 4 eenvoudige stappen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-feigro-accent text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-feigro-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base text-feigro-grey leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Do */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-feigro-dark mb-6">
              Wat Te Doen Bij Daklekkage?
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-feigro-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-feigro-dark mb-1">Bel direct onze spoedservice</h3>
                <p className="text-feigro-grey">+31 6 1234 5678 - we staan 24/7 voor u klaar</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-feigro-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-feigro-dark mb-1">Plaats emmers/bakken</h3>
                <p className="text-feigro-grey">Onder de lekkage om waterschade te beperken</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-feigro-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-feigro-dark mb-1">Verwijder waardevolle spullen</h3>
                <p className="text-feigro-grey">Uit de buurt van de lekkage om schade te voorkomen</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-feigro-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-feigro-dark mb-1">Ga niet zelf het dak op</h3>
                <p className="text-feigro-grey">Dit is gevaarlijk, laat het over aan onze professionals</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-feigro-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-feigro-dark mb-1">Maak foto's</h3>
                <p className="text-feigro-grey">Voor uw verzekering kan dit belangrijk zijn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-feigro-accent">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Wacht Niet Langer Bij Daklekkage!
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Elke minuut telt bij een daklekkage. Hoe sneller we de lekkage stoppen,
            hoe minder schade aan uw interieur. Bel nu!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-feigro-accent hover:bg-white/90 text-xl px-10 py-6 h-auto"
          >
            <a href="tel:+31612345678" className="flex items-center space-x-3">
              <Phone className="h-6 w-6" />
              <span>Bel Direct: +31 6 1234 5678</span>
            </a>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
}
