"use client";

import { ArrowUpRight } from "lucide-react";
import { links, sections } from "./content";
import { Reveal, SectionHead } from "./Reveal";

type TRetreatCardProps = {
  testId: string;
  kicker: string;
  badge?: string;
  title: string;
  meta: readonly string[];
  text?: string;
  price: string;
  image: string;
  imageAlt: string;
  href: string;
  cta: string;
  secondaryCta: string;
};

function RetreatCard({
  testId,
  kicker,
  badge,
  title,
  meta,
  text,
  price,
  image,
  imageAlt,
  href,
  cta,
  secondaryCta,
}: TRetreatCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl" data-testid={`${testId}-feature`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        data-testid={`${testId}-img`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(185deg, rgba(12,19,34,0.38) 0%, rgba(12,19,34,0.62) 55%, rgba(12,19,34,0.92) 100%)",
        }}
      />
      <div className="relative flex min-h-[480px] flex-col justify-between gap-8 p-8 sm:p-12">
        <div className="flex min-h-[32px] flex-wrap items-center gap-4">
          <span className="kicker text-gold">{kicker}</span>
          {badge ? (
            <span
              data-testid={`${testId}-badge`}
              className="inline-flex min-h-[32px] items-center rounded-full border border-gold/60 bg-gold/15 px-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold"
            >
              {badge}
            </span>
          ) : null}
        </div>
        <div>
          <h3
            className="max-w-2xl font-display text-3xl font-light leading-tight text-ivory sm:text-4xl lg:text-5xl"
            data-testid={`${testId}-title`}
          >
            {title}
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {meta.map((m, i) => (
              <li
                key={m}
                data-testid={`${testId}-meta-${i + 1}`}
                className="inline-flex min-h-[40px] items-center rounded-full border border-ivory/25 bg-ink/30 px-4 text-sm font-light text-ivory/85 backdrop-blur-sm"
              >
                {m}
              </li>
            ))}
          </ul>
          {text ? (
            <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-ivory/75">{text}</p>
          ) : null}
          <p
            className="mt-4 font-display text-lg italic text-gold sm:text-xl"
            data-testid={`${testId}-price`}
          >
            {price}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`${testId}-cta`}
              className="btn-gold"
            >
              {cta}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`${testId}-program-link`}
              className="btn-outline-light"
            >
              {secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Retreats() {
  const s = sections.retreats;
  return (
    <section id="retreats" data-testid="retreats-section" className="section-screen bg-ivory py-20 sm:py-28">
      <div className="wrap">
        <SectionHead num={s.num} kicker="Ретриты и события" />
        <Reveal delay={0.15} className="mt-12">
          <RetreatCard
            testId="retreats"
            kicker={s.kicker}
            badge={s.badge}
            title={s.title}
            meta={s.meta}
            text={s.text}
            price={s.price}
            image={s.image}
            imageAlt={s.imageAlt}
            href={links.retreats}
            cta={s.cta}
            secondaryCta={s.secondaryCta}
          />
        </Reveal>

        {s.upcoming.map((event, i) => (
          <Reveal key={event.title} delay={0.2 + i * 0.08} className="mt-6">
            <RetreatCard testId={`retreats-event-${i + 1}`} {...event} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
