import PlaceholderMedia from "../PlaceholderMedia";
import type { WrittenTestimonial, VideoTestimonial, WhatsAppProof } from "@/lib/data/testimonials";

export function WrittenTestimonialCard({ t }: { t: WrittenTestimonial }) {
  return (
    <div className="flex h-full min-w-[240px] flex-col justify-between rounded-sm border border-line bg-surface p-5">
      <p className="text-[14px] italic leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <div className="text-[13.5px] font-semibold text-ink">{t.name}</div>
          <div className="text-[12px] text-ink-faint">{t.detail}</div>
        </div>
        {t.verified && (
          <span className="rounded-sm bg-primary-soft px-2 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-primary-dark">
            Verified
          </span>
        )}
      </div>
    </div>
  );
}

export function VideoTestimonialCard({ t }: { t: VideoTestimonial }) {
  return (
    <div className="min-w-[190px]">
      <PlaceholderMedia label={t.posterLabel} aspect="aspect-[9/16]" icon="video" />
      <div className="mt-2.5">
        <div className="text-[13.5px] font-semibold text-ink">{t.name}</div>
        <div className="text-[12px] text-ink-faint">{t.detail}</div>
      </div>
    </div>
  );
}

export function WhatsAppProofCard({ p }: { p: WhatsAppProof }) {
  return (
    <div className="min-w-[210px] rounded-[18px] border border-line bg-surface p-2.5 shadow-sm">
      <PlaceholderMedia label={p.label} aspect="aspect-[9/16]" icon="chat" className="rounded-[12px]" />
    </div>
  );
}
