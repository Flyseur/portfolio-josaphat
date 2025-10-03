"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères."),
  email: z.string().email("Veuillez saisir une adresse e-mail valide."),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Veuillez corriger les erreurs et réessayer.",
      success: false,
    };
  }
  
  console.log("Formulaire de contact soumis avec succès:", validatedFields.data);

  return {
    message: "Merci pour votre message ! Je vous répondrai bientôt.",
    success: true,
  };
}
