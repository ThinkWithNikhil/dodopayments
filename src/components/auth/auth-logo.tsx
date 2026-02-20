import Image from "next/image";
import Link from "next/link";

const LOGO_URL = "https://app.dodopayments.com/logo/logo.svg";
export function AuthLogo() {
  return (
    <Link
      href="/"
      className="mb-8 flex justify-center"
      aria-label="Dodo Payments home"
    >
      <Image
        src={LOGO_URL}
        alt="Dodo Payments"
        width={48}
        height={48}
        className="size-12 object-contain"
      />
    </Link>
  );
}
