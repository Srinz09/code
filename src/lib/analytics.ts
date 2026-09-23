export type AnalyticsEvent =
  | "hero_cta_click"
  | "scale_cta_click"
  | "bmi_cta_click"
  | "whatsapp_click"
  | "form_started"
  | "form_step_completed"
  | "form_submitted"
  | "lead_stored";

type Fbq = ((...args: unknown[]) => void) & { queue?: unknown[] };

/** Maps our funnel events to Meta Pixel standard events where one genuinely
 * applies, so ad delivery optimizes against real conversions rather than
 * every click. Everything else fires as a custom event for funnel visibility
 * in Events Manager without diluting the standard-event optimization signal. */
const metaStandardEvent: Partial<Record<AnalyticsEvent, string>> = {
  lead_stored: "Lead",
  whatsapp_click: "Contact",
};

/** Lead/consultation form fields that are safe to forward to a third-party
 * pixel as event parameters — no name, phone, city, or free-text answers.
 * Meta's terms prohibit sending PII or health-adjacent personal details as
 * plain event data (that's what hashed Advanced Matching is for, which this
 * site doesn't do), so this list is the allowlist, not a denylist. */
const metaSafeKeys = new Set(["page", "step", "source", "goal", "challenge", "readiness"]);

function toMetaSafeParams(data: Record<string, unknown>): Record<string, unknown> {
  const safe: Record<string, unknown> = {};
  for (const key of Object.keys(data)) {
    if (metaSafeKeys.has(key)) safe[key] = data[key];
  }
  return safe;
}

/**
 * Pushes a funnel event to window.dataLayer (GTM/GA4 convention) and to the
 * Meta Pixel (fbq) when present. Silently no-ops when analytics isn't
 * configured, so this is safe to call from anywhere without an environment
 * check at the call site.
 */
export function track(event: AnalyticsEvent, data: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  const w = window as typeof window & { dataLayer?: Record<string, unknown>[]; fbq?: Fbq };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...data });

  if (typeof w.fbq === "function") {
    const standardEvent = metaStandardEvent[event];
    const safeData = toMetaSafeParams(data);
    if (standardEvent) {
      w.fbq("track", standardEvent, safeData);
    } else {
      w.fbq("trackCustom", event, safeData);
    }
  }
}
