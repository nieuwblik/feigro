import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PrimaryFlipButton } from '@/components/buttons';
export const ServiceCTA = () => {
    return <section className="bg-slate-50 py-20 md:py-28 lg:py-36 px-6 border-t border-slate-100">
        <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col items-center max-w-4xl mx-auto text-center">

                {/* Header Group */}
                <div className="flex items-center gap-4 mb-8 md:mb-10">
                    <div className="w-12 h-[2px] bg-brand-green/30"></div>
                    <span className="text-brand-green font-bold text-xs uppercase tracking-[0.2em]">Wij helpen je graag verder</span>
                    <div className="w-12 h-[2px] bg-brand-green/30"></div>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-10 md:mb-12 leading-[1.1] uppercase tracking-tighter">
                    Kies voor     <span className="text-brand-green italic">​Garantie </span>
                </h2>

                <p className="text-xl md:text-2xl text-slate-600 font-light mb-16 md:mb-20 max-w-2xl leading-relaxed">
                    Wij zijn dé specialist voor uw dak. Kwaliteit, service en vakmanschap staan bij ons centraal.
                </p>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-16 md:mb-20 w-full text-left">

                    {/* Card 1 */}
                    <div className="group relative p-8 md:p-10 rounded-[1.25rem] bg-white border border-slate-200 hover:border-brand-green/30 transition-all duration-500 flex flex-col h-full overflow-hidden select-none hover:-translate-y-2 shadow-sm hover:shadow-xl">
                        <div className="relative z-10 h-full flex flex-col items-center text-center">
                            <div className="mb-6 md:mb-8 text-brand-green w-10 h-10 flex items-center justify-center [&>svg]:transition-transform [&>svg]:duration-300 group-hover:[&>svg]:scale-[1.15]">
                                <CheckCircle2 size={32} />
                            </div>
                            <h3 className="text-xl font-heading mb-4 text-slate-900 group-hover:text-brand-green transition-colors uppercase font-bold">
                                Gecertificeerd
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-sm font-light">
                                Gediplomeerd personeel met jarenlange ervaring.
                            </p>
                        </div>
                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative p-8 rounded-[1.25rem] bg-white border border-slate-200 hover:border-brand-green/30 transition-all duration-500 flex flex-col h-full overflow-hidden select-none hover:-translate-y-2 shadow-sm hover:shadow-xl">
                        <div className="relative z-10 h-full flex flex-col items-center text-center">
                            <div className="mb-6 text-brand-green w-10 h-10 flex items-center justify-center [&>svg]:transition-transform [&>svg]:duration-300 group-hover:[&>svg]:scale-[1.15]">
                                <CheckCircle2 size={32} />
                            </div>
                            <h3 className="text-xl font-heading mb-3 text-slate-900 group-hover:text-brand-green transition-colors uppercase font-bold">
                                Meedenkend
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-sm font-light">
                                Wij adviseren proactief en denken met u mee.
                            </p>
                        </div>
                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative p-8 rounded-[1.25rem] bg-white border border-slate-200 hover:border-brand-green/30 transition-all duration-500 flex flex-col h-full overflow-hidden select-none hover:-translate-y-2 shadow-sm hover:shadow-xl">
                        <div className="relative z-10 h-full flex flex-col items-center text-center">
                            <div className="mb-6 text-brand-green w-10 h-10 flex items-center justify-center [&>svg]:transition-transform [&>svg]:duration-300 group-hover:[&>svg]:scale-[1.15]">
                                <CheckCircle2 size={32} />
                            </div>
                            <h3 className="text-xl font-heading mb-3 text-slate-900 group-hover:text-brand-green transition-colors uppercase font-bold">
                                Garantie
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-sm font-light">
                                100% tevredenheidsgarantie op al ons werk.
                            </p>
                        </div>
                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                </div>

                <p className="text-slate-500 mb-10 max-w-2xl text-base leading-relaxed">
                    Wij durven u met trots te vertellen dat zodra je ons inhuurt, je geen zorgen of omkijken meer hebt naar uw dak.
                    Maak vandaag nog een afspraak!
                </p>

                <div onClick={() => window.location.href = '/contact'}>
                    <PrimaryFlipButton label="Maak een afspraak" icon={<ArrowRight />} className="w-full md:w-auto" />
                </div>

            </div>
        </div>
    </section>;
};