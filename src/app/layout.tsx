import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IntroProvider } from "@/components/intro/IntroProvider";
import { PageEnd } from "@/components/PageEnd";
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
  title: "Budget Bridge Foundation",
  description:
    "Budget Bridge teaches money skills — seminars, tutoring, workshops, and advocacy so every student can thrive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${acuminPro.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <IntroProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <PageEnd />
          <Footer />
        </IntroProvider>
      </body>
    </html>
  );
}
