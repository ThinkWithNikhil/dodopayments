import Link from "next/link";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { AppHeader } from "@/components/dashboard/app-header";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata = {
  title: "Get Started | Dodo Payments",
  description: "Dodo Payments dashboard",
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      {/* Full-width banner: fixed to viewport so it spans above sidebar and content */}
      <aside
        aria-label="Test mode"
        className="fixed top-0 left-0 right-0 z-50 flex h-8 w-full items-center justify-between gap-4 px-6 text-sm text-primary-dark"
        style={{ backgroundColor: 'var(--primary-light)' }}
      >
        <div className="flex items-center gap-1 font-medium">
          <span>You're in Test mode.</span>
          <Link
            href="#"
            className="underline underline-offset-2 hover:opacity-90"
          >
            Learn more
          </Link>
        </div>
        <div className="flex items-center gap-1 font-medium">
          <span>To accept payments, </span>
          <Link
            href="#"
            className="underline underline-offset-2 hover:opacity-90"
          >verify your business</Link>
        </div>
      </aside>
      {/* Content starts below the banner; variable used by sidebar for offset */}
      <div
        className="flex min-h-svh flex-col pt-9"
        style={{ ["--banner-height" as string]: "2.25rem" }}
      >
        <SidebarProvider className="flex min-h-0 flex-1">
          <AppSidebar />
          <SidebarInset>
            <AppHeader title="Get Started" />
            <div className="flex flex-1 flex-col overflow-auto">{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </TooltipProvider>
  );
}
