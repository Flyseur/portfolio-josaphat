import type { TechIconType } from "@/components/icons";

export interface Skill {
  name: string;
  icon: TechIconType;
}

export const skills: { [key: string]: Skill[] } = {
  "Langages": [
    { name: 'HTML', icon: 'html' },
    { name: 'CSS', icon: 'css' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'PHP', icon: 'typescript' }, // Using typescript icon for PHP
    { name: 'Python', icon: 'python' },
    { name: 'MySQL', icon: 'firebase' }, // Using firebase icon for MySQL
  ],
  "Frameworks": [
    { name: 'React', icon: 'react' },
    { name: 'Django', icon: 'nextjs' }, // Using nextjs icon for Django
    { name: 'Laravel', icon: 'nodejs' }, // Using nodejs icon for Laravel
    { name: 'Flutter', icon: 'react' }, // Using react icon for Flutter
    { name: 'Tailwind CSS', icon: 'tailwind' },
    { name: 'Shadcn/UI', icon: 'shadcn' },
  ],
  "Outils & Plateformes": [
    { name: 'Git & GitHub', icon: 'github' },
    { name: 'Figma', icon: 'figma' },
    { name: 'Vercel', icon: 'vercel' },
  ],
};

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  repoLink: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: 'Sites Vitrines et E-commerce',
    description: 'Création de sites vitrines et e-commerce en utilisant HTML, CSS, JavaScript, et des frameworks comme React et Vue.js.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js'],
    liveLink: '#',
    repoLink: '#',
    image: 'project1'
  },
  {
    title: 'Plateformes Web Dynamiques',
    description: "Développement de plateformes web dynamiques et interactives, incluant l'authentification, des formulaires et l'intégration de bases de données MySQL.",
    techStack: ['React', 'MySQL', 'Node.js', 'Express'],
    liveLink: '#',
    repoLink: '#',
    image: 'project2'
  },
  {
    title: 'Responsable Développeur Web',
    description: "En tant que responsable de la structure informatique chez TektechAfrica, j'ai dirigé la création de sites web et d'applications mobiles.",
    techStack: ['Management', 'Architecture', 'Développement Web', 'Mobile'],
    liveLink: '#',
    repoLink: '#',
    image: 'project3'
  },
  {
    title: 'Application Mobile Flutter',
    description: "Développement d'une application mobile multiplateforme avec Flutter pour une expérience utilisateur native et fluide sur iOS et Android.",
    techStack: ['Flutter', 'Dart', 'Firebase'],
    liveLink: '#',
    repoLink: '#',
    image: 'project4'
  },
];
