import React from 'react';
import { Phone } from 'lucide-react';
import { FadeIn } from '@/components/ui/ParallaxImage';

export function EmergencyContactRow() {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6">
                <FadeIn>
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto">
                        {/* Background Accent */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[80px] rounded-full translate-x-1/4 -translate-y-1/4"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full mb-6">
                                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest">SPOED? BEL DIRECT</span>
                            </div>

                            <h2 className="text-white text-2xl md:text-3xl font-heading mb-8 uppercase tracking-tighter">
                                Heeft u direct hulp nodig? <span className="text-brand-green italic">Bel ons!</span>
                            </h2>

                            <a href="tel:+31613731303" className="inline-flex items-center justify-center gap-4 bg-white/5 border border-white/10 px-10 py-5 rounded-2xl hover:bg-red-500/10 hover:border-red-500/30 transition-all group">
                                <Phone size={24} className="text-red-500" />
                                <div className="text-left">
                                    <span className="text-white/50 text-[10px] uppercase tracking-wider block">FEIGRO Dakwerken</span>
                                    <span className="text-white font-bold text-xl md:text-2xl group-hover:text-red-400 transition-colors">+31 6 13731303</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
