import { useState } from "react";
import { ArrowUpRight, Loader2, MapPin, Phone } from "lucide-react";
import { base44 } from "@/api/base44Client";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { business, services } from "@/data/site";

const vehicleTypes = [
  { value: "car", label: "Henkilöauto" },
  { value: "van", label: "Pakettiauto" },
  { value: "truck", label: "Kuorma-auto" },
  { value: "bus", label: "Linja-auto" },
  { value: "trailer", label: "Perävaunu" },
  { value: "mixed_fleet", label: "Useampi ajoneuvo" },
];

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  vehicle_type: "car",
  service: "",
  message: "",
};

const fieldClass =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-[0.9rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground";

const labelClass = "mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.12em] text-muted-foreground";

export default function Enquiry() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const update = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setError("");
    try {
      await base44.entities.WashEnquiry.create({ ...form, status: "new" });
      setStatus("done");
      setForm(emptyForm);
    } catch (err) {
      setStatus("error");
      setError(err?.message || "Jokin meni pieleen. Soita meille sen sijaan.");
    }
  };

  return (
    <section id="enquiry" className="border-t border-border bg-secondary/60">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                title="Varaa aika tai kysy"
                copy="Ajan saat nopeimmin verkosta tai soittamalla. Voit myös jättää viestin. Otamme sinuun yhteyttä."
              />
            </Reveal>

            <Reveal delay={0.08}>
              <dl className="mt-9 space-y-5">
                <div className="border-t border-border pt-4">
                  <dt className="text-[0.72rem] uppercase tracking-[0.12em] text-muted-foreground">Soita</dt>
                  <dd className="mt-1">
                    <a href={business.phoneHref} className="inline-flex items-center gap-2 text-lg font-medium tracking-tight hover:opacity-70">
                      <Phone className="h-4 w-4" />
                      {business.phone}
                    </a>
                  </dd>
                </div>
                <div className="border-t border-border pt-4">
                  <dt className="text-[0.72rem] uppercase tracking-[0.12em] text-muted-foreground">Ajanvaraus</dt>
                  <dd className="mt-2">
                    <a
                      href={business.bookingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[0.78rem] font-medium text-background transition-opacity hover:opacity-85"
                    >
                      Varaa aika verkossa
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </dd>
                </div>
                <div className="border-t border-border pt-4">
                  <dt className="text-[0.72rem] uppercase tracking-[0.12em] text-muted-foreground">Pesula</dt>
                  <dd className="mt-1 flex items-center gap-2 text-[0.95rem]">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    {business.address}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-background p-6 sm:p-9">
              {status === "done" ? (
                <div className="flex min-h-[22rem] flex-col items-start justify-center">
                  <span className="eyebrow">Viesti lähetetty</span>
                  <h3 className="mt-3 text-3xl font-medium tracking-tight">Kiitos! Otamme yhteyttä.</h3>
                  <p className="mt-4 max-w-md text-[0.92rem] leading-relaxed text-muted-foreground">
                    Viestisi on perillä. Jos asia on kiireinen, soita {business.phone} tai varaa aika suoraan
                    verkosta.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={business.bookingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-foreground px-6 py-3 text-[0.8rem] font-medium text-background transition-opacity hover:opacity-85"
                    >
                      Varaa aika verkossa
                    </a>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="rounded-full border border-border px-6 py-3 text-[0.8rem] font-medium transition-colors hover:border-foreground"
                    >
                      Lähetä uusi viesti
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>Nimi *</label>
                      <input id="name" name="name" value={form.name} onChange={update} required placeholder="Mika Virtanen" className={fieldClass} />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>Puhelin</label>
                      <input id="phone" name="phone" type="tel" value={form.phone} onChange={update} placeholder="040 123 4567" className={fieldClass} />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="email" className={labelClass}>Sähköposti *</label>
                      <input id="email" name="email" type="email" value={form.email} onChange={update} required placeholder="nimi@esimerkki.fi" className={fieldClass} />
                    </div>
                    <div>
                      <label htmlFor="vehicle_type" className={labelClass}>Ajoneuvo</label>
                      <select id="vehicle_type" name="vehicle_type" value={form.vehicle_type} onChange={update} className={fieldClass}>
                        {vehicleTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="service" className={labelClass}>Palvelu</label>
                      <select id="service" name="service" value={form.service} onChange={update} className={fieldClass}>
                        <option value="">En osaa vielä sanoa</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.name}>
                            {service.name} ({service.price})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>Lisätietoja</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={update}
                      rows={4}
                      placeholder="Auton malli, toivottu ajankohta ja mitä haluaisit tehtäväksi…"
                      className={`${fieldClass} resize-none`}
                    />
                  </div>

                  {status === "error" && (
                    <p className="rounded-lg border border-destructive/40 bg-destructive/5 px-4 py-3 text-[0.82rem] text-destructive">
                      {error}
                    </p>
                  )}

                  <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-[16rem] text-[0.72rem] leading-relaxed text-muted-foreground">
                      Käytämme tietojasi vain tähän yhteydenottoon vastaamiseen.
                    </p>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-[0.8rem] font-medium text-background transition-opacity hover:opacity-85 disabled:opacity-60"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Lähetetään
                        </>
                      ) : (
                        <>
                          Lähetä viesti
                          <ArrowUpRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
