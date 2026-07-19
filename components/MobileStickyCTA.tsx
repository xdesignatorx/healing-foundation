import { MessageCircle, Navigation, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export function MobileStickyCTA() {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    siteConfig.address
  )}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-forest/10 bg-white/95 px-3 py-2 shadow-[0_-12px_40px_rgba(23,53,42,0.12)] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={siteConfig.phoneHref}
          className="inline-flex h-11 items-center justify-center gap-1.5 rounded-md bg-forest text-xs font-bold text-white"
          aria-label="Call DesignstryX"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center justify-center gap-1.5 rounded-md bg-[#1fae66] text-xs font-bold text-white"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center justify-center gap-1.5 rounded-md bg-gold text-xs font-bold text-ink"
          aria-label="Open directions"
        >
          <Navigation className="h-4 w-4" />
          Map
        </a>
      </div>
    </div>
  );
}
