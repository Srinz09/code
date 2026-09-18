import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import MetaPixel from "@/components/MetaPixel";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fitwithdebasri.com"),
  title: {
    default: "FitWithDebasri — Real Health Transformation Guidance, India",
    template: "%s | FitWithDebasri",
  },
  description:
    "A personal health transformation guide for India. Debasri was once 99 kg and struggling with her health — now she helps busy Indians build healthier, sustainable habits through 1:1 guidance and WhatsApp accountability.",
  keywords: [
    "health transformation India",
    "fitness transformation India",
    "wellness guidance India",
    "healthy lifestyle India",
    "weight management India",
    "personal fitness guidance India",
    "online wellness coaching India",
  ],
  openGraph: {
    title: "FitWithDebasri — Real Health Transformation Guidance, India",
    description:
      "I was once 99 kg and struggling with my health. Today I help others start their own transformation — a real, structured, sustainable process, not a quick fix.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${fraunces.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink font-body">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
