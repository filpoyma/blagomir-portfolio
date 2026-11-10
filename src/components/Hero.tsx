"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import { brand, heroCta, teacher } from "./content";
import { EASE } from "./Reveal";

type TLineRevealProps = {
  children: ReactNode;
  delay: number;
  className?: string;
};

function LineReveal({ children, delay, className = "" }: TLineRevealProps) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Portrait() {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 110, damping: 18 });
  const sry = useSpring(ry, { stiffness: 110, damping: 18 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ry.set(x * 7);
    rx.set(-y * 7);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      data-testid="hero-portrait"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: EASE }}
      className="relative mx-auto w-full max-w-[420px]"
      style={{ perspective: 1100 }}
    >
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-t-full rounded-b-3xl bg-gold/15 blur-2xl"
      />
      <motion.div
        style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-t-full rounded-b-2xl border border-gold/40 shadow-[0_24px_60px_-18px_rgba(0,0,0,0.6)]"
      >
        <motion.img
          src={teacher.photo}
          srcSet={`${teacher.photoMobile} 720w, ${teacher.photo} 900w`}
          sizes="(max-width: 1024px) 88vw, 420px"
          alt={teacher.photoAlt}
          width={900}
          height={900}
          fetchPriority="high"
          style={{ y: imgY, scale: 1.12 }}
          className="block aspect-[4/5] w-full object-cover"
          data-testid="hero-portrait-img"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-t-full rounded-b-2xl"
          style={{
            background:
              "radial-gradient(120% 60% at 50% 88%, rgba(12,19,34,0.55) 0%, rgba(12,19,34,0) 55%), linear-gradient(180deg, rgba(12,19,34,0) 62%, rgba(12,19,34,0.35) 100%)",
          }}
        />
      </motion.div>
      <div
        aria-hidden="true"
        style={{ transform: "translateZ(50px)" }}
        className="absolute -right-4 top-1/4 flex h-20 w-20 flex-col items-center justify-center rounded-full border border-gold/50 bg-ink/85 backdrop-blur-sm sm:-right-8"
      >
        <span className="font-display text-2xl font-medium leading-none text-gold">108</span>
        <span className="mt-1 text-[8px] uppercase tracking-[0.3em] text-ivory/60">дхарма</span>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative overflow-hidden bg-deep"
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

      <div className="wrap relative grid items-center gap-14 pb-20 pt-32 sm:pt-36 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-44">
        <div className="lg:col-span-7">
          <LineReveal delay={0.05}>
            <span className="kicker inline-flex items-center gap-3 text-gold">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-gold/70" />
              {brand.parampara}
            </span>
          </LineReveal>

          <h1
            data-testid="hero-title"
            className="mt-7 font-display text-[2.65rem] font-light leading-[1.04] text-ivory sm:text-6xl lg:text-7xl"
          >
            <LineReveal delay={0.16}>{teacher.name}</LineReveal>
            <LineReveal delay={0.3}>
              <span className="italic text-gold">Шиванатха Тапасви</span>
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
                    {c.label}
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
          <Portrait />
        </div>
      </div>
    </section>
  );
}
