"use client";

import * as React from "react";
import { CheckIcon } from "lucide-react";
import { Checkbox as CheckboxNamespace } from "radix-ui";

import { cn } from "@/lib/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxNamespace.Root>) {
  return (
    <CheckboxNamespace.Root
      data-slot="checkbox"
      className={cn(
        "border-input focus-visible:ring-ring/50 focus-visible:ring-[3px] peer size-4 shrink-0 rounded-[4px] border shadow-xs outline-none transition-[color,box-shadow] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary",
        className
      )}
      {...props}
    >
      <CheckboxNamespace.Indicator
        data-slot="checkbox-indicator"
        className="flex size-full items-center justify-center text-current"
      >
        <CheckIcon className="size-2.5" />
      </CheckboxNamespace.Indicator>
    </CheckboxNamespace.Root>
  );
}

export { Checkbox };
