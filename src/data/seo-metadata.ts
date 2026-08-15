import { PageSEO } from "@/types";

/**
 * Centrale meta-data per pagina.
 * Structuur van elke description: dienst + werkgebied + onderscheidend voordeel + call-to-action.
 * Lengte: 140-158 tekens. Titels: max 60 tekens inclusief merknaam.
 */
export const seoMetadata: Record<string, PageSEO> = {
  home: {
    title: "Dakdekker Noord-Holland, Flevoland & Utrecht | Feigro",
    description:
      "Dakdekker in Noord-Holland, Flevoland en Utrecht. Feigro doet dakrenovatie, dakonderhoud en 24/7 spoedhulp bij lekkage. Vraag een gratis offerte aan.",
    canonicalUrl: "/",
    keywords: [
      "dakdekker Noord-Holland",
      "dakdekker Flevoland",
      "dakdekker Utrecht",
      "dakdekker Enkhuizen",
      "dakdekker West-Friesland",
      "plat dak specialist",
      "24/7 noodreparatie dak",
      "Feigro Dakwerken",
    ],
  },

  dakinspectie: {
    title: "Dakinspectie | Conditie van uw dak in beeld | Feigro",
    description:
      "Dakinspectie door Feigro in Noord-Holland, Flevoland en Utrecht. Wij leggen schade, lekkagerisico en onderhoud vast in een helder rapport. Plan uw inspectie.",
    canonicalUrl: "/dakinspectie",
    keywords: [
      "dakinspectie",
      "dak laten controleren",
      "dakinspectie Noord-Holland",
      "lekkage opsporen",
      "conditiemeting dak NEN 2767",
      "Feigro",
    ],
  },

  dakonderhoud: {
    title: "Dakonderhoud | Voorkom lekkage en schade | Feigro",
    description:
      "Periodiek dakonderhoud in Noord-Holland, Flevoland en Utrecht. Feigro houdt uw platte of hellende dak lekvrij met vaste onderhoudsrondes. Vraag advies aan.",
    canonicalUrl: "/dakonderhoud",
    keywords: [
      "dakonderhoud",
      "onderhoudscontract dak",
      "preventief dakonderhoud",
      "dakgoot reinigen",
      "dakonderhoud VvE",
      "dakdekker Noord-Holland",
    ],
  },

  dakrenovatie: {
    title: "Dakrenovatie | Plat dak en dakisolatie | Feigro",
    description:
      "Complete dakrenovatie in Noord-Holland, Flevoland en Utrecht: nieuwe dakbedekking, isolatie en detaillering met garantie. Vraag een vrijblijvende offerte aan.",
    canonicalUrl: "/dakrenovatie",
    keywords: [
      "dakrenovatie",
      "plat dak renoveren",
      "dakisolatie",
      "nieuwe dakbedekking",
      "dakrenovatie Noord-Holland",
      "dakrenovatie Almere",
    ],
  },

  dakbedekkingVervangen: {
    title: "Dakbedekking vervangen | EPDM, bitumen, PVC | Feigro",
    description:
      "Dakbedekking vervangen in Noord-Holland, Flevoland en Utrecht. Feigro legt EPDM, bitumen of PVC vakkundig aan, inclusief isolatie. Vraag een offerte aan.",
    canonicalUrl: "/dakbedekking-vervangen",
    keywords: [
      "dakbedekking vervangen",
      "nieuwe dakbedekking",
      "EPDM dak",
      "bitumen dakbedekking",
      "PVC dakbedekking",
      "plat dak vernieuwen",
    ],
  },

  bitumenDakbedekking: {
    title: "Bitumen dakbedekking | Plat dak specialist | Feigro",
    description:
      "Bitumen dakbedekking voor platte daken in Noord-Holland, Flevoland en Utrecht. Waterdicht, brandveilig en tot 25 jaar levensduur. Vraag een offerte aan.",
    canonicalUrl: "/bitumen-dakbedekking",
    keywords: [
      "bitumen dakbedekking",
      "plat dak bitumen",
      "APP dakbedekking",
      "SBS dakbedekking",
      "dakleer vervangen",
      "waterdicht plat dak",
    ],
  },

  epdmDakbedekking: {
    title: "EPDM dakbedekking | Rubber dak, lange levensduur | Feigro",
    description:
      "EPDM dakbedekking door Feigro in Noord-Holland, Flevoland en Utrecht. Naadloos rubber dak, onderhoudsarm en decennia lang waterdicht. Vraag advies aan.",
    canonicalUrl: "/epdm-dakbedekking",
    keywords: [
      "EPDM dakbedekking",
      "rubber dakbedekking",
      "EPDM plat dak",
      "naadloos dak",
      "EPDM dakdekker Noord-Holland",
      "onderhoudsarm dak",
    ],
  },

  daklekkage: {
    title: "Daklekkage verhelpen | Spoed dakdekker 24/7 | Feigro",
    description:
      "Daklekkage in Noord-Holland, Flevoland of Utrecht? Feigro spoort de lekkage op en repareert direct. 24/7 spoed dakdekker bereikbaar. Bel voor snelle hulp.",
    canonicalUrl: "/daklekkage",
    keywords: [
      "daklekkage",
      "lekkage plat dak",
      "spoed dakdekker",
      "24/7 noodreparatie dak",
      "lekkage opsporen",
      "daklekkage Noord-Holland",
    ],
  },

  overOns: {
    title: "Over Feigro | Dakdekkers uit Enkhuizen",
    description:
      "Feigro is de samenwerking van Feitsma Dakwerken en Groen Dakwerken uit Enkhuizen. Ervaren dakdekkers voor Noord-Holland, Flevoland en Utrecht. Lees ons verhaal.",
    canonicalUrl: "/over-ons",
    keywords: [
      "Feigro Dakwerken",
      "Feitsma Dakwerken",
      "Groen Dakwerken",
      "dakdekker Enkhuizen",
      "dakdekkersbedrijf Noord-Holland",
      "vakmanschap dak",
    ],
  },

  projecten: {
    title: "Dakprojecten | Ons werk in beeld | Feigro",
    description:
      "Bekijk uitgevoerde dakprojecten van Feigro in Noord-Holland, Flevoland en Utrecht: dakrenovatie, isolatie en nieuwe dakbedekking. Zie het resultaat per project.",
    canonicalUrl: "/projecten",
    keywords: [
      "dakprojecten",
      "dakrenovatie voorbeelden",
      "dakdekker portfolio",
      "plat dak project",
      "dakisolatie project",
      "Feigro projecten",
    ],
  },

  spoedservice: {
    title: "Spoedservice dak | Lekkage melden 24/7 | Feigro",
    description:
      "Acute daklekkage of stormschade? Meld het direct bij Feigro. 24/7 spoed dakdekker in Noord-Holland, Flevoland en Utrecht, snel ter plaatse om schade te stoppen.",
    canonicalUrl: "/spoedservice",
    keywords: [
      "lekkage melden",
      "spoed dakdekker",
      "24/7 dakdekker",
      "noodreparatie dak",
      "stormschade dak",
      "spoedservice Noord-Holland",
    ],
  },

  contact: {
    title: "Contact | Gratis offerte dakdekker | Feigro",
    description:
      "Neem contact op met Feigro in Enkhuizen voor advies of een gratis offerte. Dakdekker voor Noord-Holland, Flevoland en Utrecht. Bel of stuur uw aanvraag door.",
    canonicalUrl: "/contact",
    keywords: [
      "contact dakdekker",
      "offerte dakwerk",
      "dakdekker Enkhuizen",
      "dakdekker Noord-Holland",
      "dakdekker Flevoland",
      "dakdekker Utrecht",
    ],
  },

  dakreparatie: {
    title: "Dakreparatie | Snel en vakkundig hersteld | Feigro",
    description:
      "Dakreparatie in Noord-Holland, Flevoland en Utrecht. Van scheur of losse naad tot stormschade: Feigro herstelt uw dak duurzaam. Vraag direct een reparatie aan.",
    canonicalUrl: "/dakreparatie",
    keywords: [
      "dakreparatie",
      "dak repareren",
      "reparatie plat dak",
      "stormschade herstellen",
      "spoed dakreparatie",
      "dakreparatie West-Friesland",
    ],
  },

  valbeveiliging: {
    title: "Valbeveiliging dak | Veilig werken op hoogte | Feigro",
    description:
      "Valbeveiliging voor daken in Noord-Holland, Flevoland en Utrecht. Feigro adviseert, installeert en keurt ankerpunten en lijnsystemen. Vraag een offerte aan.",
    canonicalUrl: "/valbeveiliging",
    keywords: [
      "valbeveiliging dak",
      "ankerpunten dak",
      "kabelsysteem dak",
      "veilig werken op hoogte",
      "valbeveiliging keuren",
      "dakveiligheid VvE",
    ],
  },

  vveVastgoedbeheer: {
    title: "VvE & vastgoedbeheer | Dakonderhoud op maat | Feigro",
    description:
      "Dakonderhoud voor VvE's en vastgoedbeheerders in Noord-Holland, Flevoland en Utrecht. Meerjarenplanning, vaste aanspreekpunten en 24/7 spoed. Vraag advies aan.",
    canonicalUrl: "/vve-vastgoedbeheer",
    keywords: [
      "VvE dakonderhoud",
      "vastgoedbeheer dak",
      "meerjarenonderhoudsplan dak",
      "MJOP dak",
      "dakonderhoud appartementen",
      "dakdekker VvE Noord-Holland",
    ],
  },

  diensten: {
    title: "Diensten dakdekker | Alle dakwerken | Feigro",
    description:
      "Alle dakwerken van Feigro: dakrenovatie, dakreparatie, dakonderhoud, daklekkage en valbeveiliging in Noord-Holland, Flevoland en Utrecht. Bekijk onze diensten.",
    canonicalUrl: "/diensten",
    keywords: [
      "dakdekker diensten",
      "dakrenovatie",
      "dakreparatie",
      "dakonderhoud",
      "daklekkage",
      "valbeveiliging dak",
    ],
  },

  vacatures: {
    title: "Vacatures dakdekker | Werken bij Feigro",
    description:
      "Werken als dakdekker in Noord-Holland? Bekijk de vacatures bij Feigro in Enkhuizen: vast team, goed materieel en ruimte om te groeien. Solliciteer vandaag nog.",
    canonicalUrl: "/vacatures",
    keywords: [
      "vacature dakdekker",
      "baan dakdekker Noord-Holland",
      "werken bij Feigro",
      "dakdekker Enkhuizen vacature",
      "leerling dakdekker",
    ],
  },

  nieuws: {
    title: "Nieuws & daktips | Feigro Dakwerken",
    description:
      "Daktips en nieuws van Feigro: onderhoud, materialen zoals EPDM en bitumen, en duurzame daken. Praktische informatie voor huiseigenaren, VvE's en beheerders.",
    canonicalUrl: "/nieuws",
    keywords: [
      "daktips",
      "nieuws dakwerken",
      "EPDM informatie",
      "duurzame dakbedekking",
      "dakonderhoud tips",
      "Feigro blog",
    ],
  },

  cookies: {
    title: "Privacy- en cookiebeleid | Feigro Dakwerken",
    description:
      "Lees hoe Feigro Dakwerken omgaat met uw persoonsgegevens en cookies. Volledig AVG-conform, met uitleg over welke gegevens wij bewaren en waarom.",
    canonicalUrl: "/cookies",
    keywords: ["privacybeleid", "cookiebeleid", "AVG", "Feigro Dakwerken"],
    noindex: true,
  },
};
