"use client";

import { ArrowUpRight } from "lucide-react";
import { links, sections } from "./content";
import { Reveal, SectionHead } from "./Reveal";

export function Retreats() {
  const s = sections.retreats;
  return (
    <section id="retreats" data-testid="retreats-section" className="bg-ivory py-20 sm:py-28">
      <div className="wrap">
        <SectionHead num={s.num} kicker="Ретриты и события" />
        <Reveal delay={0.15}>
          <div className="relative mt-12 overflow-hidden rounded-2xl" data-testid="retreats-feature">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.image}
              alt="Священная гора Аруначала у озера — атмосфера ретрита «Аруначала. Путь к Источнику»"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              data-testid="retreats-img"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(185deg, rgba(12,19,34,0.38) 0%, rgba(12,19,34,0.62) 55%, rgba(12,19,34,0.92) 100%)",
              }}
            />
            <div className="relative flex min-h-[480px] flex-col justify-end p-8 sm:p-12">
              <div className="flex flex-wrap items-center gap-4">
                <span className="kicker text-gold">{s.kicker}</span>
                <span
                  data-testid="retreats-badge"
                  className="inline-flex min-h-[32px] items-center rounded-full border border-gold/60 bg-gold/15 px-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold"
                >
                  {s.badge}
                </span>
              </div>
              <h3
                className="mt-4 max-w-2xl font-display text-3xl font-light leading-tight text-ivory sm:text-4xl lg:text-5xl"
                data-testid="retreats-title"
              >
                {s.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {s.meta.map((m, i) => (
                  <li
                    key={m}
                    data-testid={`retreats-meta-${i + 1}`}
                    className="inline-flex min-h-[40px] items-center rounded-full border border-ivory/25 bg-ink/30 px-4 text-sm font-light text-ivory/85 backdrop-blur-sm"
                  >
                    {m}
                  </li>
                ))}
              </ul>
              <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-ivory/75">
                {s.text}
              </p>
              <p
                className="mt-4 font-display text-lg italic text-gold sm:text-xl"
                data-testid="retreats-price"
              >
                {s.price}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={links.retreats}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="retreats-cta"
                  className="btn-gold"
                >
                  {s.cta}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <a
                  href={links.retreats}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="retreats-program-link"
                  className="btn-outline-light"
                >
                  {s.secondaryCta}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
