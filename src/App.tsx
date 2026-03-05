import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Projects from "./components/Projects";
import About from "./components/About";
import LearningLog from "./components/LearningLog";
// import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutSection from "./components/Experience";
//import StartHero from "./components/StartHero";

export default function App() {
  return (
    <div className="min-h-screen text-white/90">
      <Background />
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 pb-16 relative">
        <Hero />

        {/* StartHero /> */}

        <Section id="about" title="About Me" subtitle="Professional summary & what I do best">
          <About />
        </Section>

        <Section id="about-section" title="Experience" subtitle="More about me">
          <AboutSection />
        </Section>

        <Section id="projects" title="Projects" subtitle="Selected work I’m proud of">
          <Projects />
        </Section>

        <Section id="learning" title="Learning Log" subtitle="What I’m improving right now">
          <LearningLog />
        </Section>

        {/* <Section id="experience" title="Experience" subtitle="Where I’ve worked and what I did">
          <Experience />
        </Section> */}

        <Section id="certificates" title="Certificates" subtitle="My achievements and qualifications">
          <Certificates />
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