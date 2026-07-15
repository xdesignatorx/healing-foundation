import type { Metadata, Viewport } from "next";
import Image from "next/image";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FloatingActions } from "@/components/FloatingActions";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { PWAInstallPrompt } from "@/components/PWAInstallPrompt";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import { StructuredData } from "@/components/StructuredData";
import { siteConfig } from "@/data/site";

const siteTemporarilyHidden = true;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteTemporarilyHidden
      ? `${siteConfig.name} | Temporarily Unavailable`
      : `${siteConfig.name} | Premium Rehabilitation & Wellness Centre`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteTemporarilyHidden
    ? `${siteConfig.name} is temporarily unavailable while updates are being completed.`
    : siteConfig.description,
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
    index: !siteTemporarilyHidden,
    follow: !siteTemporarilyHidden
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
  if (siteTemporarilyHidden) {
    return (
      <html lang="en">
        <body className="min-h-screen bg-cream font-sans antialiased text-forest">
          <main className="flex min-h-screen items-center justify-center px-6 py-12">
            <section className="mx-auto w-full max-w-3xl text-center">
              <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-gold/30 bg-white shadow-soft">
                <Image src={siteConfig.logo} alt={`${siteConfig.name} logo`} width={96} height={96} className="h-full w-full object-cover" />
              </div>
              <p className="mb-5 inline-flex rounded-full border border-forest/10 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-gold shadow-soft">
                Temporary error
              </p>
              <h1 className="font-serif text-5xl font-bold leading-tight text-forest md:text-7xl">
                {siteConfig.name}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-forest/70">
                Error: This website is temporarily unavailable. Please try again later.
              </p>
            </section>
          </main>
        </body>
      </html>
    );
  }

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
