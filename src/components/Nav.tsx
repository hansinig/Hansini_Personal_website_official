import SocialIcons from "./SocialIcons";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Activities", href: "#activities" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-serif text-lg text-brand-900">
          Hansini G.
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-brand-600">
              {l.label}
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" className="hover:text-brand-600">
            Resume
          </a>
        </nav>
        <div className="sm:hidden">
          <SocialIcons size={18} />
        </div>
      </div>
    </header>
  );
}
