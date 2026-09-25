import { instagramUrl, facebookUrl } from "@/lib/data/social";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.5 22v-8.5h2.85l.43-3.3h-3.28V8.06c0-.96.27-1.6 1.64-1.6h1.75V3.53c-.3-.04-1.34-.13-2.55-.13-2.52 0-4.25 1.54-4.25 4.36v2.43H8.24v3.3h2.85V22h3.41Z" />
    </svg>
  );
}

export default function SocialIcons({ className = "", size = "h-11 w-11" }: { className?: string; size?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={`inline-flex items-center justify-center text-[var(--ink-faint)] ${size}`}
      >
        <InstagramIcon />
      </a>
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={`inline-flex items-center justify-center text-[var(--ink-faint)] ${size}`}
      >
        <FacebookIcon />
      </a>
    </div>
  );
}
