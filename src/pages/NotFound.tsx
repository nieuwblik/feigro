import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { PrimaryFlipButton, InversedFlipButton } from '@/components/buttons';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
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
          <p className="mb-12 text-lg md:text-xl text-white/40 max-w-xl mx-auto font-light leading-relaxed">
            De pagina die u zoekt is buiten bereik. Misschien is deze verhuisd naar een ander deel van het dak.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link to="/">
              <PrimaryFlipButton
                label="Terug naar Home"
                icon={<Home size={18} />}
                size="large"
              />
            </Link>
            <InversedFlipButton
              label="Stap Terug"
              icon={<ArrowLeft size={18} />}
              size="large"
              onClick={() => window.history.back()}
            />
          </div>
        </motion.div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-brand-green/5 blur-[150px] rounded-full"></div>
    </div>
  );
};

export default NotFound;
