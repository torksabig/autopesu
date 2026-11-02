import { useEffect } from "react";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import SiteFooter from "@/components/site/SiteFooter";
import { business, services } from "@/data/site";
import { pesulat } from "@/data/areas";

const setMeta = (name, content, attr = "name") => {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (href) => {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
};

export default function AreaPage({ area }) {
  const p = pesulat[area.pesula];
  const url = `https://timanttiautopesula.com/${area.slug}`;

  useEffect(() => {
    document.title = area.title;
    setMeta("description", area.description);
    setMeta("og:title", area.title, "property");
    setMeta("og:description", area.description, "property");
    setMeta("og:url", url, "property");
    setCanonical(url);
    window.scrollTo(0, 0);
  }, [area, url]);

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(p.address)}&z=14&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(p.address)}`;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6">
          <a href="/" className="text-[1.05rem] font-semibold tracking-tight">{business.name}</a>
          <a
            href={business.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[0.78rem] font-medium text-background hover:opacity-85"
          >
            Varaa aika <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <nav aria-label="Murupolku" className="text-[0.78rem] text-muted-foreground">
          <a href="/" className="hover:text-foreground">Etusivu</a> / <span>{area.h1}</span>
        </nav>

        <p className="eyebrow mt-8">Auton käsinpesu · {area.area}</p>
        <h1 className="mt-4 text-[clamp(2.2rem,5vw,3.75rem)] font-medium leading-[1.03] tracking-tight">{area.h1}</h1>
        <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed">{area.intro}</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{area.body}</p>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <div className="rounded-2xl border border-border p-6 lg:col-span-5">
            <h2 className="text-lg font-semibold">Lähin pesula: {p.address.split(",")[0]}</h2>
            <div className="mt-4 space-y-3 text-[0.92rem]">
              <p className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />{p.address}</p>
              <p className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0" />{p.hours}</p>
              <p className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0" /><a href={p.phoneHref} className="hover:opacity-60">{p.phone}</a></p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={directions} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-[0.78rem] font-medium hover:border-foreground">
                Reittiohjeet <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a href={business.bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[0.78rem] font-medium text-background hover:opacity-85">
                Varaa aika verkossa <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
          <MapBox src={mapSrc} title={`Kartta: ${p.address}`} />
        </div>

        <h2 className="mt-16 text-2xl font-medium tracking-tight">Palvelut ja hinnat – {area.area}</h2>
        <div className="mt-6 divide-y divide-border border-y border-border">
          {services.map((s) => (
            <div key={s.id} className="flex items-baseline justify-between gap-6 py-4">
              <div>
                <h3 className="font-medium">{s.name}</h3>
                <p className="mt-1 text-[0.88rem] text-muted-foreground">{s.detail}</p>
              </div>
              <span className="whitespace-nowrap text-[0.92rem] tabular-nums">{s.price}</span>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-2xl font-medium tracking-tight">Usein kysyttyä</h2>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-medium">Voinko jättää auton pesuun?</h3>
            <p className="mt-1 text-[0.92rem] text-muted-foreground">Riippuu palvelusta, mutta useimmiten kyllä. Jätä auto meille ja hae se puhtaana.</p>
          </div>
          <div>
            <h3 className="font-medium">Miksi käsinpesu eikä pesukone?</h3>
            <p className="mt-1 text-[0.92rem] text-muted-foreground">Käsin pestessä lika irtoaa ilman harjoja, jotka voivat jättää maalipintaan naarmuja. Jälki on siisti myös vanteissa ja listoissa.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function MapBox({ src, title }) {
  let consent = false;
  try { consent = localStorage.getItem("map-consent") === "yes"; } catch {}
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-border lg:col-span-7">
      {consent ? (
        <iframe title={title} src={src} className="absolute inset-0 h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-secondary p-6 text-center">
          <MapPin className="h-6 w-6" />
          <p className="max-w-sm text-[0.88rem] text-muted-foreground">Kartta ladataan Google Mapsista, joka voi asettaa evästeitä.</p>
          <button
            type="button"
            onClick={() => { try { localStorage.setItem("map-consent", "yes"); } catch {} window.location.reload(); }}
            className="rounded-full bg-foreground px-5 py-2.5 text-[0.82rem] font-medium text-background hover:opacity-85"
          >
            Näytä kartta
          </button>
        </div>
      )}
    </div>
  );
}
