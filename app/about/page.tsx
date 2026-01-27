import { AboutHero } from "@/components/about/AboutHero";
import { ValueProposition } from "@/components/about/ValueProposition";
import { TeamSection } from "@/components/about/TeamSection";
import { AboutContent } from "@/components/about/AboutContent";
import CTA from "@/components/CTA";

export default function About() {
  return (
    <main>
      <AboutHero />
      <ValueProposition />
      <AboutContent />
      <TeamSection />

      <CTA />
    </main>
  );
}
