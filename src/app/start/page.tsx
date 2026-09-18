import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import MobileStickyCta from "@/components/MobileStickyCta";
import WhatsAppButton from "@/components/WhatsAppButton";
import StartHero from "@/components/home/StartHero";
import IdentificationSection from "@/components/home/IdentificationSection";
import StartProofSection from "@/components/home/StartProofSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ConsultationSection from "@/components/home/ConsultationSection";
import FaqSection from "@/components/home/FaqSection";
import { faqs, wellnessDisclaimer } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Start Your Transformation",
  description:
    "I was around 99 kg and struggling with my health. Today I help others build healthier habits — start with a free consultation.",
  robots: { index: false, follow: false },
};

const quickFaqs = faqs.filter((f) =>
  ["Is this only for weight loss?", "How quickly will I see results?", "What if I have a medical condition?"].includes(f.q)
);

export default function StartPage() {
  return (
    <>
      <SiteHeader variant="minimal" ctaHref="#lead-form" />
      <main className="flex-1">
        <StartHero />
        <IdentificationSection />
        <StartProofSection />
        <HowItWorksSection ctaHref="#lead-form" />
        <ConsultationSection
          id="lead-form"
          title="Start your transformation"
          subtitle="Takes less than a minute."
          variant="short"
        />
        <FaqSection faqs={quickFaqs} compact />
      </main>
      <div className="pb-24 pt-6 text-center sm:pb-10">
        <WhatsAppButton context="start_footer" variant="ghost">
          Have a question first? Chat on WhatsApp
        </WhatsAppButton>
        <p className="mx-auto mt-6 max-w-lg px-5 text-center text-[11.5px] leading-relaxed text-ink-faint">
          {wellnessDisclaimer}
        </p>
      </div>
      <MobileStickyCta primaryHref="#lead-form" context="mobile_sticky_start" />
    </>
  );
}
