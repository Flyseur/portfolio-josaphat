import { Code, Smartphone, Server } from 'lucide-react';

export function AboutSection() {

  const services = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Développement de sites web",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Développement d'applications",
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Développement back-end",
    }
  ];

  const stats = [
    { value: "3+", label: "Projets Freelance" },
    { value: "1+", label: "Ans d'expérience" },
    { value: "10+", label: "Technologies maîtrisées" },
  ];

  return (
    <section id="about" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                   {service.icon}
                   {index < services.length - 1 && <div className="mt-4 h-16 w-px bg-border"></div>}
                </div>
                <h3 className="mt-1 font-headline text-xl font-semibold">{service.title}</h3>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">À propos de moi</h2>
            <p className="mt-6 text-foreground/80 text-lg">
              Développeur passionné, étudiant en Informatique et Génie Logiciel. Je conçois des applications web et mobiles efficaces, alliant performance et design, avec un esprit curieux, rigoureux et orienté solution.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {stats.map(stat => (
                <div key={stat.label}>
                  <p className="font-headline text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-2 text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
