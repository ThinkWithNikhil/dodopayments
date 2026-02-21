"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthLogo } from "@/components/auth/auth-logo";
import { AuthSeparator } from "@/components/auth/auth-separator";
import { SocialProviders } from "@/components/auth/social-providers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const SIGNUP_EMAIL_KEY = "dodo_signup_email";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (typeof sessionStorage !== "undefined" && email.trim()) {
      sessionStorage.setItem(SIGNUP_EMAIL_KEY, email.trim());
    }
    router.push("/onboarding");
  }

  return (
    <AuthLayout>
      <div className="flex flex-col">
        <AuthLogo />
        <div className="space-y-8">
          <div className="space-y-2 text-pretty text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign up to monetize your products globally
            </h1>
            <p className="text-muted-foreground text-sm text-balance">
              Create a free account to get started today
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus={true}
              />
            </div>
            <Button type="submit" className="w-full">
              Sign up
            </Button>
          </form>

          <AuthSeparator />
          <SocialProviders variant="signup" onSuccess={() => router.push("/onboarding")} />

          <p className="text-center text-muted-foreground text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-foreground font-medium underline-offset-4 hover:underline"
            >
              Log in
            </Link>
          </p>

          <p className="text-center text-muted-foreground text-xs">
            By Signing up, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Terms &amp; Conditions
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
