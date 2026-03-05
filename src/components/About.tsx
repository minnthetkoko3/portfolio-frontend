import { motion } from "framer-motion";
//import Glass from "./ui/Glass";
import { PROFILE, SOCIALS, } from "../data/portfolioData";

const card = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
};

export default function About() {
  return (
    <div className="grid gap-4">
      <motion.div variants={card} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="md:col-span-7">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/60">Professional Summary</p>
          <h3 className="mt-2 text-lg font-semibold">{PROFILE.title}</h3>
          <p className="mt-3 text-white/75 leading-relaxed">{PROFILE.bio}</p>

          <div className="mt-4 flex flex-wrap gap-2">
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
          </div>
        </div>
        
      </motion.div>

      {/* <motion.div variants={card} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="md:col-span-5">
        <Glass className="p-5">
          <p className="text-sm text-white/60">Education</p>
          <div className="mt-3 space-y-3">
            {EDUCATION.map((e) => (
              <div key={`${e.school}-${e.program}`} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="font-medium">{e.school}</div>
                <div className="text-sm text-white/70">{e.program}</div>
                <div className="text-xs text-white/55 mt-1">{e.period}</div>
              </div>
            ))}
          </div>
        </Glass>
      </motion.div> */}

      {/* <motion.div variants={card} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="md:col-span-12">
        <Glass className="p-5">
          <p className="text-sm text-white/60">Certificates</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {CERTIFICATES.map((c) => (
              <span key={c.name} className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/75">
                {c.name} <span className="text-white/55">• {c.issuer}</span>
                {c.status ? <span className="text-white/55"> • {c.status}</span> : null}
              </span>
            ))}
          </div>
        </Glass>
      </motion.div> */}
    </div>
  );
}