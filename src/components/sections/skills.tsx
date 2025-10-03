import { skills } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TechIcon } from '@/components/icons';

export function SkillsSection() {
  return (
    <section id="skills">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Technical Skills</h2>
          <p className="mt-4 text-lg text-foreground/80">
            A snapshot of the technologies, languages, and tools I work with.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-xl">{category}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid grid-cols-2 gap-4">
                  {skillList.map((skill) => (
                    <li key={skill.name} className="flex items-center gap-3">
                      <TechIcon type={skill.icon} className="h-6 w-6 text-primary" />
                      <span className="text-sm font-medium">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
