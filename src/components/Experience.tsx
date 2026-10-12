import { experience, activities, skills } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-5 py-12">
      <h2 className="section-title">Experience</h2>
      <ul className="space-y-6">
        {experience.map((e) => (
          <li key={e.org + e.role} className="border-l-2 border-brand-200 pl-4">
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
    </section>
  );
}

export function Activities() {
  return (
    <section id="activities" className="mx-auto max-w-4xl px-5 py-12">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="section-title">Leadership & Activities</h2>
          <ul className="space-y-4">
            {activities.map((a) => (
              <li key={a.org}>
                <p className="font-semibold text-slate-900">
                  {a.role} <span className="font-normal text-slate-500">· {a.org}</span>
                </p>
                {a.detail && <p className="text-sm text-slate-600">{a.detail}</p>}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="section-title">Skills</h2>
          <div className="space-y-4">
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
        </div>
      </div>
    </section>
  );
}
