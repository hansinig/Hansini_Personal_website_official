const links = [
  { label: "Leadership", href: "#leadership" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-brand-800 shadow-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-serif text-lg text-white">
          Hansini G.
        </a>
        <nav className="flex items-center gap-4 text-sm text-brand-100 sm:gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hidden hover:text-white sm:inline">
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            className="rounded-full bg-white px-4 py-1.5 font-medium text-brand-800 transition-colors hover:bg-brand-100"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
