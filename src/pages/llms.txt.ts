import type { APIRoute } from "astro";
import { brand, links, sections, teacher } from "../components/content";
import { DEFAULT_SITE_URL } from "../components/seo";

export const GET: APIRoute = ({ site }) => {
  const origin = (site?.origin ?? DEFAULT_SITE_URL).replace(/\/$/, "");

  const lines = [
    `# ${teacher.fullName} — ${brand.name}`,
    "",
    `> ${teacher.role}. ${teacher.thesis}`,
    "",
    "## О мастере и традиции",
    ...sections.master.facts.map((f) => `- ${f}`),
    "",
    "## Система «Путь Дхармы»",
    sections.dharma.text,
    ...sections.dharma.steps.map((s) => `- **${s.num}. ${s.title}**: ${s.text}`),
    "",
    "## Школа ДХАРМА108",
    `${sections.school.text} Внутри: ${sections.school.inside.join(", ")}.`,
    `- Вступление (Telegram-бот): ${links.school}`,
    "",
    "## Личные форматы работы",
    ...sections.formats.items.map((item) => `- **${item.title}**: ${item.text}`),
    `- Запись на консультации: ${links.telegramPersonal}`,
    "",
    "## Программы обучения",
    ...sections.courses.items.map(
      (c) => `- [${c.title}](${c.href}): ${c.text}`
    ),
    "",
    "## Книги автора (Благомир Гриньков / Свами Благомир)",
    ...sections.books.items.map(
      (b) => `- [${b.title}](${b.href}): ${b.text}`
    ),
    `- [Все книги автора на Литрес](${links.authorLitres})`,
    "",
    "## Ближайший ретрит",
    `- **${sections.retreats.title}** (${sections.retreats.meta.join(" · ")}): ${sections.retreats.text} Стоимость: ${sections.retreats.price}. Подробности: ${links.retreats}`,
    "",
    "## Официальные ссылки и контакты",
    `- Сайт: ${origin}/`,
    `- Полный контекст для ИИ: ${origin}/llms-full.txt`,
    `- YouTube (основной): ${links.youtubeStart}`,
    `- Открытый Telegram-канал: ${links.telegramOpen}`,
    `- Личный Telegram: ${links.telegramPersonal}`,
    `- Бот Школы ДХАРМА108: ${links.school}`,
    `- Сайт ретритов: ${links.retreats}`,
    `- Политика конфиденциальности: ${origin}/politika-konfidencialnosti`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
