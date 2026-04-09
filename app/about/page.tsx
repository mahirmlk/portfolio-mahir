import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export const metadata: Metadata = {
  title: "About",
  description: "Extended background, working principles, and technical profile for Mahir Malik."
};

export default function AboutPage() {
  return (
    <>
      <AboutSection standalone />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
