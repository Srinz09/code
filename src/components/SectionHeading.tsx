export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignClasses} mb-10 sm:mb-14`}>
      {eyebrow && (
        <div
          className={`text-[13px] font-semibold uppercase tracking-[0.14em] mb-4 ${
            light ? "text-accent-soft" : "text-accent-dark"
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-display font-semibold text-balance leading-[1.15] text-[clamp(1.6rem,4vw,2.5rem)] ${
          light ? "text-on-primary" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-[16px] leading-relaxed ${light ? "text-on-primary/85" : "text-ink-soft"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
