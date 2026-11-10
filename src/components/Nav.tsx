"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { links, navLinks } from "./content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-nav"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/90 py-3 backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
      <div className="wrap flex items-center justify-between gap-4">
        <Logo light compact />
        <nav aria-label="Разделы страницы" className="hidden items-center gap-7 lg:flex">
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
        <a
          href={links.telegramOpen}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="nav-telegram-btn"
          className="btn-gold !min-h-[44px] !px-5"
        >
          Открыть Telegram
        </a>
      </div>
    </header>
  );
}
