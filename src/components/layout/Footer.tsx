import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <img 
                src="/images/feigro-logo-wit.png" 
                alt="FEIGRO Dakwerken" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Uw specialist in duurzame dakwerken door heel Nederland. Kwaliteit, innovatie en service staan bij ons op de eerste plaats.
            </p>
          </div>

          <div>
            <h4 className="text-white font-heading text-lg mb-6 uppercase tracking-wider">Diensten</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><Link to="/dakinspectie" className="hover:text-brand-green transition-colors">Dakinspectie</Link></li>
              <li><Link to="/dakonderhoud" className="hover:text-brand-green transition-colors">Dakonderhoud</Link></li>
              <li><Link to="/dakrenovatie" className="hover:text-brand-green transition-colors">Dakrenovatie</Link></li>
              <li><Link to="/dakbedekking-vervangen" className="hover:text-brand-green transition-colors">Dakbedekking Vervangen</Link></li>
              <li><Link to="/epdm-dakbedekking" className="hover:text-brand-green transition-colors">EPDM Dakbedekking</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading text-lg mb-6 uppercase tracking-wider">Navigatie</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><Link to="/over-ons" className="hover:text-brand-green transition-colors">Over Ons</Link></li>
              <li><Link to="/projecten" className="hover:text-brand-green transition-colors">Onze Projecten</Link></li>
              <li><Link to="/spoedservice" className="hover:text-brand-green transition-colors">Spoedservice 24/7</Link></li>
              <li><Link to="/contact" className="hover:text-brand-green transition-colors">Contact Opnemen</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading text-lg mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-brand-green mt-0.5 shrink-0" />
                <span>Amsterdam, Nederland</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-brand-green shrink-0" />
                <a href="tel:+31612345678" className="hover:text-brand-green transition-colors">+31 (0) 6 123 456 78</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-brand-green shrink-0" />
                <a href="mailto:info@feigro.nl" className="hover:text-brand-green transition-colors">info@feigro.nl</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">© 2025 FEIGRO Dakwerken. Alle rechten voorbehouden.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-white/30 text-[10px] uppercase tracking-widest font-bold">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Algemene Voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
