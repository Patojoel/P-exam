import { ControllerRenderProps } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '../../../../../components/ui/button';
import { Input } from '../../../../../components/ui/input';
import { Checkbox } from '../../../../../components/ui/checkbox'; // <-- Assurez-vous d'avoir ce composant
import { Eye, EyeOff, Loader2 } from 'lucide-react'; // <-- Ajout de Loader2 pour le chargement
import { InputLogInForm } from '../validators/InputLoginFormSchemaValidate';
import { useLogin } from './useLogin';

export const LoginForm = () => {
    // Les propriétés sont déstructurées depuis le hook useLogin()
    const { form, onSubmit, showPassword, setShowPassword, isLoading, error } = useLogin(); 

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Champ Email (avec style de bordure active comme sur l'image) */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }: { field: ControllerRenderProps<InputLogInForm, 'email'> }) => (
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
                
                {/* Champ Mot de passe */}
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }: { field: ControllerRenderProps<InputLogInForm, 'password'> }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-semibold">Mot de passe</FormLabel>
                            <div className="relative">
                                <FormControl>
                                    <Input 
                                        className='h-[44px] '
                                        placeholder="Entrez votre mot de passe"
                                        type={showPassword ? 'text' : 'password'}
                                        {...field} 
                                    />
                                </FormControl>
                                {/* Bouton pour basculer la visibilité du mot de passe */}
                                <button
                                    type="button"
                                    // Utilisation de text-gray-400/500 et un h-5 w-5 pour ressembler à l'image
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700" 
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {/* L'icône par défaut est l'œil barré (EyeOff) sur l'image */}
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

                {/* Section Se souvenir de moi / Mot de passe oublié */}
                <div className="flex items-center justify-between">
                    {/* Checkbox "Se souvenir de moi" - Nécessite d'ajouter 'rememberMe' au schéma */}
                    <FormField
                        control={form.control}
                        name="rememberMe" // Ceci doit exister dans InputLoginFormSchemaValidate
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
                        className="text-[#0370EE] hover:text-[#18227B] text-sm font-medium"
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
                    className="w-full h-[44px] bg-[#18227B] rounded-[4px] hover:bg-indigo-80 text-lg font-semibold" // Style pour un bouton bleu foncé
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