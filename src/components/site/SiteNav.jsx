import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { business } from "@/data/site";

const links = [
  { label: "Palvelut", href: "#services" },
  { label: "Hinnasto", href: "#pricing" },
  { label: "Sijainti", href: "#coverage" },
  { label: "UKK", href: "#faq" },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "border-b border-border bg-background/90 text-foreground backdrop-blur-md"
            : "border-b border-transparent text-white"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="text-[1.05rem] font-semibold tracking-tight">{business.name}</span>
            <span className="hidden whitespace-nowrap text-[0.62rem] font-medium uppercase tracking-[0.18em] opacity-60 xl:block">
              {business.tagline}
            </span>
          </a>

          <nav className={`hidden items-center rounded-full p-1.5 md:flex ${scrolled ? "bg-secondary" : "bg-white/95 shadow-sm"}`}>
            <a
              href="#top"
              className="rounded-full px-4 py-2 text-[0.82rem] font-medium text-foreground transition-colors hover:bg-black/5"
            >
              Pesula
            </a>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-[0.82rem] font-medium text-foreground/60 transition-colors hover:bg-black/5 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={business.phoneHref}
              className="hidden items-center gap-2 text-[0.82rem] font-medium lg:flex"
            >
              <Phone className="h-3.5 w-3.5" />
              {business.phone}
            </a>
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[0.78rem] font-medium text-background transition-opacity hover:opacity-85 sm:inline-flex"
            >
              Varaa aika
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Avaa valikko"
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors md:hidden ${
                scrolled ? "border-border" : "border-white/40"
              }`}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-background px-6 py-6 md:hidden">
          <div className="flex items-center justify-between">
            <span className="text-[1.05rem] font-semibold tracking-tight">{business.name}</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Sulje valikko"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-14 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-border py-4 text-2xl font-medium tracking-tight"
              >
                {link.label}
                <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
              </a>
            ))}
          </nav>
          <div className="mt-auto space-y-4">
            <a href={business.phoneHref} className="block text-sm text-muted-foreground">
              {business.phone}
            </a>
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-4 text-sm font-medium text-background"
            >
              Varaa aika
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}