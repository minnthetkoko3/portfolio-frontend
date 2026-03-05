import { motion } from "framer-motion";
import { CERTIFICATES } from "../data/portfolioData";

export default function Certificates() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {CERTIFICATES.map((c, idx) => (
        <motion.div
          key={`${c.name}-${idx}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: idx * 0.05 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-5"
        >
          <div>
            <div className="font-medium">{c.name}</div>
            <div className="text-sm text-white/70">{c.issuer}</div>
            {c.status ? <div className="mt-1 text-xs text-white/60">{c.status}</div> : null}
          </div>
        </motion.div>
      ))}
    </div>
  );
}