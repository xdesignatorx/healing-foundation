import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#1e2622] text-white">
      <div className="container-pad py-16 sm:py-20">
        <div className="grid gap-12 border-b border-white/12 pb-14 lg:grid-cols-[1.1fr_0.55fr_0.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative h-12 w-12 overflow-hidden rounded-full border border-white/14 bg-white">
                <Image
                  src={siteConfig.logo}
                  alt={`${siteConfig.name} logo`}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
              <span>
                <span className="block text-xl font-bold leading-none">{siteConfig.name}</span>
                <span className="mt-1 block text-[0.62rem] font-bold uppercase text-[#d5c9ff]">Wellness residence</span>
              </span>
            </Link>
            <h2 className="mt-9 max-w-xl text-4xl font-semibold leading-[1.06] text-balance sm:text-5xl">
              A clearer path can begin with one private conversation.
            </h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#f1c765] px-5 text-sm font-bold text-[#2f291c] transition hover:-translate-y-0.5 hover:bg-[#f6d777]"
              >
                Start private enquiry
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/18 px-5 text-sm font-bold text-white transition hover:bg-white hover:text-forest"
              >
                <Phone className="h-4 w-4" />
                Call admissions
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase text-[#d5c9ff]">Explore</p>
            <div className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-white/62 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase text-[#d5c9ff]">Contact</p>
            <div className="mt-5 space-y-4 text-sm leading-6 text-white/62">
              <p className="flex gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-[#f1c765]" />
                <span className="grid gap-1">
                  <a href={siteConfig.phoneHref} className="transition hover:text-white">{siteConfig.phone}</a>
                  <a href={siteConfig.secondaryPhoneHref} className="transition hover:text-white">{siteConfig.secondaryPhone}</a>
                </span>
              </p>
              <p className="flex gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-[#f1c765]" />
                <a href={siteConfig.emailHref} className="break-all transition hover:text-white">{siteConfig.email}</a>
              </p>
              <p className="flex gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#f1c765]" />
                <span>{siteConfig.address}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-xs text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Confidential rehabilitation and wellness support.</p>
        </div>
      </div>
    </footer>
  );
}
