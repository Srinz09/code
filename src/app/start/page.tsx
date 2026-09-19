import type { Metadata } from "next";
import StartHero from "@/components/home/StartHero";
import IdentificationSection from "@/components/home/IdentificationSection";
import StartProofSection from "@/components/home/StartProofSection";
import StartHowItWorks from "@/components/home/StartHowItWorks";
import ConsultationSection from "@/components/home/ConsultationSection";
import FaqSection from "@/components/home/FaqSection";
import MobileStickyCta from "@/components/MobileStickyCta";
import { startFaqs, startDisclaimer } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Start Your Transformation",
  robots: { index: false, follow: false },
};

export default function StartPage() {
  return (
    <>
      <div className="flex justify-center border-b border-line px-6 py-4">
        <div className="font-display text-[19px] font-semibold text-ink">fitwithdebasri</div>
      </div>

      <StartHero />
      <IdentificationSection />
      <StartProofSection />
      <StartHowItWorks />
      <ConsultationSection variant="start" page="/start" />
      <FaqSection faqs={startFaqs} variant="start" />

      <div className="mx-auto max-w-[640px] px-6 pt-8 pb-[calc(96px+env(safe-area-inset-bottom))] text-center text-[11.5px] leading-[1.6] text-[var(--ink-faint)] min-[800px]:pb-10">
        {startDisclaimer}
      </div>

      <MobileStickyCta primaryHref="#lead-form" />
    </>
  );
}
