import { motion } from "framer-motion";
import { Download, MapPin } from "lucide-react";
import Glass from "./ui/Glass";
import { PROFILE, SOCIALS } from "../data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.55 } })
};

export default function Hero() {
  return (
    <section className="pt-10 md:pt-16">
      <div className="grid md:grid-cols-12 gap-6 items-stretch">
        <Glass className="md:col-span-7 p-6 md:p-8">
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0} className="text-sm text-white/60">
            {PROFILE.title}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-3 text-3xl md:text-5xl font-semibold leading-tight"
          >
            Hi, I’m <span className="text-white">{PROFILE.name}</span> —
            <span className="text-white/70"> I build modern web apps.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-4 text-white/70 leading-relaxed"
          >
            
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-5 flex items-center gap-2 text-sm text-white/60"
          >
            <MapPin size={16} />
            <span>{PROFILE.location}</span>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4} className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl px-5 py-2.5 border border-white/10 bg-white/10 hover:bg-white/15 transition"
            >
              View Projects
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

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5} className="mt-6 flex flex-wrap gap-2">
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

        <Glass className="md:col-span-5 p-6 md:p-8 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55 }}
            className="w-full"
          >
            {PROFILE.avatar ? (
              <div className="mx-auto w-44 h-44 rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                <img src={PROFILE.avatar} alt="Profile" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="mx-auto w-44 h-44 rounded-3xl border border-white/10 bg-white/5 flex items-center justify-center text-white/50">
                Add /public/profile.jpg
              </div>
            )}

            <div className="mt-5 text-center">
              <div className="text-lg font-medium">{PROFILE.name}</div>
              <div className="text-sm text-white/60">{PROFILE.title}</div>
            </div>
          </motion.div>
        </Glass>
      </div>
    </section>
  );
}