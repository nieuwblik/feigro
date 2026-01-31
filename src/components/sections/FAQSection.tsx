import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQItem } from '@/types';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function FAQSection({
  faqs,
  title = 'Veelgestelde Vragen',
  subtitle,
  className,
}: FAQSectionProps) {
  return (
    <section className={cn('py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-white', className)}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-left mb-10 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
          >
            <div className="w-8 md:w-12 h-[2px] bg-brand-green"></div>
            <span className="text-brand-green font-bold text-[10px] md:text-xs uppercase tracking-widest">Support</span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading text-slate-900 mb-4 md:mb-6 uppercase tracking-tighter">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl font-light">
              {subtitle}
            </p>
          )}
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
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
                className="border border-slate-200 bg-slate-50/50 rounded-xl md:rounded-3xl px-4 md:px-8 hover:border-brand-green/30 hover:bg-white transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.01]"
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
  );
}
