"use client";

import { links, sections } from "./content";
import { Reveal, SectionHead } from "./Reveal";

export function Courses() {
  const s = sections.courses;
  return (
    <section id="courses" data-testid="courses-section" className="section-screen bg-ivory py-20 sm:py-28">
      <div className="wrap">
        <SectionHead num={s.num} kicker={s.kicker} title={s.title} />
        <div className="mt-12">
          {s.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div
                data-testid={`course-row-${i + 1}`}
                className="group grid items-center gap-3 border-t border-linec py-7 transition-colors duration-200 last:border-b hover:bg-card sm:grid-cols-[auto_1fr_auto] sm:gap-8 sm:px-4"
              >
                <span className="font-display text-lg italic text-saffron" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium text-deep sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-light leading-relaxed text-deep/60">{item.text}</p>
                </div>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`course-cta-${i + 1}`}
                  className="inline-flex min-h-[36px] items-center justify-self-start rounded-full border border-deep/15 px-4 text-xs font-semibold uppercase tracking-[0.18em] text-deep/60 transition-colors duration-200 hover:border-gold hover:text-goldhover"
                >
                  Подробнее
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <a
            href={links.telegrammTrainingPrograms}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="courses-all-link"
            className="mt-8 inline-flex min-h-[48px] items-center border-b border-gold pb-1 text-sm font-semibold text-deep transition-colors duration-200 hover:text-goldhover"
          >
            Все программы
          </a>
        </Reveal>
      </div>
    </section>
  );
}
