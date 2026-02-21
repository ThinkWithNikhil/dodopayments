"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useWorkspace } from "@/contexts/workspace-context";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { COUNTRY_LIST } from "@/lib/countries";
import { cn } from "@/lib/utils";

const FLAG_BASE =
  "https://purecatamphetamine.github.io/country-flag-icons/3x2";

function CountryFlag({ code }: { code: string }) {
  return (
    <img
      src={`${FLAG_BASE}/${code}.svg`}
      alt=""
      role="presentation"
      className="size-5 shrink-0 rounded-sm object-cover"
      width={20}
      height={14}
    />
  );
}

const LOGO_URL = "https://app.dodopayments.com/logo/logo.svg";

const PRODUCT_CATEGORIES: { value: string; label: string; supported: boolean }[] = [
  { value: "saas-ai-digital", label: "SaaS/AI or Digital products", supported: true },
  { value: "edtech", label: "Edtech", supported: true },
  { value: "financial-services", label: "Financial services", supported: true },
  { value: "services", label: "Services", supported: false },
  { value: "physical-products", label: "Physical products", supported: false },
  { value: "gaming", label: "Gaming", supported: false },
  { value: "others", label: "Others", supported: false },
];

const HEAR_ABOUT = [
  { value: "twitter", label: "Twitter/X" },
  { value: "google", label: "Google" },
  { value: "friend", label: "Friend or colleague" },
  { value: "blog", label: "Blog or article" },
  { value: "other", label: "Other" },
];

export default function OnboardingPage() {
  const router = useRouter();
  const { completeOnboarding } = useWorkspace();
  const [businessName, setBusinessName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [location, setLocation] = useState("");
  const [hearAbout, setHearAbout] = useState("");
  const [feedback, setFeedback] = useState("");
  const [agreedToPolicies, setAgreedToPolicies] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!location.trim() || !productCategory || !hearAbout || !agreedToPolicies) return;
    completeOnboarding({ businessName: businessName.trim() });
    router.push("/app?reveal=1");
  }

  return (
    <TooltipProvider>
      <Card className="w-full max-w-[420px] border-border bg-card shadow-lg">
      <CardHeader className="space-y-1 text-center">
        <div className="flex justify-center">
          <Image
            src={LOGO_URL}
            alt=""
            width={40}
            height={40}
            className="size-10 object-contain"
          />
        </div>
        <CardTitle className="text-xl">Let&apos;s create your account</CardTitle>
        <CardDescription className="text-balance text-sm">
          You can sign up as a business with company details, or as an individual using personal information.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="businessName">
              Business Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="businessName"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Your business name"
              required
              className="w-full"
            />
            <p className="text-muted-foreground text-sm">
              Use your full name if you&apos;re an unregistered business.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="websiteUrl">
              Website URL <span className="text-destructive">*</span>
            </Label>
            <div className="flex rounded-md border border-input bg-transparent shadow-xs focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]">
              <span className="flex items-center px-3 text-muted-foreground text-sm">
                https://
              </span>
              <input
                id="websiteUrl"
                type="text"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                placeholder="example.com"
                required
                className={cn(
                  "h-9 min-w-0 flex-1 rounded-r-md border-0 border-l border-input bg-transparent pl-3 py-1 text-base outline-none md:text-sm",
                  "placeholder:text-muted-foreground"
                )}
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <Label htmlFor="productCategory">
                Product category <span className="text-destructive">*</span>
              </Label>
              <Link
                href="/eligible-categories"
                className="text-muted-foreground text-sm underline underline-offset-2 hover:text-foreground"
              >
                Eligible categories
              </Link>
            </div>
            <Select
              value={productCategory || undefined}
              onValueChange={setProductCategory}
            >
              <SelectTrigger id="productCategory" className="w-full">
                <SelectValue placeholder="Select product category" />
              </SelectTrigger>
              <SelectContent position="popper" side="bottom" align="start">
                {PRODUCT_CATEGORIES.map((opt) =>
                  opt.supported ? (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ) : (
                    <Tooltip key={opt.value}>
                      <TooltipTrigger asChild>
                        <span className="flex w-full">
                          <SelectItem value={opt.value} disabled>
                            {opt.label}
                          </SelectItem>
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        Currently unsupported. Learn more.
                      </TooltipContent>
                    </Tooltip>
                  )
                )}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <Label htmlFor="location">
                Where are you located? <span className="text-destructive">*</span>
              </Label>
              <Link
                href="/eligible-countries"
                className="text-muted-foreground text-sm underline underline-offset-2 hover:text-foreground"
              >
                Eligible countries
              </Link>
            </div>
            <Select value={location || undefined} onValueChange={setLocation}>
              <SelectTrigger id="location" className="w-full">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent position="popper" side="bottom" align="start">
                {COUNTRY_LIST.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    <span className="flex items-center gap-2">
                      <CountryFlag code={country.code} />
                      {country.name}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="hearAbout">
              Where did you hear about us? <span className="text-destructive">*</span>
            </Label>
            <Select value={hearAbout || undefined} onValueChange={setHearAbout}>
              <SelectTrigger id="hearAbout" className="w-full">
                <SelectValue placeholder="Select referral source" />
              </SelectTrigger>
              <SelectContent position="popper" side="bottom" align="start">
                {HEAR_ABOUT.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-start gap-2">
            <Checkbox
              id="agreedToPolicies"
              checked={agreedToPolicies}
              onCheckedChange={(checked) =>
                setAgreedToPolicies(checked === true)
              }
            />
            <Label
              htmlFor="agreedToPolicies"
              className="block cursor-pointer font-normal text-muted-foreground text-xs leading-snug"
            >
              I have read and understand the above restrictions, and I agree to
              Dodo Payments{" "}
              <a
                href="/merchant-policy"
                className="underline underline-offset-4 hover:text-foreground"
              >
                Merchant Acceptance Policy
              </a>
              ,{" "}
              <a
                href="/terms"
                className="underline underline-offset-4 hover:text-foreground"
              >
                Terms of Service
              </a>
              , and{" "}
              <a
                href="/privacy"
                className="underline underline-offset-4 hover:text-foreground"
              >
                Privacy Policy
              </a>
              . <span className="text-destructive">*</span>
            </Label>
          </div>
          <Button type="submit" className="w-full" size="lg">
            Create account
          </Button>
        </form>
      </CardContent>
    </Card>
    </TooltipProvider>
  );
}
