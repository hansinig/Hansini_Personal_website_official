import { leadership, experience, programs, skills, type Role } from "@/data/portfolio";

function RoleList({ items }: { items: Role[] }) {
  return (
    <ul className="space-y-6">
      {items.map((e) => (
        <li key={e.org + e.role} className="border-l-2 border-brand-300 pl-4">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
            <h3 className="font-semibold text-slate-900">
              {e.role} <span className="font-normal text-slate-500">· {e.org}</span>
            </h3>
            <span className="text-sm text-slate-500">{e.period}</span>
          </div>
          <p className="mt-1 text-slate-700">{e.summary}</p>
        </li>
      ))}
    </ul>
  );
}

export function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-4xl px-5 py-12">
      <h2 className="section-title">Leadership</h2>
      <RoleList items={leadership} />
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-5 pb-12">
      <h2 className="section-title">Pre-Professional Experience</h2>
      <RoleList items={experience} />
      <div className="mt-6 flex flex-wrap gap-2">
        {programs.map((p) => (
          <span key={p.org} className="rounded-full border border-brand-200 bg-white px-3 py-1 text-sm text-slate-700">
            <span className="font-semibold text-brand-800">{p.role}</span> · {p.org}
          </span>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-5 py-12">
      <h2 className="section-title">Skills</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <p className="mb-2 text-sm font-semibold text-slate-900">{group}</p>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
