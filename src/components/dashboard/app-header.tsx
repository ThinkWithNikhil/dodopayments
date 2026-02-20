"use client";

import { Search, Moon, Bell, User } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function AppHeader({ title = "Get Started" }: { title?: string }) {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between gap-4 border-b border-border bg-background px-6">
      {/* Left: mobile trigger + page title only */}
      <div className="flex min-w-0 flex-1 items-center gap-2 md:flex-initial">
        <SidebarTrigger className="-ml-1 shrink-0 md:hidden" />
        <h2 className="truncate text-xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>

      {/* Right: search + Dodo Games button + Moon, Bell, Avatar dropdown */}
      <div className="flex shrink-0 items-center gap-2">
        <div className="border-input bg-background flex h-9 w-48 min-w-0 items-center gap-1.5 rounded-md border px-3 shadow-xs sm:w-56">
          <Search className="text-muted-foreground size-4 shrink-0" />
          <span className="text-muted-foreground truncate text-sm">Press</span>
          <kbd className="bg-muted text-muted-foreground inline-flex h-5 min-w-5 shrink-0 items-center justify-center rounded px-1 font-mono text-xs">
            /
          </kbd>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="size-9 rounded-md"
          aria-label="Toggle theme"
        >
          <Moon className="size-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="size-9 rounded-md"
          aria-label="Notifications"
        >
          <Bell className="size-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-9 rounded-md"
              aria-label="User menu"
            >
              <Avatar className="size-8">
                <AvatarFallback className="bg-muted text-muted-foreground">
                  <User className="size-4" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
