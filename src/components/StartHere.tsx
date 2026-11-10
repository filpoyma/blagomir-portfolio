"use client";

import { Send, ArrowUpRight } from "lucide-react";
import { links, sections } from "./content";
import { YoutubeIcon } from "./icons";
import { Reveal, SectionHead } from "./Reveal";

const cards = [
  {
    icon: YoutubeIcon,
    label: "Официальный канал",
    title: "YouTube",
    text: "Лекции и разборы учения — смотреть и слушать в записи.",
    cta: "Смотреть",
    href: links.youtube,
    testid: "start-youtube-btn",
  },
  {
    icon: Send,
    label: "Открытый канал",
    title: "Telegram",
    text: "Регулярные публикации и живое общение сообщества.",
    cta: "Подписаться",
    href: links.telegramOpen,
    testid: "start-telegram-btn",
  },
];

export function StartHere() {
  return (
    <section id="start" data-testid="start-section" className="bg-ivory py-20 sm:py-28">
      <div className="wrap">
        <SectionHead
          num={sections.start.num}
          kicker={sections.start.kicker}
          title={sections.start.title}
          text={sections.start.text}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={c.testid}
                className="card-light group flex h-full flex-col p-8 transition-all duration-200 hover:-translate-y-1 hover:border-gold/60 sm:p-10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-goldlight text-deep">
                  <c.icon size={22} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span className="kicker mt-7 text-deep/45">{c.label}</span>
                <span className="mt-2 font-display text-3xl font-medium text-deep">{c.title}</span>
                <span className="mt-3 text-base font-light leading-relaxed text-deep/65">{c.text}</span>
                <span className="mt-auto inline-flex min-h-[48px] items-center gap-2 pt-6 text-sm font-semibold text-deep">
                  {c.cta}
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="text-gold transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
