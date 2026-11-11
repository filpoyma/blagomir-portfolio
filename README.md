# ДХАРМА108 — Astro landing

Сайт Свами Благомира на Astro (static) с React islands.

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Главная |
| `/politika-konfidencialnosti` | Политика конфиденциальности |

## Stack

- Astro 7 (SSG)
- React islands (`client:load`) for interactive sections
- Tailwind CSS v4
- Framer Motion, Lenis, Lucide

## Source layout

```text
src/
  layouts/Layout.astro
  pages/
  components/                    # React UI
  components/pages/              # page shells (TutorPage, PrivacyPage)
  styles/global.css
public/images/                   # photos, covers, og
```
