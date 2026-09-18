import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { howItWorksSteps } from "@/lib/data/content";

export default function HowItWorksSection({ ctaHref = "#consultation" }: { ctaHref?: string }) {
  return (
    <section id="how" className="bg-sage py-16 sm:py-24">
      <Container size="wide">
        <SectionHeading title="Your first step doesn't have to be complicated." />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {howItWorksSteps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary font-display font-semibold text-on-primary">
                {s.num}
              </div>
              <h3 className="text-[15.5px] font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href={ctaHref}
            className="inline-flex rounded-md bg-primary px-8 py-3.5 text-[15px] font-semibold text-on-primary hover:bg-primary-dark"
          >
            Take the first step
          </a>
        </div>
      </Container>
    </section>
  );
}
