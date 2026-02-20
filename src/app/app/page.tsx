import Link from "next/link";
import {
  AlertCircle,
  FileText,
  Banknote,
  CheckCircle2,
  Package,
  Calendar,
  PieChart,
  ThumbsUp,
  Square,
  Code2,
  HelpCircle,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
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

export default function AppPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Action Required Banner */}
      

      {/* Get Started - Activate live payments */}
      <section className="space-y-4">
        <Card className="overflow-hidden bg-gradient-to-br from-muted/50 to-transparent">
          <div className="flex flex-col gap-6 p-6 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                  <AlertCircle className="size-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Activate live payments</CardTitle>
              </div>
              <CardDescription className="text-sm leading-relaxed max-w-xl">
                To enable live payments, merchants are required to complete
                account verification by submitting their product and payout
                details. Once submitted, our compliance team will review the
                information and activate live payments. This helps us maintain
                compliance with tax requirements, card-network standards and our
                Merchant Acceptance Policy.
              </CardDescription>
              <Button asChild className="w-fit">
                <Link href="#">Submit details</Link>
              </Button>
            </div>
            <div className="flex shrink-0 flex-col gap-0 md:min-w-[200px]">
              <div className="flex flex-col border-l-2 border-muted pl-4 gap-0">
                <StepItem
                  label="PRODUCT REVIEW"
                  icon={FileText}
                  status="pending"
                />
                <StepItem
                  label="PAYOUT DETAILS"
                  icon={Banknote}
                  status="pending"
                />
                <StepItem
                  label="Live Payments Activated"
                  icon={CheckCircle2}
                  status="done"
                />
              </div>
            </div>
          </div>
        </Card>
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
            links={[
              { label: "Learn more", href: "#" },
              { label: "Create sample product", href: "#" },
            ]}
          />
          <ProductCard
            title="Subscription product"
            description="Recurring billing for SaaS and memberships."
            icon={Calendar}
            iconClassName="text-violet-600 bg-violet-500/10"
            links={[
              { label: "Learn more", href: "#" },
              { label: "Create sample product", href: "#" },
            ]}
          />
          <ProductCard
            title="Usage based product"
            description="Bill your customers for actual usage or API calls."
            icon={PieChart}
            iconClassName="text-pink-600 bg-pink-500/10"
            links={[
              { label: "Learn more", href: "#" },
              { label: "Create sample product", href: "#" },
            ]}
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
            links={[{ label: "Learn more", href: "#" }]}
          />
          <ProductCard
            title="Inline/Overlay Checkout"
            description="Implement the checkout as an overlay on your website or app for a smooth, branded experience. This approach keeps users engaged on your page while allowing for customization to reflect your brand."
            icon={Square}
            iconClassName="text-violet-600 bg-violet-500/10"
            links={[{ label: "Learn more", href: "#" }]}
          />
          <ProductCard
            title="Full SDK Integration"
            description="SDKs in languages like TypeScript, Python, and Java provide tailored solutions for seamless integration. They give you access to all payment, subscription & customer portal APIs."
            icon={Code2}
            iconClassName="text-blue-600 bg-blue-500/10"
            links={[{ label: "Learn more", href: "#" }]}
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

function StepItem({
  label,
  icon: Icon,
  status,
}: {
  label: string;
  icon: React.ElementType;
  status: "pending" | "done";
}) {
  return (
    <div className="relative flex items-start gap-3 py-2 first:pt-0 last:pb-0">
      <div
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-full border-2 -ml-[2.125rem]",
          status === "done"
            ? "border-green-500 bg-green-500/10 text-green-600 dark:text-green-400"
            : "border-muted-foreground/30 bg-muted/50 text-muted-foreground"
        )}
      >
        {status === "done" ? (
          <CheckCircle2 className="size-4" />
        ) : (
          <Icon className="size-4" />
        )}
      </div>
      <div className="flex flex-col pt-0.5">
        <span
          className={cn(
            "text-xs font-medium",
            status === "done"
              ? "text-green-700 dark:text-green-400"
              : "text-muted-foreground"
          )}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

function ProductCard({
  title,
  description,
  icon: Icon,
  iconClassName,
  links,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  iconClassName: string;
  links: { label: string; href: string }[];
}) {
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
      <CardFooter className="flex flex-wrap gap-2 pt-0">
        {links.map((link) => (
          <Button key={link.label} variant="link" size="sm" className="h-auto p-0 text-primary" asChild>
            <Link href={link.href}>{link.label}</Link>
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
}
