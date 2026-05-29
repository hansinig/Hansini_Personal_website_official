"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { meta, education, activities } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-xs tracking-[0.25em] uppercase text-gold-500 mb-16"
        >
          01 — About
        </motion.p>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left col — bio + education */}
          <div className="lg:col-span-2">
            <motion.h2
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="font-serif text-4xl md:text-5xl text-cream-50 leading-tight mb-8"
            >
              Data-driven at heart.
              <br />
              <span className="text-gold-gradient">Human in practice.</span>
            </motion.h2>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="font-sans text-base text-cream-200/60 leading-relaxed mb-8"
            >
              {meta.bio}
            </motion.p>

            {/* Education card */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="card-glass p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-serif text-cream-100 text-lg">{education.school}</p>
                  <p className="font-sans text-xs text-cream-200/50 mt-0.5">{education.degree}</p>
                </div>
                <span className="tag">{education.expected}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {education.coursework.map((c) => (
                  <span key={c} className="tag">{c}</span>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                {education.honors.map((h) => (
                  <p key={h} className="font-sans text-xs text-gold-500/80 flex items-center gap-2 mt-1">
                    <span>✦</span> {h}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right col — active roles + status */}
          <div className="flex flex-col gap-8">
            {/* Currently badge */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="card-glass p-5"
            >
              <p className="font-sans text-xs text-cream-200/50 tracking-widest uppercase mb-1">Currently</p>
              <p className="font-serif text-cream-100 text-sm">Open to internships</p>
              <p className="font-sans text-gold-500 text-xs mt-0.5">Finance & Data Analytics</p>
            </motion.div>

            {/* Active roles */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <p className="font-sans text-xs tracking-widest uppercase text-cream-200/30 mb-4">
                Active Roles
              </p>
              <div className="flex flex-col gap-4">
                {activities.map((a) => (
                  <div key={a.org} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gold-500 shrink-0" />
                    <div>
                      <p className="font-sans text-sm text-cream-100">{a.role}</p>
                      <p className="font-sans text-xs text-cream-200/40">{a.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
