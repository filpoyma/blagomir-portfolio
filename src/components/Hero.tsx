"use client";

import { motion } from "framer-motion";
import { brand, heroCta, teacher } from "./content";
import { HeroPortrait } from "./HeroPortrait";
import { LineReveal } from "./LineReveal";
import { EASE } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative flex min-h-dvh flex-col overflow-hidden bg-deep"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 55% at 78% 12%, rgba(212,175,55,0.13) 0%, rgba(15,23,42,0) 60%), radial-gradient(70% 50% at 8% 88%, rgba(17,75,78,0.35) 0%, rgba(15,23,42,0) 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-10 hidden -translate-x-1/2 opacity-[0.05] lg:block"
      >
        <svg width="620" height="620" viewBox="0 0 200 200" fill="none" stroke="#D4AF37" strokeWidth="0.5">
          <circle cx="100" cy="100" r="98" />
          <circle cx="100" cy="100" r="72" />
          <circle cx="100" cy="100" r="46" />
          <path d="M100 2 L100 198 M2 100 L198 100 M30 30 L170 170 M170 30 L30 170" />
          <circle cx="100" cy="100" r="24" />
        </svg>
      </div>

      <LineReveal
        delay={0.05}
        className="absolute inset-x-0 top-[5.5rem] z-10 px-6 text-center"
      >
        <span data-testid="hero-motto" className="kicker text-gold">
          {brand.motto}
        </span>
      </LineReveal>

      <div className="wrap relative my-auto grid w-full items-center gap-14 pb-20 pt-32 sm:pt-36 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-44">
        <div className="lg:col-span-7">
          <h1
            data-testid="hero-title"
            className="font-display text-[2.65rem] font-light leading-[1.04] text-ivory sm:text-6xl lg:text-7xl"
          >
            <LineReveal delay={0.16}>{teacher.name}</LineReveal>
            <LineReveal delay={0.3}>
              <span className="italic">Шиванатха Тапасви</span>
            </LineReveal>
          </h1>

          <LineReveal delay={0.44} className="mt-6">
            <p
              className="text-base font-medium tracking-wide text-ivory/80 sm:text-lg"
              data-testid="hero-role"
            >
              {teacher.role}
            </p>
          </LineReveal>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.62, ease: EASE }}
            className="mt-5 max-w-xl text-base font-light leading-relaxed text-ivory/60 sm:text-lg"
            data-testid="hero-thesis"
          >
            {teacher.thesis}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.78, ease: EASE }}
            className="mt-10 grid max-w-2xl grid-cols-1 gap-3.5 sm:grid-cols-3 sm:gap-3"
          >
            {heroCta.map((c) => (
              <a
                key={c.num}
                href={c.href}
                data-testid={`hero-cta-${c.num}`}
                className="group flex items-center gap-3.5 rounded-xl border border-ivory/15 bg-ivory/[0.04] px-5 py-4 text-ivory transition-all duration-200 hover:border-gold/60 hover:bg-ivory/[0.07] sm:flex-col sm:items-start sm:justify-between sm:gap-2.5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-gold/10 pb-1 font-display text-xl italic leading-none text-gold sm:h-auto sm:w-auto sm:border-0 sm:bg-transparent sm:pb-0 sm:text-2xl">
                  {c.num}
                </span>
                <span className="flex flex-col">
                  <span className="text-[15px] font-semibold leading-snug text-ivory group-hover:text-gold">
                    {"labelShort" in c && c.labelShort ? (
                      <>
                        <span className="sm:hidden">{c.label}</span>
                        <span className="hidden sm:inline">{c.labelShort}</span>
                      </>
                    ) : (
                      c.label
                    )}
                  </span>
                  <span className="mt-1 text-[11px] font-normal uppercase tracking-[0.16em] text-ivory/50 sm:hidden">
                    {c.hint}
                  </span>
                  <span className="mt-1.5 hidden flex-col gap-0.5 text-[11px] font-normal uppercase tracking-[0.16em] text-ivory/50 sm:flex">
                    {c.hint.split("•").map((part) => (
                      <span key={part} className="block">
                        {part.trim()}
                      </span>
                    ))}
                  </span>
                </span>
              </a>
            ))}
          </motion.div>
        </div>

        <div className="order-first lg:order-last lg:col-span-5">
          <HeroPortrait />
        </div>
      </div>
    </section>
  );
}
