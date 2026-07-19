"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 18);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="container-pad">
        <div
          className={`pointer-events-auto mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-2xl transition duration-300 ${
            scrolled
              ? "border-white/18 bg-[#070812]/92 shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
              : "border-white/22 bg-[#05060d]/82 shadow-[0_18px_70px_rgba(0,0,0,0.32)]"
          }`}
        >
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/12 bg-black shadow-[0_0_30px_rgba(255,112,0,0.26)]">
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.name} logo`}
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-xl font-black uppercase tracking-[-0.04em] text-white">
                {siteConfig.name}
              </span>
              <span className="mt-0.5 block truncate font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/42">
                AI digital studio
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-black/22 px-2 py-2 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-5 py-2.5 text-sm font-black transition ${
                  isActive(item.href)
                    ? "bg-[#ff7a00] text-white shadow-[0_0_24px_rgba(255,122,0,0.32)]"
                    : "text-white/78 hover:bg-white/8 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00f0a8]/20 bg-[#00f0a8]/8 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#00f0a8]">
              <span className="h-2 w-2 rounded-full bg-[#00f0a8] shadow-[0_0_18px_#00f0a8]" />
              AI live
            </span>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center rounded-lg bg-gradient-to-br from-[#ff8b1a] to-[#f15a00] px-6 text-sm font-black text-white shadow-[0_18px_45px_rgba(255,112,0,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(255,112,0,0.38)]"
            >
              Get Started
            </a>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-lg border border-white/12 text-white transition hover:bg-white hover:text-[#070812] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="pointer-events-auto mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#080915] p-3 shadow-soft lg:hidden">
            <nav className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-4 text-sm font-bold text-white/70 transition hover:bg-[#ff7a00] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-xl bg-[#ff7a00] text-sm font-black text-white"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
