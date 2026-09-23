import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fitwithdebasri.in"),
  title: {
    default: "fitwithdebasri",
    template: "%s | fitwithdebasri",
  },
  description:
    "I went from 99 KG and struggling with my health to a healthier, more consistent life. Now I help others do the same — with structure and accountability.",
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
      </head>
      <body className="w-full overflow-x-hidden bg-cream font-body text-ink antialiased">{children}</body>
    </html>
  );
}
