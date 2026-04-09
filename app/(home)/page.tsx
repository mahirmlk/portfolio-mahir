import { AboutSection } from "@/components/sections/AboutSection";
import { BlogsSection } from "@/components/sections/BlogsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { GitHubCommitsSection } from "@/components/sections/GitHubCommitsSection";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SnapshotSection } from "@/components/sections/SnapshotSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TheorySection } from "@/components/sections/TheorySection";
import { WorkingPrinciplesSection } from "@/components/sections/WorkingPrinciplesSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkingPrinciplesSection />
      <ProjectsSection />
      <BlogsSection />
      <TheorySection />
      <SkillsSection />
      <GitHubCommitsSection />
      <SnapshotSection />
      <ContactSection />
    </>
  );
}
