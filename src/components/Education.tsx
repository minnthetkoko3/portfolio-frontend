import { motion } from "framer-motion";
import { EDUCATION } from "../data/portfolioData";

export default function Education() {
  return (
    <div className="space-y-4">
      {EDUCATION.map((e, idx) => (
        <motion.div
          key={`${e.school}-${idx}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: idx * 0.05 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-5"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="text-lg font-medium">{e.program}</div>
              <div className="text-sm text-white/70">{e.school}</div>
            </div>
            <div className="text-xs text-white/60">{e.period}</div>
          </div>

          {e.details?.length ? (
            <ul className="mt-3 space-y-1 text-sm text-white/70 list-disc pl-5">
              {e.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          ) : null}
        </motion.div>
      ))}
    </div>
 
);
}