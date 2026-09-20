import Link from "next/link";
import Container from "./Container";
import { wellnessDisclaimer } from "@/lib/data/content";
import { instagramUrl } from "@/lib/data/social";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line pb-28 pt-14 sm:pb-16">
      <Container size="wide">
        <div className="flex flex-wrap items-start justify-between gap-8 pb-8">
          <div>
            <div className="font-display text-[18px] font-semibold">
              fit<span className="text-primary">withdebasri</span>
            </div>
            <p className="mt-1.5 text-[13.5px] text-ink-faint">Personal health transformation guide, India</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-ink-soft">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              Instagram
            </a>
            <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              WhatsApp
            </a>
            <Link href="/transformations" className="hover:text-ink">
              Transformations
            </Link>
            <Link href="/validation-framework" className="hover:text-ink">
              Validation Framework
            </Link>
            <Link href="/privacy" className="hover:text-ink">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-ink">
              Terms
            </Link>
          </div>
        </div>
        <p className="border-t border-line pt-6 text-[12.5px] leading-relaxed text-ink-faint">
          {wellnessDisclaimer}
        </p>
      </Container>
    </footer>
  );
}
