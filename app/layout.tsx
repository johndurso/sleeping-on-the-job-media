import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bebas_Neue, Inter } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {

  metadataBase: new URL("https://sleepingonthejobmedia.com"),

  title: "Sleeping on the Job Media | Web Design, Social Media & Photography",
  description:
    "Detroit-based media company offering web design, social media management, and event photography for local businesses and performers.",
  keywords:
    "web design, social media management, photography, Detroit, media company",


  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Sleeping on the Job Media",
    description:
      "The media company with the most bang for your buck. Web Design, Social Media Management & Photography.",
    url: "https://sleepingonthejobmedia.com",
    siteName: "Sleeping on the Job Media",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sleeping on the Job Media: Web Design, Social Media & Photography",
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    title: "Sleeping on the Job Media",
    description:
      "The media company with the most bang for your buck. Web Design, Social Media Management & Photography.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="bg-chrome-black text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}