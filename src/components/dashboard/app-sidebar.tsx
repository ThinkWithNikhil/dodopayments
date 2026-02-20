"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Rocket,
  UserCheck,
  Home,
  Package,
  Gauge,
  Sparkles,
  DollarSign,
  ArrowLeftRight,
  Wallet,
  Building2,
  Code,
  Headphones,
  Settings,
  ChevronDown,
  Crown,
  Plus,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

/** Main nav: Get Started through Business (single section) */
const mainNav = [
  { label: "Get Started", href: "/app", icon: Rocket },
  { label: "Verification", href: "/app/verification", icon: UserCheck },
  { label: "Home", href: "/app/home", icon: Home },
  { label: "Products", href: "/app/products", icon: Package },
  { label: "Usage Billing", href: "/app/usage-billing", icon: Gauge },
  { label: "Sentra", href: "/app/sentra", icon: Sparkles, badge: "Beta" },
  { label: "Sales", href: "#", icon: DollarSign, showChevron: true },
  { label: "Transactions", href: "#", icon: ArrowLeftRight, showChevron: true },
  { label: "Payouts", href: "#", icon: Wallet, showChevron: true },
  { label: "Business", href: "#", icon: Building2, showChevron: true },
];

/** Footer nav: above the Test/Live toggle */
const footerNav = [
  { label: "Developer", href: "#", icon: Code, showChevron: true },
  { label: "Support", href: "#", icon: Headphones, showChevron: true },
  { label: "Settings", href: "#", icon: Settings, showChevron: false },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="dashboard-sidebar">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-6 py-2">
          <Avatar className="size-8 shrink-0 bg-blue-500">
            <AvatarFallback className="bg-transparent text-white text-sm font-medium">
              T
            </AvatarFallback>
          </Avatar>
          <span className="min-w-0 flex-1 truncate text-sm font-medium text-sidebar-foreground">
            ThinkWithNikhil
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 shrink-0 rounded-md bg-muted/80 hover:bg-muted"
            aria-label="Workspace or subscription"
          >
            <Crown className="size-4 text-muted-foreground" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 shrink-0 rounded-md bg-muted/80 hover:bg-muted"
            aria-label="Add"
          >
            <Plus className="size-4 text-muted-foreground" />
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="px-6">
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNav.map((item) => {
                const isActive = pathname === item.href;
                const showChevron = "showChevron" in item && item.showChevron;
                const badge = "badge" in item ? item.badge : null;
                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={cn(
                        "text-muted-foreground",
                        "data-[active=true]:bg-muted data-[active=true]:text-foreground data-[active=true]:font-medium data-[active=true]:px-3"
                      )}
                    >
                      <Link href={item.href}>
                        <item.icon className="size-4 shrink-0" />
                        <span>{item.label}</span>
                        {badge && (
                          <Badge
                            className="ml-auto shrink-0 rounded-full border-0 bg-violet-100 px-1.5 py-0 text-[10px] font-medium text-violet-700 dark:bg-violet-950/50 dark:text-violet-300"
                          >
                            {badge}
                          </Badge>
                        )}
                        {!badge && showChevron && (
                          <ChevronDown className="ml-auto size-4 shrink-0" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex flex-col gap-2 bg-muted/30 px-6 py-2">
        <SidebarMenu>
          {footerNav.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton asChild className="text-muted-foreground">
                <Link href={item.href}>
                  <item.icon className="size-4 shrink-0" />
                  <span>{item.label}</span>
                  {item.showChevron ? (
                    <ChevronDown className="ml-auto size-4 shrink-0" />
                  ) : null}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <ToggleGroup
          type="single"
          defaultValue="test"
          className={cn(
            "w-full rounded-lg border border-transparent p-0.5",
            "bg-muted/50"
          )}
        >
          <ToggleGroupItem
            value="test"
            aria-label="Test mode"
            className={cn(
              "flex-1 rounded-md text-xs font-medium",
              "data-[state=on]:border data-[state=on]:border-amber-400/60 data-[state=on]:bg-amber-50 data-[state=on]:text-amber-800",
              "dark:data-[state=on]:bg-amber-950/30 dark:data-[state=on]:text-amber-200"
            )}
          >
            Test Mode
          </ToggleGroupItem>
          <ToggleGroupItem
            value="live"
            aria-label="Live mode"
            className={cn(
              "flex-1 rounded-md text-xs text-muted-foreground",
              "data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            )}
          >
            Live Mode
          </ToggleGroupItem>
        </ToggleGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
