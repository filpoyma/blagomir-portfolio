"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { links, sections } from "./content";
import { EASE, Reveal, SectionHead } from "./Reveal";

export function School() {
  const s = sections.school;
  const [moreOpen, setMoreOpen] = useState(false);
  const morePanelId = useId();
  const reduceMotion = useReducedMotion();
  const expandTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: EASE };

  return (
    <section id="school" data-testid="school-section" className="section-screen bg-ivory py-20 sm:py-28">
      <div className="wrap">
        <SectionHead num={s.num} kicker={s.kicker} title={s.title} />
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
                <div className="relative text-base font-light leading-relaxed text-ivory/80 sm:text-lg">
                  <p data-testid="school-body">{s.paragraphs[0]}</p>
                  <div data-testid="school-body-more" className="mt-5">
                    <button
                      type="button"
                      aria-expanded={moreOpen}
                      aria-controls={morePanelId}
                      onClick={() => setMoreOpen((open) => !open)}
                      className="mx-auto flex cursor-pointer justify-center py-1 text-gold transition-opacity hover:opacity-80"
                    >
                      <motion.span
                        animate={{ rotate: moreOpen ? 180 : 0 }}
                        transition={expandTransition}
                        className="inline-flex"
                      >
                        <ChevronDown size={22} strokeWidth={1.75} aria-hidden="true" />
                      </motion.span>
                      <span className="sr-only">Развернуть дополнительный текст о Школе</span>
                    </button>
                    <AnimatePresence initial={false}>
                      {moreOpen ? (
                        <motion.div
                          id={morePanelId}
                          key="school-more"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={expandTransition}
                          className="overflow-hidden"
                        >
                          <motion.p
                            initial={reduceMotion ? false : { y: 8 }}
                            animate={{ y: 0 }}
                            exit={reduceMotion ? undefined : { y: 4, opacity: 0 }}
                            transition={expandTransition}
                            className="mt-4 text-ivory/80"
                          >
                            {s.paragraphs[1]}
                          </motion.p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </div>
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
