"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import ShaderBackground from "@/components/shader-background"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"

export default function MihajloPortfolio() {
  return (
    <ShaderBackground>
      <Header />
      <HeroContent />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </ShaderBackground>
  )
}
