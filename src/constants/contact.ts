import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/brand-icons";
import { siteConfig } from "./site";
import type { ContactLink } from "@/types";

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`,
    icon: Phone,
  },
  {
    label: "GitHub",
    value: "github.com/kamalbc",
    href: siteConfig.github,
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kamalbc",
    href: siteConfig.linkedin,
    icon: LinkedinIcon,
  },
];