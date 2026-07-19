import { ArrowRight, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#080808] text-white">
      <div className="container-pad py-16 sm:py-20">
        <div className="grid gap-12 border-b border-white/12 pb-14 lg:grid-cols-[1.1fr_0.55fr_0.85fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative grid h-16 w-16 place-items-center overflow-hidden rounded-2xl border border-white/12 bg-black shadow-[0_0_36px_rgba(255,122,0,0.22)]">
                <Image src={siteConfig.logo} alt={`${siteConfig.name} logo`} fill sizes="64px" className="object-contain p-1" />
              </span>
              <span>
                <span className="block text-2xl font-black uppercase tracking-[-0.05em]">{siteConfig.name}</span>
                <span className="mt-1 block text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#d5ff65]">
                  Digital studio
                </span>
              </span>
            </Link>
            <h2 className="mt-9 max-w-3xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.08em] sm:text-7xl">
              Build something your competitors remember.
            </h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#d5ff65] px-5 text-sm font-black text-[#080808] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Start project
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/18 px-5 text-sm font-black text-white transition hover:bg-white hover:text-[#080808]"
              >
                <Phone className="h-4 w-4" />
                Call now
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d5ff65]">Explore</p>
            <div className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-bold text-white/58 transition hover:text-[#d5ff65]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d5ff65]">Contact</p>
            <div className="mt-5 space-y-4 text-sm leading-6 text-white/62">
              <p className="grid gap-1">
                <a href={siteConfig.phoneHref} className="transition hover:text-[#d5ff65]">{siteConfig.phone}</a>
                <a href={siteConfig.secondaryPhoneHref} className="transition hover:text-[#d5ff65]">{siteConfig.secondaryPhone}</a>
              </p>
              <p className="grid gap-1">
                <a href={siteConfig.emailHref} className="break-all transition hover:text-[#d5ff65]">{siteConfig.email}</a>
                <a href={siteConfig.secondaryEmailHref} className="break-all transition hover:text-[#d5ff65]">{siteConfig.secondaryEmail}</a>
              </p>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.08em] text-white/72">
                <Mail className="h-4 w-4 text-[#d5ff65]" />
                {siteConfig.registration}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-xs font-bold uppercase tracking-[0.1em] text-white/34 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Design. Code. Identity. Launch.</p>
        </div>
      </div>
    </footer>
  );
}
