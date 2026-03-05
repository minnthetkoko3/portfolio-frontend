import { motion } from "framer-motion";
import Glass from "./ui/Glass";
import {EXPERIENCE } from "../data/portfolioData";

// function Badge({ children }: { children: React.ReactNode }) {
//   return (
//     <span className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/75">
//       {children}
//     </span>
//   );
// }

export default function AboutSection() {
  return (
    <div className="space-y-4">
      {/* Profile + About text */}
      {/* <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="md:col-span-5"
      >
        <Glass className="p-5">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 bg-white/5 shrink-0">
              {PROFILE.avatar ? (
                <img src={PROFILE.avatar} alt="Profile" className="w-full h-full object-cover" />
              ) : null}
            </div>

            <div>
              <div className="font-semibold">{PROFILE.name}</div>
              <div className="text-sm text-white/60">{PROFILE.title}</div>
              <div className="mt-2">
                <Badge>{EXPERIENCE_YEARS}+ years experience</Badge>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm text-white/75 leading-relaxed">
            I focus on backend development (Node/Express/TypeScript) and practical IT support skills.
            I like clean architecture, stable systems, and easy-to-maintain code.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {ABOUT_KEYS.map((k) => (
              <Badge key={k}>{k}</Badge>
            ))}
          </div>
        </Glass>
      </motion.div> */}

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="md:col-span-7"
      >
        <Glass className="p-5">
          <div className="flex items-center justify-between">
            <div className="font-semibold">Experience Timeline</div>
            <div className="text-xs text-white/60">Most recent → oldest</div>
          </div>

          <div className="mt-4 space-y-4">
            {EXPERIENCE.map((t) => (
              <div key={`${t.role}-${t.period}`} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-medium">{t.role}</div>
                    <div className="text-sm text-white/60">
                      {t.company} • {t.location} • {t.type}
                    </div>
                  </div>
                  <div className="text-xs text-white/60">{t.period}</div>
                </div>

                <ul className="mt-3 list-disc pl-5 text-sm text-white/75 space-y-1">
                  {t.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Glass>
      </motion.div>
    </div>
  );
}