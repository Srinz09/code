import type { Metadata } from "next";
import { instagramUrl } from "@/lib/data/social";
import "./globals.css";

const siteUrl = "https://fitwithdebasri.in";
const metaPixelId = "1118953817361363";
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
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if('scrollRestoration' in history){history.scrollRestoration='manual';}" +
              "if(location.hash){history.replaceState(null,'',location.pathname+location.search);window.scrollTo(0,0);}",
          }}
        />
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
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${metaPixelId}');
fbq('track', 'PageView');`,
          }}
        />
      </head>
      <body className="w-full overflow-x-hidden bg-cream font-body text-ink antialiased">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
