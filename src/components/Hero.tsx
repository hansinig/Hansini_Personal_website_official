import Image from "next/image";
import { meta } from "@/data/portfolio";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <section id="top" className="bg-gradient-to-b from-brand-50 to-white">
      <div className="mx-auto flex max-w-4xl flex-col-reverse items-center gap-10 px-5 py-12 md:flex-row md:py-14">
        <div className="flex-1 text-center md:text-left">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand-600">
            {meta.school}
          </p>
          <h1 className="mb-3 font-serif text-4xl text-brand-900 md:text-5xl">{meta.name}</h1>
          <p className="mb-5 text-lg text-slate-600">{meta.title}</p>
          <p className="mb-2 leading-relaxed text-slate-700">{meta.bio}</p>
          <p className="mb-6 leading-relaxed text-slate-700">{meta.interests}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-full bg-brand-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
            >
              Resume
            </a>
            <SocialIcons />
          </div>
        </div>
        <div className="relative h-56 w-56 flex-shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg ring-1 ring-brand-200 md:h-64 md:w-64">
          <Image
            src="/portrait.jpg"
            alt="Hansini Gundavarapu"
            fill
            priority
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
