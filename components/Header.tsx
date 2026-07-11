"use client";

import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { megaMenu, navItems, siteConfig } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobilePanel, setMobilePanel] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 24);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50">
      <div className="container-pad">
        <div
          className={`pointer-events-auto flex items-center justify-between rounded-full border border-forest/10 bg-white/90 px-3 backdrop-blur-2xl transition-all duration-300 sm:px-4 ${
            scrolled ? "h-16 shadow-soft" : "h-[4.5rem] shadow-card"
          }`}
        >
          <Link href="/" className="group flex min-w-0 items-center gap-2.5">
            <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-forest/10 bg-white">
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.name} logo`}
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold leading-none text-forest sm:text-base">
                {siteConfig.name}
              </span>
              <span className="mt-1 block truncate text-[0.58rem] font-bold uppercase text-[#7057d9]">
                Wellness residence
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 xl:flex">
            {navItems.map((item) => {
              const hasMenu = item.label === "Treatments" || item.label === "Facilities";

              return (
                <div key={item.href} className="group relative py-6">
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 text-xs font-semibold transition hover:text-[#7057d9] ${
                      pathname === item.href ? "text-[#7057d9]" : "text-forest/76"
                    }`}
                  >
                    {item.label}
                    {hasMenu && <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />}
                  </Link>

                  {hasMenu && (
                    <div className="pointer-events-none absolute left-1/2 top-full w-[680px] -translate-x-1/2 translate-y-2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="overflow-hidden rounded-lg border border-forest/10 bg-white shadow-soft">
                        <div className="grid grid-cols-[0.72fr_1.28fr]">
                          <div className="bg-[#efeafd] p-6 text-[#2d2552]">
                            <p className="text-[0.65rem] font-bold uppercase text-[#7057d9]">{item.label}</p>
                            <p className="mt-4 text-2xl font-semibold leading-tight">
                              Clear care, thoughtfully coordinated.
                            </p>
                            <p className="mt-3 text-xs leading-6 text-[#2d2552]/62">
                              Explore private treatment pathways and the spaces that support recovery.
                            </p>
                            <Link
                              href={item.href}
                              className="mt-5 inline-flex h-10 items-center rounded-md bg-[#7057d9] px-4 text-xs font-bold text-white"
                            >
                              View all
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 gap-1 p-3">
                            {(item.label === "Treatments" ? megaMenu.treatments : megaMenu.facilities).map((entry) => (
                              <Link
                                key={entry.label}
                                href={entry.href}
                                className="group/item rounded-md p-3 transition hover:bg-[#f7f7f2]"
                              >
                                <div className="flex gap-2.5">
                                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-[#f0eaff] text-[#7057d9] transition group-hover/item:bg-[#7057d9] group-hover/item:text-white">
                                    <entry.icon className="h-4 w-4" />
                                  </span>
                                  <span>
                                    <span className="block text-xs font-bold text-forest">{entry.label}</span>
                                    <span className="mt-1 block text-[0.65rem] leading-4 text-ink/54">{entry.description}</span>
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <a
              href={siteConfig.phoneHref}
              aria-label="Call admissions"
              title="Call admissions"
              className="grid h-10 w-10 place-items-center rounded-full border border-forest/12 text-forest transition hover:border-[#7057d9] hover:bg-[#f0eaff] hover:text-[#7057d9]"
            >
              <Phone className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center rounded-md bg-[#7057d9] px-4 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#5e46c7]"
            >
              Confidential enquiry
            </Link>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-forest/12 text-forest transition hover:bg-[#f0eaff] xl:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="pointer-events-auto mt-2 max-h-[calc(100vh-6.5rem)] overflow-y-auto rounded-lg border border-forest/10 bg-white p-4 shadow-soft xl:hidden">
            <nav className="grid gap-1">
              {navItems.map((item) => {
                const hasMenu = item.label === "Treatments" || item.label === "Facilities";

                return (
                  <div key={item.href}>
                    {hasMenu ? (
                      <>
                        <button
                          type="button"
                          className="flex w-full items-center justify-between rounded-md px-3 py-3 text-sm font-semibold text-forest hover:bg-[#f7f7f2]"
                          aria-expanded={mobilePanel === item.label}
                          onClick={() => setMobilePanel(mobilePanel === item.label ? null : item.label)}
                        >
                          {item.label}
                          <ChevronDown className={`h-4 w-4 transition ${mobilePanel === item.label ? "rotate-180" : ""}`} />
                        </button>
                        {mobilePanel === item.label && (
                          <div className="mb-2 grid gap-1 rounded-md bg-[#f7f7f2] p-2 sm:grid-cols-2">
                            {(item.label === "Treatments" ? megaMenu.treatments : megaMenu.facilities).map((entry) => (
                              <Link
                                key={entry.label}
                                href={entry.href}
                                onClick={() => setOpen(false)}
                                className="flex gap-3 rounded-md bg-white px-3 py-3"
                              >
                                <entry.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#7057d9]" />
                                <span>
                                  <span className="block text-xs font-bold text-forest">{entry.label}</span>
                                  <span className="mt-1 block text-[0.65rem] leading-4 text-ink/54">{entry.description}</span>
                                </span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-3 py-3 text-sm font-semibold text-forest hover:bg-[#f7f7f2]"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>
            <div className="mt-3 grid grid-cols-[auto_1fr] gap-2 border-t border-forest/8 pt-3">
              <a
                href={siteConfig.phoneHref}
                aria-label="Call admissions"
                className="grid h-11 w-11 place-items-center rounded-md border border-forest/12 text-forest"
              >
                <Phone className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 items-center justify-center rounded-md bg-[#7057d9] px-4 text-sm font-bold text-white"
              >
                Confidential enquiry
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
