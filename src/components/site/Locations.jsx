import { useState } from "react";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/site/Reveal";

const locations = [
  {
    id: "hepolamminkatu",
    name: "Hepolamminkatu",
    address: "Hepolamminkatu 24, Tampere",
    phone: "045 220 6422",
    phoneHref: "tel:+358452206422",
    hours: "ma–pe 9–19, la 10–18",
  },
  {
    id: "turvesuonkatu",
    name: "Turvesuonkatu",
    address: "Turvesuonkatu 16, Tampere",
    phone: "045 146 6505",
    phoneHref: "tel:+358451466505",
    hours: "ma–pe 8–18, la 10–18",
  },
];

const embedUrl = (address) =>
  `https://www.google.com/maps?q=${encodeURIComponent(address)}&z=15&output=embed`;
const directionsUrl = (address) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

export default function Locations() {
  const [activeId, setActiveId] = useState(locations[0].id);
  const active = locations.find((l) => l.id === activeId);

  return (
    <Reveal className="mt-12">
      <p className="eyebrow">Toimipisteet</p>
      <h2 className="mt-4 text-[clamp(1.8rem,3.5vw,3rem)] font-medium leading-[1.05] tracking-tight">
        Kaksi pesulaa Tampereella
      </h2>

      <div className="mt-8 grid gap-5 lg:grid-cols-12">
        <div className="flex flex-col gap-3 lg:col-span-4">
          {locations.map((loc) => {
            const isActive = loc.id === activeId;
            return (
              <button
                key={loc.id}
                type="button"
                onClick={() => setActiveId(loc.id)}
                aria-pressed={isActive}
                className={`rounded-2xl border p-5 text-left transition-colors ${
                  isActive ? "border-foreground bg-secondary" : "border-border hover:border-foreground/40"
                }`}
              >
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <p className="text-[0.95rem] font-semibold">{loc.address}</p>
                </div>
                <div className="mt-3 flex items-start gap-3 text-[0.85rem] text-muted-foreground">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{loc.hours}</span>
                </div>
                <div className="mt-2 flex items-start gap-3 text-[0.85rem] text-muted-foreground">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  <a href={loc.phoneHref} onClick={(e) => e.stopPropagation()} className="hover:text-foreground">
                    {loc.phone}
                  </a>
                </div>
                <a
                  href={directionsUrl(loc.address)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-4 inline-flex items-center gap-1.5 text-[0.78rem] font-medium underline-offset-4 hover:underline"
                >
                  Reittiohjeet
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </button>
            );
          })}
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-border lg:col-span-8">
          <iframe
            key={active.id}
            title={`Kartta: ${active.address}`}
            src={embedUrl(active.address)}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </Reveal>
  );
}
