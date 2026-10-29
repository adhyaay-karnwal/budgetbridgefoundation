import type { Metadata } from "next";
import localFont from "next/font/local";
import { Caveat, Fraunces } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageEnd } from "@/components/PageEnd";
import { SiteJsonLd } from "@/components/seo/JsonLd";
import { rootMetadata } from "@/lib/metadata";
import "./globals.css";

const acuminPro = localFont({
  src: [
    {
      path: "../../public/fonts/Acumin-RPro.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Acumin-ItPro.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Acumin-BdPro.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Acumin-BdItPro.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-acumin-pro",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${acuminPro.variable} ${fraunces.variable} ${caveat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream font-sans text-ink">
        <SiteJsonLd />
        <Header />
        <div className="flex-1">{children}</div>
        <PageEnd />
        <Footer />
      </body>
    </html>
  );
}
