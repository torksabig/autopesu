export default function SectionHeading({ title, copy, className = "" }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-medium leading-[1.05] tracking-tight text-balance">
        {title}
      </h2>
      {copy && <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground text-balance">{copy}</p>}
    </div>
  );
}
