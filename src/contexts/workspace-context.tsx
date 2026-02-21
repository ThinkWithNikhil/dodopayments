"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "dodo_workspace";

export type WorkspaceData = {
  businessName: string;
  onboardingComplete: boolean;
};

const defaultWorkspace: WorkspaceData = {
  businessName: "",
  onboardingComplete: false,
};

function loadFromStorage(): WorkspaceData {
  if (typeof window === "undefined") return defaultWorkspace;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultWorkspace;
    const parsed = JSON.parse(raw) as Partial<WorkspaceData>;
    return {
      businessName: parsed.businessName ?? defaultWorkspace.businessName,
      onboardingComplete: parsed.onboardingComplete ?? defaultWorkspace.onboardingComplete,
    };
  } catch {
    return defaultWorkspace;
  }
}

function saveToStorage(data: WorkspaceData) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore
  }
}

type WorkspaceContextValue = {
  businessName: string;
  onboardingComplete: boolean;
  setBusinessName: (name: string) => void;
  completeOnboarding: (data: { businessName: string }) => void;
};

const WorkspaceContext = createContext<WorkspaceContextValue | null>(null);

export function WorkspaceProvider({ children }: { children: React.ReactNode }) {
  const [workspace, setWorkspace] = useState<WorkspaceData>(defaultWorkspace);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setWorkspace(loadFromStorage());
    setHydrated(true);
  }, []);

  const setBusinessName = useCallback((name: string) => {
    setWorkspace((prev) => {
      const next = { ...prev, businessName: name };
      saveToStorage(next);
      return next;
    });
  }, []);

  const completeOnboarding = useCallback((data: { businessName: string }) => {
    setWorkspace((prev) => {
      const next: WorkspaceData = {
        ...prev,
        businessName: data.businessName,
        onboardingComplete: true,
      };
      saveToStorage(next);
      return next;
    });
  }, []);

  const value = useMemo<WorkspaceContextValue>(
    () => ({
      businessName: workspace.businessName,
      onboardingComplete: workspace.onboardingComplete,
      setBusinessName,
      completeOnboarding,
    }),
    [workspace.businessName, workspace.onboardingComplete, setBusinessName, completeOnboarding]
  );

  if (!hydrated) {
    return (
      <WorkspaceContext.Provider value={value}>
        {children}
      </WorkspaceContext.Provider>
    );
  }

  return (
    <WorkspaceContext.Provider value={value}>
      {children}
    </WorkspaceContext.Provider>
  );
}

export function useWorkspace(): WorkspaceContextValue {
  const ctx = useContext(WorkspaceContext);
  if (!ctx) {
    throw new Error("useWorkspace must be used within WorkspaceProvider");
  }
  return ctx;
}
