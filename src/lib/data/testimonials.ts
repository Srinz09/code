export type WrittenTestimonial = {
  id: string;
  isPlaceholder: boolean;
  quote: string;
  name: string;
  detail: string;
  verified: boolean;
};

export type VideoTestimonial = {
  id: string;
  isPlaceholder: boolean;
  name: string;
  detail: string;
  posterLabel: string;
};

export type WhatsAppProof = {
  id: string;
  isPlaceholder: boolean;
  label: string;
};

/** All placeholders — no testimonial is invented. "verified" only ever becomes true once genuinely checked. */
export const writtenTestimonials: WrittenTestimonial[] = [
  { id: "wt-1", isPlaceholder: true, quote: "[Insert actual testimonial]", name: "[Client name]", detail: "[Goal]", verified: false },
  { id: "wt-2", isPlaceholder: true, quote: "[Insert actual testimonial]", name: "[Client name]", detail: "[Goal]", verified: false },
  { id: "wt-3", isPlaceholder: true, quote: "[Insert actual testimonial]", name: "[Client name]", detail: "[Goal]", verified: false },
  { id: "wt-4", isPlaceholder: true, quote: "[Insert actual testimonial]", name: "[Client name]", detail: "[Goal]", verified: false },
];

export const videoTestimonials: VideoTestimonial[] = [
  { id: "vt-1", isPlaceholder: true, name: "[Client name]", detail: "[Goal]", posterLabel: "[Insert real video]" },
  { id: "vt-2", isPlaceholder: true, name: "[Client name]", detail: "[Goal]", posterLabel: "[Insert real video]" },
  { id: "vt-3", isPlaceholder: true, name: "[Client name]", detail: "[Goal]", posterLabel: "[Insert real video]" },
];

export const whatsappProof: WhatsAppProof[] = [
  { id: "wp-1", isPlaceholder: true, label: "[Insert real WhatsApp screenshot — blur private details]" },
  { id: "wp-2", isPlaceholder: true, label: "[Insert real WhatsApp screenshot — blur private details]" },
  { id: "wp-3", isPlaceholder: true, label: "[Insert real WhatsApp screenshot — blur private details]" },
];
