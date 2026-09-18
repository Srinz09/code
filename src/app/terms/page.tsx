import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for FitWithDebasri's wellness and lifestyle guidance.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader variant="minimal" />
      <main className="flex-1 py-16 sm:py-20">
        <Container size="narrow">
          <h1 className="font-display text-[clamp(1.7rem,4vw,2.4rem)] font-semibold text-ink">
            Terms of Service
          </h1>
          <p className="mt-2 text-[13.5px] text-ink-faint">Last updated: [Insert date before publishing]</p>

          <div className="mt-8 flex flex-col gap-7 text-[15px] leading-relaxed text-ink-soft">
            <p>
              By booking a consultation or using guidance from FitWithDebasri, you agree to these terms.
            </p>

            <section>
              <h2 className="font-display text-[19px] font-semibold text-ink">Nature of the service</h2>
              <p className="mt-2">
                FitWithDebasri provides wellness and lifestyle guidance — including fitness, nutrition
                support and accountability — based on personal experience and ongoing learning.{" "}
                <strong className="text-ink">
                  This is not medical care, and Debasri is not a licensed physician, dietitian or medical
                  professional unless stated otherwise with verified credentials.
                </strong>
              </p>
            </section>

            <section>
              <h2 className="font-display text-[19px] font-semibold text-ink">Not a substitute for medical care</h2>
              <p className="mt-2">
                This guidance does not diagnose, treat, or cure any disease or medical condition, including
                diabetes, thyroid conditions, liver issues, high blood pressure or high cholesterol.
                Individuals with any medical condition should continue working with their qualified
                healthcare professional and should consult them before making changes to diet, exercise, or
                medication.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[19px] font-semibold text-ink">Results vary</h2>
              <p className="mt-2">
                Any outcomes mentioned on this website or during a consultation reflect individual
                experiences. We do not guarantee specific results, timelines, or weight-loss amounts, because
                outcomes depend on many personal factors outside our control.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[19px] font-semibold text-ink">Consultations</h2>
              <p className="mt-2">
                A free consultation is a conversation to understand your goals and situation, and to explain
                what working together would involve. It does not create a paid engagement by itself — any
                paid program is agreed separately, with pricing and terms explained clearly beforehand.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[19px] font-semibold text-ink">Your responsibility</h2>
              <p className="mt-2">
                You are responsible for the accuracy of the information you share, including any medical
                information, and for consulting your doctor about anything relevant to your health before
                acting on general lifestyle guidance.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[19px] font-semibold text-ink">Contact</h2>
              <p className="mt-2">
                Questions about these terms can be sent to{" "}
                <span className="text-ink">[Insert contact email before publishing]</span>.
              </p>
            </section>

            <p className="rounded-md border border-dashed border-line bg-sage p-4 text-[13px] text-ink-faint">
              This is a general template and has not been reviewed by a lawyer. Please have it reviewed
              before publishing, especially the payment and refund terms once pricing is finalised.
            </p>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
