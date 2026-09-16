import type { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const siteConfig = {
  name: "Kamal B.C.",
  role: "AI Engineer in Progress",
  tagline:
    "Computer Engineering graduate building intelligent, full-stack applications with React, Next.js and modern AI.",
  email: "kamalbc.dev@gmail.com",
  phone: "+977-9800000000",
  location: "Nepal",
  github: "https://github.com/kamalbc",
  linkedin: "https://www.linkedin.com/in/kamalbhandari/",
  resumeUrl: "/Kamal-BC-Resume.pdf",
} as const;