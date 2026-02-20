import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6">
      <h1 className="text-2xl font-semibold">Privacy Policy</h1>
      <p className="text-muted-foreground text-center text-sm">
        Placeholder page. Privacy policy will be added here.
      </p>
      <Link href="/signup" className="text-sm underline underline-offset-4">
        Back to Sign up
      </Link>
    </div>
  );
}
