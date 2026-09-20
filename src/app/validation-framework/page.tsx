import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Container from "@/components/Container";
import ValidationChecklist from "@/components/validation/ValidationChecklist";

export const metadata: Metadata = {
  title: "Startup Validation Framework",
  description:
    "A three-step framework for validating a business idea before you build it: market research, business model, and talking to real customers.",
};

export default function ValidationFrameworkPage() {
  return (
    <>
      <SiteHeader variant="minimal" />
      <main className="flex-1">
        <section className="pt-16 pb-6 sm:pt-20">
          <Container size="narrow" className="text-center">
            <div className="mb-4 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-accent-dark">
              Before you build
            </div>
            <h1 className="font-display text-balance text-[clamp(1.9rem,4.6vw,3rem)] font-semibold leading-[1.15] text-ink">
              The startup validation framework
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-ink-soft">
              Three steps to work through before you spend time designing a logo, buying a domain, or
              telling people about your idea.
            </p>
          </Container>
        </section>

        <section className="py-10 sm:py-14">
          <Container size="narrow">
            <ValidationChecklist />
          </Container>
        </section>

        <section className="bg-sage py-14 sm:py-16">
          <Container size="narrow" className="text-center">
            <p className="font-display text-balance text-[clamp(1.3rem,3vw,1.7rem)] font-semibold leading-snug text-ink">
              &ldquo;If you can&rsquo;t find 10 people who are extremely excited about what you&rsquo;re building,
              that&rsquo;s when you know you&rsquo;ve hit the jackpot with your idea.&rdquo;
            </p>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
