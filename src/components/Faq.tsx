"use client";

import { sections } from "./content";
import { Reveal, SectionHead } from "./Reveal";

export function Faq() {
  const s = sections.faq;
  return (
    <section
      id="faq"
      data-testid="faq-section"
      aria-labelledby="faq-heading"
      className="section-screen border-t border-linec bg-ivory py-20 sm:py-28"
    >
      <div className="wrap">
        <div id="faq-heading">
          <SectionHead num={s.num} kicker={s.kicker} title={s.title} text={s.text} />
        </div>
        <div className="mt-12 max-w-3xl divide-y divide-linec border-y border-linec">
          {s.items.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.06}>
              <details
                data-testid={`faq-item-${i + 1}`}
                className="group py-6"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-xl font-medium leading-snug text-deep transition-colors hover:text-goldhover sm:text-2xl">
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 font-sans text-base font-light text-gold transition-transform duration-200 group-open:rotate-45"
                  >
                    ✦
                  </span>
                </summary>
                <p className="mt-3.5 pr-8 text-base font-light leading-relaxed text-deep/75">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
