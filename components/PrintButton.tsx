"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest px-5 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5"
    >
      <Printer className="h-4 w-4" />
      Download / print PDF
    </button>
  );
}
