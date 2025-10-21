import { Mail, Phone, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ContactSection() {
  const contacts = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      label: 'Email',
      value: 'josaphatboua220@gmail.com',
      href: 'mailto:josaphatboua220@gmail.com',
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      label: 'Téléphone',
      value: '+225 05-44-63-34-31',
      href: 'tel:+2250544633431',
    },
    {
      icon: <Facebook className="h-6 w-6 text-primary" />,
      label: 'Facebook',
      value: 'Boua Olivier Josaphat',
      href: 'https://www.facebook.com/profile.php?id=100007390037739',
    },
  ];

  return (
    <section id="contact" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Contactez-moi
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            N'hésitez pas à me contacter. Je suis ouvert aux opportunités de freelance et aux collaborations.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <div className="flex flex-col gap-8">
            {contacts.map((contact, index) => (
              <div key={index} className="flex animate-fade-in-up items-center gap-4" style={{ animationDelay: `${index * 200}ms`}}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  {contact.icon}
                </div>
                <div>
                  <h3 className="font-headline text-lg font-semibold">{contact.label}</h3>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {contact.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
