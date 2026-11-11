"use client";

import { ArrowUpRight } from "lucide-react";
import { links, sections } from "./content";
import { Reveal, SectionHead } from "./Reveal";

export function DharmaDana() {
  const s = sections.dana;
  return (
    <section
      id="dana"
      data-testid="dana-section"
      className="section-screen border-y border-linec bg-card py-20 sm:py-28"
    >
      <div className="wrap grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHead num={s.num} kicker={s.kicker} title={s.title} text={s.text} />
          <Reveal delay={0.24}>
            <p
              data-testid="dana-gratitude"
              className="mt-6 font-display text-xl italic text-deep/80 sm:text-2xl"
            >
              {s.gratitude}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href={links.donation}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="dana-cta"
              className="btn-gold mt-10"
            >
              {s.cta}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="hidden lg:col-span-5 lg:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/dharma-wheel.svg"
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={320}
            height={320}
            className="mx-auto w-full max-w-[320px] opacity-90"
          />
        </Reveal>
      </div>
    </section>
  );
}
