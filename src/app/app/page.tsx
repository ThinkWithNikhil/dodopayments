"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { DashboardGetStartedContent } from "@/components/dashboard/dashboard-get-started-content";

const REVEAL_DURATION_MS = 800;

function AppPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const revealParam = searchParams.get("reveal");
  const [revealProgress, setRevealProgress] = useState<number | null>(
    revealParam === "1" ? 0 : null
  );

  useEffect(() => {
    if (revealParam !== "1") return;
    const start = performance.now();
    let rafId: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / REVEAL_DURATION_MS, 1);
      const easeOut = 1 - (1 - t) ** 2;
      const value = easeOut * 150;
      setRevealProgress(value);
      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        router.replace("/app", { scroll: false });
        setRevealProgress(null);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [revealParam, router]);

  const isRevealing = revealProgress !== null;

  return (
    <>
      <DashboardGetStartedContent />
      {isRevealing && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm"
          style={{
            maskImage: `radial-gradient(circle at 50% 50%, transparent 0%, transparent ${revealProgress}%, black ${revealProgress}%)`,
            WebkitMaskImage: `radial-gradient(circle at 50% 50%, transparent 0%, transparent ${revealProgress}%, black ${revealProgress}%)`,
          }}
          aria-hidden
        />
      )}
    </>
  );
}

export default function AppPage() {
  return (
    <Suspense fallback={<DashboardGetStartedContent />}>
      <AppPageContent />
    </Suspense>
  );
}
