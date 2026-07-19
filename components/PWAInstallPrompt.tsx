"use client";

import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

export function PWAInstallPrompt() {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    setDismissed(window.localStorage.getItem("designstryx-install-dismissed") === "true");

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setPromptEvent(event as BeforeInstallPromptEvent);
      setDismissed(window.localStorage.getItem("designstryx-install-dismissed") === "true");
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  if (!promptEvent || dismissed) {
    return null;
  }

  return (
    <div className="fixed bottom-24 left-4 z-50 hidden max-w-xs rounded-lg border border-forest/10 bg-white p-4 text-forest shadow-soft md:block">
      <button
        type="button"
        onClick={() => {
          window.localStorage.setItem("designstryx-install-dismissed", "true");
          setDismissed(true);
        }}
        className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full text-forest/50 hover:bg-forest/5 hover:text-forest"
        aria-label="Dismiss install prompt"
      >
        <X className="h-4 w-4" />
      </button>
      <p className="pr-6 text-sm font-bold">Install DesignstryX</p>
      <p className="mt-2 text-xs leading-5 text-ink/58">
        Save this website on your device for quick access to calls, WhatsApp, and project enquiries.
      </p>
      <button
        type="button"
        onClick={async () => {
          await promptEvent.prompt();
          await promptEvent.userChoice;
          setPromptEvent(null);
        }}
        className="mt-4 inline-flex h-10 items-center gap-2 rounded-md bg-forest px-4 text-xs font-bold text-white"
      >
        <Download className="h-4 w-4" />
        Install app
      </button>
    </div>
  );
}
