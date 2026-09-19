import TopBar from "@/components/TopBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileStickyCta from "@/components/MobileStickyCta";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import WeighingScale from "@/components/home/WeighingScale";
import IdentificationSection from "@/components/home/IdentificationSection";
import FounderStorySection from "@/components/home/FounderStorySection";
import ProofWallSection from "@/components/home/ProofWallSection";
import WhyWorkWithMeSection from "@/components/home/WhyWorkWithMeSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ConsultationSection from "@/components/home/ConsultationSection";
import FaqSection from "@/components/home/FaqSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";
import { homeFaqs } from "@/lib/data/content";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <SiteHeader />
      <Hero />
      <TrustStrip />
      <WeighingScale />
      <IdentificationSection />
      <FounderStorySection />
      <ProofWallSection />
      <WhyWorkWithMeSection />
      <ComparisonSection />
      <HowItWorksSection />
      <ConsultationSection variant="home" page="Homepage" />
      <FaqSection faqs={homeFaqs} variant="home" />
      <FinalCtaSection />
      <SiteFooter />
      <MobileStickyCta primaryHref="#consultation" inset />
    </>
  );
}
