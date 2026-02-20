import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6">
      <h1 className="text-2xl font-semibold">Terms & Conditions</h1>
      <p className="text-muted-foreground text-center text-sm">
        Placeholder page. Terms and conditions will be added here.
      </p>
      <Link href="/signup" className="text-sm underline underline-offset-4">
        Back to Sign up
      </Link>
    </div>
  );
}
