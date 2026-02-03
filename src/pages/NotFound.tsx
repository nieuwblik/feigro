import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Phone, Wrench, FileText, Users } from 'lucide-react';
import { PrimaryFlipButton, InversedFlipButton } from '@/components/buttons';
import { SEOHead } from '@/components/seo/SEOHead';

const NotFound = () => {
  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', window.location.pathname);
  }, []);

  // Popular pages to suggest
  const suggestedPages = [
    { label: 'Spoedservice', href: '/spoedservice', icon: Phone, description: '24/7 beschikbaar voor lekkages' },
    { label: 'Onze Diensten', href: '/diensten', icon: Wrench, description: 'Bekijk ons complete aanbod' },
    { label: 'Projecten', href: '/projecten', icon: FileText, description: 'Bekijk ons recente werk' },
    { label: 'Over Ons', href: '/over-ons', icon: Users, description: 'Leer ons beter kennen' },
  ];

  return (
    <>
      <SEOHead
        title="Pagina Niet Gevonden (404)"
        description="De pagina die u zoekt bestaat niet of is verplaatst. Ga terug naar de homepage of bekijk onze diensten."
        noindex={true}
      />
      
      <div className="flex min-h-[80vh] items-center justify-center bg-black px-6 py-32 overflow-hidden relative">
        <div className="text-center max-w-3xl relative z-10">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 text-[10rem] md:text-[15rem] font-heading font-bold text-white/5 leading-none"
          >
            404
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="mb-6 text-4xl md:text-6xl font-heading text-white uppercase tracking-tighter">
              Pagina <span className="text-brand-green">Verdwenen</span>
            </h2>
            <p className="mb-8 text-lg md:text-xl text-white/40 max-w-xl mx-auto font-light leading-relaxed">
              De pagina die u zoekt is buiten bereik. Misschien is deze verhuisd naar een ander deel van het dak.
            </p>
            
            {/* Main Actions */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link to="/">
                <PrimaryFlipButton
                  label="Terug naar home"
                  icon={<Home size={18} />}
                  size="large"
                />
              </Link>
              <InversedFlipButton
                label="Stap terug"
                icon={<ArrowLeft size={18} />}
                size="large"
                onClick={() => window.history.back()}
              />
            </div>

            {/* Suggested Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <p className="text-sm text-white/30 mb-6 uppercase tracking-widest">
                Populaire pagina's
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {suggestedPages.map((page) => (
                  <Link
                    key={page.href}
                    to={page.href}
                    className="group p-4 bg-white/5 border border-white/10 rounded-xl hover:border-brand-green/50 hover:bg-white/10 transition-all duration-300"
                  >
                    <page.icon className="h-5 w-5 text-brand-green mb-2 mx-auto" />
                    <span className="block text-sm font-medium text-white group-hover:text-brand-green transition-colors">
                      {page.label}
                    </span>
                    <span className="block text-xs text-white/40 mt-1">
                      {page.description}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-brand-green/5 blur-[150px] rounded-full"></div>
      </div>
    </>
  );
};

export default NotFound;
