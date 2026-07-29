import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
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

export const metadata: Metadata = {
  title: "BBF — Brand & Beyond",
  description:
    "A professional branding and design company crafting identities that stand the test of time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${acuminPro.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
