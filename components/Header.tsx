"use client";

import { ChevronDown, Menu, Phone, X } from "lucide-react";
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

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        transparent
          ? "border-transparent bg-transparent"
          : "border-b border-white/40 bg-cream/80 shadow-card backdrop-blur-2xl"
      }`}
    >
      <div className={`container-pad flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
        <Link href="/" className="group">
          <span className={`block font-serif text-2xl font-semibold transition ${transparent ? "text-pearl" : "text-forest"}`}>
            {siteConfig.name}
          </span>
          <span className={`text-[0.68rem] uppercase tracking-[0.28em] ${transparent ? "text-sand" : "text-gold"}`}>
            Wellness Residence
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <div key={item.href} className="group relative py-7">
              {item.label === "Treatments" || item.label === "Facilities" ? (
                <>
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1.5 text-sm font-medium transition hover:text-gold ${
                      pathname === item.href
                        ? "text-gold"
                        : transparent
                          ? "text-pearl/90"
                          : "text-forest"
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={14} className="transition group-hover:rotate-180" />
                  </Link>
                  <div className="pointer-events-none absolute left-1/2 top-full w-[760px] -translate-x-1/2 translate-y-3 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-lg border border-white/60 bg-cream/95 shadow-soft backdrop-blur-2xl">
                      <div className="grid grid-cols-[0.78fr_1.22fr]">
                        <div className="bg-deep p-7 text-pearl">
                          <p className="eyebrow text-sand">{item.label}</p>
                          <p className="mt-4 font-serif text-4xl font-semibold leading-tight">
                            Private care pathways with refined residential support.
                          </p>
                          <p className="mt-4 text-sm leading-7 text-pearl/70">
                            Explore the programs and spaces designed to support recovery with dignity, privacy, and structure.
                          </p>
                          <Link href={item.href} className="mt-6 inline-flex rounded-full bg-gold px-5 py-3 text-sm font-bold text-ink transition hover:bg-[#D8BB7D]">
                            View all
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-2 p-4">
                          {(item.label === "Treatments" ? megaMenu.treatments : megaMenu.facilities).map((entry) => (
                            <Link
                              key={entry.label}
                              href={entry.href}
                              className="group/item rounded-lg p-4 transition hover:bg-white hover:shadow-card"
                            >
                              <div className="flex gap-3">
                                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition group-hover/item:bg-gold group-hover/item:text-ink">
                                  <entry.icon size={18} />
                                </span>
                                <span>
                                  <span className="block font-serif text-xl font-semibold text-forest">
                                    {entry.label}
                                  </span>
                                  <span className="mt-1 block text-xs leading-5 text-ink/65">
                                    {entry.description}
                                  </span>
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition hover:text-gold ${
                    pathname === item.href
                      ? "text-gold"
                      : transparent
                        ? "text-pearl/90"
                        : "text-forest"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className={`inline-flex h-11 items-center gap-2 rounded-full border px-5 text-sm font-semibold transition hover:border-gold hover:bg-gold hover:text-ink ${
              transparent ? "border-pearl/30 text-pearl" : "border-gold/40 text-forest"
            }`}
          >
            <Phone size={16} />
            Call now
          </a>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center rounded-full bg-gold px-5 text-sm font-bold text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-[#D8BB7D]"
          >
            Confidential enquiry
          </Link>
        </div>

        <button
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden ${
            transparent ? "border-pearl/30 text-pearl" : "border-forest/20 text-forest"
          }`}
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-forest/10 bg-cream px-5 py-5 shadow-card lg:hidden">
          <nav className="grid gap-3">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.label === "Treatments" || item.label === "Facilities" ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 text-sm font-semibold text-forest hover:bg-mist"
                      aria-expanded={mobilePanel === item.label}
                      onClick={() => setMobilePanel(mobilePanel === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition ${mobilePanel === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobilePanel === item.label && (
                      <div className="mt-2 grid gap-2 rounded-lg border border-forest/10 bg-white/70 p-2">
                        {(item.label === "Treatments" ? megaMenu.treatments : megaMenu.facilities).map((entry) => (
                          <Link
                            key={entry.label}
                            href={entry.href}
                            onClick={() => setOpen(false)}
                            className="flex gap-3 rounded-md px-3 py-3 hover:bg-cream"
                          >
                            <entry.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                            <span>
                              <span className="block text-sm font-semibold text-forest">{entry.label}</span>
                              <span className="block text-xs leading-5 text-ink/65">{entry.description}</span>
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
                    className="block rounded-md px-3 py-3 text-sm font-semibold text-forest hover:bg-mist"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
