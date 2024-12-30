import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export function LandingPage() {
  return (
    <div className="p-6 space-y-12">
      <Hero />
      <Projects />
    </div>
  );
}
