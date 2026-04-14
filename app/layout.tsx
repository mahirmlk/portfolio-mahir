import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/nav/Navbar";
import { Noise } from "@/components/ui/Noise";
import { inter, jetbrainsMono, sora, playfairDisplay, montserrat } from "@/lib/fonts";
import "@/app/globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL("https://mahirmalik.dev"),
  title: {
    template: "%s | Mahir Malik",
    default: "Mahir Malik"
  },
  description:
    "Portfolio of Mahir Malik building intelligent systems, ML products, and production-grade software.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mahirmalik.dev",
    siteName: "Mahir Malik",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.variable, jetbrainsMono.variable, sora.variable, playfairDisplay.variable, montserrat.variable, "font-sans", geist.variable)}
    >
      <body suppressHydrationWarning className="page-shell min-h-screen overflow-x-hidden antialiased">
        <div aria-hidden className="ambient-layer">
          <div className="ambient-grid" />
          <div className="ambient-glow ambient-glow-primary" />
          <div className="ambient-glow ambient-glow-secondary" />
          <div className="ambient-vignette" />
        </div>
        <Noise />
        <Navbar />
        <main className="relative z-10 pt-20">{children}</main>
      </body>
    </html>
  );
}
