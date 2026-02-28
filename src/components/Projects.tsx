import { PROJECTS } from "../data/portfolioData";

export default function Projects() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {PROJECTS.map((p) => (
        <a
          key={p.title}
          href={p.link}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/7 transition"
        >
          <div className="text-lg font-medium">{p.title}</div>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">{p.desc}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">
                {t}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
}