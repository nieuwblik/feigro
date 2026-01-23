import { NavigationItem } from '@/types';

export const mainNavigation: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Diensten',
    href: '/diensten',
    children: [
      {
        label: 'Dakinspectie',
        href: '/dakinspectie',
      },
      {
        label: 'Dakonderhoud',
        href: '/dakonderhoud',
      },
      {
        label: 'Dakrenovatie',
        href: '/dakrenovatie',
      },
      {
        label: 'Dakbedekking Vervangen',
        href: '/dakbedekking-vervangen',
      },
      {
        label: 'Bitumen Dakbedekking',
        href: '/bitumen-dakbedekking',
      },
      {
        label: 'EPDM Dakbedekking',
        href: '/epdm-dakbedekking',
      },
      {
        label: 'Daklekkage',
        href: '/daklekkage',
      },
    ],
  },
  {
    label: 'Over Ons',
    href: '/over-ons',
  },
  {
    label: 'Projecten',
    href: '/projecten',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const footerServices: NavigationItem[] = [
  { label: 'Dakinspectie', href: '/dakinspectie' },
  { label: 'Dakonderhoud', href: '/dakonderhoud' },
  { label: 'Dakrenovatie', href: '/dakrenovatie' },
  { label: 'Dakbedekking Vervangen', href: '/dakbedekking-vervangen' },
  { label: 'Bitumen Dakbedekking', href: '/bitumen-dakbedekking' },
  { label: 'EPDM Dakbedekking', href: '/epdm-dakbedekking' },
  { label: 'Daklekkage', href: '/daklekkage' },
];

export const footerCompany: NavigationItem[] = [
  { label: 'Over Ons', href: '/over-ons' },
  { label: 'Projecten', href: '/projecten' },
  { label: 'Lekkage melden', href: '/spoedservice' },
  { label: 'Contact', href: '/contact' },
];

export const footerLegal: NavigationItem[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Algemene Voorwaarden', href: '/voorwaarden' },
  { label: 'Cookie Policy', href: '/cookies' },
];
