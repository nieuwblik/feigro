import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

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
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Uw specialist in duurzame dakwerken door heel Nederland. Kwaliteit en service staan bij ons op de eerste plaats.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-heading text-lg mb-6">Diensten</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#" className="hover:text-brand-green transition-colors">Dakrenovatie</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Dakbedekking</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Bitumen daken</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">EPDM daken</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Schoorsteen reparatie</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading text-lg mb-6">Navigatie</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#" className="hover:text-brand-green transition-colors">Over Ons</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Werkwijze</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Projecten</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li className="flex items-center gap-3"><MapPin size={18} className="text-brand-green" /> Amsterdam, Nederland</li>
              <li className="flex items-center gap-3"><Phone size={18} className="text-brand-green" /> +31 (0) 6 123 456 78</li>
              <li className="flex items-center gap-3"><Mail size={18} className="text-brand-green" /> info@feigro.nl</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-white/30 text-xs">© 2025 FEIGRO Dakwerken. Alle rechten voorbehouden.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-white/30 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Algemene Voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
