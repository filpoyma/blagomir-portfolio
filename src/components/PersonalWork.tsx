"use client";

import { links, sections } from "./content";
import { Reveal, SectionHead } from "./Reveal";

export function PersonalWork() {
  const s = sections.formats;
  return (
    <section
      id="formats"
      data-testid="formats-section"
      className="section-screen border-y border-linec bg-card py-20 sm:py-28"
    >
      <div className="wrap">
        <SectionHead num={s.num} kicker={s.kicker} title={s.title} text={s.text} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {s.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} className="h-full">
              <article
                data-testid={`format-card-${i + 1}`}
                className="card-light flex h-full flex-col p-8 transition-all duration-200 hover:-translate-y-1 hover:border-gold/60"
              >
                <h3 className="font-display text-2xl font-medium text-deep">{item.title}</h3>
                <p className="mt-3 text-base font-light leading-relaxed text-deep/65">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <a
            href={links.telegramPersonal}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="formats-booking-link"
            className="mt-8 inline-flex min-h-[48px] items-center border-b border-gold pb-1 text-sm font-semibold text-deep transition-colors duration-200 hover:text-goldhover"
          >
            Запись на консультации
          </a>
        </Reveal>
      </div>
    </section>
  );
}
