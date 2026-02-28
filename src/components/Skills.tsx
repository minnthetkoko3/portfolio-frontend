import { SKILLS } from "../data/portfolioData";

export default function Skills() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {SKILLS.map((s) => (
        <div key={s.group} className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="font-medium">{s.group}</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {s.items.map((t) => (
              <span key={t} className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/75">
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}