import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { business, faqs } from "@/data/site";

export default function Faq() {
  return (
    <section id="faq" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <SectionHeading title="Hyvä tietää" />
          <p className="mt-6 text-[0.88rem] leading-relaxed text-muted-foreground">
            Jäikö jokin mietityttämään? Soita pesulalle, niin kerromme tarkemmin.
          </p>
          <a href={business.phoneHref} className="mt-3 inline-block text-[0.88rem] font-medium underline decoration-border underline-offset-4 hover:decoration-foreground">
            {business.phone}
          </a>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="py-5 text-left text-[1rem] font-medium tracking-tight hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 pr-6 text-[0.88rem] leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
