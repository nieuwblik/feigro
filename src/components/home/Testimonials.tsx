import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { PrimaryFlipButton } from '@/components/buttons';
import { FadeIn } from '@/components/ui/ParallaxImage';
import testimonialImg1 from '@/assets/dakrenovatie.jpg';
import testimonialImg2 from '@/assets/dak-valbeveiliging-montage.jpg';
import { cn } from '@/lib/utils';
const TESTIMONIALS = [{
    id: 1,
    image: testimonialImg1,
    text: "Als vastgoedbeheerder zoek ik betrouwbare partners. Feigro heeft bij ons groot onderhoudscomplex bewezen niet alleen vakkundig te zijn, maar ook communicatief sterk. Ze denken mee in oplossingen in plaats van problemen. Een verademing in de bouwwereld.",
    author: "Mark van den Berg",
    role: "Vastgoed Manager",
    source: "via Google Reviews"
}, {
    id: 2,
    image: testimonialImg2,
    text: "De lekkage was snel verholpen dankzij de spoedservice. De monteurs waren uiterst vriendelijk en lieten alles netjes achter. Voor ons volgende project, het isoleren van het platte dak, kiezen we zeker weer voor Feigro.",
    author: "Lisa Vermeulen",
    role: "Particulier",
    source: "via Google Reviews"
}];
const GoogleIcon = ({
    className
}: {
    className?: string;
}) => <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>;
export const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const next = () => setActiveIndex(prev => (prev + 1) % TESTIMONIALS.length);
    const prev = () => setActiveIndex(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    return <section className="py-20 md:py-28 lg:py-36 bg-slate-50 overflow-hidden relative">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-center">

                <div className="lg:col-span-5 flex flex-col items-start z-10">
                    <FadeIn>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-[2px] bg-brand-green"></div>
                            <span className="text-brand-green font-bold text-xs uppercase tracking-widest">
                                Testimonials
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2 className="text-3xl md:text-5xl font-heading text-slate-900 leading-[0.9] tracking-tighter uppercase mb-8 lg:text-5xl">
                            Feedback van <br />
                            <span className="text-brand-green italic">Onze Partners</span>
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-md font-light">
                            Ontdek hoe onze samenwerking leidt tot duurzame dakoplossingen en tevreden klanten. Kwaliteit en vertrouwen staan bij ons voorop.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="flex flex-col sm:flex-row gap-3 mb-12">
                            <PrimaryFlipButton label="Bekijk alle reviews" size="default" onClick={() => window.open('https://www.google.com/search?client=firefox-b-d&hs=fpCp&sca_esv=20541e4f21a9d7f7&q=Feitsma+Dakwerken+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2NDMxtzAxMDE0MbMwMTU3MjIy38DI-IpR0i01s6Q4N1HBJTG7PLUoOzVPISi1LDO1vHgRK245AKTYdrtSAAAA&rldimm=9647840414684572227&tbm=lcl&hl=nl-NL&sa=X&ved=2ahUKEwjN6eaW95ySAxVd3AIHHfHbKcMQ9fQKegQIMBAG&biw=2422&bih=1171&dpr=1.54&aic=0#lkt=LocalPoiReviews', '_blank')} />
                            <button 
                                onClick={() => window.open('https://g.page/r/CYP5VoVz2OhOEBM/review', '_blank')}
                                className="h-10 md:h-12 px-6 md:px-8 rounded-full bg-slate-900 text-white text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-brand-green hover:text-slate-900 transition-all duration-300"
                            >
                                Review plaatsen
                            </button>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="flex items-center gap-4">
                            <button onClick={prev} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-green hover:text-white hover:border-brand-green transition-all duration-300 group" aria-label="Previous testimonial">
                                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button onClick={next} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-green hover:text-white hover:border-brand-green transition-all duration-300 group" aria-label="Next testimonial">
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </FadeIn>
                </div>

                <div className="lg:col-span-7 w-full relative">
                    <div className="relative w-full min-h-[500px] flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div key={activeIndex} initial={{
                                opacity: 0,
                                x: 50
                            }} animate={{
                                opacity: 1,
                                x: 0
                            }} exit={{
                                opacity: 0,
                                x: -50
                            }} transition={{
                                duration: 0.5,
                                ease: "circOut"
                            }} className="w-full flex flex-col md:flex-row gap-6 md:h-[500px]">
                                <div className="w-full md:w-[40%] h-64 md:h-auto rounded-3xl overflow-hidden relative shadow-xl">
                                    <img src={TESTIMONIALS[activeIndex].image} alt="Project reference" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/10"></div>
                                </div>

                                <div className="w-full md:w-[60%] relative p-10 md:p-12 rounded-[1.25rem] bg-white border border-slate-200 hover:border-brand-green/30 transition-all duration-500 flex flex-col justify-between overflow-hidden group hover:-translate-y-2">
                                    <div className="absolute top-8 right-8 text-brand-green/10 group-hover:text-brand-green/20 transition-colors z-10">
                                        <Quote size={80} fill="currentColor" className="rotate-180" />
                                    </div>

                                    <div className="relative z-10">
                                        <p className="text-slate-600 md:text-lg leading-relaxed italic mb-8">
                                            "{TESTIMONIALS[activeIndex].text}"
                                        </p>
                                    </div>

                                    <div className="relative z-10 mt-auto flex items-center gap-4 pt-8 border-t border-slate-100">
                                        <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center">
                                            <GoogleIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-heading text-slate-900 text-lg uppercase tracking-tight">{TESTIMONIALS[activeIndex].author}</h4>
                                            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{TESTIMONIALS[activeIndex].source}</p>
                                        </div>
                                    </div>

                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-green/0 to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-green/5 blur-[100px] rounded-full -z-10"></div>
                </div>

            </div>
        </div>
    </section>;
};