import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQItem } from '@/types';
import { cn } from '@/lib/utils';

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
    <section className={cn('py-16 md:py-24 lg:py-32 px-4 bg-white', className)}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-feigro-dark mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-feigro-grey max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-feigro-grey/20 rounded-lg px-6 hover:border-feigro-accent/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-feigro-dark hover:text-feigro-accent hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-feigro-grey leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
