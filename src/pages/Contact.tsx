import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SEO } from '@/components/SEO';
import { seoMetadata } from '@/data/seo-metadata';
import { ParallaxImage } from '@/components/ui/ParallaxImage';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { contactFormSchema, type ContactFormData } from '@/lib/schemas/forms';
import imgHero from '@/assets/dakreparatie-nederland-enkhuizen.webp';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const { data: responseData, error } = await supabase.functions.invoke('send-form-email/contact', {
        body: {
          name: data.name.trim(),
          email: data.email.trim(),
          phone: data.phone?.trim() || undefined,
          subject: data.subject?.trim() || undefined,
          message: data.message.trim(),
        }
      });

      if (error) throw error;

      if (!responseData?.success) {
        throw new Error(responseData?.error || 'Onbekende fout');
      }

      form.reset();
      toast.success('Bedankt! We nemen binnen 24 uur contact met u op.');
      // Delay state change to allow form cleanup to complete
      setTimeout(() => setIsSubmitted(true), 0);
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Er ging iets mis. Probeer het opnieuw of bel ons direct.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full bg-white">
        <SEO {...seoMetadata.contact} />
        <section className="min-h-screen flex items-center justify-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-50 border border-slate-200 p-10 md:p-16 rounded-[2rem] text-center max-w-lg mx-4"
          >
            <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="text-brand-green w-10 h-10" />
            </div>
            <h3 className="text-3xl font-heading text-slate-900 mb-4 uppercase tracking-tighter">Bedankt!</h3>
            <p className="text-slate-600 text-lg leading-relaxed font-light mb-8">
              Uw bericht is ontvangen. We nemen binnen 24 uur contact met u op.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wider border-2 rounded-xl transition-all duration-300 ease-out bg-brand-green text-feigro-dark border-brand-green hover:bg-feigro-dark hover:text-white hover:border-feigro-dark h-14 px-8"
            >
              Nieuw bericht versturen
            </button>
          </motion.div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      <SEO {...seoMetadata.contact} />

      {/* Hero */}
      <section className="bg-black pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden h-[70vh] md:h-[50vh] lg:h-[60vh] min-h-[400px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ParallaxImage src={imgHero} alt="Contact" speed={80} containerClassName="w-full h-full" className="opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-[1] text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="w-12 h-[2px] bg-brand-green"></div>
            <span className="text-brand-green font-bold text-xs uppercase tracking-widest">Contact</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white text-3xl md:text-4xl lg:text-5xl font-heading tracking-tighter leading-none mb-6 md:mb-10 uppercase">
            Laten we <br /><span className="text-brand-green italic">Praten</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/70 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed font-light mb-8 md:mb-10">
            Vragen, advies of een offerte? Ons team staat klaar om u te helpen.
            Eerlijk advies en een eerlijke prijs.
            <span className="block mt-3 text-white/50 text-sm">
              Werkzaam in Noord-Holland, Flevoland en Utrecht.
            </span>
          </motion.p>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/10 blur-[120px] rounded-full translate-x-1/4 -z-0"></div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 md:py-28 lg:py-36 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-28">
            {/* Left Column: Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-slate-900 mb-8 md:mb-10 tracking-tight uppercase">Onze <span className="text-brand-green italic">Gegevens</span></h2>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 md:mb-14 font-light">
                  U kunt ons direct bellen for spoed of mailen for algemene vragen.
                  We reageren doorgaans binnen één werkdag.
                </p>
              </div>

              <div className="grid gap-8 md:gap-10">
                {/* Direct Contact - Jan & Tommie */}
                <div className="grid grid-cols-1 gap-4">
                  <a href="tel:+31613731303" className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-brand-green/30 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-brand-green transition-all duration-300 shrink-0">
                      <Phone size={20} className="text-brand-green group-hover:text-black transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-slate-400 text-[9px] uppercase tracking-widest font-bold mb-1">FEIGRO Dakwerken</p>
                      <span className="text-base md:text-lg text-slate-900 font-heading group-hover:text-brand-green transition-colors uppercase tracking-tight">+31 6 13731303</span>
                    </div>
                  </a>
                </div>

                {/* Other Contact Info */}
                {[{
                  icon: Mail,
                  label: 'Email',
                  value: 'info@feigro.nl',
                  sub: 'Voor offertes en advies',
                  href: 'mailto:info@feigro.nl'
                }, {
                  icon: MapPin,
                  label: 'Locatie',
                  value: 'Noord-Holland, Flevoland & Utrecht',
                  sub: 'Actief in de Randstad',
                  href: '#'
                }, {
                  icon: Clock,
                  label: 'Werktijden',
                  value: '08:00 - 18:00',
                  sub: 'Weekend op afspraak',
                  href: '#'
                }].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 md:gap-6 group select-none">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-brand-green transition-all duration-300 shrink-0">
                      <item.icon size={20} className="text-brand-green group-hover:text-black transition-colors md:hidden" />
                      <item.icon size={24} className="text-brand-green group-hover:text-black transition-colors hidden md:block" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-slate-400 text-[9px] md:text-[10px] uppercase tracking-widest font-bold mb-1">{item.label}</p>
                      <a href={item.href} className="text-base md:text-xl text-slate-900 font-heading hover:text-brand-green transition-colors uppercase tracking-tight break-words">{item.value}</a>
                      <p className="text-slate-400 text-[10px] md:text-xs mt-1 font-light">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 md:p-12 bg-slate-50 border border-slate-200 rounded-xl md:rounded-[1.5rem]">
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <CheckCircle className="text-brand-green w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-slate-900 font-bold tracking-tight uppercase text-sm md:text-base">Gecertificeerd Vakmanschap</span>
                </div>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-light">
                  Al onze medewerkers zijn VCA-gecertificeerd en werken volgens de strengste veiligheidsnormen.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="bg-slate-50 border border-slate-200 p-8 md:p-12 lg:p-16 rounded-xl md:rounded-[2rem] relative z-10 select-none" id="contact-form">
                <h3 className="text-2xl md:text-3xl font-heading text-slate-900 mb-8 md:mb-10 uppercase tracking-tighter">Stuur een <span className="text-brand-green italic">Bericht</span></h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-3 md:ml-4">Naam *</FormLabel>
                            <FormControl>
                              <input
                                {...field}
                                type="text"
                                placeholder="Uw naam"
                                disabled={isSubmitting}
                                className="w-full bg-white border border-slate-200 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-brand-green transition-colors text-sm md:text-base disabled:opacity-50"
                              />
                            </FormControl>
                            <FormMessage className="text-xs text-red-500 ml-3 md:ml-4" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-3 md:ml-4">Email *</FormLabel>
                            <FormControl>
                              <input
                                {...field}
                                type="email"
                                placeholder="uw@email.nl"
                                disabled={isSubmitting}
                                className="w-full bg-white border border-slate-200 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-brand-green transition-colors text-sm md:text-base disabled:opacity-50"
                              />
                            </FormControl>
                            <FormMessage className="text-xs text-red-500 ml-3 md:ml-4" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-3 md:ml-4">Telefoon</FormLabel>
                            <FormControl>
                              <input
                                {...field}
                                type="tel"
                                placeholder="06 12345678"
                                disabled={isSubmitting}
                                className="w-full bg-white border border-slate-200 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-brand-green transition-colors text-sm md:text-base disabled:opacity-50"
                              />
                            </FormControl>
                            <FormMessage className="text-xs text-red-500 ml-3 md:ml-4" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-3 md:ml-4">Onderwerp</FormLabel>
                            <FormControl>
                              <input
                                {...field}
                                type="text"
                                placeholder="Waar gaat het over?"
                                disabled={isSubmitting}
                                className="w-full bg-white border border-slate-200 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-brand-green transition-colors text-sm md:text-base disabled:opacity-50"
                              />
                            </FormControl>
                            <FormMessage className="text-xs text-red-500 ml-3 md:ml-4" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-3 md:ml-4">Bericht *</FormLabel>
                          <FormControl>
                            <textarea
                              {...field}
                              rows={5}
                              placeholder="Uw bericht..."
                              disabled={isSubmitting}
                              className="w-full bg-white border border-slate-200 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-brand-green transition-colors resize-none text-sm md:text-base disabled:opacity-50"
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-500 ml-3 md:ml-4" />
                        </FormItem>
                      )}
                    />

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full group inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wider border-2 rounded-xl transition-all duration-300 ease-out bg-brand-green text-feigro-dark border-brand-green hover:bg-feigro-dark hover:text-white hover:border-feigro-dark h-14 md:h-16 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                            Verzenden...
                          </>
                        ) : (
                          <>
                            Verstuur bericht
                            <Send className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </Form>
              </div>
              {/* Background Blur */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-green/10 blur-[100px] -z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
