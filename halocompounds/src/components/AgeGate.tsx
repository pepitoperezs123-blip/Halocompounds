"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Button } from "@/components/Button";

const KEY = "halo:age-confirmed:v1";

export default function AgeGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Read the prior confirmation only on the client, after mount, so the
    // gate never causes an SSR/client hydration mismatch.
    /* eslint-disable react-hooks/set-state-in-effect */
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      // if storage is blocked, show the gate anyway
      setShow(true);
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  function confirm() {
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      // non-fatal
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/80 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-7 text-center shadow-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-halo">
          Research use only
        </p>
        <h2 className="mt-3 font-serif text-2xl">Confirm before continuing</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {site.name} sells analytical reference standards for in-vitro
          laboratory research. By entering you confirm you are <strong>21 or
          older</strong>, acting in a research capacity, and that you will not
          use these products for human or animal consumption.
        </p>
        <div className="mt-6 flex flex-col gap-2">
          <Button size="lg" onClick={confirm}>
            I confirm — enter site
          </Button>
          <a
            href="https://www.google.com"
            className="text-xs text-muted hover:text-primary"
          >
            Leave
          </a>
        </div>
      </div>
    </div>
  );
}
