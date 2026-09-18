export default function PlaceholderMedia({
  label,
  aspect = "aspect-[3/4]",
  icon = "image",
  className = "",
}: {
  label: string;
  aspect?: string;
  icon?: "image" | "video" | "chat";
  className?: string;
}) {
  return (
    <div
      className={`${aspect} ${className} relative flex items-center justify-center overflow-hidden rounded-sm border border-dashed border-line/80`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, var(--sage), var(--sage) 10px, var(--surface) 10px, var(--surface) 20px)",
      }}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <PlaceholderIcon icon={icon} />
        <span className="font-mono text-[10.5px] leading-snug text-ink-faint">{label}</span>
      </div>
    </div>
  );
}

function PlaceholderIcon({ icon }: { icon: "image" | "video" | "chat" }) {
  const common = "w-6 h-6 text-ink-faint/70";
  if (icon === "video") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={common}>
        <rect x="3" y="5" width="14" height="14" rx="2" />
        <path d="M17 9l4-2v10l-4-2" />
      </svg>
    );
  }
  if (icon === "chat") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={common}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={common}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="1.5" />
      <path d="M21 15l-5-5-4 4-3-3-6 6" />
    </svg>
  );
}
