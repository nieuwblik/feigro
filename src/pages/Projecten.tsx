import { MainLayout } from '@/components/layout/MainLayout';
import { SEO } from '@/components/SEO';
import { CTAFooter } from '@/components/sections/CTAFooter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { seoMetadata } from '@/data/seo-metadata';

export default function Projecten() {
  const projects = [
    {
      title: 'Woonhuis Rotterdam',
      category: 'EPDM Dakbedekking',
      description: 'Complete vervanging van oude bitumen dakbedekking naar hoogwaardig EPDM rubber. Inclusief nieuwe isolatie.',
      location: 'Rotterdam',
      year: '2024',
    },
    {
      title: 'Bedrijfspand Dordrecht',
      category: 'Dakrenovatie',
      description: 'Grootschalige renovatie van 800m² plat dak met bitumen dakbedekking en verbeterde drainage.',
      location: 'Dordrecht',
      year: '2023',
    },
    {
      title: 'Appartementencomplex Den Haag',
      category: 'Dakonderhoud',
      description: 'Jaarlijks onderhoudscontract inclusief inspectie, reiniging en kleine reparaties.',
      location: 'Den Haag',
      year: '2023',
    },
    {
      title: 'Villa Wassenaar',
      category: 'Daklekkage',
      description: 'Acute lekkage verholpen en volledige dakrenovatie uitgevoerd met EPDM dakbedekking.',
      location: 'Wassenaar',
      year: '2024',
    },
    {
      title: 'Kantoorpand Zoetermeer',
      category: 'Bitumen Dakbedekking',
      description: 'Nieuwe bitumen dakbedekking op 450m² plat dak met 15 jaar garantie.',
      location: 'Zoetermeer',
      year: '2023',
    },
    {
      title: 'Woonhuis Delft',
      category: 'Dakinspectie',
      description: 'Periodieke dakinspectie met uitgebreid rapport en advies over onderhoud.',
      location: 'Delft',
      year: '2024',
    },
  ];

  return (
    <MainLayout>
      <SEO {...seoMetadata.projecten} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-feigro-dark to-feigro-dark/80 text-white py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
              Onze Projecten
            </h1>
            <p className="text-lg md:text-xl text-feigro-grey leading-relaxed">
              Een selectie van recent uitgevoerde dakwerkzaamheden. Van kleine reparaties tot
              complete renovaties - elk project met dezelfde toewijding uitgevoerd.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-feigro-grey/20 hover:border-feigro-accent/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-video bg-feigro-grey/10" />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-feigro-accent font-medium">
                      {project.category}
                    </span>
                    <span className="text-sm text-feigro-grey">{project.year}</span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-feigro-dark">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-feigro-grey leading-relaxed mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="text-sm text-feigro-grey">
                    <span className="font-medium">Locatie:</span> {project.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-feigro-dark mb-4">
              Wat Onze Klanten Zeggen
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-feigro-grey/20">
              <p className="text-lg text-feigro-grey leading-relaxed mb-4 italic">
                "FEIGRO heeft ons dak volledig gerenoveerd. Vakkundig werk, netjes afgewerkt, en het team
                was zeer professioneel. We zijn zeer tevreden!"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-feigro-dark">Familie van der Berg</p>
                  <p className="text-sm text-feigro-grey">Rotterdam</p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-feigro-accent">★</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-feigro-grey/20">
              <p className="text-lg text-feigro-grey leading-relaxed mb-4 italic">
                "Snelle en efficiënte service bij een acute daklekkage. Binnen 2 uur ter plaatse en het
                probleem direct verholpen. Echt top!"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-feigro-dark">Jan Pietersen</p>
                  <p className="text-sm text-feigro-grey">Den Haag</p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-feigro-accent">★</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-feigro-grey/20">
              <p className="text-lg text-feigro-grey leading-relaxed mb-4 italic">
                "Uitstekend werk geleverd aan ons bedrijfspand. Goede communicatie, transparante prijzen,
                en het resultaat is perfect. Aanrader!"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-feigro-dark">Bakkerij Jansen</p>
                  <p className="text-sm text-feigro-grey">Dordrecht</p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-feigro-accent">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAFooter />
    </MainLayout>
  );
}
