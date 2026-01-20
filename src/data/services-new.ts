import { ServicePageData } from '@/types';
import { seoMetadata } from './seo-metadata';

// Existing service data exports remain the same...
// (dakinspectieData, dakonderhoudData, dakrenovatieData, etc.)

export const dakreparatieData: ServicePageData = {
    seo: {
        title: 'Dakreparatie | Snelle en Vakkundige Reparaties | FEIGRO Dakwerken',
        description: 'Professionele dakreparatie door FEIGRO. Van kleine lekkages tot grote schades - wij repareren snel en vakkundig. Bel voor spoedservice!',
        keywords: 'dakreparatie, dak repareren, lekkage reparatie, dakschade, dakspecialist',
        ogImage: '/images/og-dakreparatie.jpg',
    },
    hero: {
        title: 'Professionele Dakreparatie',
        subtitle: 'Dakschade of lekkage? FEIGRO repareert snel en vakkundig alle soorten dakschades. Van kleine reparaties tot grote herstelwerkzaamheden.',
        ctaText: 'Plan Reparatie',
        ctaHref: '/contact',
        backgroundImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
    },
    features: [
        {
            icon: 'Zap',
            title: 'Snelle Service',
            description: 'Bij urgente reparaties zijn we er snel. Spoedservice binnen 24 uur beschikbaar.',
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
            icon: 'DollarSign',
            title: 'Eerlijke Prijzen',
            description: 'Transparante prijzen zonder verrassingen. U weet vooraf wat de reparatie kost.',
        },
    ],
    info: {
        title: 'Wanneer is Dakreparatie Nodig?',
        description: 'Tijdige reparatie voorkomt grotere schade en hogere kosten.',
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
    seo: {
        title: 'Valbeveiligingssysteem | Veilig Werken op Hoogte | FEIGRO Dakwerken',
        description: 'Professionele valbeveiligingssystemen van FEIGRO. Gecertificeerde installatie volgens NEN-normen. Veilig werken op hoogte gegarandeerd.',
        keywords: 'valbeveiliging, valbeveiligingssysteem, dakbeveiliging, veilig werken op hoogte, valbeveiliging dak',
        ogImage: '/images/og-valbeveiliging.jpg',
    },
    hero: {
        title: 'Valbeveiligingssysteem',
        subtitle: 'Veilig werken op hoogte met gecertificeerde valbeveiligingssystemen. FEIGRO installeert professionele systemen volgens de nieuwste NEN-normen.',
        ctaText: 'Vraag Advies',
        ctaHref: '/contact',
        backgroundImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop',
    },
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
