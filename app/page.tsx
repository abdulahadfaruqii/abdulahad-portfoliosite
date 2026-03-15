import { AboutSection } from "@/component/AboutSection";
import { ContactSection } from "@/component/ContactSection";
import { Hero } from "@/component/Hero";
import { ProjectsSection } from "@/component/ProjectsSection";
import { SkillsSection } from "@/component/SkillsSection";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-[700px] h-[700px] 
      bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500
      blur-3xl opacity-40 animate-blob -z-10" />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
