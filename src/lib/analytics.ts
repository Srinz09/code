export type AnalyticsEvent =
  | "hero_cta_click"
  | "founder_story_interaction"
  | "transformation_interaction"
  | "testimonial_interaction"
  | "video_play"
  | "whatsapp_click"
  | "form_started"
  | "form_step_completed"
  | "form_submitted"
  | "consultation_request";

/**
 * Pushes a funnel event to window.dataLayer (GTM/GA4 convention) when present.
 * Silently no-ops when analytics isn't configured, so this is safe to call
 * from anywhere without an environment check at the call site.
 */
export function track(event: AnalyticsEvent, payload: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  const w = window as typeof window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...payload, timestamp: Date.now() });
}
