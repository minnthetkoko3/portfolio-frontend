import { motion } from "framer-motion";
import { Download, ArrowDownRight } from "lucide-react";
import Glass from "./ui/Glass";
import { PROFILE, SOCIALS } from "../data/portfolioData";

export default function StartHero() {
  return (
    <section className="pt-10 md:pt-16">
      <div className="grid md:grid-cols-12 gap-6 items-stretch">
        <Glass className="md:col-span-7 p-6 md:p-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-sm text-white/60"
          >
            {PROFILE.title}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.55 }}
            className="mt-3 text-3xl md:text-5xl font-semibold leading-tight"
          >
            {PROFILE.name}
            <span className="text-white/70"> — building reliable web systems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.55 }}
            className="mt-4 text-white/70 leading-relaxed"
          >
            {PROFILE.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.55 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 border border-white/10 bg-white/10 hover:bg-white/15 transition"
            >
              Start <ArrowDownRight size={18} />
            </a>

            <a
              href={PROFILE.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 border border-white/10 bg-white/5 hover:bg-white/10 transition text-white/85"
            >
              <Download size={16} />
              Download Resume
            </a>

            <a
              href="#contact"
              className="rounded-xl px-5 py-2.5 border border-white/10 bg-white/5 hover:bg-white/10 transition text-white/85"
            >
              Contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.55 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {SOCIALS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70 hover:bg-white/10 transition"
              >
                {s.label}
              </a>
            ))}
          </motion.div>
        </Glass>

        <Glass className="md:col-span-5 p-6 md:p-8">
          <div className="text-sm text-white/60">Quick Info</div>
          <div className="mt-3 space-y-2 text-sm text-white/75">
            <div>📍 {PROFILE.location}</div>
            <div>✅ Open to internship / junior roles</div>
            <div>🛠 Backend + IT Support background</div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
            Tip: Click <b>Start</b> to scroll to About section.
          </div>
        </Glass>
      </div>
    </section>
  );
}