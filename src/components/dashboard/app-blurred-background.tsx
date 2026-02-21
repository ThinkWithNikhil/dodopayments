"use client";

import Link from "next/link";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { AppHeader } from "@/components/dashboard/app-header";
import { DashboardGetStartedContent } from "@/components/dashboard/dashboard-get-started-content";
import { TooltipProvider } from "@/components/ui/tooltip";

/**
 * Full app UI (layout + default content): test banner, sidebar, header, and main content.
 * - With children: used by app/layout to render the real app (page content in main area).
 * - Without children: used as blurred backdrop on /onboarding (default dashboard content).
 * Parent must provide WorkspaceProvider.
 */
export function AppBlurredBackground({ children }: { children?: React.ReactNode }) {
  return (
    <TooltipProvider>
      {/* Full-width banner: fixed to viewport, same as app/layout.tsx */}
      <aside
        aria-label="Test mode"
        className="fixed top-0 left-0 right-0 z-50 flex h-8 w-full items-center justify-between gap-4 px-6 text-sm text-primary-dark"
        style={{ backgroundColor: "var(--primary-light)" }}
      >
        <div className="flex items-center gap-1 font-medium">
          <span>You&apos;re in Test mode.</span>
          <Link href="#" className="underline underline-offset-2 hover:opacity-90">
            Learn more.
          </Link>
        </div>
        <div className="flex items-center gap-1 font-medium">
          <span>To accept payments, </span>
          <Link href="#" className="underline underline-offset-2 hover:opacity-90">
            verify your business.
          </Link>
        </div>
      </aside>
      {/* Content below banner: sidebar + header + main content, same as app/layout.tsx */}
      <div
        className="flex min-h-svh flex-col pt-9"
        style={{ ["--banner-height" as string]: "2.25rem" }}
      >
        <SidebarProvider className="flex min-h-0 flex-1">
          <AppSidebar />
          <SidebarInset>
            <AppHeader title="Get Started" />
            <div className="flex flex-1 flex-col overflow-auto">
              {children ?? <DashboardGetStartedContent />}
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </TooltipProvider>
  );
}
