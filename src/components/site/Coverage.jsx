import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { business } from "@/data/site";
import { images } from "@/data/images";
import Locations from "@/components/site/Locations";

export default function Coverage() {
  return (
    <section id="coverage" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
            <Image
              src={images.trailers}
              alt="Sininen teollisuushalli ja asfaltoitu piha"
              className="h-full w-full"
              fittingType="fill"
            />
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
            <Image
              src={images.trucks}
              alt="Kuorma-autoja tiellä ilta-auringossa"
              className="h-full w-full"
              fittingType="fill"
            />
          </div>
        </div>
      </Reveal>

      <Locations />

      <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <SectionHeading
            title="Hepolamminkatu 24, Tampere"
            copy="Pesula löytyy Tampereen Hepolamminkadulta. Ajan voi varata verkossa tai soittamalla. Näin pääset suoraan pesuun odottamatta."
          />

          <div className="mt-8 rounded-2xl border border-border p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <p className="text-[0.95rem] font-medium">{business.address}</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <a href={business.phoneHref} className="text-[0.95rem] hover:opacity-70">
                  {business.phone}
                </a>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3 border-t border-border pt-5">
              <a
                href={business.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[0.78rem] font-medium text-background transition-opacity hover:opacity-85"
              >
                Varaa aika verkossa
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={business.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-[0.78rem] font-medium transition-colors hover:border-foreground"
              >
                Facebook
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
          <p className="eyebrow">Aukioloajat</p>
          <div className="mt-5">
            {business.hours.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-4 border-b border-border py-4"
              >
                <span className="text-[0.95rem]">{row.label}</span>
                <span className="text-[0.9rem] tabular-nums text-muted-foreground">{row.value}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[0.82rem] leading-relaxed text-muted-foreground">
            Ajanvaraus onnistuu myös puhelimitse numeroon {business.phone}.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
