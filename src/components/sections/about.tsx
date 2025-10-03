import Image from 'next/image';
import { getPlaceholderImage } from '@/lib/placeholder-images';

export function AboutSection() {
  const profileImage = getPlaceholderImage('profile') ?? {
    imageUrl: 'https://picsum.photos/seed/profile/500/500',
    imageHint: 'professional portrait',
  };

  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
            <p className="mt-4 text-foreground/80">
              I'm a passionate developer with a knack for turning complex problems into elegant, user-friendly solutions. With a background in both front-end and back-end development, I thrive on building comprehensive and high-performance web applications.
            </p>
            <p className="mt-4 text-foreground/80">
              My journey in tech is driven by a constant curiosity and a desire to learn new technologies. I believe that the best products are born from a blend of solid engineering, creative design, and a deep understanding of user needs. When I'm not coding, I enjoy exploring new design trends and contributing to open-source projects.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-64 w-64 overflow-hidden rounded-full shadow-lg md:h-80 md:w-80">
               <Image
                src={profileImage.imageUrl}
                alt="A portrait of the developer"
                fill
                className="object-cover"
                data-ai-hint={profileImage.imageHint}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
