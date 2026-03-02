import { motion } from "framer-motion";
import { CURRENTLY_LEARNING } from "../data/portfolioData";

function clamp(n: number) {
  return Math.max(0, Math.min(100, n));
}

export default function LearningProgress() {
  return (
    <div className="space-y-4">
      {CURRENTLY_LEARNING.map((item, idx) => {
        const value = clamp(item.progress);

        return (
          <motion.div
            key={`${item.title}-${idx}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-medium">{item.title}</div>
                {item.notes ? <div className="mt-1 text-sm text-white/70">{item.notes}</div> : null}
              </div>
              <div className="text-sm text-white/70">{value}%</div>
            </div>

            <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full rounded-full bg-white/60"
              />
            </div>

            {item.evidenceLink ? (
              <a
                className="mt-3 inline-block text-sm text-white/70 hover:text-white transition underline underline-offset-4"
                href={item.evidenceLink}
                target="_blank"
                rel="noreferrer"
              >
                Evidence / Notes
              </a>
            ) : null}
          </motion.div>
        );
      })}
    </div>
  );
}