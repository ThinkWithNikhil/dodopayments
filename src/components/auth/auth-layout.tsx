import Image from "next/image";

const BANNER_URL = "https://app.dodopayments.com/login-signup/aside-banner.png";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Form section - left */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 md:px-12 lg:px-16">
        <div className="w-full max-w-[400px]">{children}</div>
      </div>

      {/* Banner section - right, hidden on mobile */}
      <div className="hidden md:block md:w-1/2 lg:w-[55%]">
        <div className="relative h-full min-h-screen w-full">
          <Image
            src={BANNER_URL}
            alt="Dodo Payments"
            fill
            className="object-cover object-left"
            priority
          />
        </div>
      </div>
    </div>
  );
}
