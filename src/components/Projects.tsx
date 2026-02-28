import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "../data/portfolioData";

export default function Projects() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {PROJECTS.map((p, idx) => (
        <motion.a
          key={p.title}
          href={p.link}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: idx * 0.06, duration: 0.45 }}
          whileHover={{ y: -4 }}
          className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/7 transition"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="text-lg font-medium">{p.title}</div>
            <ExternalLink size={16} className="text-white/50 group-hover:text-white/80 transition" />
          </div>

          <p className="mt-2 text-sm text-white/70 leading-relaxed">{p.desc}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70 group-hover:bg-white/10 transition"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.a>
      ))}
    </div>
  );
}