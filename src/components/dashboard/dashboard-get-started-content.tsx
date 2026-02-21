import Link from "next/link";
import {
  CheckCircle2,
  Package,
  Calendar,
  PieChart,
  ThumbsUp,
  Square,
  Code2,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function DashboardGetStartedContent() {
  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Activate payments – Stripe-style, no card, big fonts */}
      <section className="relative overflow-hidden rounded-xl bg-background py-10 md:py-14">
        <div className="relative flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-2xl flex-1 flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Badge
                variant="outline"
                className="w-fit border-amber-200 bg-amber-50 font-medium text-amber-700 dark:border-amber-700 dark:bg-amber-950/50 dark:text-amber-300"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden />
                VERIFICATION STATUS: PENDING
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]">
                Activate payments on your account
              </h2>
            </div>
            <p className="max-w-xl mb-2 text-base leading-relaxed text-muted-foreground md:text-lg">
              Fill out your business profile to accept payments. Once submitted, our compliance team will review the information and activate live payments. Any progress you make will be saved, so you can always finish later.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Button asChild size="lg" className="h-11 w-fit px-6 text-base font-medium">
                <Link href="#" className="inline-flex items-center gap-2">
                  Activate payments
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="link" size="lg" className="h-11 px-0 text-base text-foreground underline-offset-4 hover:text-foreground/80">
                <Link href="#">Merchant Acceptance Policy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Create a product */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Create a product</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <ProductCard
            title="One-time product"
            description="Perfect for single purchases or lifetime deals."
            icon={Package}
            iconClassName="text-blue-600 bg-blue-500/10"
            mainAction={{ label: "Create sample product", href: "#" }}
            learnMore={{ href: "#" }}
          />
          <ProductCard
            title="Subscription product"
            description="Recurring billing for SaaS and memberships."
            icon={Calendar}
            iconClassName="text-violet-600 bg-violet-500/10"
            mainAction={{ label: "Create sample product", href: "#" }}
            learnMore={{ href: "#" }}
          />
          <ProductCard
            title="Usage based product"
            description="Bill your customers for actual usage or API calls."
            icon={PieChart}
            iconClassName="text-pink-600 bg-pink-500/10"
            mainAction={{ label: "Create sample product", href: "#" }}
            learnMore={{ href: "#" }}
          />
        </div>
      </section>

      {/* Integrate Dodo Payments */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">
          Integrate Dodo Payments
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <ProductCard
            title="Non Code Checkout (Fastest)"
            description="Easily generate payment links directly from your dashboard. Share them through email, social media, or embed them on your website for instant payment acceptance."
            icon={ThumbsUp}
            iconClassName="text-amber-600 bg-amber-500/10"
            learnMore={{ href: "#" }}
          />
          <ProductCard
            title="Inline/Overlay Checkout"
            description="Implement the checkout as an overlay on your website or app for a smooth, branded experience. This approach keeps users engaged on your page while allowing for customization to reflect your brand."
            icon={Square}
            iconClassName="text-violet-600 bg-violet-500/10"
            learnMore={{ href: "#" }}
          />
          <ProductCard
            title="Full SDK Integration"
            description="SDKs in languages like TypeScript, Python, and Java provide tailored solutions for seamless integration. They give you access to all payment, subscription & customer portal APIs."
            icon={Code2}
            iconClassName="text-blue-600 bg-blue-500/10"
            learnMore={{ href: "#" }}
          />
        </div>
      </section>

      {/* Help button - fixed bottom right */}
      <div className="fixed bottom-6 right-6">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="size-10 rounded-full shadow-md"
              aria-label="Help"
            >
              <HelpCircle className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">Help</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}

function ProductCard({
  title,
  description,
  icon: Icon,
  iconClassName,
  mainAction,
  learnMore,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  iconClassName: string;
  mainAction?: { label: string; href: string };
  learnMore?: { href: string };
}) {
  const hasFooter = mainAction || learnMore;

  return (
    <Card>
      <CardHeader>
        <div
          className={cn(
            "flex size-10 items-center justify-center rounded-lg",
            iconClassName
          )}
        >
          <Icon className={cn("size-5", iconClassName)} />
        </div>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      {hasFooter && (
        <CardFooter className="flex flex-wrap items-center gap-4 pt-0">
          {mainAction && (
            <Button asChild variant="secondary" size="sm">
              <Link href={mainAction.href}>{mainAction.label}</Link>
            </Button>
          )}
          {learnMore && (
            <Button variant="link" size="sm" className="h-auto p-0 text-muted-foreground" asChild>
              <Link href={learnMore.href}>Learn more</Link>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
