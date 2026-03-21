import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      <footer className="py-8 bg-zinc-100 dark:bg-zinc-950 text-center text-zinc-500 text-sm border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
        <p>© {new Date().getFullYear()} Jatin Saini. All rights reserved.</p>
      </footer>
    </main>
  );
}
