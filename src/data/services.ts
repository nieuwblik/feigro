import { ServicePageData } from '@/types';
import { seoMetadata } from './seo-metadata';
import imgWestfriesland from '@/assets/feigro-dakdekking-westfriesland.webp';
import imgInspectie from '@/assets/dakinspectie-noord-holland.webp';
import imgEnkhuizen from '@/assets/dakdekking-nederland-enkhuizen.webp';
import imgRenovatie from '@/assets/dakwerk-feitsmadakwerken-2-1.webp';
import imgRenovatieNoord from '@/assets/dakrenovatie-noordholland.webp';
import imgLekvrij from '@/assets/lekvrij-dak-nederland.webp';
import imgValbeveiliging from '@/assets/dak-valbeveiliging-montage.webp';
import imgLekkage from '@/assets/lekkage-feitsma.webp';
import imgReparatie from '@/assets/dakreparatie-nederland-enkhuizen.webp';
import imgDakreparatieWerk from '@/assets/dakreparatie-werk.webp';
import imgDakonderhoudWerk from '@/assets/dakonderhoud-werk.webp';
import imgDakrenovatieWerk from '@/assets/dakrenovatie-werk.webp';

export const vveVastgoedbeheerData: ServicePageData = {
  seo: seoMetadata.vveVastgoedbeheer,
  hero: {
    title: 'Samenwerk mogelijkheden voor VVE en Vastgoedbeheer',
    subtitle: 'Een samenwerking met Feigro Dakwerken biedt uw VvE en Vastgoed de garantie van duurzame dakduurzaamheid.',
    ctaText: 'Neem Contact Op',
    ctaHref: '/contact',
    backgroundImage: imgWestfriesland,
    highlightWordCount: 3,
  },
  featureTitle: 'Uw Voordelen',
  features: [
    {
      icon: 'TrendingUp',
      title: 'Efficiëntere planning en uitvoering van renovaties',
      description: 'Gestructureerde aanpak voor optimale planning en uitvoering.',
    },
    {
      icon: 'FileText',
      title: 'Deskundig advies en technische ondersteuning',
      description: 'Professioneel advies voor alle dakgerelateerde vraagstukken.',
    },
    {
      icon: 'Euro',
      title: 'Kostenbesparing door preventief onderhoud',
      description: 'Voorkom dure reparaties door regelmatig onderhoud.',
    },
    {
      icon: 'Calendar',
      title: 'Verlenging van de levensduur van daken',
      description: 'Maximale levensduur door professioneel beheer.',
    },
    {
      icon: 'Zap',
      title: 'Snelle respondtijd bij noodsituaties',
      description: '24/7 beschikbaar voor acute dakproblemen.',
    },
    {
      icon: 'CheckCircle',
      title: 'Compliance en verzekeringsvereisten',
      description: 'Voldoen aan alle wettelijke eisen en verzekeringen.',
    },
    {
      icon: 'Shield',
      title: 'Kwaliteitsborging en duurzaamheid',
      description: 'Gegarandeerde kwaliteit en duurzame oplossingen.',
    },
    {
      icon: 'Award',
      title: 'Kostenvoordeel door schaalgrootte',
      description: 'Aantrekkelijke prijzen door efficiënte werkwijze.',
    },
    {
      icon: 'TrendingUp',
      title: 'Hogere waarde van vastgoed',
      description: 'Goed onderhouden daken verhogen de vastgoedwaarde.',
    },
    {
      icon: 'Users',
      title: 'Langdurige samenwerking',
      description: 'Betrouwbare partner voor de lange termijn.',
    },
  ],
  info: {
    title: 'Uw daken onder onze hoede',
    titleHighlight: 'daken',
    description: 'Onze diensten helpen Vastgoedbeheerders en Verenigingen van Eigenaren om optimaal rendement te behalen uit hun vastgoed.',
    paragraphs: [
      'Naast aanzienlijke kostenbesparingen, dragen we ook bij aan de waardevermeerdering van uw eigendommen. Door zowel te zorgen voor zaken die direct deze waarde vergroten als door te bieden aan duurzame oplossingen, waarbij wij de volledige verantwoordelijkheid voor uw daken uit handen nemen.',
      'Feigro Dakwerken verzorgt professioneel onderhoud en voert volledige renovaties uit, wat resulteert in besparingen op zowel energie- als onderhoudskosten. Daarnaast voegen wij extra waarde toe door slimme daksystemen, waarmee de leefbaarheid voor uw huurders of bewoners wordt verbeterd.',
      'Elk dak is uniek, daarom bieden wij maatwerk dat volledig is afgestemd op uw specifieke eisen en behoeften. Samen verkennen we alle mogelijkheden op het gebied van duurzaamheid, waarbij we zowel kansen als uitdagingen in kaart brengen om zo een gedetailleerd plan te ontwikkelen. Of u nu een daktuin, dakterras of energieopwekkend dak voor ogen heeft, wij zorgen ervoor dat uw beschikbare dakoppervlak in stedelijke gebieden optimaal wordt benut.',
    ],
  },
  faqs: [
    {
      question: 'Wat zijn de voordelen van een samenwerking met Feigro?',
      answer: 'Kostenbesparingen, hogere vastgoedwaarde, professioneel advies, en een betrouwbare partner voor al uw dakwerkzaamheden.',
    },
    {
      question: 'Hoe vaak moet een VVE-dak worden geïnspecteerd?',
      answer: 'We adviseren minimaal een jaarlijkse inspectie om problemen tijdig te signaleren en dure reparaties te voorkomen.',
    },
    {
      question: 'Kunnen jullie ook spoedservice leveren?',
      answer: 'Ja, we zijn 24/7 bereikbaar voor noodsituaties en kunnen snel ter plaatse zijn bij acute problemen.',
    },
    {
      question: 'Werken jullie met onderhoudscontracten?',
      answer: 'Ja, we bieden meerjarige onderhoudscontracten aan voor VVE\'s en vastgoedbeheerders met vaste afspraken en tarieven.',
    },
    {
      question: 'Hoe zit het met garanties op het werk?',
      answer: 'We geven uitgebreide garanties op zowel materiaal als uitvoering, afhankelijk van het type werkzaamheden.',
    },
  ],
};

export const dakinspectieData: ServicePageData = {
  seo: seoMetadata.dakinspectie,
  hero: {
    title: 'Professionele Dakinspectie',
    subtitle: 'Een grondige dakinspectie voorkomt dure reparaties. Onze gecertificeerde dakspecialisten controleren uw dak op gebreken en advieseren over noodzakelijk onderhoud.',
    ctaText: 'Plan Inspectie',
    ctaHref: '/contact',
    backgroundImage: imgInspectie,
  },
  featureTitle: 'Alles wat we controleren',
  features: [
    {
      icon: 'Search',
      title: 'Grondige Controle',
      description: 'Wij inspecteren uw complete dak: dakbedekking, zinken, naden, en afvoeren. Niets ontsnapt aan onze aandacht.',
    },
    {
      icon: 'FileText',
      title: 'Uitgebreid Rapport',
      description: 'Na de inspectie ontvangt u een gedetailleerd rapport met foto\'s en advies over eventuele herstelwerkzaamheden.',
    },
    {
      icon: 'Shield',
      title: 'Preventief Advies',
      description: 'We adviseren u over preventief onderhoud om kostbare schade in de toekomst te voorkomen.',
    },
    {
      icon: 'Camera',
      title: 'Fotodocumentatie',
      description: 'Alle bevindingen worden fotografisch vastgelegd, zodat u zelf kunt zien wat de staat van uw dak is.',
    },
    {
      icon: 'CheckCircle',
      title: 'Gecertificeerde Inspecteurs',
      description: 'Onze dakspecialisten zijn volledig gecertificeerd en hebben jarenlange ervaring in dakinspecties.',
    },
    {
      icon: 'Clock',
      title: 'Snel Resultaat',
      description: 'Binnen 48 uur na inspectie ontvangt u het volledige inspectierapp ort met bevindingen en advies.',
    },
  ],
  info: {
    title: 'Waarom een Dakinspectie?',
    description: 'Regelmatige dakinspecties zijn essentieel voor het behoud van uw dak.',
    paragraphs: [
      'Een dak wordt dagelijks blootgesteld aan weersinvloeden zoals regen, wind, vorst en zonlicht. Door regelmatige inspectie worden kleine problemen tijdig gesignaleerd, voordat ze uitgroeien tot grote, kostbare schades.',
      'FEIGRO Dakwerken voert professionele dakinspecties uit waarbij we het volledige dak controleren op scheuren, lekkages, veroudering en andere gebreken. We adviseren u over noodzakelijk onderhoud en reparaties.',
      'Voor bedrijfspanden is een periodieke dakinspectie vaak zelfs verplicht. Wij verzorgen complete inspecties inclusief rapportage conform de geldende normen.',
    ],
  },
  faqs: [
    {
      question: 'Hoe vaak moet ik mijn dak laten inspecteren?',
      answer: 'Voor particuliere woningen adviseren we een inspectie eens per 3-5 jaar. Voor platte daken en bedrijfspanden is jaarlijkse inspectie aan te raden.',
    },
    {
      question: 'Wat zijn de kosten van een dakinspectie?',
      answer: 'De kosten variëren afhankelijk van de grootte en het type dak. Neem contact met ons op voor een vrijblijvende offerte.',
    },
    {
      question: 'Hoe lang duurt een dakinspectie?',
      answer: 'Een standaard dakinspectie duurt gemiddeld 1-2 uur, afhankelijk van de grootte en complexiteit van het dak.',
    },
    {
      question: 'Wat gebeurt er als er gebreken worden gevonden?',
      answer: 'U ontvangt een gedetailleerd rapport met alle bevindingen en een advies over noodzakelijke reparaties. Wij kunnen direct een offerte maken voor de herstelwerkzaamheden.',
    },
    {
      question: 'Kan ik erbij zijn tijdens de inspectie?',
      answer: 'Ja, u bent van harte welkom om aanwezig te zijn. Onze inspecteur kan u direct toelichting geven over de bevindingen.',
    },
  ],
};

export const dakonderhoudData: ServicePageData = {
  seo: seoMetadata.dakonderhoud,
  hero: {
    title: 'Vakkundig Dakonderhoud',
    subtitle: 'Regelmatig onderhoud verlengt de levensduur van uw dak aanzienlijk. FEIGRO zorgt voor professioneel onderhoud aan alle type daken.',
    ctaText: 'Plan Onderhoud',
    ctaHref: '/contact',
    backgroundImage: imgEnkhuizen,
  },
  featureTitle: 'Verzeker uw dak met dakonderhoud',
  featureHighlight: 'dakonderhoud',
  features: [
    {
      icon: 'Wrench',
      title: 'Preventief Onderhoud',
      description: 'We voeren regelmatig onderhoud uit om problemen te voorkomen en de levensduur van uw dak te verlengen.',
    },
    {
      icon: 'Droplet',
      title: 'Reiniging & Afvoer',
      description: 'Dakgoten en hemelwaterafvoeren worden grondig gereinigd voor optimale waterafvoer.',
    },
    {
      icon: 'Shield',
      title: 'Coating & Behandeling',
      description: 'Beschermende coatings verlengen de levensduur en verbeteren de waterdichtheid van uw dak.',
    },
    {
      icon: 'Hammer',
      title: 'Kleine Reparaties',
      description: 'Kleine gebreken en lekkages worden direct hersteld tijdens het onderhoudsbezoek.',
    },
    {
      icon: 'Calendar',
      title: 'Onderhoudscontract',
      description: 'Met een onderhoudscontract zorgen we dat uw dak altijd in optimale staat blijft.',
    },
    {
      icon: 'CheckCircle',
      title: 'Jaarlijkse Inspectie',
      description: 'Bij onderhoud voeren we altijd een grondige inspectie uit en documenteren de staat van uw dak.',
    },
  ],
  info: {
    title: 'Het Belang van Dakonderhoud',
    titleHighlight: 'Dakonderhoud',
    description: 'Professioneel dakonderhoud voorkomt grote problemen en bespaart u kosten.',
    image: imgDakonderhoudWerk,
    paragraphs: [
      'Een dak heeft regelmatig onderhoud nodig om in goede staat te blijven. Zonder onderhoud kunnen kleine problemen uitgroeien tot grote, kostbare schades. Denk aan verstopte afvoeren die tot wateroverlast leiden, of kleine scheurtjes die uitgroeien tot lekkages.',
      'FEIGRO Dakwerken verzorgt compleet dakonderhoud: van reiniging van goten en afvoeren tot het aanbrengen van beschermende coatings. We controleren alle kritieke onderdelen en voeren direct kleine reparaties uit waar nodig.',
      'Met een onderhoudscontract zorgen we dat uw dak automatisch op vaste momenten wordt gecontroleerd en onderhouden. Zo heeft u geen omkijken naar en blijft uw dak altijd in optimale staat.',
    ],
  },
  faqs: [
    {
      question: 'Hoe vaak moet mijn dak onderhouden worden?',
      answer: 'Dit hangt af van het type dak. Platte daken hebben jaarlijks onderhoud nodig, pannendaken eens per 2-3 jaar. We adviseren u graag over de ideale onderhoudsfrequentie.',
    },
    {
      question: 'Wat houdt dakonderhoud precies in?',
      answer: 'Dakonderhoud omvat reiniging van goten en afvoeren, controle op scheuren en beschadigingen, kleine reparaties, en eventueel het aanbrengen van beschermende coatings.',
    },
    {
      question: 'Kan ik zelf mijn dak onderhouden?',
      answer: 'Voor eenvoudige taken zoals het reinigen van dakgoten kunt u dit zelf doen, maar voor veiligheid en vakkundigheid raden we professioneel onderhoud aan.',
    },
    {
      question: 'Wat zijn de voordelen van een onderhoudscontract?',
      answer: 'Met een onderhoudscontract wordt uw dak automatisch op vaste momenten onderhouden. U heeft geen omkijken naar, voorkomt grote reparaties, en profiteert vaak van een korting.',
    },
    {
      question: 'Worden kleine reparaties direct uitgevoerd?',
      answer: 'Ja, kleine reparaties en gebreken die we tegenkomen tijdens het onderhoud worden direct verholpen, zodat uw dak in optimale staat blijft.',
    },
  ],
};

export const dakrenovatieData: ServicePageData = {
  seo: seoMetadata.dakrenovatie,
  hero: {
    title: 'Complete Dakrenovatie',
    subtitle: 'Is uw dak aan vernieuwing toe? FEIGRO verzorgt complete dakrenovaties van platte daken tot pannendaken. Duurzaam, professioneel en op maat.',
    ctaText: 'Vraag Offerte Aan',
    ctaHref: '/contact',
    backgroundImage: imgRenovatie,
  },
  featureTitle: 'Hoogwaardige Dakrenovatie',
  featureHighlight: 'Dakrenovatie',
  features: [
    {
      icon: 'Home',
      title: 'Totaaloplossing',
      description: 'Van demontage tot oplevering: wij verzorgen het complete renovatietraject van A tot Z.',
    },
    {
      icon: 'Leaf',
      title: 'Duurzame Materialen',
      description: 'We werken alleen met hoogwaardige, duurzame materialen voor een langdurig resultaat.',
    },
    {
      icon: 'Zap',
      title: 'Isolatie & Energiebesparing',
      description: 'Bij renovatie brengen we moderne isolatie aan voor optimale energieprestaties.',
    },
    {
      icon: 'Shield',
      title: 'Lange Garantie',
      description: 'Op al onze renovatiewerkzaamheden geven we uitgebreide garantie voor uw gemoedsrust.',
    },
    {
      icon: 'Users',
      title: 'Ervaren Vakmensen',
      description: 'Ons team van gecertificeerde dakdekkers heeft jarenlange ervaring in dakrenovaties.',
    },
    {
      icon: 'Clock',
      title: 'Planning op Maat',
      description: 'We plannen de werkzaamheden in overleg met u, rekening houdend met uw wensen en het weer.',
    },
  ],
  info: {
    title: 'Wanneer is Dakrenovatie Nodig?',
    titleHighlight: 'Dakrenovatie',
    description: 'Een dak gaat gemiddeld 20-40 jaar mee, afhankelijk van het type en onderhoud.',
    image: imgDakrenovatieWerk,
    paragraphs: [
      'Signalen dat uw dak aan renovatie toe is: herhaaldelijke lekkages, zichtbare schade aan de dakbedekking, doorbuiging, of een dak dat simpelweg aan het einde van zijn levensduur is. Een nieuwe dakbedekking voorkomt verdere schade aan de onderconstructie.',
      'FEIGRO Dakwerken heeft ruime ervaring met alle soorten dakrenovaties. Of het nu gaat om een plat EPDM-dak, bitumen dakbedekking, of een pannendak - wij zorgen voor een vakkundige renovatie die jaren meegaat.',
      'Bij elke renovatie kijken we ook naar isolatie en ventilatie. Modern geïsoleerde daken besparen fors op stookkosten en verhogen het wooncomfort. We adviseren u graag over de mogelijkheden voor uw specifieke situatie.',
    ],
  },
  faqs: [
    {
      question: 'Hoe lang duurt een dakrenovatie?',
      answer: 'Dit hangt af van de grootte en complexiteit. Een standaard woning duurt 3-7 dagen. We maken vooraf een gedetailleerde planning.',
    },
    {
      question: 'Kan ik tijdens de renovatie in mijn huis blijven wonen?',
      answer: 'Ja, in de meeste gevallen kunt u gewoon thuis blijven. We zorgen dat het huis waterdicht blijft en minimale overlast veroorzaakt.',
    },
    {
      question: 'Wat zijn de kosten van een dakrenovatie?',
      answer: 'De kosten variëren sterk afhankelijk van de oppervlakte, het gekozen materiaal en extra werkzaamheden. Neem contact op voor een vrijblijvende offerte.',
    },
    {
      question: 'Moet ik vergunning aanvragen voor dakrenovatie?',
      answer: 'In de meeste gevallen niet, als het bestaande dak wordt vervangen zonder constructiewijzigingen. We adviseren u hierover tijdens de offerte.',
    },
    {
      question: 'Welke garantie krijg ik op de renovatie?',
      answer: 'We geven minimaal 10 jaar garantie op materiaal en uitvoering. De exacte garantievoorwaarden bespreken we bij de offerte.',
    },
  ],
};

export const dakbedekkingVervangenData: ServicePageData = {
  seo: seoMetadata.dakbedekkingVervangen,
  hero: {
    title: 'Dakbedekking Vervangen',
    subtitle: 'Uw dakbedekking aan vervanging toe? FEIGRO vervangt professioneel alle soorten dakbedekkingen. EPDM, bitumen, PVC of pannen - wij doen het allemaal.',
    ctaText: 'Vraag Advies Aan',
    ctaHref: '/contact',
    backgroundImage: imgRenovatieNoord,
  },
  featureTitle: 'Waarom kiezen voor FEIGRO?',
  features: [
    {
      icon: 'Layers',
      title: 'Alle Materialen',
      description: 'EPDM, bitumen, PVC, dakpannen - wij verwerken alle type dakbedekkingen professioneel.',
    },
    {
      icon: 'BadgeCheck',
      title: 'Erkend Installateur',
      description: 'We zijn erkend installateur van alle grote merken en kunnen fabrieksgarantie bieden.',
    },
    {
      icon: 'Recycle',
      title: 'Milieubewust',
      description: 'Oude dakbedekking wordt op milieuvriendelijke wijze afgevoerd en waar mogelijk gerecycled.',
    },
    {
      icon: 'TrendingUp',
      title: 'Moderne Technieken',
      description: 'We werken met de nieuwste technieken en materialen voor het beste resultaat.',
    },
    {
      icon: 'Euro',
      title: 'Scherpe Prijzen',
      description: 'Door directe inkoop bij fabrikanten kunnen we scherpe prijzen bieden zonder in te boeten op kwaliteit.',
    },
    {
      icon: 'Award',
      title: 'Kwalitatief Werk',
      description: 'Al onze vakmannen zijn gecertificeerd en hebben jarenlange ervaring in dakbedekking.',
    },
  ],
  info: {
    title: 'Het Vervangen van Dakbedekking',
    description: 'Een nieuwe dakbedekking zorgt voor een waterdicht en duurzaam dak.',
    paragraphs: [
      'Dakbedekking heeft een beperkte levensduur. EPDM gaat 40-50 jaar mee, bitumen 15-25 jaar, en dakpannen 30-50 jaar. Als de dakbedekking aan vernieuwing toe is, is tijdige vervanging cruciaal om lekkages en verdere schade te voorkomen.',
      'FEIGRO Dakwerken is specialist in het vervangen van alle soorten dakbedekkingen. We adviseren u over het meest geschikte materiaal voor uw situatie, rekening houdend met budget, duurzaamheid en esthetiek.',
      'Bij het vervangen van de dakbedekking controleren we altijd ook de onderconstructie en isolatie. Zo garanderen we een compleet waterdicht en goed geïsoleerd dak dat jarenlang meegaat.',
    ],
  },
  faqs: [
    {
      question: 'Welke dakbedekking is het beste voor mijn platte dak?',
      answer: 'EPDM rubber is zeer populair vanwege de lange levensduur (40-50 jaar) en lage onderhoudskosten. Bitumen is een goedkoper alternatief. We adviseren u graag persoonlijk.',
    },
    {
      question: 'Kan de oude dakbedekking blijven liggen?',
      answer: 'In sommige gevallen kan nieuwe dakbedekking over de oude heen worden gelegd. We beoordelen tijdens inspectie of dit mogelijk en verstandig is.',
    },
    {
      question: 'Hoe lang gaat een nieuwe dakbedekking mee?',
      answer: 'Dit hangt af van het materiaal: EPDM 40-50 jaar, bitumen 15-25 jaar, PVC 30-40 jaar, en dakpannen 30-50 jaar.',
    },
    {
      question: 'Wat gebeurt er met de oude dakbedekking?',
      answer: 'We voeren de oude dakbedekking op milieuvriendelijke wijze af conform de geldende regelgeving en recyclen waar mogelijk.',
    },
    {
      question: 'Is isolatie standaard inbegrepen?',
      answer: 'Isolatie is niet standaard inbegrepen maar wel sterk aan te raden. We kunnen dit direct meenemen in de offerte.',
    },
  ],
};

export const bitumenDakbedekkingData: ServicePageData = {
  seo: seoMetadata.bitumenDakbedekking,
  hero: {
    title: 'Bitumen Dakbedekking',
    subtitle: 'Bitumen dakbedekking: betrouwbaar, betaalbaar en bewezen. FEIGRO is specialist in het aanbrengen van bitumen op platte daken.',
    ctaText: 'Meer Informatie',
    ctaHref: '/contact',
    backgroundImage: imgLekvrij,
  },
  featureTitle: 'Voordelen van Bitumen',
  features: [
    {
      icon: 'Shield',
      title: 'Waterdicht',
      description: 'Bitumen is volledig waterdicht en beschermt uw dak optimaal tegen regen en vocht.',
    },
    {
      icon: 'Euro',
      title: 'Kosteneffectief',
      description: 'Bitumen biedt een uitstekende prijs-kwaliteitverhouding voor platte daken.',
    },
    {
      icon: 'Flame',
      title: 'Brandveilig',
      description: 'Bitumen dakbedekking voldoet aan alle brandveiligheidseisen en is moeilijk ontvlambaar.',
    },
    {
      icon: 'Wrench',
      title: 'Eenvoudig Repareerbaar',
      description: 'Mocht er schade ontstaan, dan is bitumen relatief eenvoudig en goedkoop te repareren.',
    },
    {
      icon: 'Thermometer',
      title: 'Weerbestendig',
      description: 'Bitumen is bestand tegen extreme temperaturen, van vorst tot hitte.',
    },
    {
      icon: 'CheckCircle',
      title: 'Bewezen Kwaliteit',
      description: 'Bitumen wordt al tientallen jaren toegepast en heeft bewezen kwaliteit.',
    },
  ],
  info: {
    title: 'Bitumen Dakbedekking: Bewezen Technologie',
    description: 'Bitumen is een veelgebruikt materiaal voor platte daken.',
    paragraphs: [
      'Bitumen dakbedekking, ook wel APP-dakbedekking genoemd, bestaat uit meerdere lagen bitumen die aan elkaar worden gesmolten. Dit zorgt voor een naadloze, waterdichte afdekking die uitstekend beschermt tegen alle weersomstandigheden.',
      'FEIGRO Dakwerken heeft jarenlange ervaring met het aanbrengen van bitumen dakbedekking. We werken uitsluitend met A-merken en gecertificeerde materialen. De levensduur van bitumen is 15-25 jaar, afhankelijk van het type en onderhoud.',
      'Bitumen is vooral geschikt voor grotere platte daken zoals op bedrijfspanden, appartementen en utiliteitsgebouwen. Het is minder geschikt voor kleine, moeilijk bereikbare daken vanwege de branders die gebruikt worden bij de installatie.',
    ],
  },
  faqs: [
    {
      question: 'Hoe lang gaat bitumen dakbedekking mee?',
      answer: 'Bij goede aanleg en regelmatig onderhoud gaat bitumen dakbedekking 15-25 jaar mee. Dubbele lagen gaan langer mee dan enkele laag.',
    },
    {
      question: 'Is bitumen geschikt voor mijn platte dak?',
      answer: 'Bitumen is geschikt voor vrijwel alle platte daken. We komen graag langs voor een inspectie en persoonlijk advies.',
    },
    {
      question: 'Wat zijn de kosten van bitumen dakbedekking?',
      answer: 'Bitumen is een van de meest kosteneffectieve oplossingen voor platte daken. Prijzen beginnen rond €40-60 per m². Neem contact op voor een exacte offerte.',
    },
    {
      question: 'Ruikt bitumen niet?',
      answer: 'Tijdens het aanbrengen kan er een tijdelijke geur ontstaan door de branders. Na voltooiing is er geen blijvende geur.',
    },
    {
      question: 'Kan bitumen over oude dakbedekking heen?',
      answer: 'In sommige gevallen kan dit, mits de ondergrond goed is. We beoordelen dit tijdens de inspectie en adviseren de beste oplossing.',
    },
  ],
};

export const epdmDakbedekkingData: ServicePageData = {
  seo: seoMetadata.epdmDakbedekking,
  hero: {
    title: 'EPDM Dakbedekking',
    subtitle: 'EPDM rubber dakbedekking: 50 jaar levensduur, onderhoudsarm en hoogwaardig. FEIGRO is gecertificeerd EPDM specialist.',
    ctaText: 'Ontdek EPDM',
    ctaHref: '/contact',
    backgroundImage: imgEnkhuizen,
  },
  featureTitle: 'Waarom kiezen voor EPDM?',
  features: [
    {
      icon: 'Calendar',
      title: '50 Jaar Levensduur',
      description: 'EPDM rubber gaat 40-50 jaar mee en is daarmee een van de meest duurzame dakbedekkingen.',
    },
    {
      icon: 'Droplets',
      title: 'Volledig Waterdicht',
      description: 'EPDM is 100% waterdicht en beschermt uw dak optimaal tegen alle weersomstandigheden.',
    },
    {
      icon: 'Wind',
      title: 'Flexibel & Sterk',
      description: 'Het rubber is flexibel en kan mee met bewegingen van het dak zonder te scheuren.',
    },
    {
      icon: 'Sun',
      title: 'UV-Bestendig',
      description: 'EPDM is zeer goed bestand tegen UV-straling en verweert nauwelijks.',
    },
    {
      icon: 'Leaf',
      title: 'Milieuvriendelijk',
      description: 'EPDM is milieuvriendelijk, recyclebaar en bevat geen schadelijke stoffen.',
    },
    {
      icon: 'Hammer',
      title: 'Onderhoudsarm',
      description: 'EPDM vereist minimaal onderhoud. Een periodieke controle is voldoende.',
    },
  ],
  info: {
    title: 'EPDM: De Premium Keuze',
    description: 'EPDM rubber dakbedekking is de hoogwaardige oplossing voor platte daken.',
    paragraphs: [
      'EPDM (Ethyleen Propylene Diene Monomer) is een synthetisch rubber dat speciaal is ontwikkeld voor dakbedekking. Het materiaal is extreem duurzaam en gaat 40-50 jaar mee zonder noemenswaardige kwaliteitsvermindering.',
      'FEIGRO Dakwerken is gecertificeerd EPDM specialist. We werken met toonaangevende merken zoals Firestone, Hertalan en Elevate. Het rubber wordt in grote bahnen aangebracht, wat zorgt voor minimale naden en optimale waterdichtheid.',
      'EPDM is zeer geschikt voor woningen, maar ook voor bedrijfspanden en utiliteitsgebouwen. Het materiaal is flexibel, waardoor het geschikt is voor complexe dakvormen met hoeken, naden en doorbrekingen. De investering is hoger dan bitumen, maar dit wordt ruimschoots terugverdiend door de lange levensduur en lage onderhoudskosten.',
    ],
  },
  faqs: [
    {
      question: 'Waarom is EPDM duurder dan bitumen?',
      answer: 'EPDM heeft hogere materiaalkosten maar gaat 2-3x langer mee (40-50 jaar vs 15-25 jaar) en vereist minder onderhoud. Op lange termijn is EPDM vaak voordeliger.',
    },
    {
      question: 'Kan EPDM op elk plat dak?',
      answer: 'Ja, EPDM is geschikt voor vrijwel alle platte daken. Het kan zowel mechanisch bevestigd als volledig gelijmd worden.',
    },
    {
      question: 'Hoe zit het met garantie op EPDM?',
      answer: 'Fabrikanten geven tot 20 jaar materiaalgarantie. Op onze installatie geven we 10-15 jaar garantie, afhankelijk van het gekozen systeem.',
    },
    {
      question: 'Is EPDM gevoelig voor scheuren?',
      answer: 'Nee, EPDM is zeer scheurbestendig en flexibel. Het kan meebewegen met het dak zonder beschadigd te raken.',
    },
    {
      question: 'Welk merk EPDM gebruiken jullie?',
      answer: 'We werken met A-merken zoals Firestone, Hertalan en Elevate. We adviseren u het beste merk voor uw specifieke situatie.',
    },
  ],
};

export const daklekkageData: ServicePageData = {
  seo: seoMetadata.daklekkage,
  hero: {
    title: 'Daklekkage? Direct Hulp!',
    subtitle: 'Acute daklekkage? FEIGRO staat 24/7 voor u klaar. Snelle respons, vakkundige reparatie. Bel ons direct en we komen in actie.',
    ctaText: 'Bel 24/7: +31 6 1234 5678',
    ctaHref: '/spoedservice',
    backgroundImage: imgLekkage,
    highlightWordCount: 2,
  },
  featureTitle: 'Onze lekkage aanpak',
  featureHighlight: 'lekkage',
  features: [
    {
      icon: 'Phone',
      title: '24/7 Bereikbaar',
      description: 'Dag en nacht, ook in het weekend en op feestdagen zijn we bereikbaar voor spoedgevallen.',
    },
    {
      icon: 'Zap',
      title: 'Snelle Respons',
      description: 'Bij acute lekkages zijn we er binnen 2-4 uur om de schade te beperken.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Noodreparatie',
      description: 'We voeren direct een noodreparatie uit om verdere waterschade te voorkomen.',
    },
    {
      icon: 'Search',
      title: 'Lekdetectie',
      description: 'Met professionele apparatuur traceren we precies waar de lekkage zich bevindt.',
    },
    {
      icon: 'Hammer',
      title: 'Definitieve Oplossing',
      description: 'Na de noodmaatregel voeren we op afspraak een definitieve, duurzame reparatie uit.',
    },
    {
      icon: 'FileText',
      title: 'Rapportage',
      description: 'U ontvangt een gedetailleerd rapport met foto\'s voor uw verzekering.',
    },
  ],
  info: {
    title: 'Wat Te Doen Bij Daklekkage?',
    titleHighlight: 'Daklekkage?',
    description: 'Snelhandelen bij daklekkage voorkomt grote schade aan uw interieur.',
    image: imgLekkage,
    paragraphs: [
      'Bij daklekkage is snelheid cruciaal. Water kan grote schade aanrichten aan plafonds, muren, isolatie en zelfs aan de constructie. Ook kan schimmelvorming ontstaan, wat gezondheidsrisico\'s met zich meebrengt.',
      'FEIGRO Dakwerken biedt 24/7 spoedservice voor acute daklekkages. Na uw melding komen we zo snel mogelijk ter plaatse om de lekkage te stoppen en verdere schade te voorkomen. We voeren een grondige inspectie uit om de oorzaak van de lekkage te achterhalen.',
      'In veel gevallen kunnen we direct een noodreparatie uitvoeren. Hierna plannen we op korte termijn een definitieve, duurzame reparatie. U ontvangt een compleet rapport met foto\'s dat u kunt gebruiken voor uw verzekering.',
    ],
  },
  faqs: [
    {
      question: 'Hoe snel kunnen jullie ter plaatse zijn?',
      answer: 'Bij acute lekkages streven we ernaar binnen 2-4 uur ter plaatse te zijn, afhankelijk van uw locatie en de drukte.',
    },
    {
      question: 'Wat zijn de kosten van spoedservice?',
      answer: 'Voor spoedservice buiten kantooruren brengen we een toeslag in rekening. De exacte kosten bespreken we telefonisch vooraf.',
    },
    {
      question: 'Wordt dit vergoed door mijn verzekering?',
      answer: 'Dit hangt af van uw dekking. In veel gevallen worden noodreparaties vergoed. We leveren alle benodigde documentatie voor uw claim.',
    },
    {
      question: 'Wat moet ik doen in afwachting van jullie komst?',
      answer: 'Plaats emmers/bakken onder de lekkage, verwijder waardevolle spullen uit de buurt, en probeer de waterstroom niet zelf te stoppen door het dak op te gaan.',
    },
    {
      question: 'Kunnen jullie meteen een definitieve reparatie doen?',
      answer: 'Als het mogelijk is en het weer het toelaat, voeren we graag direct een definitieve reparatie uit. Anders plannen we dit op korte termijn in.',
    },
    {
      question: 'Hoe kan ik lekkage in de toekomst voorkomen?',
      answer: 'Regelmatig onderhoud en inspectie zijn cruciaal. We adviseren een jaarlijkse controle en het direct herstellen van kleine gebreken.',
    },
  ],
};
// (dakinspectieData, dakonderhoudData, dakrenovatieData, etc.)

export const dakreparatieData: ServicePageData = {
  seo: seoMetadata.dakreparatie,
  hero: {
    title: 'Professionele Dakreparatie',
    subtitle: 'Dakschade of lekkage? FEIGRO repareert snel en vakkundig alle soorten dakschades. Van kleine reparaties tot grote herstelwerkzaamheden.',
    ctaText: 'Plan Reparatie',
    ctaHref: '/contact',
    backgroundImage: imgReparatie,
  },
  featureTitle: 'Zekerheid bij reparatie',
  featureHighlight: 'Zekerheid',
  features: [
    {
      icon: 'Zap',
      title: 'Snelle Service',
      description: 'Bij urgente reparaties zijn we er snel. Snelle service binnen 24 uur beschikbaar.',
    },
    {
      icon: 'Wrench',
      title: 'Alle Reparaties',
      description: 'Van kleine lekkages tot grote schades - wij repareren professioneel alle type dakschades.',
    },
    {
      icon: 'Shield',
      title: 'Garantie op Werk',
      description: 'Op al onze reparaties geven we uitgebreide garantie voor uw gemoedsrust.',
    },
    {
      icon: 'Search',
      title: 'Grondige Inspectie',
      description: 'We inspecteren het volledige dak om alle schades en potentiële problemen te identificeren.',
    },
    {
      icon: 'CheckCircle',
      title: 'Vakmanschap',
      description: 'Onze ervaren dakdekkers werken volgens de hoogste kwaliteitsnormen.',
    },
    {
      icon: 'Euro',
      title: 'Eerlijke Prijzen',
      description: 'Transparante prijzen zonder verrassingen. U weet vooraf wat de reparatie kost.',
    },
  ],
  info: {
    title: 'Wanneer is Dakreparatie Nodig?',
    titleHighlight: 'Dakreparatie',
    description: 'Tijdige reparatie voorkomt grotere schade en hogere kosten.',
    image: imgDakreparatieWerk,
    paragraphs: [
      'Dakschade kan ontstaan door storm, hagel, veroudering of gebrekkig onderhoud. Kleine scheurtjes of losse dakpannen lijken misschien onschuldig, maar kunnen leiden tot waterinfiltratie en grote schade aan de onderconstructie.',
      'FEIGRO Dakwerken repareert professioneel alle soorten dakschades. Of het nu gaat om een lekkend plat dak, beschadigde dakpannen, kapotte zinken of schade aan de dakgoot - wij hebben de expertise en ervaring om het probleem snel en duurzaam op te lossen.',
      'Bij elke reparatie voeren we een grondige inspectie uit om te controleren of er meer schade is. Zo voorkom en we dat u later opnieuw met problemen wordt geconfronteerd. We werken alleen met hoogwaardige materialen die passen bij uw bestaande dak.',
    ],
  },
  faqs: [
    {
      question: 'Hoe snel kunnen jullie een reparatie uitvoeren?',
      answer: 'Voor urgente reparaties kunnen we vaak binnen 24-48 uur ter plaatse zijn. Reguliere reparaties plannen we binnen 1-2 weken in.',
    },
    {
      question: 'Wat zijn de kosten van een dakreparatie?',
      answer: 'Dit hangt af van de omvang en aard van de schade. Na inspectie maken we een gedetailleerde offerte. Kleine reparaties starten vanaf €150.',
    },
    {
      question: 'Krijg ik garantie op de reparatie?',
      answer: 'Ja, op al onze reparaties geven we minimaal 2 jaar garantie op materiaal en uitvoering.',
    },
    {
      question: 'Wordt dakreparatie vergoed door mijn verzekering?',
      answer: 'Dit hangt af van uw dekking en de oorzaak van de schade. We leveren alle benodigde documentatie voor uw claim.',
    },
    {
      question: 'Kunnen jullie ook preventief advies geven?',
      answer: 'Absoluut! We adviseren u graag over preventief onderhoud om toekomstige schade te voorkomen.',
    },
  ],
};

export const valbeveiligingssysteemData: ServicePageData = {
  seo: seoMetadata.valbeveiliging,
  hero: {
    title: 'Valbeveiliging systemen',
    subtitle: 'Veilig werken op hoogte met gecertificeerde valbeveiligingssystemen. FEIGRO installeert professionele systemen volgens de nieuwste NEN-normen.',
    ctaText: 'Vraag Advies',
    ctaHref: '/contact',
    backgroundImage: imgValbeveiliging,
    highlightWordCount: 1,
    highlightPosition: 'start',
  },
  featureTitle: 'Kenmerken van onze systemen',
  featureHighlight: 'Kenmerken',
  features: [
    {
      icon: 'ShieldCheck',
      title: 'NEN Gecertificeerd',
      description: 'Al onze systemen voldoen aan de nieuwste NEN 3509 normen voor valbeveiliging.',
    },
    {
      icon: 'Users',
      title: 'Maatwerk Oplossingen',
      description: 'Elk dak is uniek. We ontwerpen een valbeveiligingssysteem op maat voor uw situatie.',
    },
    {
      icon: 'Wrench',
      title: 'Professionele Installatie',
      description: 'Onze gecertificeerde monteurs installeren het systeem vakkundig en veilig.',
    },
    {
      icon: 'FileText',
      title: 'Complete Documentatie',
      description: 'U ontvangt alle benodigde certificaten en documentatie voor inspectie en verzekering.',
    },
    {
      icon: 'Calendar',
      title: 'Periodieke Keuring',
      description: 'We verzorgen de verplichte jaarlijkse keuring en onderhoud van uw valbeveiligingssysteem.',
    },
    {
      icon: 'Award',
      title: 'Erkend Installateur',
      description: 'FEIGRO is erkend installateur van toonaangevende merken valbeveiligingssystemen.',
    },
  ],
  info: {
    title: 'Waarom Valbeveiliging?',
    titleHighlight: 'Valbeveiliging?',
    description: 'Valbeveiliging is wettelijk verplicht bij werkzaamheden op hoogte.',
    paragraphs: [
      'Werken op hoogte brengt risico\'s met zich mee. Valbeveiliging is niet alleen wettelijk verplicht, maar beschermt ook uw medewerkers en onderhoudspartners tegen levensgevaarlijke valongevallen.',
      'FEIGRO Dakwerken is specialist in het ontwerpen en installeren van valbeveiligingssystemen. We bieden verschillende oplossingen: van eenvoudige dakrandbeveiliging tot complete lijnensystemen en valstopvoorzieningen. Elk systeem wordt op maat ontworpen voor uw specifieke dak en situatie.',
      'Na installatie verzorgen we de verplichte jaarlijkse keuring en het onderhoud van het systeem. Zo bent u altijd verzekerd van een veilig en goed functionerend valbeveiligingssysteem dat voldoet aan alle wettelijke eisen.',
    ],
  },
  faqs: [
    {
      question: 'Is valbeveiliging wettelijk verplicht?',
      answer: 'Ja, bij werkzaamheden op hoogte boven 2,5 meter is valbeveiliging wettelijk verplicht volgens de Arbeidsomstandighedenwet.',
    },
    {
      question: 'Welk systeem is geschikt voor mijn dak?',
      answer: 'Dit hangt af van uw daktype, frequentie van gebruik en budget. We adviseren u graag over de beste oplossing voor uw situatie.',
    },
    {
      question: 'Hoe vaak moet het systeem gekeurd worden?',
      answer: 'Valbeveiligingssystemen moeten minimaal eenmaal per jaar worden gekeurd door een erkend bedrijf. FEIGRO verzorgt deze keuringen.',
    },
    {
      question: 'Wat zijn de kosten van een valbeveiligingssysteem?',
      answer: 'Dit varieert sterk afhankelijk van het type systeem en de grootte van het dak. Prijzen starten vanaf €1.500 voor eenvoudige systemen.',
    },
    {
      question: 'Kan valbeveiliging achteraf worden geïnstalleerd?',
      answer: 'Ja, valbeveiliging kan op vrijwel elk bestaand dak worden geïnstalleerd. We bekijken de mogelijkheden tijdens een inspectie.',
    },
  ],
};
