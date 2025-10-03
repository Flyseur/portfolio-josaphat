import type { TechIconType } from "@/components/icons";

export interface Skill {
  name: string;
  icon: TechIconType;
}

export const skills: { [key: string]: Skill[] } = {
  "Languages & Databases": [
    { name: 'HTML5', icon: 'html' },
    { name: 'CSS3', icon: 'css' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Python', icon: 'python' },
    { name: 'Firebase', icon: 'firebase' },
  ],
  "Frameworks & Libraries": [
    { name: 'React', icon: 'react' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Tailwind CSS', icon: 'tailwind' },
    { name: 'Shadcn/UI', icon: 'shadcn' },
    { name: 'Framer Motion', icon: 'framer' },
  ],
  "Tools & Platforms": [
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
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with a modern UI, product management, and a secure checkout process.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    liveLink: '#',
    repoLink: '#',
    image: 'project1'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates, user authentication, and drag-and-drop functionality.',
    techStack: ['React', 'Firebase', 'Zustand', 'Framer Motion'],
    liveLink: '#',
    repoLink: '#',
    image: 'project2'
  },
  {
    title: 'Portfolio Website V1',
    description: 'A previous version of my personal portfolio, built to showcase my design and development skills.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    liveLink: '#',
    repoLink: '#',
    image: 'project3'
  },
  {
    title: 'AI Chatbot Interface',
    description: 'A sleek and responsive user interface for an AI-powered chatbot, focusing on user experience and accessibility.',
    techStack: ['React', 'TypeScript', 'Vite', 'Shadcn/UI'],
    liveLink: '#',
    repoLink: '#',
    image: 'project4'
  }
];
