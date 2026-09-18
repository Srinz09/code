import { trustBadges } from "@/lib/data/content";

export default function TrustBadges({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-x-6 gap-y-2 text-[13.5px] text-ink-faint ${className}`}>
      {trustBadges.map((badge, i) => (
        <li key={badge} className="flex items-center gap-2">
          <span className="text-primary" aria-hidden="true">
            ✓
          </span>
          {badge}
          {i < trustBadges.length - 1 && <span className="sr-only">,</span>}
        </li>
      ))}
    </ul>
  );
}
