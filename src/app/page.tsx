import { Header } from '@/components/header';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ProjectsSection } from '@/components/sections/projects';
import { AiAnalyzerSection } from '@/components/sections/ai-analyzer';
import { SkillsSection } from '@/components/sections/skills';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <AiAnalyzerSection />
      </main>
      <Footer />
    </div>
  );
}
