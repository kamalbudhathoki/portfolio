import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "sahakari-connect",
    title: "Sahakari Connect",
    description:
      "A digital co-operative banking platform (Sahakari) with member management, share accounting, deposits & loans processing, role-based dashboards and automated dividend reports.",
    category: "Full-Stack SaaS",
    image: "/projects/sahakari-connect.svg",
    gradient: "from-cyan-500/25 via-sky-500/10 to-transparent",
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    github: "https://github.com/kamalbc/sahakari-connect",
    demo: "https://sahakari-connect.vercel.app",
    year: "2025",
  },
  {
    id: "hospital-management",
    title: "Hospital Management System",
    description:
      "Complete hospital platform with patient records, appointment scheduling, staff management, billing and pharmacy inventory — built for real-world clinic workflows.",
    category: "Full-Stack Application",
    image: "/projects/hospital-management.svg",
    gradient: "from-violet-500/25 via-fuchsia-500/10 to-transparent",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/kamalbc/hospital-management",
    demo: "https://hospital-management.vercel.app",
    year: "2024",
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce experience with cart, secure checkout, payment gateway integration, order tracking and an admin panel for products, inventory and analytics.",
    category: "Full-Stack Platform",
    image: "/projects/ecommerce-platform.svg",
    gradient: "from-blue-500/25 via-indigo-500/10 to-transparent",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Stripe", "Tailwind"],
    github: "https://github.com/kamalbc/ecommerce-platform",
    demo: "https://ecommerce-platform.vercel.app",
    year: "2024",
  },
  {
    id: "pizza-delivery",
    title: "Pizza Delivery App",
    description:
      "An end-to-end food ordering application with store locator, live order status, real-time notifications, and a kitchen-order dashboard for staff.",
    category: "Web Application",
    image: "/projects/pizza-delivery.svg",
    gradient: "from-amber-500/25 via-orange-500/10 to-transparent",
    tech: ["React", "Express", "MongoDB", "Socket.io", "Redux"],
    github: "https://github.com/kamalbc/pizza-delivery",
    demo: "https://pizza-delivery.vercel.app",
    year: "2025",
  },
];