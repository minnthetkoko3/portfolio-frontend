import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen text-white/90">
      <Background />
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 pb-16 relative">
        <Hero />

        <Section id="projects" title="Projects" subtitle="Selected work I’m proud of">
          <Projects />
        </Section>

        <Section id="experience" title="Experience" subtitle="What I’ve worked on">
          <Experience />
        </Section>

        <Section id="skills" title="Skills" subtitle="Tech I use and enjoy">
          <Skills />
        </Section>

        <Section id="contact" title="Contact" subtitle="Let’s build something together">
          <Contact />
        </Section>

        <Footer />
      </main>
    </div>
  );
}