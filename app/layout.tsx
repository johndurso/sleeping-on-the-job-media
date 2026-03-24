import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sleeping on the Job Media | Web Design, Social Media & Photography",
  description:
    "Detroit-based media company offering web design, social media management, and event photography for local businesses and performers.",
  keywords:
    "web design, social media management, photography, Detroit, media company",
  openGraph: {
    title: "Sleeping on the Job Media",
    description:
      "The media company with the most bang for your buck. Web Design, Social Media Management & Photography.",
    url: "https://sleepingonthejobmedia.com",
    siteName: "Sleeping on the Job Media",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-chrome-black text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}