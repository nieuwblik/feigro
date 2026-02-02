// Project images
import dakrenovatieEnkhuizenVoor from '@/assets/projects/dakrenovatie-enkhuizen-voor.webp';
import dakrenovatieEnkhuizenNa from '@/assets/projects/dakrenovatie-enkhuizen-na.webp';

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
  }
};

export const projectsList = Object.values(projects);
