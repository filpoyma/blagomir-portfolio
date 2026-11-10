import { Footer } from "../Footer";
import { Logo } from "../Logo";
import { links } from "../content";
import { privacyPage } from "../privacy-content";

function linkify(text: string) {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);
  return parts.map((part, index) => {
    if (part.startsWith("http")) {
      return (
        <a
          key={`${part}-${index}`}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-gold pb-0.5 text-deep transition-colors hover:text-goldhover"
        >
          {part}
        </a>
      );
    }
    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

export function PrivacyPage() {
  return (
    <>
      <header className="border-b border-linec bg-ink py-5" style={{ backgroundColor: "#0C1322" }}>
        <div className="wrap flex items-center justify-between gap-4">
          <Logo light compact />
          <a
            href={links.telegramOpen}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold !min-h-[44px] !px-5"
          >
            Открыть Telegram
          </a>
        </div>
      </header>

      <main className="bg-ivory">
        <article className="wrap py-16 sm:py-24">
          <p className="kicker text-saffron">Правовое</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-light leading-[1.12] text-deep sm:text-5xl">
            {privacyPage.title}
          </h1>
          <p className="mt-4 text-sm font-light text-deep/55">
            Обновлено: {privacyPage.updatedAt}
          </p>
          <p className="mt-8 max-w-3xl text-base font-light leading-relaxed text-deep/75 sm:text-lg">
            {privacyPage.intro}
          </p>

          <div className="mt-14 max-w-3xl space-y-12">
            {privacyPage.sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-2xl font-medium text-deep sm:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base font-light leading-relaxed text-deep/75">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{linkify(paragraph)}</p>
                  ))}
                  {section.list ? (
                    <ul className="space-y-2 pl-5">
                      {section.list.map((item) => (
                        <li key={item} className="list-disc">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}
          </div>

          <a
            href="/"
            className="mt-16 inline-flex min-h-[48px] items-center border-b border-gold pb-1 text-sm font-semibold text-deep transition-colors hover:text-goldhover"
          >
            Вернуться на главную
          </a>
        </article>
      </main>

      <Footer />
    </>
  );
}
