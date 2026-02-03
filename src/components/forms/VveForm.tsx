import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

const formSchema = z.object({
    firstName: z.string().min(2, 'Voornaam is verplicht'),
    lastName: z.string().min(2, 'Achternaam is verplicht'),
    email: z.string().email('Ongeldig e-mailadres'),
    subject: z.string().optional(),
    phone: z.string().min(10, 'Geldig telefoonnummer is verplicht'),
    address: z.string().optional(),
    message: z.string().min(10, 'Bericht moet minimaal 10 karakters bevatten'),
});

export const VveForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            phone: '',
            address: '',
            message: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast.success('Uw aanvraag is verzonden!', {
            description: 'We nemen zo snel mogelijk contact met u op.',
        });
        form.reset();
    }

    return (
        <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm sticky top-32">
            <div className="mb-8">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">Uw gegevens</h3>
                <p className="text-slate-500 text-sm">Laat ons weten hoe we u kunnen helpen.</p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs font-bold uppercase tracking-wider text-slate-500">Voornaam *</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} className="bg-white border-slate-200 focus:border-brand-green/50 active:ring-brand-green/20" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs font-bold uppercase tracking-wider text-slate-500">Achternaam *</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} className="bg-white border-slate-200 focus:border-brand-green/50 active:ring-brand-green/20" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs font-bold uppercase tracking-wider text-slate-500">Email *</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} className="bg-white border-slate-200 focus:border-brand-green/50 active:ring-brand-green/20" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs font-bold uppercase tracking-wider text-slate-500">Onderwerp</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} className="bg-white border-slate-200 focus:border-brand-green/50 active:ring-brand-green/20" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs font-bold uppercase tracking-wider text-slate-500">Telefoon *</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} className="bg-white border-slate-200 focus:border-brand-green/50 active:ring-brand-green/20" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs font-bold uppercase tracking-wider text-slate-500">Adres</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Straatnaam, plaats en postcode" {...field} className="bg-white border-slate-200 focus:border-brand-green/50 active:ring-brand-green/20" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="pt-4">
                        <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">Hoe kunnen we helpen?</h3>
                        <p className="text-slate-500 text-sm mb-4">Voel u vrij om een vraag te stellen</p>

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs font-bold uppercase tracking-wider text-slate-500">Opmerking / Vraag</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder=""
                                            className="min-h-[150px] bg-white border-slate-200 resize-none focus:border-brand-green/50 active:ring-brand-green/20"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button type="submit" variant="feigro" size="xl" className="w-full shadow-lg shadow-brand-green/20">
                        Stuur mij het gratis advies
                    </Button>
                </form>
            </Form>
        </div>
    );
};
