import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, RefreshCw, Phone } from 'lucide-react';
import { PrimaryFlipButton, InversedFlipButton } from '@/components/buttons';
import { SEOHead } from '@/components/seo/SEOHead';

interface ErrorPageProps {
  error?: Error;
  resetErrorBoundary?: () => void;
}

const ErrorPage = ({ error, resetErrorBoundary }: ErrorPageProps) => {
  const handleRetry = () => {
    if (resetErrorBoundary) {
      resetErrorBoundary();
    } else {
      window.location.reload();
    }
  };

  return (
    <>
      <SEOHead
        title="Er is iets misgegaan"
        description="Er is een fout opgetreden. Probeer het opnieuw of neem contact met ons op."
        noindex={true}
      />
      
      <div className="flex min-h-[80vh] items-center justify-center bg-black px-6 py-32 overflow-hidden relative">
        <div className="text-center max-w-2xl relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center">
              <span className="text-5xl">⚠️</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="mb-4 text-3xl md:text-5xl font-heading text-white uppercase tracking-tighter">
              Er is iets <span className="text-red-400">misgegaan</span>
            </h1>
            <p className="mb-8 text-lg text-white/40 max-w-md mx-auto font-light leading-relaxed">
              We ondervinden een technische storing. Probeer de pagina te vernieuwen of kom later terug.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <PrimaryFlipButton
                label="Probeer opnieuw"
                icon={<RefreshCw size={18} />}
                size="large"
                onClick={handleRetry}
              />
              <Link to="/">
                <InversedFlipButton
                  label="Naar homepage"
                  icon={<Home size={18} />}
                  size="large"
                />
              </Link>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-white/5 border border-white/10 rounded-xl max-w-md mx-auto"
            >
              <p className="text-sm text-white/50 mb-3">
                Blijft het probleem? Neem contact met ons op:
              </p>
              <a 
                href="tel:0229274878" 
                className="inline-flex items-center gap-2 text-brand-green hover:text-brand-green/80 transition-colors"
              >
                <Phone size={16} />
                <span className="font-medium">0229-274878</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-red-500/5 blur-[150px] rounded-full"></div>
      </div>
    </>
  );
};

export default ErrorPage;
