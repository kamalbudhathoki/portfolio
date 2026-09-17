export type IconType = React.ComponentType<{ className?: string }>;

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: IconType;
}

export interface SkillCategory {
  title: string;
  description: string;
  accent: "primary" | "secondary" | "accent";
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  gradient: string;
  tech: string[];
  github: string;
  demo: string;
  year: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface JourneyStep {
  id: string;
  title: string;
  description: string;
  icon: IconType;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: IconType;
}

export interface SectionHeading {
  kicker: string;
  title: string;
  description?: string;
}