import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function HeroPanel({ image, imageAlt, eyebrow, title, copy, href, priority }) {
  return (
    <a
      href={href}
      className="group relative flex min-h-[62svh] flex-col justify-end overflow-hidden p-6 sm:p-10"
    >
      <Image
        src={image}
        alt={imageAlt || title}
        className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        fittingType="fill"
        quality={priority ? 88 : 80}
      />
      <div className="absolute inset-0 fade-bottom" />
      <div className="relative text-white">
        <p className="text-[0.66rem] font-medium uppercase tracking-[0.2em] text-white/70">{eyebrow}</p>
        <h2 className="mt-3 text-[clamp(2rem,3.6vw,3.25rem)] font-medium leading-[1.02] tracking-tight">
          {title}
        </h2>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/80">{copy}</p>
        <span className="mt-7 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/50 bg-black/25 backdrop-blur-sm transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-foreground">
          <ArrowRight className="h-5 w-5" />
        </span>
      </div>
    </a>
  );
}
