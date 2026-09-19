export default function ImageSlotPlaceholder({
  label,
  radius = 8,
  className = "",
}: {
  label: string;
  radius?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-1.5 overflow-hidden text-ink ${className}`}
      style={{ background: "rgba(127,127,127,.08)", borderRadius: radius }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ border: "1.5px dashed currentColor", opacity: 0.35, borderRadius: radius }}
      />
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ opacity: 0.45 }}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span className="max-w-[90%] px-3 text-center text-[12px] font-medium tracking-[0.01em]">{label}</span>
    </div>
  );
}
