import { useEffect, useState } from "react";
import { X } from "lucide-react";

const SEEN_KEY = "offer-popup-seen";

// Opening offer popup: shown once per browser session on first visit.
// Closes via the X, a click outside the image, or the Escape key.
export default function OfferPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem(SEEN_KEY) === "1"; } catch {}
    if (!seen) setOpen(true);
  }, []);

  const close = () => {
    setOpen(false);
    try { sessionStorage.setItem(SEEN_KEY, "1"); } catch {}
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Avajaistarjous Turvesuonkadulla"
      onClick={close}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={close}
          aria-label="Sulje"
          className="absolute -right-3 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-105"
        >
          <X className="h-5 w-5" />
        </button>
        <a href="#pricing" onClick={close}>
          <img
            src="/images/avajaistarjous.webp"
            alt="H-Timantti avajaistarjous Turvesuonkatu 16, Tampere: renkaiden vaihto 15 €, käsinpesu 10 €. Avoinna ma–pe 8–18, la 10–18. Puh. 045 146 6505."
            width="900"
            height="1274"
            className="block max-h-[88svh] w-auto max-w-[92vw] rounded-2xl shadow-2xl"
          />
        </a>
      </div>
    </div>
  );
}
