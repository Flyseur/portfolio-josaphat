import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Projets en vedette</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Une sélection de mon travail. Quelque chose vous plaît ? Parlons-en.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => {
            const projectImage = getPlaceholderImage(project.image);
            return (
              <Card key={project.title} className="flex flex-col overflow-hidden bg-card">
                {projectImage && (
                  <div className="relative aspect-[3/2] w-full">
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                      data-ai-hint={projectImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4 bg-card pt-6">
                  <Button asChild variant="outline">
                    <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Dépôt
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Démo Live
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
