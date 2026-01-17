import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MainLayout } from '@/components/layout/MainLayout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="flex min-h-[60vh] items-center justify-center bg-gray-50 px-4 py-16">
        <div className="text-center max-w-2xl">
          <h1 className="mb-6 text-8xl md:text-9xl font-bold text-feigro-accent">404</h1>
          <h2 className="mb-4 text-3xl md:text-4xl font-semibold text-feigro-dark">
            Pagina Niet Gevonden
          </h2>
          <p className="mb-8 text-lg md:text-xl text-feigro-grey">
            De pagina die u zoekt bestaat niet of is verplaatst. Controleer de URL of ga terug naar de homepage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-feigro-accent hover:bg-feigro-accent/90 text-white"
            >
              <Link to="/" className="flex items-center space-x-2">
                <Home className="h-5 w-5" />
                <span>Terug naar Home</span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-feigro-grey/30"
              onClick={() => window.history.back()}
            >
              <button className="flex items-center space-x-2">
                <ArrowLeft className="h-5 w-5" />
                <span>Vorige Pagina</span>
              </button>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
