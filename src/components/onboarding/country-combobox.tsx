"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { COUNTRY_LIST, getCountryByCode } from "@/lib/countries";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

const FLAG_BASE =
  "https://purecatamphetamine.github.io/country-flag-icons/3x2";

function CountryFlag({ code, className }: { code: string; className?: string }) {
  const src = `${FLAG_BASE}/${code}.svg`;
  return (
    <img
      src={src}
      alt=""
      role="presentation"
      className={cn("size-5 shrink-0 rounded-sm object-cover", className)}
      width={20}
      height={14}
    />
  );
}

export function CountryCombobox({
  value,
  onValueChange,
  id,
  placeholder = "Select country",
  disabled,
  "aria-invalid": ariaInvalid,
}: {
  value: string;
  onValueChange: (code: string) => void;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  "aria-invalid"?: boolean;
}) {
  const [open, setOpen] = React.useState(false);
  const selected = value ? getCountryByCode(value) : null;

  const handleSelect = React.useCallback(
    (code: string) => {
      onValueChange(code);
      setOpen(false);
    },
    [onValueChange]
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          id={id}
          disabled={disabled}
          aria-invalid={ariaInvalid}
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-label={selected ? selected.name : placeholder}
          className={cn(
            "border-input data-[placeholder]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 flex h-9 w-full items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-left text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            "dark:bg-input/30 dark:hover:bg-input/50"
          )}
        >
          <span className="flex min-w-0 flex-1 items-center gap-2 truncate">
            {selected ? (
              <>
                <CountryFlag code={selected.code} />
                <span className="truncate">{selected.name}</span>
              </>
            ) : (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
          </span>
          <ChevronDownIcon className="size-4 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[var(--radix-popover-trigger-width)] p-0"
        align="start"
        sideOffset={4}
        side="bottom"
      >
        <Command shouldFilter={true}>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            {COUNTRY_LIST.map((country) => (
              <CommandItem
                key={country.code}
                value={country.name}
                onSelect={() => handleSelect(country.code)}
                className="flex items-center gap-2"
              >
                <CountryFlag code={country.code} />
                <span>{country.name}</span>
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
