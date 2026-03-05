import Glass from "./ui/Glass";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#learning", label: "Learning" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" }
] as const;

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/5 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <Glass className="flex items-center justify-between px-4 py-3">
          <a href="#" className="font-semibold tracking-wide">
            <span className="text-white">Matthew</span>
            <span className="text-white/50">.dev</span>
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-white/70 hover:text-white transition">
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="/resume.pdf"
            download
            className="text-sm rounded-xl px-4 py-2 border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            Resume
          </a>
        </Glass>
      </div>
    </div>
  );
}