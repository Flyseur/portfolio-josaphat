import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="bg-background">
      <div className="container mx-auto px-4 py-24 text-center md:px-6 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto">
          <p className="font-headline text-primary">Alexandre Dubois</p>
          <h1 className="mt-2 font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Creative Full-Stack Developer & UI Enthusiast
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 sm:text-xl">
            Building seamless digital experiences with a passion for clean code and sophisticated design.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#contact">
                Get in Touch <Mail className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#projects">
                View My Work <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
