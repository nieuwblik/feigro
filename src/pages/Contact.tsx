import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { MainLayout } from '@/components/layout/MainLayout';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { seoMetadata } from '@/data/seo-metadata';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <MainLayout>
      <SEO {...seoMetadata.contact} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-feigro-dark to-feigro-dark/80 text-white py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
              Neem Contact Op
            </h1>
            <p className="text-lg md:text-xl text-feigro-grey leading-relaxed">
              Heeft u vragen of wilt u een vrijblijvende offerte aanvragen? Neem gerust contact met ons op.
              We helpen u graag verder.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-feigro-grey/20">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-feigro-dark flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-feigro-accent" />
                    <span>Telefoon</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="space-y-2">
                    <a
                      href="tel:+31612345678"
                      className="block text-base text-feigro-grey hover:text-feigro-accent transition-colors"
                    >
                      +31 6 1234 5678
                    </a>
                    <p className="text-sm text-feigro-grey/70">24/7 Spoedservice</p>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-feigro-grey/20">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-feigro-dark flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-feigro-accent" />
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <a
                      href="mailto:info@feigro.nl"
                      className="text-base text-feigro-grey hover:text-feigro-accent transition-colors"
                    >
                      info@feigro.nl
                    </a>
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-feigro-grey/20">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-feigro-dark flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-feigro-accent" />
                    <span>Locatie</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-feigro-grey">
                    Regio Zuid-Holland<br />
                    Nederland
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-feigro-grey/20">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-feigro-dark flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-feigro-accent" />
                    <span>Openingstijden</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-feigro-grey space-y-1">
                    <p>Ma-Vr: 08:00 - 18:00</p>
                    <p>Za: Op afspraak</p>
                    <p>Zo: Gesloten</p>
                    <p className="text-feigro-accent font-medium mt-2">
                      Spoedservice: 24/7
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-feigro-grey/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-feigro-dark">
                    Vraag een Offerte Aan
                  </CardTitle>
                  <CardDescription className="text-base">
                    Vul het formulier in en we nemen zo snel mogelijk contact met u op.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Naam *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Uw volledige naam"
                          className="border-feigro-grey/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="uw@email.nl"
                          className="border-feigro-grey/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefoon *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+31 6 1234 5678"
                          className="border-feigro-grey/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Onderwerp *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Bijv. Offerte dakrenovatie"
                          className="border-feigro-grey/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Bericht *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Vertel ons meer over uw situatie en wat u nodig heeft..."
                        className="border-feigro-grey/20 min-h-[150px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto bg-feigro-accent hover:bg-feigro-accent/90 text-white"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Verstuur Bericht
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-feigro-dark mb-4">
              Werkgebied
            </h2>
            <p className="text-lg text-feigro-grey">
              Wij zijn actief in heel Zuid-Holland en omstreken.
            </p>
          </div>
          <div className="aspect-video bg-feigro-grey/10 rounded-lg flex items-center justify-center">
            <p className="text-feigro-grey">Kaart placeholder - Zuid-Holland regio</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
