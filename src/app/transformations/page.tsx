import type { Metadata } from "next";
import Link from "next/link";
import { transformationsDisclaimer } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Transformations",
  description: "Real client transformation stories — health and fitness journeys guided by fitwithdebasri. Individual results vary.",
};

function ChevronPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="flex aspect-[3/4] w-[130px] items-center justify-center overflow-hidden rounded-[2px] p-1.5 text-center"
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg,oklch(88% 0.015 85),oklch(88% 0.015 85) 10px,oklch(82% 0.015 85) 10px,oklch(82% 0.015 85) 20px)",
      }}
    >
      <div className="font-mono text-[10.5px]" style={{ color: "var(--ink-soft-2)" }}>
        {label}
      </div>
    </div>
  );
}

export default function TransformationsPage() {
  return (
    <>
      <div
        className="sticky top-0 z-50 flex items-center justify-between border-b border-line px-6 py-4 backdrop-blur-[8px]"
        style={{ background: "oklch(96% 0.015 85 / 0.92)" }}
      >
        <Link href="/" className="font-display text-[20px] font-semibold text-ink">
          fitwithdebasri
        </Link>
        <Link
          href="/#consultation"
          className="rounded-[2px] bg-forest px-5 py-[10px] text-[14px] font-semibold text-cream-light"
        >
          Book a Free Consultation
        </Link>
      </div>

      <div className="mx-auto max-w-[800px] px-6 pt-[72px] pb-6 text-center">
        <div className="mb-4 text-[12.5px] font-semibold tracking-[0.14em] text-forest-light uppercase">
          The Proof Portfolio
        </div>
        <h1
          className="font-display text-balance mb-[18px] font-semibold text-ink"
          style={{ fontSize: "clamp(28px,4.4vw,46px)", lineHeight: 1.15 }}
        >
          Real People. Real Journeys.
        </h1>
        <p className="text-[16px] leading-[1.6] text-[var(--ink-soft)]">
          Verified client transformations will be featured here as they&rsquo;re shared &mdash; never invented.
          Individual results vary.
        </p>
      </div>

      <div className="mx-auto max-w-[720px] px-6 pt-8 pb-24">
        <div className="rounded-[2px] border border-line-soft bg-cream-alt px-8 py-12 text-center">
          <div className="mb-7 flex justify-center gap-3.5">
            <ChevronPlaceholder label="Before · 900×1200" />
            <ChevronPlaceholder label="Now · 900×1200" />
          </div>
          <h2 className="font-display mb-2.5 text-[20px] font-semibold text-ink">
            The One Journey We Can Fully Vouch For Right Now.
          </h2>
          <p className="mx-auto max-w-[440px] text-[14.5px] leading-[1.6] text-[var(--ink-soft)]">
            Client transformations will appear here once genuine, verified stories are shared &mdash; with real
            names, real photos, and real quotes. Nothing invented in the meantime.
          </p>
          <Link
            href="/#story"
            className="mt-[22px] inline-block rounded-[2px] border px-6 py-3 text-[14px] font-semibold text-ink"
            style={{ borderColor: "var(--line-faint)" }}
          >
            See The Founder&rsquo;s Story
          </Link>
        </div>
      </div>

      <div
        className="px-6 py-20 text-center"
        style={{ background: "var(--cta-band-bg)", color: "var(--cta-band-text)" }}
      >
        <div className="mx-auto max-w-[600px]">
          <h2
            className="font-display text-balance mb-3.5 font-semibold"
            style={{ fontSize: "clamp(24px,3.4vw,36px)" }}
          >
            Your Story Could Be Next.
          </h2>
          <Link
            href="/#consultation"
            className="mt-2 inline-block rounded-[2px] px-7 py-[15px] text-[15px] font-bold"
            style={{ background: "var(--cta-band-text)", color: "var(--cta-band-bg)" }}
          >
            Book Your Free Consultation
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-[640px] px-6 py-10 text-center text-[11.5px] leading-[1.6] text-[var(--ink-faint)]">
        {transformationsDisclaimer}
      </div>
    </>
  );
}
