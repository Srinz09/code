import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fitwithdebasri.com"),
  title: {
    default: "fitwithdebasri",
    template: "%s | fitwithdebasri",
  },
  description:
    "I went from 99 KG and struggling with my health to a healthier, more consistent life. Now I help others do the same — with structure and accountability.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <body className="w-full overflow-x-hidden bg-cream font-body text-ink antialiased">{children}</body>
    </html>
  );
}
