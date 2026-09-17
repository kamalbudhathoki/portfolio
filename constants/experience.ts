import type { ExperienceItem } from "@/types";

export const experienceItems: ExperienceItem[] = [
  {
    id: "mern-stack-training",
    title: "MERN Stack Training",
    company: "Full-Stack Development Program",
    period: "2023 — 2024",
    location: "Kathmandu, Nepal",
    description:
      "Completed an intensive training program covering the complete MERN stack — from core JavaScript fundamentals to shipping full production-ready applications.",
    highlights: [
      "Built 15+ real-world projects across React, Node.js and databases",
      "Mastered REST API design, authentication and authorization",
      "Learned data modeling with both SQL (PostgreSQL) and NoSQL (MongoDB)",
    ],
    tags: ["React", "Node.js", "MongoDB", "REST APIs"],
  },
  {
    id: "frontend-projects",
    title: "Frontend Engineer — Freelance & Practice",
    company: "Independent Projects",
    period: "2024 — 2025",
    location: "Remote",
    description:
      "Designed and developed polished front-end experiences for personal and client projects, focusing on animation quality, performance and accessibility.",
    highlights: [
      "Shipped Sahakari Connect, Hospital & E-Commerce platforms",
      "Implemented GSAP and Framer Motion animation systems",
      "Optimized Lighthouse scores above 95 across shipped sites",
    ],
    tags: ["Next.js", "Tailwind", "GSAP", "Framer Motion"],
  },
  {
    id: "ai-learning-journey",
    title: "AI Engineering Journey",
    company: "Self-Directed Learning",
    period: "2025 — Present",
    location: "Continuous",
    description:
      "Transitioning into AI Engineering — studying machine learning, deep learning and large language models while applying them to practical applications.",
    highlights: [
      "Working through Python, NumPy, Pandas and ML fundamentals",
      "Exploring deep learning, transformers and LLM tooling (LangChain)",
      "Containerizing ML workflows with Docker for reproducible builds",
    ],
    tags: ["Python", "Machine Learning", "Deep Learning", "LLMs"],
  },
];