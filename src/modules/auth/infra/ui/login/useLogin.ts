import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { InputLoginFormSchemaValidate, type InputLoginFormSchemaValidateType } from '../../validators/InputLoginFormSchemaValidate';

export const useLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

const form=useForm<InputLoginFormSchemaValidateType>({
  resolver:zodResolver(InputLoginFormSchemaValidate)
})

  const onSubmit = async (data: InputLoginFormSchemaValidateType) => {
    try {
      setIsLoading(true);
      setError(null);
      console.log('Tentative de connexion avec:', data);

      // Simulation d'un appel API
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Ici, vous pourriez avoir quelque chose comme :
      // const response = await authService.login(data);
      // handleNavigate(AuthRoutes.dashboard);

      console.log('Connexion réussie');
    } catch (err) {
      console.error('Erreur de connexion:', err);
      setError('Identifiants incorrects ou problème de connexion');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    onSubmit,
    showPassword,
    setShowPassword,
    isLoading,
    error
  };
};