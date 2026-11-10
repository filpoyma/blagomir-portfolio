"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

type TRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
};

export function Reveal({ children, delay = 0, className = "", as = "div" }: TRevealProps) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

type TSectionHeadProps = {
  num?: string;
  kicker: string;
  title?: string;
  text?: string;
  dark?: boolean;
};

export function SectionHead({ num, kicker, title, text, dark = false }: TSectionHeadProps) {
  return (
    <div className="max-w-2xl">
      <Reveal>
        <div className="flex items-baseline gap-4">
          {num ? (
            <span className={`font-display text-lg italic ${dark ? "text-gold" : "text-saffron"}`}>
              {num}
            </span>
          ) : null}
          <span className={`kicker ${dark ? "text-gold" : "text-saffron"}`}>{kicker}</span>
          <span
            aria-hidden="true"
            className={`hidden h-px flex-1 sm:block ${dark ? "bg-ivory/15" : "bg-deep/10"}`}
          />
        </div>
      </Reveal>
      {title ? (
        <Reveal delay={0.08}>
          <h2
            className={`mt-5 font-display text-3xl font-light leading-[1.12] sm:text-4xl lg:text-5xl ${
              dark ? "text-ivory" : "text-deep"
            }`}
          >
            {title}
          </h2>
        </Reveal>
      ) : null}
      {text ? (
        <Reveal delay={0.16}>
          <p
            className={`mt-5 text-base font-light leading-relaxed sm:text-lg ${
              dark ? "text-ivory/70" : "text-deep/70"
            }`}
          >
            {text}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

type TSoonProps = {
  dark?: boolean;
  testid?: string;
};

export function Soon({ dark = false, testid }: TSoonProps) {
  return (
    <span
      data-testid={testid}
      className={`inline-flex min-h-[32px] items-center rounded-full border px-4 text-xs font-semibold uppercase tracking-[0.18em] ${
        dark ? "border-ivory/25 text-ivory/60" : "border-deep/15 text-deep/50"
      }`}
    >
      Скоро
    </span>
  );
}

export type { HTMLMotionProps };
