import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="font-medium">{c.name}</div>
              <div className="text-sm text-white/70">{c.issuer}</div>
              {c.date ? <div className="mt-1 text-xs text-white/60">{c.date}</div> : null}
            </div>

            {c.link && c.link !== "#" ? (
              <a
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
              >
                View <ExternalLink size={16} />
              </a>
            ) : null}
          </div>
        </motion.div>
      ))}
    </div>
  );
}