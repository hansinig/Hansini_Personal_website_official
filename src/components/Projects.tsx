import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="bg-brand-50">
      <div className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="section-title">Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-brand-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
            >
              <p className="mb-1 text-xs font-medium uppercase tracking-wide text-brand-600">
                {p.category}
              </p>
              <h3 className="mb-2 font-semibold text-slate-900 group-hover:text-brand-700">
                {p.title} <span aria-hidden className="text-brand-500">↗</span>
              </h3>
              <p className="mb-3 flex-1 text-sm text-slate-600">{p.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tools.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
