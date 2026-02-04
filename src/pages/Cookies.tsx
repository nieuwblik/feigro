import { useState } from 'react';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Cookie, 
  FileText, 
  Users, 
  Clock, 
  Share2, 
  ExternalLink, 
  Eye, 
  Lock, 
  CheckCircle2, 
  User, 
  RefreshCw,
  Mail,
  Phone,
  Globe,
  ChevronDown
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function Section({ id, icon, title, children }: SectionProps) {
  return (
    <AccordionItem value={id} className="border border-slate-200 rounded-xl mb-4 overflow-hidden bg-white">
      <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-slate-50 transition-colors [&[data-state=open]]:bg-slate-50">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center text-brand-green shrink-0">
            {icon}
          </div>
          <span className="font-heading text-lg uppercase tracking-tight text-slate-900 text-left">
            {title}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-6 pt-2">
        <div className="pl-14 prose prose-slate prose-sm max-w-none">
          {children}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

const tableOfContents = [
  { id: 'inleiding', label: 'Inleiding' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'gegevens-verzamelen', label: 'Gegevensverzameling' },
  { id: 'gevoelige-gegevens', label: 'Gevoelige gegevens' },
  { id: 'doeleinden', label: 'Doeleinden' },
  { id: 'bewaartermijn', label: 'Bewaartermijn' },
  { id: 'delen', label: 'Delen met anderen' },
  { id: 'derden', label: 'Websites van derden' },
  { id: 'rechten', label: 'Uw rechten' },
  { id: 'beveiliging', label: 'Beveiliging' },
  { id: 'avg', label: 'AVG compliance' },
  { id: 'naw', label: 'Contactgegevens' },
  { id: 'wijzigingen', label: 'Wijzigingen' },
];

export default function Cookies() {
  const [activeSection, setActiveSection] = useState<string>('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <>
      <SEO
        title="Privacy- en Cookiebeleid | FEIGRO Dakwerken"
        description="Lees ons privacy- en cookiebeleid. FEIGRO respecteert uw privacy en is volledig AVG-compliant."
        canonical="/cookies"
      />

      {/* Hero Section */}
      <section className="relative bg-black pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-6 overflow-hidden h-[50vh] md:h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-brand-green"></div>
            <span className="text-brand-green font-bold text-xs uppercase tracking-[0.3em]">Juridisch</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading text-white uppercase tracking-tighter"
          >
            Privacy- & Cookie<span className="text-brand-green italic">beleid</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 mt-4 max-w-xl"
          >
            FEIGRO is verantwoordelijk voor de verwerking van persoonsgegevens en het gebruik van cookies 
            zoals weergegeven in deze privacyverklaring.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
            {/* Sticky Table of Contents - Desktop */}
            <aside className="hidden lg:block">
              <div className="sticky top-32">
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <h3 className="font-heading text-sm uppercase tracking-wider text-slate-900 mb-4">
                    Inhoudsopgave
                  </h3>
                  <nav className="space-y-1">
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                          "w-full text-left px-3 py-2 text-sm rounded-lg transition-colors",
                          activeSection === item.id
                            ? "bg-brand-green/10 text-brand-green font-medium"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        )}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Contact Card */}
                <div className="bg-brand-green/10 rounded-xl p-6 mt-6">
                  <h4 className="font-heading text-sm uppercase tracking-wider text-slate-900 mb-3">
                    Vragen?
                  </h4>
                  <p className="text-sm text-slate-600 mb-4">
                    Neem contact met ons op voor vragen over uw privacy.
                  </p>
                  <a
                    href="mailto:info@feigro.nl"
                    className="flex items-center gap-2 text-brand-green text-sm font-medium hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    info@feigro.nl
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="max-w-3xl">
              {/* Introduction Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                id="inleiding"
                className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 mb-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center">
                    <Shield className="w-7 h-7 text-brand-green" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl uppercase tracking-tight text-slate-900">
                      Inleiding
                    </h2>
                    <p className="text-sm text-slate-500">FEIGRO Dakwerken</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  FEIGRO is verantwoordelijk voor de verwerking van persoonsgegevens en het gebruik van 
                  cookies zoals weergegeven in deze privacyverklaring. FEIGRO is de samensmelting van 
                  vakmanschap in daktechniek en duurzame groenoplossingen.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Globe className="w-4 h-4 text-brand-green" />
                    <a href="https://www.feigro.nl" className="text-slate-700 hover:text-brand-green transition-colors">
                      www.feigro.nl
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-brand-green" />
                    <a href="mailto:info@feigro.nl" className="text-slate-700 hover:text-brand-green transition-colors">
                      info@feigro.nl
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-brand-green" />
                    <a href="mailto:service@feigro.nl" className="text-slate-700 hover:text-brand-green transition-colors">
                      service@feigro.nl
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-brand-green" />
                    <a href="mailto:facturen@feigro.nl" className="text-slate-700 hover:text-brand-green transition-colors">
                      facturen@feigro.nl
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Accordion Sections */}
              <Accordion type="multiple" defaultValue={['cookies']} className="space-y-0">
                <div id="cookies">
                  <Section id="cookies" icon={<Cookie className="w-5 h-5" />} title="Cookies door FEIGRO">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      FEIGRO gebruikt alleen technische en functionele cookies, evenals analytische cookies 
                      die geen inbreuk maken op uw privacy. Een cookie is een klein tekstbestand dat bij het 
                      eerste bezoek aan deze website wordt opgeslagen op uw computer, tablet of smartphone.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      De cookies die wij gebruiken zijn noodzakelijk voor de technische werking van de website 
                      en uw gebruiksgemak. Ze zorgen ervoor dat de website naar behoren werkt en onthouden 
                      bijvoorbeeld uw voorkeursinstellingen. Ook kunnen wij hiermee onze website optimaliseren.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      U kunt zich afmelden voor cookies door uw internetbrowser zo in te stellen dat deze geen 
                      cookies meer opslaat. Daarnaast kunt u alle informatie die eerder is opgeslagen via de 
                      instellingen van uw browser verwijderen.
                    </p>
                  </Section>
                </div>

                <div id="gegevens-verzamelen">
                  <Section id="gegevens-verzamelen" icon={<FileText className="w-5 h-5" />} title="Hoe komen wij aan uw gegevens?">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Als u gebruik maakt van de FEIGRO website, laat u soms persoonsgegevens bij ons achter. 
                      Dit gebeurt op de volgende manieren:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
                      <li>Navigatie door de website</li>
                      <li>Invullen van het contactformulier of offerteformulier</li>
                    </ul>
                  </Section>
                </div>

                <div id="gevoelige-gegevens">
                  <Section id="gevoelige-gegevens" icon={<Users className="w-5 h-5" />} title="Bijzondere en/of gevoelige persoonsgegevens">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Onze website en/of dienst heeft niet de intentie gegevens te verzamelen over 
                      websitebezoekers die jonger zijn dan 16 jaar, tenzij ze toestemming hebben van 
                      ouders of voogd. Wij kunnen echter niet controleren of een bezoeker ouder dan 16 is. 
                      Wij raden ouders aan betrokken te zijn bij de onlineactiviteiten van hun kinderen.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Als u ervan overtuigd bent dat wij zonder toestemming persoonlijke gegevens hebben 
                      verzameld over een minderjarige, neem dan contact met ons op via{' '}
                      <a href="mailto:info@feigro.nl" className="text-brand-green hover:underline">
                        info@feigro.nl
                      </a>
                      , dan verwijderen wij deze informatie.
                    </p>
                  </Section>
                </div>

                <div id="doeleinden">
                  <Section id="doeleinden" icon={<Eye className="w-5 h-5" />} title="Wat doen we met uw gegevens?">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      FEIGRO bewaart en verwerkt uw gegevens met de volgende doelen:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 space-y-2">
                      <li>Verzamelen en analyseren van statistieken om de website te optimaliseren</li>
                      <li>Het leveren van de producten en diensten die u van ons afneemt</li>
                      <li>Het opbouwen van een contacthistorie</li>
                    </ul>
                  </Section>
                </div>

                <div id="bewaartermijn">
                  <Section id="bewaartermijn" icon={<Clock className="w-5 h-5" />} title="Hoe lang we gegevens bewaren">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      FEIGRO zal uw persoonsgegevens niet langer bewaren dan strikt nodig is om de doelen 
                      te realiseren waarvoor uw gegevens worden verzameld.
                    </p>
                    <div className="bg-brand-green/5 rounded-lg p-4 border border-brand-green/10">
                      <p className="text-slate-700 font-medium">
                        Onze standaard bewaartermijn voor website-aanvragen is <span className="text-brand-green">3 maanden</span>.
                      </p>
                    </div>
                  </Section>
                </div>

                <div id="delen">
                  <Section id="delen" icon={<Share2 className="w-5 h-5" />} title="Delen met anderen">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      FEIGRO gaat vertrouwelijk met uw persoonsgegevens om. Wij zullen nooit uw gegevens 
                      verkopen aan andere partijen.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Wij verstrekken deze uitsluitend indien dit nodig is voor de uitvoering van onze 
                      overeenkomst met u of om te voldoen aan een wettelijke verplichting.
                    </p>
                  </Section>
                </div>

                <div id="derden">
                  <Section id="derden" icon={<ExternalLink className="w-5 h-5" />} title="Websites van derden">
                    <p className="text-slate-600 leading-relaxed">
                      Dit Privacy- en cookiebeleid is niet van toepassing op websites van derden die via 
                      links op onze website kunnen worden bezocht.
                    </p>
                  </Section>
                </div>

                <div id="rechten">
                  <Section id="rechten" icon={<User className="w-5 h-5" />} title="Gegevens inzien, aanpassen of verwijderen">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. 
                      U kunt een verzoek hiertoe sturen naar:
                    </p>
                    <div className="space-y-2 mb-4">
                      <a href="mailto:info@feigro.nl" className="flex items-center gap-2 text-brand-green hover:underline">
                        <Mail className="w-4 h-4" />
                        info@feigro.nl
                      </a>
                      <a href="mailto:tfeitsma@feigro.nl" className="flex items-center gap-2 text-brand-green hover:underline">
                        <Mail className="w-4 h-4" />
                        tfeitsma@feigro.nl
                      </a>
                      <a href="mailto:jgroen@feigro.nl" className="flex items-center gap-2 text-brand-green hover:underline">
                        <Mail className="w-4 h-4" />
                        jgroen@feigro.nl
                      </a>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Om er zeker van te zijn dat het verzoek door u is gedaan, vragen wij een kopie van uw 
                      identiteitsbewijs mee te sturen. Maak hierbij uw pasfoto en Burgerservicenummer (BSN) 
                      zwart ter bescherming van uw privacy.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      FEIGRO zal binnen vier weken op uw verzoek reageren.
                    </p>
                  </Section>
                </div>

                <div id="beveiliging">
                  <Section id="beveiliging" icon={<Lock className="w-5 h-5" />} title="Beveiliging">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      FEIGRO neemt de bescherming van uw gegevens serieus en neemt passende maatregelen om 
                      misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde 
                      wijziging tegen te gaan.
                    </p>
                    <div className="bg-brand-green/5 rounded-lg p-4 border border-brand-green/10 mb-4">
                      <div className="flex items-center gap-2 text-brand-green font-medium">
                        <Lock className="w-4 h-4" />
                        De website is beveiligd met een SSL-certificaat
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Als u aanwijzingen heeft van misbruik, neem dan contact op via{' '}
                      <a href="mailto:service@feigro.nl" className="text-brand-green hover:underline">
                        service@feigro.nl
                      </a>
                    </p>
                  </Section>
                </div>

                <div id="avg">
                  <Section id="avg" icon={<CheckCircle2 className="w-5 h-5" />} title="Algemene verordening gegevensbescherming (AVG)">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      <strong>Voldoet FEIGRO aan de AVG?</strong>
                    </p>
                    <div className="bg-brand-green/5 rounded-lg p-4 border border-brand-green/10 mb-4">
                      <div className="flex items-center gap-2 text-brand-green font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                        Ja, FEIGRO voldoet aan de AVG
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Wij hebben strikte protocollen voor loginnamen en wachtwoorden en hebben inzichtelijk 
                      welke gegevens we verwerken. In elke overeenkomst met onze klanten vermelden we welke 
                      gegevens we verwerken en waarom we dat doen.
                    </p>
                  </Section>
                </div>

                <div id="naw">
                  <Section id="naw" icon={<User className="w-5 h-5" />} title="Algemene NAW- en contactgegevens">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Wanneer u een formulier invult, telefonisch contact opneemt of een overeenkomst aangaat, 
                      worden de volgende gegevens opgeslagen:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 space-y-2">
                      <li>Naam</li>
                      <li>E-mailadres</li>
                      <li>Telefoonnummer</li>
                    </ul>
                  </Section>
                </div>

                <div id="wijzigingen">
                  <Section id="wijzigingen" icon={<RefreshCw className="w-5 h-5" />} title="Wijzigingen Privacyverklaring">
                    <p className="text-slate-600 leading-relaxed">
                      FEIGRO behoudt zich het recht voor om wijzigingen aan te brengen in dit Privacy statement. 
                      Het verdient aanbeveling dit statement regelmatig na te kijken.
                    </p>
                  </Section>
                </div>
              </Accordion>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900 rounded-xl p-6 md:p-8 mt-8"
              >
                <h3 className="font-heading text-xl uppercase tracking-tight text-white mb-4">
                  Vragen over uw <span className="text-brand-green italic">privacy</span>?
                </h3>
                <p className="text-slate-400 mb-6">
                  Neem gerust contact met ons op voor vragen over hoe wij met uw gegevens omgaan.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <a
                    href="mailto:info@feigro.nl"
                    className="flex items-center gap-3 bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-brand-green" />
                    <div>
                      <div className="text-sm text-slate-400">Algemeen</div>
                      <div className="text-white">info@feigro.nl</div>
                    </div>
                  </a>
                  <a
                    href="mailto:service@feigro.nl"
                    className="flex items-center gap-3 bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-brand-green" />
                    <div>
                      <div className="text-sm text-slate-400">Service</div>
                      <div className="text-white">service@feigro.nl</div>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
