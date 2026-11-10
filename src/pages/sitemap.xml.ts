import type { APIRoute } from "astro";
import { DEFAULT_SITE_URL } from "../components/seo";

const routes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/politika-konfidencialnosti", priority: "0.4", changefreq: "monthly" },
];

export const GET: APIRoute = ({ site }) => {
  const origin = (site?.origin ?? DEFAULT_SITE_URL).replace(/\/$/, "");
  const lastmod = new Date().toISOString().split("T")[0];

  const urls = routes
    .map(
      (r) => `  <url>
    <loc>${origin}${r.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
