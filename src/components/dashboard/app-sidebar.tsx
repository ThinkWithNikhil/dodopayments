"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Rocket,
  FileCheck,
  Home,
  Tag,
  FileText,
  Zap,
  DollarSign,
  ArrowLeftRight,
  HandCoins,
  Building2,
  Code,
  Headphones,
  Settings,
  ChevronDown,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

const getStartedNav = [
  { label: "Get Started", href: "/app", icon: Rocket },
  { label: "Verification", href: "/app/verification", icon: FileCheck },
  { label: "Home", href: "/app/home", icon: Home },
  { label: "Products", href: "/app/products", icon: Tag },
  { label: "Usage Billing", href: "/app/usage-billing", icon: FileText },
];

const mainNav = [
  { label: "Sales", href: "#", icon: DollarSign },
  { label: "Transactions", href: "#", icon: ArrowLeftRight },
  { label: "Payouts", href: "#", icon: HandCoins },
  { label: "Business", href: "#", icon: Building2 },
];

const bottomNav = [
  { label: "Developer", href: "#", icon: Code },
  { label: "Support", href: "#", icon: Headphones },
  { label: "Settings", href: "#", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-2">
          <span className="font-semibold text-sidebar-foreground">
            Dodo Payments
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Get Started</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {getStartedNav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.href}>
                        <item.icon className="size-4" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/app/sentra">
                    <Zap className="size-4" />
                    <span>Sentra</span>
                    <Badge
                      variant="secondary"
                      className="ml-auto text-[10px] px-1.5"
                    >
                      Beta
                    </Badge>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {mainNav.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      <item.icon className="size-4" />
                      <span>{item.label}</span>
                      <ChevronDown className="ml-auto size-4" />
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {bottomNav.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      <item.icon className="size-4" />
                      <span>{item.label}</span>
                      <ChevronDown className="ml-auto size-4" />
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border p-2">
        <ToggleGroup
          type="single"
          defaultValue="test"
          className={cn(
            "w-full rounded-lg border border-sidebar-border p-0.5",
            "bg-muted/50"
          )}
        >
          <ToggleGroupItem
            value="test"
            aria-label="Test mode"
            className={cn(
              "flex-1 rounded-md text-xs font-medium",
              "data-[state=on]:bg-amber-500/20 data-[state=on]:text-amber-800",
              "data-[state=on]:border-amber-400/50 data-[state=on]:border"
            )}
          >
            Test Mode
          </ToggleGroupItem>
          <ToggleGroupItem
            value="live"
            aria-label="Live mode"
            className="flex-1 rounded-md text-xs text-muted-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          >
            Live Mode
          </ToggleGroupItem>
        </ToggleGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
