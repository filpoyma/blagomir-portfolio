"use client";

import { links, sections } from "./content";
import { Reveal, SectionHead } from "./Reveal";

export function DharmaPath() {
  const s = sections.dharma;
  return (
    <section
      id="dharma"
      data-testid="dharma-section"
      className="border-y border-linec bg-card py-20 sm:py-28"
    >
      <div className="wrap">
        <SectionHead num={s.num} kicker={s.kicker} title={s.title} text={s.text} />
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {s.steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.12} className="border-t border-deep/15 pt-8">
              <span className="font-display text-5xl font-light italic text-gold" aria-hidden="true">
                {step.num}
              </span>
              <h3
                className="mt-4 font-display text-2xl font-medium text-deep"
                data-testid={`dharma-step-title-${i + 1}`}
              >
                {step.title}
              </h3>
              <p className="mt-3 text-base font-light leading-relaxed text-deep/65">{step.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <a
            href={links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="dharma-system-link"
            className="mt-14 inline-flex min-h-[48px] items-center border-b border-gold pb-1 text-sm font-semibold text-deep transition-colors duration-200 hover:text-goldhover"
          >
            Узнать о системе — знакомство с учением на YouTube
          </a>
        </Reveal>
      </div>
    </section>
  );
}
