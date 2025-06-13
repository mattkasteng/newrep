import React from "react";
import HeroSection from "@/app/sections/HeroSection";
import AboutSection from "@/app/sections/AboutSection";
import SkillsSection from "@/app/sections/SkillsSection";
import ProjectsSection from "@/app/sections/ProjectsSection";
import BlogSection from "@/app/sections/BlogSection";
import ContactSection from "@/app/sections/ContactSection";

export default function Home() {
  return (
    <main id="main-content" className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-200 dark:from-[#0a0a0a] dark:via-[#171717] dark:to-[#232323] transition-colors duration-500">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
