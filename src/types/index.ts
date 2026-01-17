// FEIGRO Dakwerken - Type Definitions

export interface PageSEO {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  schema?: Record<string, unknown>;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface HeroData {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage?: string;
  backgroundClass?: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface InfoSectionData {
  title: string;
  description: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServicePageData {
  seo: PageSEO;
  hero: HeroData;
  features: FeatureItem[];
  info: InfoSectionData;
  faqs: FAQItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  completionDate: string;
  location: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  date: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  service?: string;
  urgent?: boolean;
}

export interface CompanyInfo {
  name: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
    emergency: string;
  };
  social: {
    facebook?: string;
    linkedin?: string;
    instagram?: string;
  };
  hours: {
    weekday: string;
    weekend: string;
    emergency: string;
  };
}
