"use client";

import { useState } from "react";
import Link from "next/link";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthLogo } from "@/components/auth/auth-logo";
import { AuthSeparator } from "@/components/auth/auth-separator";
import { SocialProviders } from "@/components/auth/social-providers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Prototype: no backend logic
  }

  return (
    <AuthLayout>
      <div className="flex flex-col">
        <AuthLogo />
        <div className="space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back!
            </h1>
            <p className="text-muted-foreground text-sm">
              Log in to your Dodo Payments account
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
            {showPassword && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground text-sm underline-offset-4 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            )}
            <Button type="submit" className="w-full">
              Log in
            </Button>
          </form>

          <AuthSeparator />
          <SocialProviders
            variant="login"
            onPasswordClick={() => setShowPassword(true)}
          />

          <p className="text-center text-muted-foreground text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-foreground font-medium underline-offset-4 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
