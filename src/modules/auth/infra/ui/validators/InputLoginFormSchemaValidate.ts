import { z } from "zod";

export const inputLoginFormValide = z.object({
  email: z.string().min(1, { message: "veuillez entrez une adresse email" }),
  password: z
    .string({
      message: "Veuillez renseigner votre mot de passe",
    })
    .trim()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/,
      "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial"
    ),
rememberMe: z.boolean().optional().default(false)

});
export type InputLogInForm = z.infer<typeof inputLoginFormValide>

