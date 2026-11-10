import type { APIRoute } from "astro";
import { brand, links, sections, teacher } from "../components/content";
import { DEFAULT_SITE_URL } from "../components/seo";

export const GET: APIRoute = ({ site }) => {
  const origin = (site?.origin ?? DEFAULT_SITE_URL).replace(/\/$/, "");

  const faqBlock = sections.faq.items
    .map((item) => `### В: ${item.q}\nО: ${item.a}`)
    .join("\n\n");

  const body = `# ${teacher.fullName} — ${brand.name} (Полный справочник для ИИ и поисковых систем)

Канонический адрес: ${origin}/
Язык: ru-RU
Сущность: ${teacher.fullName} (также известен как ${teacher.name}, Благомир Гриньков)
Статус и традиция: ${teacher.role} (${brand.parampara})
Проект и школа: ${brand.name}, система «Путь Дхармы», метод Neo PSY

## Краткое резюме
${teacher.thesis}

## Структура учения: Система «Путь Дхармы»
${sections.dharma.text}

${sections.dharma.steps.map((s) => `${s.num}. ${s.title} — ${s.text}`).join("\n")}

## Школа ДХАРМА108
${sections.school.text}
Разделы внутри Школы: ${sections.school.inside.join(", ")}.
Точка входа: ${links.school}

## Индивидуальные и малые форматы
${sections.formats.text}
${sections.formats.items.map((i) => `- ${i.title}: ${i.text}`).join("\n")}
Контакт для записи: ${links.telegramPersonal}

## Курсы и программы
${sections.courses.items.map((c, i) => `${i + 1}. ${c.title} — ${c.text} (${c.href})`).join("\n")}

## Книги и аудио (Литрес)
${sections.books.items.map((b) => `- «${b.title}»: ${b.text} — ${b.href}`).join("\n")}
Страница автора: ${links.authorLitres}

## Выездные ретриты
Название: ${sections.retreats.title}
Статус: ${sections.retreats.badge}
Параметры: ${sections.retreats.meta.join(" | ")}
Описание: ${sections.retreats.text}
Условия участия: ${sections.retreats.price}
Официальный сайт ретрита: ${links.retreats}

## Прямые ответы на частые вопросы (AEO / FAQ)

${faqBlock}

## Проверенные официальные каналы
- YouTube: ${links.youtubeStart}
- YouTube (архивный URL канала): ${links.youtube}
- Открытый Telegram-канал сообщества: ${links.telegramOpen}
- Личный Telegram для консультаций: ${links.telegramPersonal}
- Бот вступления в Школу ДХАРМА108: ${links.school}
- Реквизиты: https://t.me/shivanatha_tapasvi/2859
- Политика конфиденциальности: ${origin}/politika-konfidencialnosti
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
