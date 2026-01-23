import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Upload, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
    name: z.string().min(1, 'Naam is verplicht'),
    phone: z.string().min(1, 'Telefoonnummer is verplicht').regex(/^[0-9+-\s]{10,}$/, 'Ongeldig telefoonnummer'),
    email: z.string().email('Ongeldig e-mailadres'),
    address: z.string().min(1, 'Adres is verplicht'),
    postcode: z.string().min(1, 'Postcode is verplicht'),
    city: z.string().min(1, 'Woonplaats is verplicht'),
    leakLocation: z.enum(['Dakpannen', 'Plat dak', 'Goot', 'Schuur en/of berging', 'Overig'], {
        required_error: 'Maak een keuze',
    }),
    isUrgent: z.enum(['Ja', 'Nee'], {
        required_error: 'Geef aan of er spoed bij is',
    }),
    description: z.string().optional(),
    severity: z.enum(['Het druppelt', 'Het stroomt'], {
        required_error: 'Geef de ernst van de lekkage aan',
    }),
    buildingType: z.string().min(1, 'Maak een keuze'),
    roofType: z.enum(['Plat dak', 'Schuin dak'], {
        required_error: 'Maak een keuze',
    }),
    accessibility: z.string().min(1, 'Dit veld is verplicht'),
    extraInfo: z.string().optional(),
});

export function LekkageForm() {
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [files, setFiles] = React.useState<FileList | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            address: '',
            postcode: '',
            city: '',
            description: '',
            accessibility: '',
            extraInfo: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log('Form values:', values);
        console.log('Files:', files);
        setIsSubmitted(true);
        form.reset();
        setFiles(null);
    }

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border border-slate-200 p-10 md:p-16 rounded-[2rem] text-center"
            >
                <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="text-brand-green w-10 h-10" />
                </div>
                <h3 className="text-3xl font-heading text-slate-900 mb-4 uppercase tracking-tighter">Bedankt!</h3>
                <p className="text-slate-600 text-lg leading-relaxed font-light">
                    Uw melding is ontvangen, we nemen zo snel mogelijk contact op.
                </p>
                <Button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-10 bg-brand-green hover:bg-brand-green/90 text-white px-8 py-6 rounded-xl font-bold uppercase tracking-widest text-xs"
                >
                    Nieuwe melding
                </Button>
            </motion.div>
        );
    }

    return (
        <div className="bg-slate-50 border border-slate-200 p-6 md:p-12 lg:p-16 rounded-[1.5rem] md:rounded-[2rem] relative z-10" id="lekkage-formulier">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading text-slate-900 mb-8 md:mb-10 uppercase tracking-tighter">
                Lekkage<span className="text-brand-green italic">formulier</span>
            </h3>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:space-y-12">
                    {/* Persoonlijke gegevens */}
                    <div>
                        <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-brand-green mb-6 md:mb-8 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-brand-green/30"></span>
                            Persoonlijke gegevens
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="space-y-2">
                                        <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Naam *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Uw volledige naam" {...field} className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green" />
                                        </FormControl>
                                        <FormMessage className="text-red-500 text-xs ml-4" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem className="space-y-2">
                                        <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Telefoonnummer *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="06 12345678" {...field} className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green" />
                                        </FormControl>
                                        <FormMessage className="text-red-500 text-xs ml-4" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="space-y-2 md:col-span-2">
                                        <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">E-mailadres *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="uw@email.nl" {...field} className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green" />
                                        </FormControl>
                                        <FormMessage className="text-red-500 text-xs ml-4" />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    {/* Locatie gegevens */}
                    <div>
                        <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-brand-green mb-6 md:mb-8 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-brand-green/30"></span>
                            Locatie gegevens
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem className="space-y-2 md:col-span-2">
                                        <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Lekkage adres *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Straat en huisnummer" {...field} className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green" />
                                        </FormControl>
                                        <FormMessage className="text-red-500 text-xs ml-4" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="postcode"
                                render={({ field }) => (
                                    <FormItem className="space-y-2">
                                        <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Postcode *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="1234 AB" {...field} className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green" />
                                        </FormControl>
                                        <FormMessage className="text-red-500 text-xs ml-4" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="city"
                                render={({ field }) => (
                                    <FormItem className="space-y-2">
                                        <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Woonplaats *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Plaatsnaam" {...field} className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green" />
                                        </FormControl>
                                        <FormMessage className="text-red-500 text-xs ml-4" />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    {/* Details van de lekkage */}
                    <div>
                        <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-brand-green mb-6 md:mb-8 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-brand-green/30"></span>
                            Details van de lekkage
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            <FormField
                                control={form.control}
                                name="leakLocation"
                                render={({ field }) => (
                                    <FormItem className="space-y-2">
                                        <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Waar zit de lekkage? *</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green">
                                                    <SelectValue placeholder="Selecteer locatie" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="bg-white border-slate-200 rounded-xl">
                                                {['Dakpannen', 'Plat dak', 'Goot', 'Schuur en/of berging', 'Overig'].map((option) => (
                                                    <SelectItem key={option} value={option}>{option}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage className="text-red-500 text-xs ml-4" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="isUrgent"
                                render={({ field }) => (
                                    <FormItem className="space-y-2">
                                        <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Spoed? *</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green">
                                                    <SelectValue placeholder="Is er spoed?" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="bg-white border-slate-200 rounded-xl">
                                                {['Ja', 'Nee'].map((option) => (
                                                    <SelectItem key={option} value={option}>{option}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage className="text-red-500 text-xs ml-4" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="severity"
                                render={({ field }) => (
                                    <FormItem className="space-y-2">
                                        <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Ernst van de lekkage *</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green">
                                                    <SelectValue placeholder="Wat is de ernst?" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="bg-white border-slate-200 rounded-xl">
                                                {['Het druppelt', 'Het stroomt'].map((option) => (
                                                    <SelectItem key={option} value={option}>{option}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage className="text-red-500 text-xs ml-4" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="buildingType"
                                render={({ field }) => (
                                    <FormItem className="space-y-2">
                                        <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Type gebouw *</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green">
                                                    <SelectValue placeholder="Selecteer type gebouw" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="bg-white border-slate-200 rounded-xl">
                                                <SelectItem value="Flatgebouw">Flatgebouw</SelectItem>
                                                <SelectItem value="Appartementencomplex">Appartementencomplex</SelectItem>
                                                <SelectItem value="Eengezinswoning">Eengezinswoning</SelectItem>
                                                <SelectItem value="Bedrijfspand">Bedrijfspand</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage className="text-red-500 text-xs ml-4" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="roofType"
                                render={({ field }) => (
                                    <FormItem className="space-y-2">
                                        <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Type dak *</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green">
                                                    <SelectValue placeholder="Selecteer type dak" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="bg-white border-slate-200 rounded-xl">
                                                {['Plat dak', 'Schuin dak'].map((option) => (
                                                    <SelectItem key={option} value={option}>{option}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage className="text-red-500 text-xs ml-4" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="accessibility"
                                render={({ field }) => (
                                    <FormItem className="space-y-2 md:col-span-1">
                                        <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Bereikbaarheid *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Hoe kunnen wij het dak op komen?" {...field} className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green" />
                                        </FormControl>
                                        <FormMessage className="text-red-500 text-xs ml-4" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem className="space-y-2 md:col-span-2 lg:col-span-3">
                                        <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Omschrijving</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Beschrijf de lekkage..."
                                                {...field}
                                                className="bg-white border-slate-200 rounded-2xl px-6 py-4 min-h-[120px] focus:border-brand-green resize-none"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500 text-xs ml-4" />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    {/* Bestanden & Extra's */}
                    <div>
                        <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-brand-green mb-6 md:mb-8 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-brand-green/30"></span>
                            Bestanden & Extra's
                        </h4>
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4 block">Foto's uploaden (Optioneel)</label>
                                <div className="relative group">
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={(e) => setFiles(e.target.files)}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                    />
                                    <div className="bg-white border-2 border-dashed border-slate-200 group-hover:border-brand-green/50 transition-colors rounded-2xl px-8 py-10 flex flex-col items-center justify-center gap-4 text-center">
                                        <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-brand-green transition-colors">
                                            <Upload size={24} />
                                        </div>
                                        <div>
                                            <p className="text-slate-900 font-bold tracking-tight">Klik om te uploaden</p>
                                            <p className="text-slate-400 text-xs mt-1 font-light">Sleep bestanden hierheen of klik om te selecteren</p>
                                        </div>
                                    </div>
                                </div>
                                {files && files.length > 0 && (
                                    <div className="mt-4 flex flex-wrap gap-2 ml-4">
                                        {Array.from(files).map((file, i) => (
                                            <div key={i} className="bg-brand-green/10 text-brand-green text-[10px] font-bold px-3 py-1 rounded-full border border-brand-green/20">
                                                {file.name}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <FormField
                                control={form.control}
                                name="extraInfo"
                                render={({ field }) => (
                                    <FormItem className="space-y-2">
                                        <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-4">Extra informatie</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Nog iets wat we moeten weten?"
                                                {...field}
                                                className="bg-white border-slate-200 rounded-2xl px-6 py-4 min-h-[100px] focus:border-brand-green resize-none"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500 text-xs ml-4" />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <div className="pt-6">
                        <Button
                            type="submit"
                            className="w-full bg-brand-green hover:bg-brand-green/90 text-white h-16 md:h-20 rounded-xl md:rounded-3xl font-heading text-lg md:text-xl uppercase tracking-wider transition-all duration-500 shadow-xl shadow-brand-green/20 group relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-4">
                                Lekkage melden
                                <CheckCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/10 translate-y-full hover:translate-y-0 transition-transform duration-500"></div>
                        </Button>
                        <p className="text-center text-slate-400 text-[10px] uppercase font-bold tracking-widest mt-8">
                            WIJ NEMEN DIRECT CONTACT MET U OP — 24/7 BEREIKBAAR
                        </p>
                    </div>
                </form>
            </Form>
        </div>
    );
}
