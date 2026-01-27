import { AboutHero } from "@/components/about/AboutHero";
import { ValueProposition } from "@/components/about/ValueProposition";
import { TeamSection } from "@/components/about/TeamSection";
import { AboutContent } from "@/components/about/AboutContent";
import CTA from "@/components/CTA";

export default function About() {
  return (
    <main className="pt-20 lg:pt-0">
      <AboutHero />
      <ValueProposition />
      <AboutContent />
      <TeamSection />

      <CTA />
    </main>
  );
}
