import { z } from "zod";

export const InputLoginFormSchemaValidate = z.object({
  email: z.string().min(1, { message: "veuillez entrez une adresse email" }),
  password: z
    .string({
      message: "Veuillez renseigner votre mot de passe",
    }),
});

export type InputLoginFormSchemaValidateType = z.infer<typeof InputLoginFormSchemaValidate>;

export const InputForgetPasswordSchemaValidate = z.object({
  email: z.string().min(1, { message: "veuillez entrez une adresse email" }),
});
export type InputForgetPasswordSchemaValidateType = z.infer<typeof InputForgetPasswordSchemaValidate>;