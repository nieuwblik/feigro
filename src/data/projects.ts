// Project images
import dakrenovatieEnkhuizenVoor from '@/assets/projects/dakrenovatie-enkhuizen-voor.webp';
import dakrenovatieEnkhuizenNa from '@/assets/projects/dakrenovatie-enkhuizen-na.webp';
import dakisolatieUrsem1 from '@/assets/projects/dakisolatie-ursem-1.webp';
import dakisolatieUrsem2 from '@/assets/projects/dakisolatie-ursem-2.webp';
import dakisolatieUrsem3 from '@/assets/projects/dakisolatie-ursem-3.webp';
import dakisolatieUrsem4 from '@/assets/projects/dakisolatie-ursem-4.webp';
import dakisolatieUrsem5 from '@/assets/projects/dakisolatie-ursem-5.webp';

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
