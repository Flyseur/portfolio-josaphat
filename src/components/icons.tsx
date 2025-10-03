import { cn } from "@/lib/utils";
import {
  Code,
  Figma,
  GitMerge,
  Github,
  PenTool,
  Rocket,
} from "lucide-react";

export type TechIconType =
  | "react"
  | "nextjs"
  | "nodejs"
  | "tailwind"
  | "firebase"
  | "docker"
  | "figma"
  | "javascript"
  | "typescript"
  | "python"
  | "html"
  | "css"
  | "framer"
  | "shadcn"
  | "genkit"
  | "vercel"
  | "github";

interface TechIconProps extends React.SVGProps<SVGSVGElement> {
  type: TechIconType;
}

export function TechIcon({ type, className, ...props }: TechIconProps) {
  const SvgComponent = iconMap[type];
  if (!SvgComponent) {
    return <Code className={cn("h-full w-full", className)} />;
  }
  return <SvgComponent className={cn("h-full w-full", className)} {...props} />;
}

const iconMap: Record<TechIconType, React.FC<React.SVGProps<SVGSVGElement>>> = {
  react: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="2" />
      <g>
        <ellipse cx="12" cy="12" rx="11" ry="4" />
        <ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(120 12 12)" />
      </g>
    </svg>
  ),
  nextjs: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M15.5 12L6.5 21" />
      <path d="M10 21V3L22 21" />
    </svg>
  ),
  nodejs: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  tailwind: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 12c-3 0-6 3-6 6s3 6 6 6 6-3 6-6-3-6-6-6zM6 6c3 0 6-3 6-6s-3-6-6-6-6 3-6 6 3 6 6 6z" />
      <path d="M18 18c-3 0-6 3-6 6s3 6 6 6 6-3 6-6-3-6-6-6zM12 6c3 0 6-3 6-6s-3-6-6-6-6 3-6 6 3 6 6 6z" />
    </svg>
  ),
  firebase: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 2L4 6v12l8 4 8-4V6z" />
      <path d="M12 11l8-4" />
      <path d="M12 11V2" />
      <path d="M12 11L4 7" />
    </svg>
  ),
  docker: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10" />
      <path d="M7 12l5 5" />
      <path d="M12 7l5 5" />
    </svg>
  ),
  figma: (props) => <Figma {...props} />,
  javascript: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  ),
  typescript: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M4 12h16M4 8h16M4 16h16" />
      <path d="M10 4v16" />
    </svg>
  ),
  python: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M14.5 10.5c-1 0-1.5.5-1.5 1.5v4c0 1 .5 1.5 1.5 1.5s1.5-.5 1.5-1.5v-4c0-1-.5-1.5-1.5-1.5z" />
      <path d="M9.5 13.5c1 0 1.5-.5 1.5-1.5v-4c0-1-.5-1.5-1.5-1.5S8 7.5 8 8.5v4c0 1 .5 1.5 1.5 1.5z" />
      <circle cx="14.5" cy="8" r="1.5" />
      <circle cx="9.5" cy="16" r="1.5" />
    </svg>
  ),
  html: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
      <path d="m9 16 3-3-3-3" />
      <path d="M15 8h-2" />
    </svg>
  ),
  css: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  framer: (props) => <PenTool {...props} />,
  shadcn: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
    </svg>
  ),
  genkit: (props) => <Rocket {...props} />,
  vercel: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <polygon points="12 2 2 12 12 22 22 12 12 2" />
    </svg>
  ),
  github: (props) => <Github {...props} />,
};
