import { Globe, Server, Database, Boxes, BrainCircuit, Layers, Sparkles, Cpu } from "lucide-react";
import type { JourneyStep } from "@/types";

export const journeySteps: JourneyStep[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Mastered the fundamentals of HTML, CSS and JavaScript by building interactive interfaces.",
    icon: Globe,
  },
  {
    id: "backend",
    title: "Backend Engineering",
    description: "Powered applications with Node.js & Express — APIs, auth, real-time features.",
    icon: Server,
  },
  {
    id: "postgresql",
    title: "PostgreSQL",
    description: "Learned relational modeling, complex queries and database design the right way.",
    icon: Database,
  },
  {
    id: "docker",
    title: "Docker",
    description: "Containerized apps and services for portable, reproducible environments.",
    icon: Boxes,
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description: "Studied core algorithms, model training and evaluation with Python, NumPy & Pandas.",
    icon: BrainCircuit,
  },
  {
    id: "deep-learning",
    title: "Deep Learning",
    description: "Explored neural networks and modern architectures behind intelligent systems.",
    icon: Layers,
  },
  {
    id: "llm",
    title: "LLMs & AI Apps",
    description: "Building apps powered by large language models, embeddings, RAG and agent tooling.",
    icon: Sparkles,
  },
  {
    id: "ai-engineering",
    title: "AI Engineering",
    description: "Shipping production-grade AI features end-to-end with clean engineering.",
    icon: Cpu,
  },
];