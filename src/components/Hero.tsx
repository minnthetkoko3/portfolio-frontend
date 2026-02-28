import Glass from "./ui/Glass";
import { HERO_TAGS } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="pt-10 md:pt-16">
      <div className="grid md:grid-cols-12 gap-6 items-stretch">
        <Glass className="md:col-span-7 p-6 md:p-8">
          <p className="text-sm text-white/60">MERN Stack Developer</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">
            Building fast, clean, <span className="text-white/70">modern web apps</span>.
          </h1>
          <p className="mt-4 text-white/70 leading-relaxed">
            I create responsive UIs, scalable APIs, and production-ready full-stack apps using MongoDB, Express, React,
            and Node.js.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl px-5 py-2.5 border border-white/10 bg-white/10 hover:bg-white/15 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl px-5 py-2.5 border border-white/10 bg-white/5 hover:bg-white/10 transition text-white/80"
            >
              Contact
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/60">
            {HERO_TAGS.map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                {t}
              </span>
            ))}
          </div>
        </Glass>

        <div className="md:col-span-5 grid gap-6">
          <Glass className="p-6">
            <p className="text-white/60 text-sm">Currently</p>
            <p className="mt-2 text-lg font-medium">Open for internship / junior roles</p>
            <p className="mt-2 text-white/70 text-sm">Based in Singapore • Remote friendly • Quick learner</p>
          </Glass>

          <Glass className="p-6">
            <p className="text-white/60 text-sm">Highlights</p>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>✅ Clean UI with glassmorphism</li>
              <li>✅ Contact form saves to MongoDB</li>
              <li>✅ Responsive layout & smooth sections</li>
            </ul>
          </Glass>
        </div>
      </div>
    </section>
  );
}