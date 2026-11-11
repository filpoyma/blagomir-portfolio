"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import { faqAnswerText, sections, type TFaqItem } from "./content";
import { EASE, Reveal, SectionHead } from "./Reveal";

function FaqAnswer({ item }: { item: TFaqItem }) {
  const bodyClass = "text-base font-light leading-relaxed text-deep/75";
  const linkClass =
    "font-medium text-saffron underline decoration-saffron/35 underline-offset-[3px] transition-colors hover:text-goldhover hover:decoration-gold/50";

  if (item.parts?.length) {
    return (
      <p className={`mt-3.5 pr-8 ${bodyClass}`}>
        {item.parts.map((part, i) =>
          part.href ? (
            <a
              key={i}
              href={part.href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {part.text}
            </a>
          ) : (
            <span key={i}>{part.text}</span>
          ),
        )}
      </p>
    );
  }

  return <p className={`mt-3.5 pr-8 ${bodyClass}`}>{faqAnswerText(item)}</p>;
}

function FaqItem({ item, index }: { item: TFaqItem; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.45, ease: EASE };

  return (
    <div data-testid={`faq-item-${index + 1}`} className="py-6">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full cursor-pointer items-start justify-between gap-6 text-left font-display text-xl font-medium leading-snug text-deep transition-colors hover:text-goldhover sm:text-2xl"
      >
        <span>{item.q}</span>
        <motion.span
          aria-hidden="true"
          animate={{ rotate: open ? 45 : 0 }}
          transition={transition}
          className="mt-1 shrink-0 font-sans text-base font-light text-gold"
        >
          ✦
        </motion.span>
      </button>
      <motion.div
        id={panelId}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={transition}
        className="overflow-hidden"
        inert={!open}
      >
        <FaqAnswer item={item} />
      </motion.div>
    </div>
  );
}

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
              <FaqItem item={item} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
