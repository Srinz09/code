import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How FitWithDebasri collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader variant="minimal" />
      <main className="flex-1 py-16 sm:py-20">
        <Container size="narrow">
          <h1 className="font-display text-[clamp(1.7rem,4vw,2.4rem)] font-semibold text-ink">Privacy Policy</h1>
          <p className="mt-2 text-[13.5px] text-ink-faint">Last updated: [Insert date before publishing]</p>

          <div className="mt-8 flex flex-col gap-7 text-[15px] leading-relaxed text-ink-soft">
            <p>
              This Privacy Policy explains how FitWithDebasri (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects,
              uses and protects information you share through this website, our consultation form, and
              WhatsApp.{" "}
              <strong className="text-ink">
                [Insert registered business name and address before publishing.]
              </strong>
            </p>

            <section>
              <h2 className="font-display text-[19px] font-semibold text-ink">What we collect</h2>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>Contact details you provide: name, age range, city, phone/WhatsApp number, email.</li>
                <li>Information you share about your goals, lifestyle and challenges during the consultation form or conversation.</li>
                <li>Any medical condition or concern you choose to mention — this is entirely optional and only used to understand your situation, never to diagnose or treat you.</li>
                <li>Basic usage data (pages visited, buttons clicked) if analytics is enabled, used only in aggregate to improve the website.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-[19px] font-semibold text-ink">How we use it</h2>
              <p className="mt-2">
                We use your information to respond to your consultation request, understand your goals, and
                provide wellness and lifestyle guidance if you choose to work with us. We do not sell your
                personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[19px] font-semibold text-ink">WhatsApp communication</h2>
              <p className="mt-2">
                If you contact us or continue a conversation on WhatsApp, that conversation is subject to
                WhatsApp&rsquo;s own privacy policy in addition to this one. Screenshots of conversations are
                only used publicly as testimonials with your explicit permission, and private or identifying
                details are blurred.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[19px] font-semibold text-ink">Medical information</h2>
              <p className="mt-2">
                We are not a medical provider. Any health information you share is used only to tailor
                wellness and lifestyle guidance and is not stored as, or treated as, a medical record. Please
                continue sharing medical information with your qualified healthcare professional as normal.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[19px] font-semibold text-ink">Your choices</h2>
              <p className="mt-2">
                You can ask us to delete your information at any time by messaging us on WhatsApp or emailing{" "}
                <span className="text-ink">[Insert contact email before publishing]</span>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[19px] font-semibold text-ink">Contact</h2>
              <p className="mt-2">
                Questions about this policy can be sent to{" "}
                <span className="text-ink">[Insert contact email before publishing]</span>.
              </p>
            </section>

            <p className="rounded-md border border-dashed border-line bg-sage p-4 text-[13px] text-ink-faint">
              This is a general template and has not been reviewed by a lawyer. Please have it reviewed
              against applicable Indian data protection law (including the Digital Personal Data Protection
              Act) before publishing.
            </p>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
