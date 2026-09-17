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
  role: "AI Engineer",
  tagline:
    "Building intelligent software with AI while leveraging strong full-stack engineering foundations.",
  email: "kamalbc.dev@gmail.com",
  phone: "+977-9800000000",
  location: "Nepal",
  github: "https://github.com/kamalbc",
  linkedin: "https://www.linkedin.com/in/kamalbhandari/",
  resumeUrl: "/resume.pdf",
} as const;