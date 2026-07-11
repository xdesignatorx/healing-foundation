import Link from "next/link";
import { ArrowRight, FileDown } from "lucide-react";

export function BrochureCTA() {
  return (
    <section className="bg-white py-20 text-forest">
      <div className="container-pad">
        <div className="grid gap-8 rounded-lg bg-[#1e2622] p-7 text-white shadow-soft sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f1c765] text-[#302b1d]">
              <FileDown className="h-6 w-6" />
            </span>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-[#f1c765]">
              Free brochure
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
              Share the centre details with your family in one clean brochure.
            </h2>
          </div>
          <div>
            <p className="text-sm leading-7 text-white/68">
              The brochure includes treatments, facilities, contact details,
              address, visit guidance, and the first-step process. It opens as a
              print-ready page so families can save it as PDF without any paid tool.
            </p>
            <Link
              href="/brochure"
              className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#f1c765] px-5 text-sm font-bold text-[#302b1d] transition hover:-translate-y-0.5"
            >
              Open brochure
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
