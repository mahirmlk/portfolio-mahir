import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { JsonLd, profilePageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About",
  description: "Extended background, working principles, and technical profile for Mahir Malik.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={profilePageSchema()} />
      <AboutSection standalone />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
