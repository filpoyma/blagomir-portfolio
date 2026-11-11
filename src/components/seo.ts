import { site } from "../configs/settings";
import { brand, faqAnswerText, links, sections, teacher } from "./content";

export const SITE_NAME = brand.name;
export const DEFAULT_SITE_URL = site.url;

export const SEO_KEYWORDS = [
  "Свами Благомир",
  "Шиванатха Тапасви",
  "Благомир Гриньков",
  "ДХАРМА108",
  "Путь Дхармы",
  "Шива Дева-Парампара",
  "Школа ДХАРМА108",
  "Neo PSY",
  "Джйотиш",
  "ведическая астрология",
  "сакральная нумерология",
  "мантры Упанишад",
  "ретрит Аруначала",
  "Тируваннамалай ретрит",
  "духовное обучение",
  "самопознание",
];

export function buildHomeJsonLd(siteOrigin: string) {
  const origin = siteOrigin.replace(/\/$/, "");
  const personId = `${origin}/#person`;
  const orgId = `${origin}/#organization`;
  const websiteId = `${origin}/#website`;
  const webpageId = `${origin}/#webpage`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: `${origin}/`,
        name: `${teacher.name} — ${brand.name}`,
        alternateName: [brand.name, "Путь Дхармы", teacher.fullName],
        inLanguage: "ru-RU",
        publisher: { "@id": orgId },
      },
      {
        "@type": ["WebPage", "ProfilePage"],
        "@id": webpageId,
        url: `${origin}/`,
        name: "Свами Благомир — ДХАРМА108 | Путь Дхармы, Школа, программы и контакты",
        description: teacher.thesis,
        inLanguage: "ru-RU",
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${origin}/images/og.jpg`,
          width: 1200,
          height: 629,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [
            "[data-testid='hero-title']",
            "[data-testid='hero-thesis']",
            "#faq",
          ],
        },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: teacher.fullName,
        alternateName: [teacher.name, "Благомир Гриньков"],
        jobTitle: teacher.role,
        description:
          "Хранитель Шива Дева-Парампары, основатель Школы ДХАРМА108, автор образовательной системы «Путь Дхармы», метода Neo PSY и книг о ведической мудрости.",
        url: `${origin}/`,
        image: `${origin}${teacher.photo}`,
        knowsAbout: [
          "Шива Дева-Парампара",
          "Система Путь Дхармы",
          "Neo PSY",
          "Джйотиш (ведическая астрология)",
          "Сакральная нумерология",
          "Упанишады и ведические мантры",
          "Садхана и медитация",
        ],
        affiliation: { "@id": orgId },
        sameAs: [
          links.youtube,
          links.telegramOpen,
          links.telegramPersonal,
          links.school,
          links.authorLitres,
          links.retreats,
        ],
      },
      {
        "@type": "EducationalOrganization",
        "@id": orgId,
        name: `Школа ${brand.name}`,
        alternateName: [brand.name, "Система «Путь Дхармы»"],
        url: `${origin}/#school`,
        logo: `${origin}/favicon.svg`,
        description: sections.school.text,
        founder: { "@id": personId },
        sameAs: [links.telegramOpen, links.school, links.youtube],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Программы и форматы обучения ДХАРМА108",
          itemListElement: sections.courses.items.map((course, idx) => ({
            "@type": "Course",
            position: idx + 1,
            name: course.title,
            description: course.text,
            url: course.href,
            provider: { "@id": orgId },
          })),
        },
      },
      ...sections.books.items.map((book) => ({
        "@type": "Book",
        name: book.title,
        description: book.text,
        url: book.href,
        image: `${origin}${book.cover}`,
        inLanguage: "ru",
        author: { "@id": personId },
        publisher: {
          "@type": "Organization",
          name: "Литрес",
          url: "https://www.litres.ru/",
        },
      })),
      {
        "@type": "Event",
        name: `Ретрит «${sections.retreats.title}»`,
        description: sections.retreats.text,
        startDate: "2027-01-02",
        endDate: "2027-01-12",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        image: [`${origin}${sections.retreats.image}`],
        url: links.retreats,
        location: {
          "@type": "Place",
          name: "Аруначала, Тируваннамалай",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Tiruvannamalai",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
        },
        organizer: { "@id": personId },
        performer: { "@id": personId },
        offers: {
          "@type": "Offer",
          url: links.retreats,
          price: "1800",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          description: sections.retreats.price,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${origin}/#faq-schema`,
        mainEntity: sections.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faqAnswerText(item),
          },
        })),
      },
    ],
  };
}

export function buildPrivacyJsonLd(siteOrigin: string) {
  const origin = siteOrigin.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${origin}/politika-konfidencialnosti#webpage`,
    url: `${origin}/politika-konfidencialnosti`,
    name: "Политика конфиденциальности — ДХАРМА108",
    description:
      "Политика конфиденциальности сайта ДХАРМА108: какие данные обрабатываются, цели обработки, права пользователей и контакты.",
    inLanguage: "ru-RU",
    isPartOf: { "@id": `${origin}/#website` },
  };
}
