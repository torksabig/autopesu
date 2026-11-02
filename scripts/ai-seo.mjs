// Post-build step: makes the site readable for search engines and AI assistants
// that don't run JavaScript. Reads the same data files the React app uses,
// so prices, addresses and FAQ never drift apart.
//  1. Injects real HTML content into dist/index.html (React replaces it on load)
//  2. Adds FAQPage + OfferCatalog structured data
//  3. Writes static HTML for each area page (dist/<slug>/index.html)
//  4. Writes dist/llms.txt (plain-text summary for AI assistants)
import fs from "node:fs";
import path from "node:path";
import { business, faqs, priceCategories, formatPrice } from "../src/data/site.js";
import { areas, pesulat } from "../src/data/areas.js";

const DIST = process.argv[2] || "dist";
const SITE = "https://timanttiautopesula.com";
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const priceText = (i) => (i.normal ? `${formatPrice(i)} (norm. ${i.normal} €)` : formatPrice(i));
const pesulaList = Object.values(pesulat);

const locationsHtml = `<h2>Pesulat</h2><ul>${pesulaList
  .map((p) => `<li><strong>${esc(p.address)}</strong> · ${esc(p.hours)} · puh. <a href="${p.phoneHref}">${esc(p.phone)}</a></li>`)
  .join("")}</ul>`;

const pricesHtml = `<h2>Hinnasto</h2>${priceCategories
  .map(
    (c) => `<h3>${esc(c.title)}</h3><ul>${c.items
      .map((i) => `<li>${esc(i.name)}: ${esc(priceText(i))}. ${esc(i.detail)}</li>`)
      .join("")}</ul>`
  )
  .join("")}`;

const faqHtml = `<h2>Usein kysytyt</h2>${faqs.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join("")}`;

const footerHtml = `<p>${esc(business.legalName)} · Y-tunnus ${esc(business.businessId)} · <a href="${business.bookingUrl}">Varaa aika</a> · ${business.socials
  .map((s) => `<a href="${s.url}">${esc(s.name)}</a>`)
  .join(" · ")} · <a href="/tietosuoja">Tietosuojaseloste</a></p><nav>${areas
  .map((a) => `<a href="/${a.slug}">${esc(a.h1)}</a>`)
  .join(" · ")}</nav>`;

const homeHtml = `<main><h1>Autojen käsinpesu Tampereella – ${esc(business.fullName)}</h1><p>Auton käsinpesu kahdessa pesulassa Tampereella: Hepolamminkatu 24 (Hervanta) ja Turvesuonkatu 16 (Lielahti, Prisman vieressä). Pesemme autot käsin ilman harjoja ja rullia. Useimmissa palveluissa voit jättää auton pesuun ja hakea sen valmiina.</p>${locationsHtml}${pricesHtml}${faqHtml}${footerHtml}</main>`;

const areaHtml = (a) => {
  const p = pesulat[a.pesula];
  return `<main><h1>${esc(a.h1)}</h1><p>${esc(a.intro)}</p><p>${esc(a.body)}</p><h2>Lähin pesula</h2><p>${esc(p.address)} · ${esc(p.hours)} · puh. <a href="${p.phoneHref}">${esc(p.phone)}</a></p>${pricesHtml}${footerHtml}</main>`;
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
const catalogLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "H. Timantti hinnasto",
  itemListElement: priceCategories.flatMap((c) =>
    c.items
      .filter((i) => i.price != null)
      .map((i) => ({
        "@type": "Offer",
        price: i.price,
        priceCurrency: "EUR",
        itemOffered: { "@type": "Service", name: i.name, description: i.detail },
      }))
  ),
};
const ldTag = (o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`;

const indexPath = path.join(DIST, "index.html");
const template = fs.readFileSync(indexPath, "utf8");
const ROOT = '<div id="root"></div>';
if (!template.includes(ROOT)) throw new Error("ai-seo: #root not found in dist/index.html");

// Home
fs.writeFileSync(
  indexPath,
  template.replace("</head>", `${ldTag(faqLd)}${ldTag(catalogLd)}</head>`).replace(ROOT, `<div id="root">${homeHtml}</div>`)
);

// Area pages
for (const a of areas) {
  const url = `${SITE}/${a.slug}`;
  let html = template
    .replace(/<title>.*?<\/title>/s, `<title>${esc(a.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(a.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(a.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(a.description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(ROOT, `<div id="root">${areaHtml(a)}</div>`);
  fs.mkdirSync(path.join(DIST, a.slug), { recursive: true });
  fs.writeFileSync(path.join(DIST, a.slug, "index.html"), html);
}

// llms.txt
const llms = `# ${business.fullName}

> Autojen käsinpesu Tampereella kahdessa pesulassa. Ylläpitäjä ${business.legalName} (Y-tunnus ${business.businessId}). Pesemme autot käsin ilman harjoja ja rullia. Myös sisäpuhdistus, vahaus, keraaminen pinnoite, moottorin pesu, asuntoautot ja rekat.

## Pesulat
${pesulaList.map((p) => `- ${p.address}: ${p.hours}, puh. ${p.phone}`).join("\n")}
- Hepolamminkatu 24 on Hervannassa. Turvesuonkatu 16 on Lielahdessa, Prisma Lielahden vieressä.

## Ajanvaraus
- Verkossa: ${business.bookingUrl}
- Puhelimitse jommankumman pesulan numeroon.
- Useimmissa palveluissa auton voi jättää pesuun ja hakea valmiina.

## Hinnasto (sis. alv)
${priceCategories
  .map((c) => `### ${c.title}\n${c.items.map((i) => `- ${i.name}: ${priceText(i)}. ${i.detail}`).join("\n")}`)
  .join("\n\n")}

## Usein kysytyt
${faqs.map((f) => `- **${f.q}** ${f.a}`).join("\n")}

## Sivut
- [Etusivu](${SITE}/)
${areas.map((a) => `- [${a.h1}](${SITE}/${a.slug})`).join("\n")}
- [Tietosuojaseloste](${SITE}/tietosuoja)
${business.socials.map((s) => `- [${s.name}](${s.url})`).join("\n")}
`;
fs.writeFileSync(path.join(DIST, "llms.txt"), llms);

console.log(`ai-seo: home + ${areas.length} area pages + llms.txt written to ${DIST}/`);
