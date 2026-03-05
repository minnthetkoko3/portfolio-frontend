import { motion } from "framer-motion";
import Glass from "./ui/Glass";
import { CURRENTLY_LEARNING } from "../data/portfolioData";

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
      <motion.div
        className="h-full bg-white/40"
        initial={{ width: 0 }}
        whileInView={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      />
    </div>
  );
}

export default function LearningLog() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {CURRENTLY_LEARNING.map((x, idx) => (
        <motion.div
          key={x.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: idx * 0.06, duration: 0.45 }}
        >
          <Glass className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="font-medium">{x.title}</div>
              <div className="text-xs text-white/60">{x.progress}%</div>
            </div>

            <div className="mt-3">
              <ProgressBar value={x.progress} />
            </div>

            {x.notes ? <p className="mt-3 text-sm text-white/70">{x.notes}</p> : null}

            {x.evidenceLink ? (
              <a
                href={x.evidenceLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-white/80 hover:text-white transition underline underline-offset-4"
              >
                Evidence / link →
              </a>
            ) : null}
          </Glass>
        </motion.div>
      ))}
    </div>
  );
}