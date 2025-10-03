"use client";

import { useEffect, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Adresse e-mail invalide"),
  message: z.string().min(1, "Le message est requis"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const initialState = {
  message: "",
  errors: {},
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Envoi...
        </>
      ) : (
        <>
          Envoyer le message <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export function ContactSection() {
  const { toast } = useToast();
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { register, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Succès !",
          description: state.message,
        });
        reset();
      } else {
        toast({
          variant: "destructive",
          title: "Oups !",
          description: state.message,
        });
      }
    }
  }, [state, toast, reset]);

  const allErrors = { ...errors, ...state.errors };

  return (
    <section id="contact" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Contactez-moi</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Vous avez un projet en tête ou vous voulez simplement dire bonjour ? Laissez-moi un message.
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-2xl">
            <form action={formAction} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom</Label>
                  <Input id="name" {...register("name")} className="bg-input" />
                  {allErrors?.name && <p className="text-sm text-destructive">{allErrors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...register("email")} className="bg-input"/>
                  {allErrors?.email && <p className="text-sm text-destructive">{allErrors.email[0]}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" className="min-h-[120px] bg-input" {...register("message")} />
                {allErrors?.message && <p className="text-sm text-destructive">{allErrors.message[0]}</p>}
              </div>
              <SubmitButton />
            </form>
        </div>
      </div>
    </section>
  );
}
