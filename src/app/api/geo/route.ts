import { getCountryByCode } from "@/lib/countries";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const headersList = await headers();
  const countryCode =
    headersList.get("x-vercel-ip-country") ??
    headersList.get("X-Vercel-IP-Country");

  if (!countryCode || !countryCode.trim()) {
    return new NextResponse(null, { status: 204 });
  }

  const normalized = countryCode.trim().toUpperCase();
  const country = getCountryByCode(normalized);
  if (!country) {
    return new NextResponse(null, { status: 204 });
  }

  return NextResponse.json({ countryCode: country.code });
}
