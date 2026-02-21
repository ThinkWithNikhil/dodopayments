import { AppBlurredBackground } from "@/components/dashboard/app-blurred-background";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WorkspaceProvider } from "@/contexts/workspace-context";

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
    <WorkspaceProvider>
      <TooltipProvider>
        <AppBlurredBackground>{children}</AppBlurredBackground>
      </TooltipProvider>
    </WorkspaceProvider>
  );
}
