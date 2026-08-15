import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  /** Eén of meer JSON-LD-objecten. Falsy waarden (null/undefined uit een
   * voorwaardelijke generator-aanroep) worden genegeerd. */
  schemas: (object | null | undefined | false)[];
}

/**
 * Herbruikbare JSON-LD-injector voor gebruik buiten SEOHead om - bv. in een
 * sectie die zelfstandig zijn eigen schema toevoegt (FAQSection, een
 * HowTo-sectie). Zet elk schema in een eigen <script type="application/ld+json">
 * in de <head> via react-helmet-async, consistent met hoe SEOHead dat doet
 * (één script per schema, niet één script met een array erin).
 *
 * Rendert niets als er geen geldige schema's zijn.
 */
export function StructuredData({ schemas }: StructuredDataProps) {
  const validSchemas = schemas.filter((schema): schema is object => Boolean(schema));

  if (validSchemas.length === 0) return null;

  return (
    <Helmet>
      {validSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

export default StructuredData;
