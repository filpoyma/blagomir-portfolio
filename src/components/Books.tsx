"use client";

import { BookOpen } from "lucide-react";
import { sections } from "./content";
import { Reveal, SectionHead } from "./Reveal";

export function Books() {
  const s = sections.books;
  return (
    <section
      id="books"
      data-testid="books-section"
      className="border-y border-linec bg-card py-20 sm:py-28"
    >
      <div className="wrap">
        <SectionHead num={s.num} kicker={s.kicker} title={s.title} />
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {s.items.map((book, i) => (
            <Reveal key={book.title} delay={i * 0.1} className="h-full">
              <a
                href={book.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`book-card-${i + 1}`}
                className="card-light group flex h-full flex-col p-5 transition-all duration-200 hover:-translate-y-1 hover:border-gold/60 sm:p-6"
              >
                <div className="relative overflow-hidden rounded-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={book.cover}
                    alt={book.alt}
                    width={415}
                    height={594}
                    loading="lazy"
                    className="block w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    data-testid={`book-cover-${i + 1}`}
                  />
                </div>
                <span className="kicker mt-6 flex items-center gap-2 text-deep/45">
                  <BookOpen size={14} aria-hidden="true" />
                  Книга
                </span>
                <h3 className="mt-3 font-display text-2xl font-medium leading-snug text-deep">
                  {book.title}
                </h3>
                <p className="mt-2 text-base font-light leading-relaxed text-deep/65">{book.text}</p>
                <span className="mt-auto inline-flex min-h-[48px] items-end pt-5 text-sm font-semibold text-deep">
                  <span className="border-b border-gold pb-1">{book.platform}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <a
            href={s.more.href}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="books-more-link"
            className="mt-8 inline-flex min-h-[48px] items-center border-b border-gold pb-1 text-sm font-semibold text-deep transition-colors duration-200 hover:text-goldhover"
          >
            {s.more.title}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
