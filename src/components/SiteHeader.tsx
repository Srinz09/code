import Link from "next/link";
import Container from "./Container";
import WhatsAppButton from "./WhatsAppButton";
import { navLinks } from "@/lib/data/content";

export default function SiteHeader({
  variant = "full",
  ctaHref = "/#consultation",
}: {
  variant?: "full" | "minimal";
  ctaHref?: string;
}) {
  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-50 border-b border-line bg-bg/90 backdrop-blur-md">
      <Container size="wide" className="flex items-center justify-between py-3.5">
        <Link href="/" className="font-display text-[20px] font-semibold tracking-tight text-ink">
          fit<span className="text-primary">withdebasri</span>
        </Link>
        {variant === "full" && (
          <nav className="hidden md:flex items-center gap-6 text-[14.5px] font-medium text-ink-soft">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="border-b-2 border-transparent pb-0.5 hover:border-accent hover:text-ink">
                {link.label}
              </a>
            ))}
          </nav>
        )}
        <div className="flex items-center gap-3">
          <a
            href={ctaHref}
            className="hidden sm:inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-[14px] font-semibold text-on-primary hover:bg-primary-dark"
          >
            Start Your Transformation
          </a>
          <WhatsAppButton context="header" size="sm" className="sm:hidden">
            WhatsApp
          </WhatsAppButton>
        </div>
      </Container>
    </header>
  );
}
