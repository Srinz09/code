import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileStickyCta from "@/components/MobileStickyCta";
import Hero from "@/components/home/Hero";
import IdentificationSection from "@/components/home/IdentificationSection";
import FounderStorySection from "@/components/home/FounderStorySection";
import HealthTransformationSection from "@/components/home/HealthTransformationSection";
import ProofWallSection from "@/components/home/ProofWallSection";
import WhyWorkWithMeSection from "@/components/home/WhyWorkWithMeSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ConsultationSection from "@/components/home/ConsultationSection";
import FaqSection from "@/components/home/FaqSection";
import SocialSection from "@/components/home/SocialSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <IdentificationSection />
        <FounderStorySection />
        <HealthTransformationSection />
        <ProofWallSection />
        <WhyWorkWithMeSection />
        <HowItWorksSection />
        <ConsultationSection />
        <SocialSection />
        <FaqSection />
      </main>
      <FinalCtaSection />
      <SiteFooter />
      <MobileStickyCta context="mobile_sticky_home" />
    </>
  );
}
