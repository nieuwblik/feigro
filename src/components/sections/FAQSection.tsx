import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQItem } from '@/types';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { generateFAQSchema } from '@/lib/structured-data';

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  className?: string;
  injectSchema?: boolean;
}

export function FAQSection({
  faqs,
  title = 'Veelgestelde Vragen',
  titleHighlight = 'Vragen',
  subtitle,
  className,
  injectSchema = true,
}: FAQSectionProps) {
  const renderTitle = () => {
    if (!titleHighlight) return title;
    const parts = title.split(new RegExp(`(${titleHighlight})`, 'i'));
    return parts.map((part, index) =>
      part.toLowerCase() === titleHighlight.toLowerCase() ? (
        <span key={index} className="text-brand-green italic">{part}</span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  // Generate FAQ schema for SEO
  const faqSchema = injectSchema && faqs.length > 0 ? generateFAQSchema(faqs) : null;

  return (
    <>
      {/* JSON-LD FAQ Schema */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      <section className={cn('py-20 md:py-28 lg:py-36 px-4 md:px-6 bg-white', className)}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-left mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8"
            >
              <div className="w-8 md:w-12 h-[2px] bg-brand-green"></div>
              <span className="text-brand-green font-bold text-[10px] md:text-xs uppercase tracking-widest">Support</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-slate-900 mb-6 md:mb-8 uppercase tracking-tighter">
              {renderTitle()}
            </h2>
            {subtitle && (
              <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl font-light">
                {subtitle}
              </p>
            )}
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4 md:space-y-5">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-slate-200 bg-slate-50/50 rounded-xl md:rounded-3xl px-4 md:px-8 hover:border-brand-green/30 hover:bg-white transition-all duration-300 overflow-hidden hover:scale-[1.01]"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg lg:text-xl font-heading text-slate-900 hover:text-brand-green hover:no-underline py-4 md:py-6 uppercase">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-slate-600 leading-relaxed font-light pb-4 md:pb-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
