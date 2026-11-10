"use client";

import { ArrowUpRight } from "lucide-react";
import { links, sections } from "./content";
import { Reveal, SectionHead } from "./Reveal";

export function School() {
  const s = sections.school;
  return (
    <section id="school" data-testid="school-section" className="section-screen bg-ivory py-20 sm:py-28">
      <div className="wrap">
        <SectionHead num={s.num} kicker={s.kicker} title={s.title} text={s.text} />
        <Reveal delay={0.15}>
          <div className="mt-12 overflow-hidden rounded-2xl bg-deep" style={{ backgroundColor: "#0F172A" }}>
            <div className="grid lg:grid-cols-5">
              <div className="relative p-8 sm:p-12 lg:col-span-3">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-100"
                  style={{
                    background:
                      "radial-gradient(60% 80% at 100% 0%, rgba(212,175,55,0.12) 0%, rgba(15,23,42,0) 60%)",
                  }}
                />
                <h3
                  className="relative font-display text-2xl font-medium text-ivory sm:text-3xl"
                  data-testid="school-inside-title"
                >
                  Что внутри Школы
                </h3>
                <ul className="relative mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {s.inside.map((item) => (
                    <li
                      key={item}
                      className="flex min-h-[56px] items-center gap-3 rounded-lg border border-ivory/15 px-5 text-ivory/85"
                      data-testid={`school-chip-${item.toLowerCase()}`}
                    >
                      <span aria-hidden="true" className="text-gold">
                        ✦
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-between gap-8 border-t border-ivory/10 bg-ink/40 p-8 sm:p-12 lg:col-span-2 lg:border-l lg:border-t-0">
                <p className="text-base font-light leading-relaxed text-ivory/65">
                  Вступление открыто: точка входа в Школу — действующий бот. Нажмите, чтобы получить
                  доступ к программе.
                </p>
                <a
                  href={links.school}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="school-join-btn"
                  className="btn-gold w-full sm:w-auto"
                >
                  {s.cta}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
