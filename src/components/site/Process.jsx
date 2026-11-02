import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { steps } from "@/data/site";

export default function Process() {
  return (
    <section className="border-y border-border bg-secondary/60">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <SectionHeading title="Neljä askelta puhtaaseen autoon" />
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.id} delay={index * 0.06}>
              <div className="border-t border-foreground/15 pt-5">
                <h3 className="text-xl font-medium tracking-tight">{step.title}</h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-muted-foreground">{step.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
