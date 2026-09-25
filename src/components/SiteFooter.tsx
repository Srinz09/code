import Link from "next/link";
import { homeDisclaimer } from "@/lib/data/content";
import { instagramUrl, facebookUrl } from "@/lib/data/social";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function SiteFooter() {
  return (
    <div id="disclaimer" className="px-6 pt-11" style={{ paddingBottom: "calc(120px + env(safe-area-inset-bottom))" }}>
      <div className="mx-auto max-w-[900px]">
        <div className="mb-8 flex flex-wrap items-start justify-between gap-6">
          <div>
            <div className="font-display text-[18px] font-semibold text-ink">fitwithdebasri</div>
            <div className="text-[13.5px] text-[var(--ink-faint)]">Transformation mentor &amp; wellness guide</div>
          </div>
          <div className="flex flex-wrap gap-5 text-[14px]">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center py-2.5">
              Instagram
            </a>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center py-2.5">
              Facebook
            </a>
            <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center py-2.5">
              WhatsApp
            </a>
            <Link href="/transformations" className="inline-flex min-h-11 items-center py-2.5">
              Transformations
            </Link>
            <a href="#privacy" className="inline-flex min-h-11 items-center py-2.5">
              Privacy Policy
            </a>
          </div>
        </div>
        <div id="privacy" className="border-t border-line pt-6 text-[12.5px] leading-[1.7] text-[var(--ink-faint)]">
          {homeDisclaimer}
        </div>
      </div>
    </div>
  );
}
