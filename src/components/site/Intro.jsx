import Reveal from "@/components/site/Reveal";
import { stats } from "@/data/site";

export default function Intro() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.03] tracking-tight text-balance">
            Pesty käsin, huolella.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            H. Timantti on käsinpesula Tampereen Hepolamminkadulla. Pesemme autot käsin, ilman harjoja ja rullia,
            ja teemme samalla imuroinnin, sisäpuhdistuksen ja moottorin pesun.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-8">
            {stats.map((stat) => (
              <div key={stat.value} className={`border-t border-border pt-4 ${stat.wide ? "col-span-2" : ""}`}>
                <dt className="text-2xl font-medium tracking-tight">{stat.value}</dt>
                <dd className="mt-1.5 text-[0.8rem] leading-snug text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}