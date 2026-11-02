import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import { images } from "@/data/images";

const cards = [
  {
    image: images.interior,
    imageAlt: "Ohjauspyörän puhdistus mikrokuituliinalla",
    eyebrow: "Sisätilat",
    title: "Sisäpuhdistus",
    copy: "Imurointi, kojelauta, ovipaneelit ja lasit sisältä tai koko sisätilojen puhdistus. Koirankarvat lähtevät samalla kertaa.",
    href: "#services",
    cta: "Katso palvelut ja hinnat",
  },
  {
    image: images.handWash,
    imageAlt: "Auton etuosan huolellinen käsinpesu",
    eyebrow: "Moottoritila",
    title: "Moottorin pesu",
    copy: "Moottoritilan pesu herkistä osista huolehtien. Kerro aikaa varatessa, niin varaamme työlle riittävästi aikaa.",
    href: "#enquiry",
    cta: "Kysy lisää",
  },
];

export default function FeatureCards() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {cards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.08}>
            <a href={card.href} className="group block">
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  fittingType="fill"
                />
              </div>
              <p className="eyebrow mt-6">{card.eyebrow}</p>
              <h3 className="mt-2 flex items-center gap-2 text-2xl font-medium tracking-tight">
                {card.title}
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </h3>
              <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">{card.copy}</p>
              <span className="mt-4 inline-block text-[0.8rem] font-medium underline decoration-border underline-offset-4 transition-colors group-hover:decoration-foreground">
                {card.cta}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
