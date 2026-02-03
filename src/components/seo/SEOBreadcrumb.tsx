// SEO-friendly Breadcrumb Component with JSON-LD Schema
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BreadcrumbItem } from '@/types/seo';
import { generateBreadcrumbSchema, generateBreadcrumbsFromPath } from '@/lib/structured-data';

interface SEOBreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
  showHome?: boolean;
  homeLabel?: string;
}

export function SEOBreadcrumb({
  items,
  className,
  showHome = true,
  homeLabel = 'Home'
}: SEOBreadcrumbProps) {
  const location = useLocation();
  
  // Generate breadcrumbs from path if not provided
  const breadcrumbItems = items || generateBreadcrumbsFromPath(location.pathname);
  
  // If on homepage, don't show breadcrumbs
  if (location.pathname === '/' || breadcrumbItems.length <= 1) {
    return null;
  }

  // Generate JSON-LD schema
  const schema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      
      {/* Breadcrumb Navigation */}
      <nav 
        aria-label="Breadcrumb" 
        className={cn(
          'py-3 px-4 md:px-6 text-sm',
          className
        )}
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            const isFirst = index === 0;
            
            return (
              <li key={item.href} className="inline-flex items-center gap-1.5">
                {/* Separator (except for first item) */}
                {!isFirst && (
                  <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" aria-hidden="true" />
                )}
                
                {isLast ? (
                  // Current page (not a link)
                  <span 
                    className="font-medium text-foreground"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  // Link to parent page
                  <Link
                    to={item.href}
                    className="hover:text-brand-green transition-colors inline-flex items-center gap-1"
                  >
                    {isFirst && showHome && (
                      <Home className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                    <span className={isFirst && showHome ? 'sr-only md:not-sr-only' : ''}>
                      {isFirst && showHome ? homeLabel : item.label}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

export default SEOBreadcrumb;
