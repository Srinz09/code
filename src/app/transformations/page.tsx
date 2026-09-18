import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Container from "@/components/Container";
import TransformationCard from "@/components/home/TransformationCard";
import { transformations } from "@/lib/data/transformations";
import { wellnessDisclaimer } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Transformations",
  description:
    "Real client transformation stories — health and fitness journeys guided by FitWithDebasri. Individual results vary.",
};

export default function TransformationsPage() {
  return (
    <>
      <SiteHeader variant="minimal" />
      <main className="flex-1">
        <section className="pt-16 pb-6 sm:pt-20">
          <Container size="narrow" className="text-center">
            <div className="mb-4 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-accent-dark">
              The proof portfolio
            </div>
            <h1 className="font-display text-balance text-[clamp(1.9rem,4.6vw,3rem)] font-semibold leading-[1.15] text-ink">
              Real people. Real journeys.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-ink-soft">
              Every card below is a placeholder awaiting a verified client transformation — no results are
              invented here. Individual results vary.
            </p>
          </Container>
        </section>

        <section className="py-10 sm:py-14">
          <Container size="wide">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {transformations.map((t) => (
                <TransformationCard key={t.id} t={t} />
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-primary py-20 text-center">
          <Container size="narrow">
            <h2 className="font-display text-balance text-[clamp(1.5rem,3.4vw,2.2rem)] font-semibold text-on-primary">
              Your story could be next.
            </h2>
            <Link
              href="/#consultation"
              className="mt-6 inline-flex rounded-md bg-on-primary px-8 py-3.5 text-[15px] font-bold text-primary-dark"
            >
              Book Your Free Consultation
            </Link>
          </Container>
        </section>

        <p className="mx-auto max-w-xl px-5 py-10 text-center text-[12px] leading-relaxed text-ink-faint">
          {wellnessDisclaimer}
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
