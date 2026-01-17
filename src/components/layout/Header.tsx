import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Navigation } from './Navigation';
import { MobileNav } from './MobileNav';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-feigro-dark text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-white">FEIGRO</span>
              <span className="text-feigro-accent ml-2">Dakwerken</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Navigation />
            <Button
              asChild
              variant="default"
              className="bg-feigro-accent hover:bg-feigro-accent/90 text-white"
            >
              <Link to="/spoedservice" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Spoedservice 24/7</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
