import { z } from 'zod';

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string()
    .min(1, 'Naam is verplicht')
    .max(100, 'Naam mag maximaal 100 karakters zijn'),
  email: z.string()
    .min(1, 'E-mail is verplicht')
    .email('Ongeldig e-mailadres')
    .max(255, 'E-mail mag maximaal 255 karakters zijn'),
  phone: z.string()
    .regex(/^[0-9+\-\s]*$/, 'Ongeldig telefoonnummer')
    .max(20, 'Telefoonnummer te lang')
    .optional()
    .or(z.literal('')),
  subject: z.string()
    .max(200, 'Onderwerp mag maximaal 200 karakters zijn')
    .optional()
    .or(z.literal('')),
  message: z.string()
    .min(1, 'Bericht is verplicht')
    .max(5000, 'Bericht mag maximaal 5000 karakters zijn'),
});

// Spoed/Lekkage Form Schema
export const spoedFormSchema = z.object({
  name: z.string()
    .min(1, 'Naam is verplicht')
    .max(100, 'Naam mag maximaal 100 karakters zijn'),
  phone: z.string()
    .min(10, 'Telefoonnummer is te kort')
    .max(20, 'Telefoonnummer is te lang')
    .regex(/^[0-9+\-\s]+$/, 'Ongeldig telefoonnummer'),
  email: z.string()
    .min(1, 'E-mail is verplicht')
    .email('Ongeldig e-mailadres')
    .max(255, 'E-mail mag maximaal 255 karakters zijn'),
  address: z.string()
    .min(1, 'Adres is verplicht')
    .max(200, 'Adres mag maximaal 200 karakters zijn'),
  postcode: z.string()
    .min(1, 'Postcode is verplicht')
    .max(10, 'Postcode mag maximaal 10 karakters zijn'),
  city: z.string()
    .min(1, 'Plaats is verplicht')
    .max(100, 'Plaats mag maximaal 100 karakters zijn'),
  leakLocation: z.string()
    .min(1, 'Locatie lekkage is verplicht'),
  isUrgent: z.string()
    .min(1, 'Urgentie is verplicht'),
  severity: z.string()
    .min(1, 'Ernst is verplicht'),
  buildingType: z.string()
    .min(1, 'Type gebouw is verplicht'),
  roofType: z.string()
    .min(1, 'Type dak is verplicht'),
  accessibility: z.string()
    .min(1, 'Bereikbaarheid is verplicht'),
  description: z.string()
    .max(5000, 'Omschrijving mag maximaal 5000 karakters zijn')
    .optional()
    .or(z.literal('')),
  extraInfo: z.string()
    .max(5000, 'Extra informatie mag maximaal 5000 karakters zijn')
    .optional()
    .or(z.literal('')),
});

// Type exports
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type SpoedFormData = z.infer<typeof spoedFormSchema>;
