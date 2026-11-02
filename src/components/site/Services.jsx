import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="border-t border-border bg-secondary/60">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-28">
        <Reveal className="lg:col-span-4">
          <SectionHeading
            title="Mitä pesemme"
            copy="Käsinpesua ja sisätilojen puhdistusta henkilöautoille sekä kokonaisvaltaiset puhdistuspalvelut kuorma-autoille ja jopa 29 metriä pitkille rekkayhdistelmille. Hinta kerrotaan aina etukäteen, kun kerrot ajoneuvon ja toiveesi."
          />
          <div className="mt-8 rounded-2xl border border-border bg-background p-6">
            <p className="text-[0.8rem] leading-relaxed text-muted-foreground">
              Hinnat ovat arvioita ja sisältävät arvonlisäveron. Vahaus, penkkien pesu ja muut erikoistyöt
              hinnoitellaan tapauskohtaisesti.
            </p>
            <a
              href="#enquiry"
              className="mt-4 inline-block text-[0.8rem] font-medium underline decoration-border underline-offset-4 hover:decoration-foreground"
            >
              Kysy hinta omalle autollesi
            </a>
          </div>
        </Reveal>

        <div className="lg:col-span-8">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={Math.min(index * 0.03, 0.15)}>
              <div className="group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 border-t border-border px-1 py-5 transition-colors last:border-b hover:bg-background sm:px-4">
                <h3 className="text-[1.05rem] font-medium tracking-tight">{service.name}</h3>
                <span className="text-[0.95rem] font-medium tabular-nums">{service.price}</span>
                <p className="col-span-2 max-w-lg text-[0.85rem] leading-relaxed text-muted-foreground">
                  {service.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
