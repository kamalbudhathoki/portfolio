import { Monitor, Server, BrainCircuit, Wrench } from "lucide-react";
import type { IconType, SkillCategory, Skill } from "@/types";

const s = (name: string, level: number, icon: IconType): Skill => ({ name, level, icon });

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Building fast, responsive and polished interfaces.",
    accent: "primary",
    skills: [
      s("React", 92, Monitor),
      s("Next.js", 90, Monitor),
      s("Tailwind CSS", 88, Monitor),
      s("Redux Toolkit", 80, Monitor),
      s("GSAP", 78, Monitor),
    ],
  },
  {
    title: "Backend",
    description: "Robust APIs and scalable server architectures.",
    accent: "accent",
    skills: [
      s("Node.js", 88, Server),
      s("Express", 86, Server),
      s("PostgreSQL", 78, Server),
      s("MongoDB", 85, Server),
      s("REST APIs", 90, Server),
    ],
  },
  {
    title: "AI & Data",
    description: "Turning data into intelligent, learning systems.",
    accent: "secondary",
    skills: [
      s("Python", 82, BrainCircuit),
      s("NumPy", 76, BrainCircuit),
      s("Pandas", 74, BrainCircuit),
      s("Machine Learning", 72, BrainCircuit),
      s("Deep Learning", 68, BrainCircuit),
      s("LLMs", 70, BrainCircuit),
    ],
  },
  {
    title: "Tools & Workflow",
    description: "The daily toolkit behind every shipped feature.",
    accent: "accent",
    skills: [
      s("Git", 90, Wrench),
      s("Docker", 70, Wrench),
      s("VS Code", 95, Wrench),
      s("Linux", 75, Wrench),
      s("Postman", 85, Wrench),
    ],
  },
];