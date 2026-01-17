import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { MainLayout } from '@/components/layout/MainLayout';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { seoMetadata } from '@/data/seo-metadata';

export default function Index() {
  const services = [
    {
      title: 'Dakinspectie',
      description: 'Grondige controle van uw dak door gecertificeerde professionals.',
      href: '/dakinspectie',
    },
    {
      title: 'Dakonderhoud',
      description: 'Regelmatig onderhoud verlengt de levensduur van uw dak.',
      href: '/dakonderhoud',
    },
    {
      title: 'Dakrenovatie',
      description: 'Complete renovatie van platte en hellende daken.',
      href: '/dakrenovatie',
    },
    {
      title: 'Dakbedekking Vervangen',
      description: 'Professionele vervanging van alle soorten dakbedekkingen.',
      href: '/dakbedekking-vervangen',
    },
    {
      title: 'Bitumen Dakbedekking',
      description: 'Betrouwbare en betaalbare bitumen dakbedekking.',
      href: '/bitumen-dakbedekking',
    },
    {
      title: 'EPDM Dakbedekking',
      description: 'Hoogwaardige rubber dakbedekking met 50 jaar levensduur.',
      href: '/epdm-dakbedekking',
    },
    {
      title: 'Daklekkage',
      description: '24/7 spoedservice voor acute daklekkages.',
      href: '/daklekkage',
    },
  ];

  const features = [
    'Ruim 20 jaar ervaring in dakwerkzaamheden',
    'Gecertificeerde en vakbekwame dakdekkers',
    '24/7 spoedservice voor acute problemen',
    'Uitgebreide garanties op al onze werkzaamheden',
    'Transparante prijzen zonder verborgen kosten',
    'Persoonlijke service en korte lijnen',
  ];

  return (
    <MainLayout>
      <SEO {...seoMetadata.home} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-feigro-dark to-feigro-dark/80 text-white py-20 md:py-28 lg:py-36 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
              Professionele Dakwerkzaamheden in Zuid-Holland
            </h1>
            <p className="text-lg md:text-xl text-feigro-grey mb-8 leading-relaxed">
              FEIGRO Dakwerken is uw specialist voor dakrenovatie, dakonderhoud, en spoedservice bij daklekkage.
              Vakkundig werk met oog voor detail en duurzaamheid.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-feigro-accent hover:bg-feigro-accent/90 text-white text-lg px-8"
              >
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Vraag Offerte Aan</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-feigro-dark text-lg px-8"
              >
                <Link to="/spoedservice" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>24/7 Spoedservice</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-feigro-dark mb-4">
              Onze Diensten
            </h2>
            <p className="text-lg md:text-xl text-feigro-grey max-w-3xl mx-auto">
              Van kleine reparaties tot complete dakrenovaties - FEIGRO staat voor u klaar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <Card
                key={service.href}
                className="border-feigro-grey/20 hover:border-feigro-accent/50 transition-all duration-300 hover:shadow-lg group"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-feigro-dark group-hover:text-feigro-accent transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base text-feigro-grey leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-feigro-accent hover:text-feigro-accent/80 font-medium"
                  >
                    Meer informatie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose FEIGRO */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-feigro-dark mb-6">
                Waarom Kiezen voor FEIGRO?
              </h2>
              <p className="text-lg text-feigro-grey mb-8 leading-relaxed">
                Met meer dan 20 jaar ervaring in de dakwerkbranche weten we precies wat er komt kijken bij
                het onderhouden en renoveren van daken. Vakmanschap, eerlijkheid en kwaliteit staan bij ons
                voorop.
              </p>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-feigro-accent flex-shrink-0 mt-0.5" />
                    <span className="text-base text-feigro-grey">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-feigro-accent hover:bg-feigro-accent/90 text-white"
                >
                  <Link to="/over-ons" className="flex items-center space-x-2">
                    <span>Meer Over Ons</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-feigro-grey/10 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-feigro-accent">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Klaar om Uw Dak te Laten Renoveren?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Neem vandaag nog contact met ons op voor een vrijblijvende offerte.
            Onze experts staan voor u klaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-feigro-accent hover:bg-white/90 text-lg px-8"
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Vraag Offerte Aan</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-feigro-accent text-lg px-8"
            >
              <Link to="/projecten" className="flex items-center space-x-2">
                <span>Bekijk Projecten</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
