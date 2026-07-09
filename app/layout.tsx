import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FloatingActions } from "@/components/FloatingActions";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Premium Rehabilitation & Wellness Centre`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  other: {
    "contact:phone": siteConfig.phoneNumbers.join(", "),
    "contact:email": siteConfig.email
  },
  keywords: [
    "rehab centre",
    "addiction treatment",
    "mental wellness",
    "luxury rehabilitation",
    "residential recovery centre"
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
    images: [siteConfig.ogImage]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
