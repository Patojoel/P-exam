import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '../../../../../components/ui/button';
import { Input } from '../../../../../components/ui/input';
import type { ControllerRenderProps } from 'react-hook-form';
import type { InputLoginFormSchemaValidateType } from '../../validators/InputLoginFormSchemaValidate';
import { useForgotPassword } from './useForgotPassword';

export const ForgotPasswordForm = () => {
    const { form, onSubmit } = useForgotPassword();

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }: { field: ControllerRenderProps<InputLoginFormSchemaValidateType, 'email'> }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-semibold">Email</FormLabel>
                            <FormControl>
                                <Input
                                    className='h-[44px] border-[#1E1F2533] focus-visible:ring-[#0370EE]' // Style pour la bordure bleue
                                    placeholder="Entrez votre email"
                                    type="email"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="w-full h-[44px] bg-primary rounded-[4px] text-white font-normal  text-[16px] "

                >
                    Envoyer
                </Button>
            </form>
        </Form>
    );
};
