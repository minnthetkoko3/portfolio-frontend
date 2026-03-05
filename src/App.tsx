// --- Layout & UI Components ---
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/Section";

// --- Page Sections ---
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Certificates from "./components/Certificates";
import LearningLog from "./components/LearningLog";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen text-white/90">
      <Background />
      <Navbar />

      <main className="relative mx-auto max-w-6xl px-4 pb-16">
        {/* 1. Immediate Hook */}
        <Hero />

        {/* 5. The Human Element */}
        <Section id="about" title="About Me" subtitle="My journey and philosophy">
          <About />
        </Section>

        {/* 2. Track Record (Highest priority for professionals) */}
        <Section id="experience" title="Experience" subtitle="Where I’ve worked and my impact">
          <Experience />
        </Section>

        {/* 3. Proof of Work */}
        <Section id="projects" title="Featured Projects" subtitle="Selected work I’m proud of">
          <Projects />
        </Section>

        {/* 4. Technical Arsenal */}
        <Section id="skills" title="Technical Skills" subtitle="Technologies, frameworks, and tools">
          <Skills />
        </Section>

        

        {/* 6. Continuous Growth & Credentials */}
        <Section id="certificates" title="Certifications" subtitle="Professional achievements">
          <Certificates />
        </Section>

        <Section id="learning" title="Learning Log" subtitle="What I’m currently exploring">
          <LearningLog />
        </Section>

        {/* 7. Call to Action */}
        <Section id="contact" title="Get In Touch" subtitle="Let’s build something together">
          <Contact />
        </Section>
      </main>

      <Footer />
    </div>
  );
}