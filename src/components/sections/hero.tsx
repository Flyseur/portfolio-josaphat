import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getPlaceholderImage } from "@/lib/placeholder-images";

export function HeroSection() {
  const profileImage = getPlaceholderImage('profile') ?? {
    imageUrl: 'https://picsum.photos/seed/profile/500/500',
    imageHint: 'professional portrait',
  };

  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Bonjour.</span>
              <span className="block mt-2">Je suis Boua Josaphat</span>
            </h1>
            <p className="mt-4 font-headline text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/90">
              Développeur Full Stack
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <Button asChild size="lg">
                <Link href="#projects">
                  Un projet ?
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#">
                  Mon CV
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
              <div className="absolute inset-0 rounded-full border-4 border-primary/30"></div>
              <div className="absolute inset-4 rounded-full border-2 border-primary/20"></div>
               <Image
                src={profileImage.imageUrl}
                alt="Portrait de Boua Josaphat Olivier Konan"
                width={400}
                height={400}
                className="rounded-full object-cover h-full w-full"
                data-ai-hint={profileImage.imageHint}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-20">
        <div className="flex justify-around items-center text-muted-foreground font-medium text-lg">
          <span>HTML5</span>
          <span>CSS</span>
          <span>Javascript</span>
          <span>PHP</span>
          <span>React</span>
          <span>Django</span>
          <span>MySQL</span>
        </div>
      </div>
    </section>
  );
}
