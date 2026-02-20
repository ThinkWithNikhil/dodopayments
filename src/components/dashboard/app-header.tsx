"use client";

import { Search, Moon, Bell, MessageCircle } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
    <header className="flex h-14 shrink-0 items-center gap-4 border-b border-border bg-background px-4">
      <SidebarTrigger className="-ml-1 md:hidden" />
      <div className="flex flex-1 items-center gap-4">
        <div className="hidden md:flex md:items-center md:gap-2">
          <span className="text-sm font-medium text-muted-foreground">
            ThinkWithNikhil
          </span>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm font-medium">{title}</span>
        </div>
        <div className="flex flex-1 justify-center md:max-w-sm md:flex-initial">
          <div className="relative w-full">
            <Search className="text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2" />
            <Input
              placeholder="Press /"
              className="h-9 w-full pl-9 pr-3"
              readOnly
            />
          </div>
        </div>
        <Badge
          variant="secondary"
          className={cn(
            "hidden shrink-0 md:inline-flex",
            "bg-green-500/15 text-green-700 dark:bg-green-500/20 dark:text-green-400",
            "border-0"
          )}
        >
          Dodo Games
        </Badge>
      </div>
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="size-9" aria-label="Toggle theme">
          <Moon className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" className="size-9" aria-label="Notifications">
          <Bell className="size-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="size-9 rounded-full" aria-label="User menu">
              <Avatar className="size-8">
                <AvatarFallback className="bg-primary/10 text-primary text-xs">
                  T
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
        <Button
          variant="ghost"
          size="sm"
          className="relative gap-2 pl-2 pr-3"
          aria-label="Chat"
        >
          <MessageCircle className="size-4" />
          <span className="hidden sm:inline">Chat</span>
          <span className="bg-destructive absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full text-[10px] font-medium text-white">
            1
          </span>
        </Button>
      </div>
    </header>
  );
}
