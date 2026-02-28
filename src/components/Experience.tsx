import { EXPERIENCE } from "../data/portfolioData";

export default function Experience() {
  return (
    <div className="space-y-4">
      {EXPERIENCE.map((i) => (
        <div key={i.role} className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="font-medium">{i.role}</div>
            <div className="text-xs text-white/60">{i.time}</div>
          </div>
          <p className="mt-2 text-sm text-white/70">{i.what}</p>
        </div>
      ))}
    </div>
  );
}