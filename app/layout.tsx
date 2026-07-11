import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FloatingActions } from "@/components/FloatingActions";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { PWAInstallPrompt } from "@/components/PWAInstallPrompt";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import { StructuredData } from "@/components/StructuredData";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Premium Rehabilitation & Wellness Centre`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  manifest: "/manifest.webmanifest",
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
  icons: {
    icon: siteConfig.logo,
    apple: siteConfig.logo
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#1F4D3A",
  colorScheme: "light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pb-16 font-sans antialiased md:pb-0">
        <StructuredData />
        <ServiceWorkerRegister />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
        <MobileStickyCTA />
        <PWAInstallPrompt />
      </body>
    </html>
  );
}
