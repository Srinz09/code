import type { Metadata } from "next";
import Link from "next/link";
import ClientStoriesGrid from "@/components/ClientStoriesGrid";
import { transformationsDisclaimer } from "@/lib/data/content";

const transformationsDescription =
  "Real client weight-loss and fitness transformation stories, guided by fitwithdebasri. Genuine before/after journeys — individual results vary.";

export const metadata: Metadata = {
  title: "Real Client Transformations",
  description: transformationsDescription,
  alternates: { canonical: "/transformations" },
  openGraph: {
    type: "website",
    url: "https://fitwithdebasri.in/transformations",
    title: "Real Client Transformations | fitwithdebasri",
    description: transformationsDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Client Transformations | fitwithdebasri",
    description: transformationsDescription,
  },
};

export default function TransformationsPage() {
  return (
    <>
      <div
        className="sticky top-0 z-50 flex items-center justify-between border-b border-line px-6 py-4 backdrop-blur-[8px]"
        style={{ background: "oklch(96% 0.015 85 / 0.92)" }}
      >
        <Link
          href="/"
          className="font-display -my-2.5 inline-flex min-h-11 items-center py-2.5 text-[20px] font-semibold text-ink"
        >
          fitwithdebasri
        </Link>
        <Link
          href="/#consultation"
          className="inline-flex min-h-11 items-center rounded-[2px] bg-forest px-5 py-[10px] text-[14px] font-semibold text-cream-light"
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
          Real client transformations, shared with permission &mdash; nothing invented. Individual results vary.
        </p>
      </div>

      <div className="mx-auto max-w-[1100px] px-6 pt-8 pb-24">
        <ClientStoriesGrid />
        <div className="mt-10 text-center">
          <Link
            href="/#story"
            className="inline-block rounded-[2px] border px-6 py-3 text-[14px] font-semibold text-ink"
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
