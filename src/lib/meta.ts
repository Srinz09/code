declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export function generateEventId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `evt_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

function readCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

/** Meta's browser-set click/browser IDs, forwarded to the Conversions API for match quality. */
export function getMetaBrowserIds(): { fbp?: string; fbc?: string } {
  return { fbp: readCookie("_fbp"), fbc: readCookie("_fbc") };
}

/**
 * Fires a Meta Pixel event client-side. Pass the same eventId used in the
 * matching Conversions API call so Meta dedupes the two.
 */
export function trackMetaPixelEvent(
  eventName: "Lead" | "Contact",
  params: Record<string, unknown>,
  eventId: string,
): void {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", eventName, params, { eventID: eventId });
}
