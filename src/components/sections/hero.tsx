import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getPlaceholderImage } from "@/lib/placeholder-images";

export function HeroSection() {
  const profileImage = getPlaceholderImage("profile");
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-slide-in-from-left">
              <span className="block">Bonjour.</span>
              <span className="block mt-2 animate-slide-in-from-left animation-delay-200">Je suis Boua Josaphat</span>
            </h1>
            <p className="mt-4 font-headline text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/90 animate-slide-in-from-left animation-delay-400">
              Développeur Full Stack
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4 animate-fade-in-up animation-delay-600">
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
          <div className="relative flex justify-center animate-scale-in animation-delay-600">
            <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
              <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-scale-in animation-delay-800"></div>
              <div className="absolute inset-4 rounded-full border-2 border-primary/20 animate-scale-in animation-delay-1000"></div>
              {profileImage && <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                width={400}
                height={400}
                className="rounded-full object-cover h-full w-full"
                data-ai-hint={profileImage.imageHint}
                priority
              />}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-20 animate-fade-in-up animation-delay-1000">
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
