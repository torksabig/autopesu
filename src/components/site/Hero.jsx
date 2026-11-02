import HeroPanel from "@/components/site/HeroPanel";
import { images } from "@/data/images";

const quickLinks = [
  { label: "Hinnasto", href: "#pricing" },
  { label: "Palvelut", href: "#services" },
  { label: "Sijainti", href: "#coverage" },
  { label: "Varaa aika", href: "#enquiry" },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col bg-foreground">
      <div className="absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-black/50 to-transparent" />

      <div className="grid flex-1 grid-cols-1 md:grid-cols-2">
        <HeroPanel
          priority
          image={images.handWash}
          imageAlt="Auton käsinpesu"
          eyebrow="Ulkopesu käsin"
          title="Käsinpesu"
          copy="Koko auton käsinpesu alkaen 20 €. Lika irtoaa ilman harjoja, ja jälki on siisti myös vanteissa ja listoissa."
          href="#pricing"
        />
        <HeroPanel
          image={images.trucks}
          imageAlt="Kuorma-autoja tiellä ilta-auringossa"
          eyebrow="Raskaan kaluston puhdistus"
          title="Rekkojen pesu"
          copy="Kokonaisvaltaiset puhdistuspalvelut kuorma-autoille ja rekkayhdistelmille, joiden pituus on enintään 29 metriä. Kysy hinta ja varaa aika."
          href="#enquiry"
        />
      </div>

      <div className="relative z-10 border-t border-white/10 bg-black/55 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="border-b border-white/10 px-4 py-4 text-center text-[0.76rem] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white sm:border-b-0 sm:border-l sm:border-white/10 sm:first:border-l-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
