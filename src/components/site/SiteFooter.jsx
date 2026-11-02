import { business } from "@/data/site";

const columns = [
  {
    title: "Pesula",
    links: [
      { label: "Palvelut", href: "/#services" },
      { label: "Hinnasto", href: "/#pricing" },
      { label: "Sijainti ja aukioloajat", href: "/#coverage" },
      { label: "Usein kysytyt", href: "/#faq" },
    ],
  },
  {
    title: "Alueet",
    links: [
      { label: "Autopesu Hervanta", href: "/autopesu-hervanta" },
      { label: "Autopesu Vuores", href: "/autopesu-vuores" },
      { label: "Autopesu Lielahti", href: "/autopesu-lielahti" },
    ],
  },
  {
    title: "Yhteys",
    links: [
      { label: "Varaa aika verkossa", href: business.bookingUrl, external: true },
      { label: "Lähetä viesti", href: "/#enquiry" },
      { label: "Facebook", href: business.facebookUrl, external: true },
      { label: "Puhelin", href: business.phoneHref },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-xl font-semibold tracking-tight">{business.name}</p>
            <p className="mt-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {business.tagline} · {business.region}
            </p>
            <p className="mt-6 max-w-xs text-[0.88rem] leading-relaxed text-muted-foreground">
              Autojen käsinpesu Tampereella. Käsinpesu, imurointi, sisäpuhdistus ja moottorin pesu
              Hepolamminkadulla.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="lg:col-span-2">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      className="text-[0.88rem] transition-opacity hover:opacity-60"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">Aukioloajat</p>
            <div className="mt-4 space-y-2">
              {business.hours.map((row) => (
                <div key={row.label} className="flex justify-between gap-4 text-[0.82rem]">
                  <span className="text-muted-foreground">{row.label}</span>
                  <span className="tabular-nums">{row.value}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[0.82rem] leading-relaxed">
              {business.address}
              <br />
              <a href={business.phoneHref} className="transition-opacity hover:opacity-60">
                {business.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.76rem] text-muted-foreground">
            © {new Date().getFullYear()} {business.legalName} · Y-tunnus {business.businessId} · Tampere
          </p>
          <div className="flex gap-5">
            <a href="/tietosuoja" className="text-[0.76rem] text-muted-foreground transition-opacity hover:opacity-60">
              Tietosuojaseloste
            </a>
            <a href="/tietosuoja#evasteet" className="text-[0.76rem] text-muted-foreground transition-opacity hover:opacity-60">
              Evästeet
            </a>
          </div>
          <a href="/#top" className="text-[0.76rem] text-muted-foreground transition-opacity hover:opacity-60">
            Takaisin ylös ↑
          </a>
        </div>
      </div>
    </footer>
  );
}