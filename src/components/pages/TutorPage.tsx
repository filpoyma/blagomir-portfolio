"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { Nav } from "../Nav";
import { Hero } from "../Hero";
import { StartHere } from "../StartHere";
import { DharmaPath } from "../DharmaPath";
import { School } from "../School";
import { PersonalWork } from "../PersonalWork";
import { Courses } from "../Courses";
import { Books } from "../Books";
import { Retreats } from "../Retreats";
import { Parampara } from "../Parampara";
import { Faq } from "../Faq";
import { Footer } from "../Footer";

export function TutorPage() {
  useEffect(() => {
    window.dispatchEvent(new Event("dharma:ready"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.09 });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      const raw = anchor.getAttribute("href");
      if (!raw) return;
      const hash = raw.startsWith("#")
        ? raw
        : raw.startsWith("/#")
          ? raw.slice(1)
          : null;
      if (!hash || hash.length < 2) return;
      if (!document.querySelector(hash)) return;
      e.preventDefault();
      lenis.scrollTo(hash, { offset: -72 });
    };

    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StartHere />
        <DharmaPath />
        <School />
        <PersonalWork />
        <Courses />
        <Books />
        <Retreats />
        <Parampara />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
