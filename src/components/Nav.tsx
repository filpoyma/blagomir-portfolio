"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { navLinks } from "./content";
import { Logo } from "./Logo";
import { EASE } from "./Reveal";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const reduceMotion = useReducedMotion();
  const menuTransition = reduceMotion ? { duration: 0 } : { duration: 0.45, ease: EASE };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const headerBg =
    menuOpen || scrolled ? "bg-ink/90 py-3 backdrop-blur-md" : "bg-transparent py-5";

  return (
    <header
      data-testid="site-nav"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${headerBg}`}
    >
      <div className="wrap flex items-center justify-between gap-4">
        <Logo light compact />
        <nav
          aria-label="Разделы страницы"
          className="ml-auto hidden items-center gap-7 lg:flex"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="text-sm font-medium text-ivory/70 transition-colors duration-200 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center text-ivory transition-colors hover:text-gold lg:hidden"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          data-testid="nav-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={reduceMotion ? false : { opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, rotate: 90 }}
                transition={menuTransition}
                className="inline-flex"
              >
                <X size={22} strokeWidth={1.75} aria-hidden="true" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={reduceMotion ? false : { opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, rotate: -90 }}
                transition={menuTransition}
                className="inline-flex"
              >
                <Menu size={22} strokeWidth={1.75} aria-hidden="true" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.nav
            id={menuId}
            aria-label="Мобильное меню"
            data-testid="nav-mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={menuTransition}
            className="overflow-hidden lg:hidden"
          >
            <motion.ul
              className="wrap flex flex-col py-2"
              initial={reduceMotion ? false : { y: -10 }}
              animate={{ y: 0 }}
              exit={reduceMotion ? undefined : { y: -6, opacity: 0 }}
              transition={menuTransition}
            >
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ...menuTransition,
                    delay: reduceMotion ? 0 : 0.04 + i * 0.04,
                  }}
                >
                  <a
                    href={l.href}
                    data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                    className="flex min-h-[52px] items-center border-b border-ivory/10 font-display text-xl font-light text-ivory transition-colors duration-200 last:border-b-0 hover:text-gold"
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
