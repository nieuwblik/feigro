import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { mainNavigation } from '@/data/navigation';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-feigro-dark border-feigro-grey/20">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="text-xl font-bold text-white"
            >
              <span className="text-white">FEIGRO</span>
              <span className="text-feigro-accent ml-2">Dakwerken</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto">
            <Accordion type="single" collapsible className="w-full">
              {mainNavigation.map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <AccordionItem value={item.href} className="border-feigro-grey/20">
                      <AccordionTrigger className="text-white hover:text-feigro-accent">
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              onClick={() => setOpen(false)}
                              className="text-sm text-feigro-grey hover:text-feigro-accent py-2 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-white hover:text-feigro-accent transition-colors border-b border-feigro-grey/20"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </Accordion>
          </nav>

          {/* CTA */}
          <div className="mt-6 pt-6 border-t border-feigro-grey/20">
            <Button
              asChild
              className="w-full bg-feigro-accent hover:bg-feigro-accent/90 text-white"
            >
              <Link
                to="/spoedservice"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Spoedservice 24/7</span>
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
