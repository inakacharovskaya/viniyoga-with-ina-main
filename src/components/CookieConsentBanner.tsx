import { useEffect, useState } from "react";

const STORAGE_KEY = "viniyoga-cookie-consent";
type ConsentChoice = "all" | "essential";

const EXTERNAL_SCRIPTS = [
  {
    id: "analytics",
    src: "https://example.com/analytics.js",
  },
];

const applyConsent = (choice: ConsentChoice) => {
  localStorage.setItem(STORAGE_KEY, choice);
  document.documentElement.dataset.cookieConsent = choice;

  if (choice === "all") {
    EXTERNAL_SCRIPTS.forEach(({ id, src }) => {
      const existing = document.querySelector(`script[data-cookie-script="${id}"]`) as HTMLScriptElement | null;

      if (!existing) {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.defer = true;
        script.dataset.cookieScript = id;
        document.head.appendChild(script);
      }
    });

    return;
  }

  document.querySelectorAll("script[data-cookie-script]").forEach((script) => script.remove());
};

export const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ConsentChoice | null;

    if (saved === "all" || saved === "essential") {
      applyConsent(saved);
      setVisible(false);
      return;
    }

    setVisible(true);
  }, []);

  const handleChoice = (choice: ConsentChoice) => {
    applyConsent(choice);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className="mx-auto max-w-5xl rounded-2xl border border-border/60 bg-background/80 backdrop-blur-md shadow-lg md:p-6 p-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
              Cookie Preferences
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We use cookies to improve your experience. You can accept all cookies or keep only essential ones enabled.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => handleChoice("essential")}
              className="rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
            >
              Essential Only
            </button>
            <button
              type="button"
              onClick={() => handleChoice("all")}
              className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
