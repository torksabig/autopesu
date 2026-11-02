import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { business, formatPrice, openingOffer, priceCategories } from "@/data/site";

export default function Pricing() {
  const [activeId, setActiveId] = useState(priceCategories[0].id);
  const active = priceCategories.find((c) => c.id === activeId);

  return (
    <section id="pricing" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <Reveal>
        <SectionHeading
          title="Hinnasto"
          copy="Hinnat henkilöautoille, sisältävät arvonlisäveron. Yliviivattu hinta on normaalihinta, ja sen vieressä on tämänhetkinen kampanjahinta. Isoille tai erittäin likaisille autoille hinta sovitaan paikan päällä."
        />
      </Reveal>

      <Reveal>
        <div className="mt-10 flex flex-col gap-4 rounded-2xl bg-foreground p-6 text-background sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.66rem] font-medium uppercase tracking-[0.18em] text-background/60">{openingOffer.location}</p>
            <p className="mt-1 text-lg font-semibold">{openingOffer.title}</p>
          </div>
          <div className="flex flex-wrap gap-6">
            {openingOffer.items.map((o) => (
              <div key={o.name}>
                <p className="text-[0.78rem] text-background/70">{o.name}</p>
                <p className="text-2xl font-semibold tabular-nums">{o.price}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div role="tablist" aria-label="Hinnaston kategoriat" className="mt-10 flex flex-wrap gap-2">
        {priceCategories.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={c.id === activeId}
            onClick={() => setActiveId(c.id)}
            className={`rounded-full px-5 py-2.5 text-[0.82rem] font-medium transition-colors ${
              c.id === activeId ? "bg-foreground text-background" : "border border-border hover:border-foreground"
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      <p className="mt-5 text-[0.85rem] text-muted-foreground">{active.note}</p>

      <div className="mt-4 divide-y divide-border border-y border-border" role="tabpanel">
        {active.items.map((item) => (
          <div key={item.name} className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-[1.02rem] font-semibold">{item.name}</h3>
                {item.popular && (
                  <span className="rounded-full bg-foreground px-2.5 py-0.5 text-[0.6rem] font-medium uppercase tracking-[0.12em] text-background">Suosituin</span>
                )}
                {item.addon && (
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-[0.6rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">Lisäpalvelu</span>
                )}
              </div>
              <p className="mt-1 text-[0.88rem] text-muted-foreground">{item.detail}</p>
            </div>
            <div className="flex shrink-0 items-center gap-3 sm:justify-end">
              {item.normal && (
                <span className="rounded-full bg-red-600 px-2.5 py-1 text-[0.7rem] font-bold tabular-nums text-white">
                  -{Math.round((1 - item.price / item.normal) * 100)} %
                </span>
              )}
              {item.normal && (
                <span
                  className="text-[1rem] tabular-nums text-muted-foreground line-through decoration-red-600 decoration-2"
                  aria-label={`Normaalihinta ${item.normal} euroa`}
                >
                  {item.normal} €
                </span>
              )}
              <span className={`text-[1.75rem] font-bold tabular-nums ${item.normal ? "text-red-600" : ""}`}>
                {formatPrice(item)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={business.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-[0.8rem] font-medium text-background hover:opacity-85"
        >
          Varaa aika <ArrowUpRight className="h-4 w-4" />
        </a>
        <a href="#enquiry" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-[0.8rem] font-medium hover:border-foreground">
          Kysy hinta isommalle autolle
        </a>
      </div>
    </section>
  );
}
