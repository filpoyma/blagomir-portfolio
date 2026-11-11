"use client";

import { useRef, type MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import { teacher } from "./content";
import { EASE } from "./Reveal";

export function HeroPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 110, damping: 18 });
  const sry = useSpring(ry, { stiffness: 110, damping: 18 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-2%", "12%"]);

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
