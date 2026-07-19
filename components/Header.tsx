"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 18);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50">
      <div className="container-pad">
        <div
          className={`pointer-events-auto grid grid-cols-[1fr_auto_1fr] items-center rounded-full border px-3 py-2 backdrop-blur-2xl transition duration-300 ${
            scrolled
              ? "border-white/12 bg-[#080808]/88 shadow-soft"
              : "border-white/14 bg-[#080808]/72"
          }`}
        >
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#d5ff65] text-lg font-black tracking-[-0.08em] text-[#080808]">
              DX
            </span>
            <span className="min-w-0">
              <span className="block truncate text-base font-black uppercase tracking-[-0.04em] text-white">
                {siteConfig.name}
              </span>
              <span className="mt-0.5 block truncate text-[0.58rem] font-black uppercase tracking-[0.22em] text-[#d5ff65]">
                Digital studio
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/6 p-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.08em] transition ${
                  pathname === item.href
                    ? "bg-[#d5ff65] text-[#080808]"
                    : "text-white/72 hover:bg-white hover:text-[#080808]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center justify-end gap-2 lg:flex">
            <a
              href={siteConfig.phoneHref}
              aria-label="Call DesignstryX"
              title="Call DesignstryX"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/14 text-white transition hover:bg-white hover:text-[#080808]"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center rounded-full bg-[#d5ff65] px-5 text-xs font-black uppercase tracking-[0.08em] text-[#080808] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Start project
            </a>
          </div>

          <button
            type="button"
            className="col-start-3 ml-auto grid h-11 w-11 place-items-center rounded-full border border-white/14 text-white transition hover:bg-white hover:text-[#080808] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="pointer-events-auto mt-2 overflow-hidden rounded-[1.5rem] border border-white/12 bg-[#080808] p-3 shadow-soft lg:hidden">
            <nav className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-4 text-sm font-black uppercase tracking-[0.08em] text-white/76 transition hover:bg-[#d5ff65] hover:text-[#080808]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-2 grid gap-2 border-t border-white/10 pt-3 sm:grid-cols-2">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/12 text-sm font-black text-white"
              >
                <Phone className="h-4 w-4" />
                Call
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#d5ff65] text-sm font-black text-[#080808]"
              >
                Start project
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
