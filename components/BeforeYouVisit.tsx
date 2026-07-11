import { CalendarCheck2, FileText, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

const visitItems = [
  {
    icon: Phone,
    title: "Call before arriving",
    text: "A quick call helps the team guide timing, availability, and the right person to meet."
  },
  {
    icon: FileText,
    title: "Bring helpful details",
    text: "Carry any recent prescriptions, relevant medical notes, and emergency contact details if available."
  },
  {
    icon: CalendarCheck2,
    title: "Plan a private discussion",
    text: "Families can ask about suitability, routine, visit expectations, and aftercare planning."
  },
  {
    icon: MapPin,
    title: "Use map directions",
    text: "Open the map before travelling to reach Mehta Market, Kumarhatti with less confusion."
  }
];

export function BeforeYouVisit() {
  return (
    <section className="container-pad pb-20">
      <div className="rounded-lg bg-[#f7edc9] p-7 text-forest shadow-soft sm:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#765d19]">
              Before you visit
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
              A smoother first visit starts with a little clarity.
            </h2>
          </div>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex h-12 w-fit items-center justify-center gap-2 rounded-md bg-forest px-5 text-sm font-bold text-white transition hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" />
            Call before visit
          </a>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {visitItems.map((item) => (
            <div key={item.title} className="rounded-md bg-white/70 p-5">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-forest text-white">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/62">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
