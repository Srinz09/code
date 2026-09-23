import { navLinks } from "@/lib/data/content";

export default function SiteHeader() {
  return (
    <div
      className="sticky top-0 z-50 flex items-center justify-between border-b border-line px-6 py-4 backdrop-blur-[8px]"
      style={{ background: "oklch(96% 0.015 85 / 0.92)" }}
    >
      <div className="font-display text-[20px] font-semibold tracking-[0.01em] text-ink">fitwithdebasri</div>
      <div className="flex items-center gap-5">
        <nav className="hidden min-[800px]:flex items-center gap-6 text-[14.5px] font-medium text-[var(--ink-faint)]">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#consultation"
          className="whitespace-nowrap rounded-[2px] bg-forest font-semibold text-cream-light inline-flex items-center
            px-[14px] py-[11px] min-h-11 text-[13px] min-[800px]:px-5 min-[800px]:py-[10px] min-[800px]:min-h-0 min-[800px]:text-[14px]"
        >
          <span className="min-[800px]:hidden">Book Free</span>
          <span className="hidden min-[800px]:inline">Book a Free Consultation</span>
        </a>
      </div>
    </div>
  );
}
