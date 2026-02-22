import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6">
      <main className="flex max-w-lg flex-col items-center gap-8 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          Dodo Payments
        </h1>
        <p className="text-muted-foreground text-lg">
          Simple, secure payments for your business. Get started today.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild variant="outline">
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
