// Project images
import dakrenovatieEnkhuizenVoor from '@/assets/projects/dakrenovatie-enkhuizen-voor.webp';
import dakrenovatieEnkhuizenNa from '@/assets/projects/dakrenovatie-enkhuizen-na.webp';
import dakisolatieUrsem1 from '@/assets/projects/dakisolatie-ursem-1.webp';
import dakisolatieUrsem2 from '@/assets/projects/dakisolatie-ursem-2.webp';
import dakisolatieUrsem3 from '@/assets/projects/dakisolatie-ursem-3.webp';
import dakisolatieUrsem4 from '@/assets/projects/dakisolatie-ursem-4.webp';
import dakisolatieUrsem5 from '@/assets/projects/dakisolatie-ursem-5.webp';
import bitumensysteemAlmere1 from '@/assets/projects/bitumensysteem-almere-1.webp';
import bitumensysteemAlmere2 from '@/assets/projects/bitumensysteem-almere-2.webp';
import bitumensysteemAlmere3 from '@/assets/projects/bitumensysteem-almere-3.webp';
import bitumensysteemAlmere4 from '@/assets/projects/bitumensysteem-almere-4.webp';

export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  date: string;
  size: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  imageBefore: string;
  imageAfter: string;
  images: string[];
}

export const projects: Record<string, Project> = {
  'bitumensysteem-almere': {
    slug: 'bitumensysteem-almere',
    title: '2-Laags Bitumensysteem Bedrijfspand Almere',
    category: 'Bitumen dakbedekking',
    location: 'Almere',
    date: '2026-02-02',
    size: '4500 m²',
    shortDescription: 'Prachtig bedrijfspand van 4500 m² volledig voorzien van een duurzaam 2-laags bitumensysteem.',
    description: 'We hebben dit prachtige bedrijfspand van maar liefst 4500 m² volledig voorzien van een duurzaam en strak afgewerkt 2-laags bitumensysteem in Almere! Een mooi stuk vakwerk waar we met ons hele team met plezier aan hebben gewerkt. Een goed dak geeft rust. Geen zorgen over lekkages, geen gedoe—gewoon zekerheid, jaar in jaar uit. En dat is precies wat wij leveren: kwaliteit waar u op kunt bouwen.',
    highlights: [
      'Volledig 2-laags bitumensysteem aangebracht',
      'Professionele afwerking van 4500 m² dakoppervlak',
      'Lichtkoepels netjes geïntegreerd',
      'Langdurige bescherming tegen lekkages',
      'Uitgevoerd met heel team in korte tijd'
    ],
    imageBefore: bitumensysteemAlmere4,
    imageAfter: bitumensysteemAlmere1,
    images: [bitumensysteemAlmere1, bitumensysteemAlmere2, bitumensysteemAlmere3, bitumensysteemAlmere4]
  },
  'dakrenovatie-enkhuizen': {
    slug: 'dakrenovatie-enkhuizen',
    title: 'Dakrenovatie Enkhuizen',
    category: 'Dakrenovatie',
    location: 'Enkhuizen',
    date: '2026-02-02',
    size: '6 m²',
    shortDescription: 'Complete dakrenovatie van 6 m² met nieuwe Koramic oude holle dakpannen.',
    description: 'Feigro voert een complete dakrenovatie uit van 6 m². Het oude dak was aan vervanging toe en is volledig vernieuwd met hoogwaardige materialen.',
    highlights: [
      'Verwijderen oude pannen, vorsten, latten en tengels',
      'Aanbrengen dampopen folie, nieuwe tengels en panlatten',
      'Plaatsen nieuwe dakpannen (Koramic oude holle), vorsten en vogelschroot'
    ],
    imageBefore: dakrenovatieEnkhuizenVoor,
    imageAfter: dakrenovatieEnkhuizenNa,
    images: [dakrenovatieEnkhuizenVoor, dakrenovatieEnkhuizenNa]
  },
  'dakisolatie-ursem': {
    slug: 'dakisolatie-ursem',
    title: 'Dakisolatie Ursem',
    category: 'Dakisolatie',
    location: 'Ursem',
    date: '2026-02-02',
    size: 'circa 50 m²',
    shortDescription: 'Complete dakisolatie met 140mm PIR en witte bitumen dakbedekking.',
    description: 'Weer een mooie klus afgerond in Ursem! Dit dak hebben we voorzien van 140mm dikke PIR-isolatie en witte bitumen dakbedekking. Niet alleen perfect om de warmte buiten te houden, maar het verhoogt ook het rendement van de zonnepanelen. Klaar voor een energiezuinige toekomst!',
    highlights: [
      'Aanbrengen 140mm dikke PIR-isolatie',
      'Plaatsen witte bitumen dakbedekking',
      'Optimale reflectie voor verhoogd zonnepaneel rendement',
      'Verbeterde thermische isolatie'
    ],
    imageBefore: dakisolatieUrsem5,
    imageAfter: dakisolatieUrsem1,
    images: [dakisolatieUrsem1, dakisolatieUrsem2, dakisolatieUrsem3, dakisolatieUrsem4, dakisolatieUrsem5]
  }
};

export const projectsList = Object.values(projects);
