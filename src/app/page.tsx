import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-foreground selection:bg-white selection:text-black relative z-10 overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <TechMarquee />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      <Footer />
    </main>
  );
}
