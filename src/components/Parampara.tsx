"use client";

import { sections, teacher } from "./content";
import { Reveal, SectionHead } from "./Reveal";

export function Parampara() {
  const s = sections.master;
  return (
    <section
      id="master"
      data-testid="master-section"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 85% 20%, rgba(212,175,55,0.1) 0%, rgba(15,23,42,0) 60%)",
        }}
      />
      <div className="wrap relative grid items-center gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-[380px]">
            <div aria-hidden="true" className="absolute -inset-4 rounded-2xl bg-gold/10 blur-xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={teacher.photoSquare}
              alt={`Портрет: ${teacher.fullName}`}
              loading="lazy"
              width={600}
              height={600}
              className="relative block w-full rounded-2xl border border-gold/40 object-cover"
              data-testid="master-portrait"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gold/50 bg-ink px-6 py-2 font-display text-sm italic text-gold"
            >
              Шива Дева-Парампара
            </span>
          </div>
        </Reveal>
        <div className="lg:col-span-7">
          <SectionHead num={s.num} kicker={s.kicker} title={s.title} dark />
          <ul className="mt-9 space-y-5">
            {s.facts.map((fact, i) => (
              <Reveal key={fact} delay={0.1 + i * 0.1} as="li">
                <span className="flex gap-4" data-testid={`master-fact-${i + 1}`}>
                  <span aria-hidden="true" className="mt-1 text-gold">
                    ✦
                  </span>
                  <span className="text-base font-light leading-relaxed text-ivory/75 sm:text-lg">
                    {fact}
                  </span>
                </span>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.35}>
            <a href="#start" data-testid="master-cta" className="btn-gold mt-10">
              {s.cta}
              <span aria-hidden="true">↓</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
