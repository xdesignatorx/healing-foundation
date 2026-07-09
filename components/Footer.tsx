import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deep text-pearl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(199,168,107,0.20),transparent_28rem)]" />
      <div className="container-pad relative grid gap-10 py-16 lg:grid-cols-[1.15fr_0.7fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <span className="relative flex h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/15 bg-white">
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.name} logo`}
                fill
                sizes="64px"
                className="object-cover"
              />
            </span>
            <p className="font-serif text-4xl font-semibold leading-none">{siteConfig.name}</p>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-pearl/70">
            {siteConfig.description}
          </p>
          <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-[#D8BB7D]">
            Private enquiry <ArrowRight size={16} />
          </Link>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sand">
            Explore
          </p>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-pearl/70 transition hover:text-sand"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sand">
            Contact
          </p>
          <div className="mt-4 space-y-3 text-sm leading-6 text-pearl/70">
            <p className="flex gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-gold" />
              <a href={siteConfig.phoneHref} className="transition hover:text-sand">
                {siteConfig.phone}
              </a>
            </p>
            <p className="flex gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-gold" />
              <a href={siteConfig.secondaryPhoneHref} className="transition hover:text-sand">
                {siteConfig.secondaryPhone}
              </a>
            </p>
            <p className="flex gap-3">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-gold" />
              <a href={siteConfig.emailHref} className="transition hover:text-sand">
                {siteConfig.email}
              </a>
            </p>
            <p className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" />
              <span>{siteConfig.address}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5">
        <div className="container-pad flex flex-col gap-2 text-xs text-pearl/50 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Confidential rehabilitation and wellness support.</p>
        </div>
      </div>
    </footer>
  );
}
