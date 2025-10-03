import type { TechIconType } from "@/components/icons";

export interface Skill {
  name: string;
  icon: TechIconType;
}

export const skills: { [key: string]: Skill[] } = {
  "Langages & Bases de données": [
    { name: 'HTML5', icon: 'html' },
    { name: 'CSS3', icon: 'css' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Python', icon: 'python' },
    { name: 'Firebase', icon: 'firebase' },
  ],
  "Frameworks & Librairies": [
    { name: 'React', icon: 'react' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Tailwind CSS', icon: 'tailwind' },
    { name: 'Shadcn/UI', icon: 'shadcn' },
    { name: 'Framer Motion', icon: 'framer' },
  ],
  "Outils & Plateformes": [
    { name: 'Git & GitHub', icon: 'github' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Figma', icon: 'figma' },
    { name: 'Genkit', icon: 'genkit' },
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
    title: 'Plateforme E-commerce',
    description: 'Une solution e-commerce complète avec une interface utilisateur moderne, gestion des produits et un processus de paiement sécurisé.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    liveLink: '#',
    repoLink: '#',
    image: 'project1'
  },
  {
    title: 'Application de gestion de tâches',
    description: 'Un outil collaboratif de gestion de tâches avec des mises à jour en temps réel, authentification des utilisateurs et fonctionnalité de glisser-déposer.',
    techStack: ['React', 'Firebase', 'Zustand', 'Framer Motion'],
    liveLink: '#',
    repoLink: '#',
    image: 'project2'
  },
  {
    title: 'Portfolio V1',
    description: 'Une version précédente de mon portfolio personnel, conçue pour mettre en valeur mes compétences en design et développement.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    liveLink: '#',
    repoLink: '#',
    image: 'project3'
  },
  {
    title: 'Interface de Chatbot IA',
    description: "Une interface utilisateur élégante et réactive pour un chatbot alimenté par l'IA, axée sur l'expérience utilisateur et l'accessibilité.",
    techStack: ['React', 'TypeScript', 'Vite', 'Shadcn/UI'],
    liveLink: '#',
    repoLink: '#',
    image: 'project4'
  }
];
