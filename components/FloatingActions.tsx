import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 hidden flex-col gap-3 md:flex">
      <a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1fae66] text-white shadow-soft transition hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
      <a
        href={siteConfig.phoneHref}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest text-white shadow-soft transition hover:scale-105"
        aria-label="Call Healing Foundation"
      >
        <Phone size={21} />
      </a>
    </div>
  );
}
