// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="mx-auto w-full max-w-5xl px-6">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
