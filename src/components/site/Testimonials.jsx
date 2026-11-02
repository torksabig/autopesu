import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { reasons } from "@/data/site";

export default function Testimonials() {
  return (
    <section className="border-y border-border bg-secondary/60">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <SectionHeading title="Ero näkyy maalipinnassa" />
        </Reveal>

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
