import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '../../../../../components/ui/button';
import { Input } from '../../../../../components/ui/input';
import { Checkbox } from '../../../../../components/ui/checkbox';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useLogin } from './useLogin';
import type { ControllerRenderProps } from 'react-hook-form';
import type { InputLoginFormSchemaValidateType } from '../../validators/InputLoginFormSchemaValidate';

export const LoginForm = () => {
    const { form, onSubmit, showPassword, setShowPassword, isLoading, error } = useLogin();

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

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }: { field: ControllerRenderProps<InputLogInForm, 'password'> }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-semibold">Mot de passe</FormLabel>
                            <div className="relative">
                                <FormControl>
                                    <Input
                                        className='h-[44px] border-[#1E1F2533] focus-visible:ring-[#0370EE]'
                                        placeholder="Entrez votre mot de passe"
                                        type={showPassword ? 'text' : 'password'}
                                        {...field}
                                    />
                                </FormControl>
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 "
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <Eye className="h-5 w-5" />
                                    ) : (
                                        <EyeOff className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex items-center justify-between">
                    <FormField
                        control={form.control}
                        name="rememberMe"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer text-sm">
                                    Se souvenir de moi
                                </FormLabel>
                            </FormItem>
                        )}
                    />

                    <a
                        href="#" // Remplacez par votre route
                        className="text-[#0370EE] hover:text-[#18227B] text-[14px] font-medium"
                    >
                        Mot de passe oublié?
                    </a>
                </div>

                {error && (
                    <div className="text-red-500 text-sm text-center">
                        {error}
                    </div>
                )}

                <Button
                    type="submit"
                    className="w-full h-[44px] bg-[#18227B] rounded-[4px] text-white  text-[16px] "
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Connexion...
                        </>
                    ) : (
                        "Se connecter"
                    )}
                </Button>
            </form>
        </Form>
    );
};
