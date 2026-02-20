import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { CheckCircle, Upload, Loader2, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
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
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

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
    acceptTerms: z.boolean().refine(val => val === true, 'U moet akkoord gaan met de algemene voorwaarden om door te gaan'),
});

// Helper function to convert files to base64
async function filesToBase64(files: FileList): Promise<Array<{
    filename: string;
    content: string;
    contentType: string;
}>> {
    const promises = Array.from(files).map(async (file) => {
        return new Promise<{ filename: string; content: string; contentType: string }>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const base64 = (reader.result as string).split(',')[1];
                resolve({
                    filename: file.name,
                    content: base64,
                    contentType: file.type || 'application/octet-stream',
                });
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    });
    return Promise.all(promises);
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export function LekkageForm() {
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
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
            acceptTerms: false,
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);

        try {
            // Convert files to base64 if present
            let attachments: Array<{ filename: string; content: string; contentType: string }> = [];
            if (files && files.length > 0) {
                attachments = await filesToBase64(files);
            }

            const { data, error } = await supabase.functions.invoke('send-form-email/spoed', {
                body: {
                    name: values.name.trim(),
                    phone: values.phone.trim(),
                    email: values.email.trim(),
                    address: values.address.trim(),
                    postcode: values.postcode.trim(),
                    city: values.city.trim(),
                    leakLocation: values.leakLocation,
                    isUrgent: values.isUrgent,
                    severity: values.severity,
                    buildingType: values.buildingType,
                    roofType: values.roofType,
                    accessibility: values.accessibility.trim(),
                    description: values.description?.trim() || undefined,
                    extraInfo: values.extraInfo?.trim() || undefined,
                    attachments: attachments.length > 0 ? attachments : undefined,
                }
            });

            if (error) throw error;

            if (!data?.success) {
                throw new Error(data?.error || 'Onbekende fout');
            }

            setIsSubmitted(true);
            form.reset();
            setFiles(null);
            toast.success('Uw melding is met prioriteit ontvangen. Wij bellen u direct.');
        } catch (error) {
            console.error('Form submission error:', error);
            toast.error('Er ging iets mis. Probeer het opnieuw of bel ons direct.');
        } finally {
            setIsSubmitting(false);
        }
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
                <h3 className="text-3xl font-heading text-slate-900 mb-4 uppercase tracking-tighter">Melding Ontvangen!</h3>
                <p className="text-slate-600 text-lg leading-relaxed font-light">
                    Uw melding is met prioriteit ontvangen. Wij bellen u direct.
                </p>
                <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="feigro"
                    size="xl"
                    className="mt-10"
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
                                            <Input placeholder="Uw volledige naam" {...field} disabled={isSubmitting} className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green disabled:opacity-50" />
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
                                            <Input placeholder="06 12345678" {...field} disabled={isSubmitting} className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green disabled:opacity-50" />
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
                                            <Input placeholder="uw@email.nl" {...field} disabled={isSubmitting} className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green disabled:opacity-50" />
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
                                            <Input placeholder="Straat en huisnummer" {...field} disabled={isSubmitting} className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green disabled:opacity-50" />
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
                                            <Input placeholder="1234 AB" {...field} disabled={isSubmitting} className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green disabled:opacity-50" />
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
                                            <Input placeholder="Plaatsnaam" {...field} disabled={isSubmitting} className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green disabled:opacity-50" />
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
                                        <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                                            <FormControl>
                                                <SelectTrigger className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green disabled:opacity-50">
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
                                        <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                                            <FormControl>
                                                <SelectTrigger className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green disabled:opacity-50">
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
                                        <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                                            <FormControl>
                                                <SelectTrigger className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green disabled:opacity-50">
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
                                        <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                                            <FormControl>
                                                <SelectTrigger className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green disabled:opacity-50">
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
                                        <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                                            <FormControl>
                                                <SelectTrigger className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green disabled:opacity-50">
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
                                            <Input placeholder="Hoe kunnen wij het dak op komen?" {...field} disabled={isSubmitting} className="bg-white border-slate-200 rounded-2xl px-6 py-4 h-14 focus:border-brand-green disabled:opacity-50" />
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
                                                disabled={isSubmitting}
                                                className="bg-white border-slate-200 rounded-2xl px-6 py-4 min-h-[120px] focus:border-brand-green resize-none disabled:opacity-50"
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
                                        onChange={(e) => {
                                            const selectedFiles = e.target.files;
                                            if (selectedFiles) {
                                                const oversizedFiles = Array.from(selectedFiles).filter(f => f.size > MAX_FILE_SIZE);
                                                if (oversizedFiles.length > 0) {
                                                    toast.error('Bestanden mogen niet groter zijn dan 5MB');
                                                    e.target.value = '';
                                                    return;
                                                }
                                                setFiles(selectedFiles);
                                            }
                                        }}
                                        disabled={isSubmitting}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 disabled:cursor-not-allowed"
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
                                                disabled={isSubmitting}
                                                className="bg-white border-slate-200 rounded-2xl px-6 py-4 min-h-[100px] focus:border-brand-green resize-none disabled:opacity-50"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500 text-xs ml-4" />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    {/* Algemene Voorwaarden */}
                    <div className="pt-4">
                        <FormField
                            control={form.control}
                            name="acceptTerms"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-6 bg-white border border-slate-200 rounded-2xl">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            disabled={isSubmitting}
                                            className="mt-1 border-slate-300 data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green"
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel className="text-sm font-medium text-slate-700 cursor-pointer">
                                            Ik ga akkoord met de algemene voorwaarden *
                                        </FormLabel>
                                        <p className="text-xs text-slate-400 font-light">
                                            Door dit vakje aan te vinken, verklaart u zich akkoord met onze werkwijze en voorwaarden voor spoedmeldingen.
                                        </p>
                                        <FormMessage className="text-red-500 text-xs" />
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="pt-6">
                        <Button
                            type="submit"
                            variant="feigro"
                            size="xl"
                            disabled={isSubmitting}
                            className="w-full h-16 md:h-20 rounded-xl md:rounded-3xl text-lg md:text-xl shadow-xl shadow-brand-green/20 group disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center gap-4">
                                    <Loader2 className="w-6 h-6 animate-spin" />
                                    Melding verzenden...
                                </span>
                            ) : (
                                <span className="flex items-center justify-center gap-4">
                                    Lekkage melden
                                    <CheckCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                </span>
                            )}
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
