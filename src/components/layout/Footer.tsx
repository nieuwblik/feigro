import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { footerServices, footerCompany } from '@/data/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-feigro-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-white">FEIGRO</span>
              <span className="text-feigro-accent ml-2">Dakwerken</span>
            </div>
            <p className="text-feigro-grey text-sm leading-relaxed">
              Professionele dakwerkzaamheden voor particulieren en bedrijven.
              Specialist in platte daken en dakrenovaties.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-feigro-accent">Diensten</h3>
            <ul className="space-y-2">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-feigro-grey hover:text-feigro-accent transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-feigro-accent">Bedrijf</h3>
            <ul className="space-y-2">
              {footerCompany.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-feigro-grey hover:text-feigro-accent transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-feigro-accent">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <Phone className="h-4 w-4 text-feigro-accent mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+31612345678"
                    className="text-feigro-grey hover:text-feigro-accent transition-colors"
                  >
                    +31 6 1234 5678
                  </a>
                  <p className="text-xs text-feigro-grey/70 mt-1">24/7 Spoedservice</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Mail className="h-4 w-4 text-feigro-accent mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@feigro.nl"
                  className="text-feigro-grey hover:text-feigro-accent transition-colors"
                >
                  info@feigro.nl
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-feigro-accent mt-0.5 flex-shrink-0" />
                <span className="text-feigro-grey">
                  Regio Zuid-Holland<br />
                  Nederland
                </span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Clock className="h-4 w-4 text-feigro-accent mt-0.5 flex-shrink-0" />
                <span className="text-feigro-grey">
                  Ma-Vr: 08:00 - 18:00<br />
                  Za: Op afspraak
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-feigro-grey/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-feigro-grey text-sm">
              &copy; {currentYear} FEIGRO Dakwerken. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-feigro-grey hover:text-feigro-accent transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/voorwaarden"
                className="text-feigro-grey hover:text-feigro-accent transition-colors"
              >
                Voorwaarden
              </Link>
              <Link
                to="/cookies"
                className="text-feigro-grey hover:text-feigro-accent transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
