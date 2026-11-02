import { Check } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { business, packages } from "@/data/site";

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <Reveal>
        <SectionHeading
          title="Kolme tapaa pestä auto"
          copy="Hinnat ovat arvioita ja sisältävät arvonlisäveron. Tarkan hinnan saat, kun kerrot auton mallin ja kunnon."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {packages.map((pack, index) => (
          <Reveal key={pack.name} delay={index * 0.07}>
            <div
              className={`flex h-full flex-col rounded-2xl p-8 ${
                pack.featured
                  ? "bg-foreground text-background"
                  : "border border-border bg-background"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className={`text-[0.72rem] font-medium uppercase tracking-[0.18em] ${pack.featured ? "text-background/60" : "text-muted-foreground"}`}>
                  {pack.name}
                </h3>
                {pack.featured && (
                  <span className="rounded-full bg-background/15 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.14em]">
                    Suosituin
                  </span>
                )}
              </div>

              <div className="mt-7 flex items-baseline gap-2">
                <span className="text-[2.5rem] font-medium leading-none tracking-tight">{pack.price}</span>
                <span className={`text-[0.72rem] ${pack.featured ? "text-background/60" : "text-muted-foreground"}`}>
                  {pack.unit}
                </span>
              </div>

              <p className={`mt-4 text-[0.88rem] leading-relaxed ${pack.featured ? "text-background/70" : "text-muted-foreground"}`}>
                {pack.copy}
              </p>

              <ul className={`mt-7 flex-1 space-y-2.5 border-t pt-6 text-[0.85rem] ${pack.featured ? "border-background/15" : "border-border"}`}>
                {pack.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${pack.featured ? "text-background/60" : "text-muted-foreground"}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={pack.featured ? business.bookingUrl : "#enquiry"}
                target={pack.featured ? "_blank" : undefined}
                rel={pack.featured ? "noreferrer" : undefined}
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[0.8rem] font-medium transition-opacity hover:opacity-85 ${
                  pack.featured
                    ? "bg-background text-foreground"
                    : "bg-foreground text-background"
                }`}
              >
                {pack.cta}
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
