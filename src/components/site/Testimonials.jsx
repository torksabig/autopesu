import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { Star } from "lucide-react";
import { googleRating, reasons, reviews } from "@/data/site";

export default function Testimonials() {
  return (
    <section className="border-y border-border bg-secondary/60">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <SectionHeading title="Asiakkaat sanovat" />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {reviews.map((r, index) => (
            <Reveal key={r.name} delay={index * 0.07}>
              <figure className="flex h-full flex-col justify-between rounded-2xl bg-foreground p-7 text-background">
                <div>
                  <div className="flex gap-0.5" aria-label="5 tähteä viidestä">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-[1rem] leading-relaxed">“{r.text}”</blockquote>
                </div>
                <figcaption className="mt-6 border-t border-background/15 pt-4 text-[0.78rem] text-background/70">
                  {r.name} · Google-arvostelu
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <a
          href={googleRating.url}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-[0.85rem] font-medium underline-offset-4 hover:underline"
        >
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          {googleRating.rating} / 5 · {googleRating.count} arvostelua Googlessa – lue kaikki
        </a>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reasons.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07}>
              <div className="flex h-full flex-col justify-between rounded-2xl bg-background p-7">
                <div>
                  <h3 className="text-[1.05rem] font-medium tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-muted-foreground">{item.copy}</p>
                </div>
                <p className="mt-7 border-t border-border pt-4 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {item.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
