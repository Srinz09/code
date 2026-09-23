import type { Metadata } from "next";
import { instagramUrl } from "@/lib/data/social";
import "./globals.css";

const siteUrl = "https://fitwithdebasri.in";
const siteDescription =
  "Real weight-loss & fitness transformation coaching from someone who's lived it — from 99 KG to a healthier life. Personalized nutrition, accountability, and wellness guidance for lasting change.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "fitwithdebasri — Weight Loss & Fitness Transformation Coach in India",
    template: "%s | fitwithdebasri",
  },
  description: siteDescription,
  keywords: [
    "weight loss transformation coach",
    "fitness transformation coaching India",
    "online fitness coach India",
    "weight loss coach for women",
    "diet and nutrition coach",
    "sustainable weight loss program",
    "healthy lifestyle coaching",
    "personal transformation coach India",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "fitwithdebasri",
    title: "fitwithdebasri — Weight Loss & Fitness Transformation Coach in India",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "fitwithdebasri — Weight Loss & Fitness Transformation Coach in India",
    description: siteDescription,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Debasri",
  alternateName: "fitwithdebasri",
  url: siteUrl,
  jobTitle: "Weight Loss & Fitness Transformation Coach",
  description: siteDescription,
  sameAs: [instagramUrl],
  knowsAbout: [
    "Weight loss coaching",
    "Fitness transformation",
    "Nutrition coaching",
    "Wellness and lifestyle guidance",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,500&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="w-full overflow-x-hidden bg-cream font-body text-ink antialiased">{children}</body>
    </html>
  );
}
