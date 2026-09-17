import * as React from "react";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { HeroSection } from "@/components/hero/hero-section";
import { AboutSection } from "@/components/about/about-section";
import { SkillsSection } from "@/components/skills/skills-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { JourneySection } from "@/components/journey/journey-section";
import { ContactSection } from "@/components/contact/contact-section";
import { ScrollAnimations } from "@/features/animations/scroll-animations";

export default function HomePage() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}