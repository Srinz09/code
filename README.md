# FitWithDebasri

A premium, conversion-focused health transformation website built around a real founder story, for an Indian audience. Built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Routes

- `/` — the main site: founder story, proof wall, how it works, multi-step consultation form, FAQ.
- `/start` — a minimal-nav landing page for paid (Meta/Instagram) traffic, with a shorter 3-step lead form.
- `/transformations` — the full client transformation portfolio.
- `/privacy`, `/terms` — legal pages. **These are templates and have not been reviewed by a lawyer — review before publishing.**

## Content & data

All copy for testimonials, transformations, FAQs, etc. lives in `src/lib/data/`. Testimonials, video testimonials, WhatsApp proof and transformation stories are currently **explicit placeholders** (e.g. `[Insert actual testimonial]`) — no client story has been fabricated. Replace these with real, verified content (with the client's permission) as it becomes available:

- `src/lib/data/testimonials.ts` — written/video testimonials, WhatsApp proof
- `src/lib/data/transformations.ts` — the transformation portfolio cards
- `src/lib/data/founderStory.ts` — the founder's story chapters and real photos
- `src/lib/data/content.ts` — FAQs, how-it-works steps, benefits, form options, trust badges, the wellness disclaimer

## WhatsApp

All WhatsApp links are built in `src/lib/whatsapp.ts`. The number is currently `+91 8240242714` — update it there if it changes.

## Analytics

`src/lib/analytics.ts` pushes funnel events (`hero_cta_click`, `form_started`, `whatsapp_click`, etc.) to `window.dataLayer`, ready to wire into GTM/GA4. It no-ops safely if no tag manager is present.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```
