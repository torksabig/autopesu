import { useEffect } from "react";
import SiteFooter from "@/components/site/SiteFooter";
import { business } from "@/data/site";
import { resetMapConsent } from "@/components/site/Locations";

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 border-t border-border py-8">
    <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
    <div className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-muted-foreground">{children}</div>
  </section>
);

export default function Privacy() {
  useEffect(() => {
    document.title = `Tietosuojaseloste — ${business.fullName}`;
    if (window.location.hash) {
      document.querySelector(window.location.hash)?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-20 max-w-3xl items-center justify-between px-6">
          <a href="/" className="text-[1.05rem] font-semibold tracking-tight">{business.name}</a>
          <a href="/" className="text-[0.82rem] font-medium hover:opacity-60">← Etusivulle</a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <p className="eyebrow">Tietosuoja</p>
        <h1 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.05] tracking-tight">
          Tietosuojaseloste ja evästeet
        </h1>
        <p className="mt-4 text-[0.85rem] text-muted-foreground">
          EU:n yleinen tietosuoja-asetus (2016/679), artiklat 13 ja 14. Päivitetty 2.11.2026.
        </p>

        <Section title="1. Rekisterinpitäjä">
          <p>
            {business.legalName} (Y-tunnus {business.businessId}), aputoiminimellä {business.fullName}
            <br />
            Hepolamminkatu 24, Tampere
            <br />
            Puhelin <a href={business.phoneHref} className="text-foreground underline underline-offset-4">{business.phone}</a>
          </p>
          <p>Tietosuojaa koskevat yhteydenotot voi tehdä puhelimitse tai käymällä pesulassa.</p>
        </Section>

        <Section title="2. Mitä tietoja käsittelemme">
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Yhteydenotot ja tarjouspyynnöt:</strong> nimi, sähköposti, puhelinnumero, ajoneuvon tyyppi, toivottu palvelu ja viestin sisältö.</li>
            <li><strong className="text-foreground">Ajanvaraukset:</strong> nimi, yhteystiedot ja varauksen tiedot. Varaukset tehdään Setmore-palvelussa.</li>
            <li><strong className="text-foreground">Asiakkuus ja laskutus:</strong> asiointiin ja kirjanpitoon tarvittavat tiedot.</li>
            <li><strong className="text-foreground">Tekniset tiedot:</strong> sivuston palvelin käsittelee lyhytaikaisesti IP-osoitteen ja selaintiedot sivun toimittamiseksi ja tietoturvan takaamiseksi.</li>
          </ul>
        </Section>

        <Section title="3. Käsittelyn tarkoitus ja oikeusperuste">
          <ul className="list-disc space-y-2 pl-5">
            <li>Yhteydenottoihin vastaaminen ja tarjousten antaminen: toimenpiteet asiakkaan pyynnöstä ennen sopimusta (art. 6.1 b).</li>
            <li>Varattujen palveluiden toteuttaminen: sopimus (art. 6.1 b).</li>
            <li>Kirjanpito: lakisääteinen velvoite (art. 6.1 c).</li>
            <li>Sivuston tietoturva ja toimivuus: oikeutettu etu (art. 6.1 f).</li>
            <li>Karttapalvelun lataaminen: suostumus (art. 6.1 a), ks. kohta 8.</li>
          </ul>
          <p>Emme käytä tietoja suoramarkkinointiin emmekä automaattiseen päätöksentekoon tai profilointiin.</p>
        </Section>

        <Section title="4. Tietojen vastaanottajat ja käsittelijät">
          <ul className="list-disc space-y-2 pl-5">
            <li><strong className="text-foreground">Cloudflare, Inc.</strong>: sivuston hosting ja tietoturva.</li>
            <li><strong className="text-foreground">Setmore (Anywhere Inc.)</strong>: ajanvarausjärjestelmä.</li>
            <li><strong className="text-foreground">Google Ireland Ltd</strong>: Google Maps -kartta, vain suostumuksella.</li>
            <li>Kirjanpitäjä ja viranomaiset lain edellyttämissä tilanteissa.</li>
          </ul>
          <p>Tietoja ei myydä tai luovuteta kolmansille osapuolille markkinointiin.</p>
        </Section>

        <Section title="5. Siirrot EU:n ja ETA:n ulkopuolelle">
          <p>
            Osa palveluntarjoajista (Cloudflare, Setmore, Google) voi käsitellä tietoja Yhdysvalloissa. Siirrot perustuvat
            EU–USA-tietosuojakehykseen tai Euroopan komission vakiosopimuslausekkeisiin.
          </p>
        </Section>

        <Section title="6. Säilytysaika">
          <ul className="list-disc space-y-2 pl-5">
            <li>Yhteydenotot ja tarjouspyynnöt: enintään 12 kuukautta viimeisestä yhteydenotosta.</li>
            <li>Kirjanpitoaineisto: kirjanpitolain mukaisesti 6–10 vuotta.</li>
            <li>Palvelimen tekniset lokit: lyhytaikaisesti, palveluntarjoajan käytännön mukaan.</li>
          </ul>
        </Section>

        <Section title="7. Rekisteröidyn oikeudet">
          <p>
            Sinulla on oikeus pyytää pääsyä tietoihisi, niiden oikaisua tai poistamista, käsittelyn rajoittamista ja tietojen
            siirtämistä, sekä vastustaa oikeutettuun etuun perustuvaa käsittelyä. Suostumuksen voit perua milloin tahansa.
          </p>
          <p>
            Voit tehdä valituksen valvontaviranomaiselle:{" "}
            <a href="https://tietosuoja.fi" target="_blank" rel="noreferrer" className="text-foreground underline underline-offset-4">
              Tietosuojavaltuutetun toimisto, tietosuoja.fi
            </a>
            .
          </p>
        </Section>

        <Section id="evasteet" title="8. Evästeet">
          <p>
            Sivusto ei käytä analytiikka- tai markkinointievästeitä. Google Maps -kartta ladataan vasta, kun painat
            "Näytä kartta". Tällöin Google voi asettaa omia evästeitään ja käsitellä IP-osoitettasi Googlen
            tietosuojakäytännön mukaisesti.
          </p>
          <p>Valintasi tallennetaan selaimeesi. Voit perua suostumuksen alla olevalla painikkeella.</p>
          <button
            type="button"
            onClick={() => {
              resetMapConsent();
              alert("Kartan suostumus peruttu.");
            }}
            className="rounded-full border border-border px-5 py-2.5 text-[0.82rem] font-medium text-foreground hover:border-foreground"
          >
            Peru kartan suostumus
          </button>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
