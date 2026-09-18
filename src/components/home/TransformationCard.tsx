import PlaceholderMedia from "../PlaceholderMedia";
import type { Transformation } from "@/lib/data/transformations";

export default function TransformationCard({ t, compact = false }: { t: Transformation; compact?: boolean }) {
  return (
    <div className="overflow-hidden rounded-sm border border-line bg-surface">
      <div className="flex">
        <PlaceholderMedia label="Before" aspect="aspect-square" className="flex-1 rounded-none border-0 border-r border-line/60" />
        <PlaceholderMedia label="Progress" aspect="aspect-square" className="flex-1 rounded-none border-0" />
      </div>
      <div className="p-5">
        <div className="mb-1 flex items-baseline justify-between gap-2">
          <span className="font-display text-[17px] font-semibold text-ink">{t.name}</span>
          <span className="text-[12px] text-ink-faint">{t.timeframe}</span>
        </div>
        <div className="mb-2 text-[12.5px] font-semibold text-accent-dark">{t.goal}</div>
        {!compact && (
          <div className="mb-3 grid grid-cols-2 gap-2.5 text-[13px] text-ink-soft">
            <div>
              <div className="text-[10.5px] font-semibold uppercase tracking-wide text-ink-faint">Starting point</div>
              {t.startingPoint}
            </div>
            <div>
              <div className="text-[10.5px] font-semibold uppercase tracking-wide text-ink-faint">Challenge</div>
              {t.challenge}
            </div>
          </div>
        )}
        <p className="border-t border-line pt-3 text-[13.5px] italic leading-relaxed text-ink-soft">
          &ldquo;{t.quote}&rdquo;
        </p>
      </div>
    </div>
  );
}
