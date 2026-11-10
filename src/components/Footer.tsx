"use client";

import { Send, ArrowUp, type LucideIcon } from "lucide-react";
import { footer, links } from "./content";
import { YoutubeIcon } from "./icons";
import { Logo } from "./Logo";
import { Reveal, Soon } from "./Reveal";

type TFooterIcon = LucideIcon | typeof YoutubeIcon;

const iconFor: Record<string, TFooterIcon> = {
  YouTube: YoutubeIcon,
  "Личный Telegram": Send,
  "Открытый Telegram": Send,
};

export function Footer() {
  return (
    <footer
      id="contacts"
      data-testid="footer-section"
      className="bg-ink pt-16 text-ivory sm:pt-20"
      style={{ backgroundColor: "#0C1322" }}
    >
      <div className="wrap">
        <Reveal>
          <div className="flex flex-col gap-6 border-b border-ivory/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Logo light />
              <p className="mt-6 max-w-md text-base font-light leading-relaxed text-ivory/55">
                Одна страница — все направления служения, знания, программы и контакты в ясной и
                благородной структуре.
              </p>
            </div>
            <a
              href={links.telegramPersonal}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-personal-telegram"
              className="btn-gold w-fit"
            >
              <Send size={17} aria-hidden="true" />
              Личный Telegram
            </a>
          </div>
        </Reveal>

        <div className="grid gap-10 py-12 sm:grid-cols-3">
          {footer.columns.map((col, ci) => (
            <Reveal key={col.heading} delay={ci * 0.08}>
              <h3 className="kicker text-gold" data-testid={`footer-col-${ci + 1}`}>
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("#") || item.href.startsWith("/")
                            ? undefined
                            : "_blank"
                        }
                        rel={
                          item.href.startsWith("#") || item.href.startsWith("/")
                            ? undefined
                            : "noopener noreferrer"
                        }
                        data-testid={`footer-link-${item.label
                          .toLowerCase()
                          .replace(/[^a-zа-яё0-9]+/gi, "-")}`}
                        className="inline-flex min-h-[44px] items-center gap-2 text-sm font-light text-ivory/70 transition-colors duration-200 hover:text-gold"
                      >
                        {(() => {
                          const Icon = iconFor[item.label];
                          return Icon ? <Icon size={15} aria-hidden="true" /> : null;
                        })()}
                        {item.label}
                      </a>
                    ) : (
                      <span className="inline-flex min-h-[44px] items-center gap-3 text-sm font-light text-ivory/45">
                        {item.label}
                        <Soon
                          dark
                          testid={`footer-soon-${item.label
                            .toLowerCase()
                            .replace(/[^a-zа-яё0-9]+/gi, "-")}`}
                        />
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-ivory/10 py-8 sm:flex-row sm:items-center">
          <p
            className="text-xs font-light tracking-wide text-ivory/40"
            data-testid="footer-copyright"
          >
            {footer.copyright}
          </p>
          <a
            href="#top"
            data-testid="footer-back-to-top"
            className="inline-flex min-h-[44px] items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ivory/50 transition-colors duration-200 hover:text-gold"
          >
            Наверх
            <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
