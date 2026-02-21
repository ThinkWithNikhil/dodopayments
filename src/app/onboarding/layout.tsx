import { WorkspaceProvider } from "@/contexts/workspace-context";
import { AppBlurredBackground } from "@/components/dashboard/app-blurred-background";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WorkspaceProvider>
      <div className="relative min-h-svh">
        {/* Layer 1: entire app blurred */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none select-none"
          aria-hidden
        >
          <div className="h-full w-full backdrop-blur-xs">
            <AppBlurredBackground />
          </div>
        </div>
        {/* Layer 2: overlay */}
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-xs"
          aria-hidden
        />
        {/* Layer 3: form slot */}
        <div className="relative z-10 flex min-h-svh items-center justify-center p-6">
          {children}
        </div>
      </div>
    </WorkspaceProvider>
  );
}
