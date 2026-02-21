import { NextResponse } from "next/server";

export type UnsupportedInterestBody = {
  productCategory: string;
  countryCode: string;
  businessName?: string;
  websiteUrl?: string;
  email?: string;
};

function isValidCode(code: string): boolean {
  return /^[A-Z]{2}$/.test(code.trim().toUpperCase());
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { productCategory, countryCode, businessName, websiteUrl, email } =
    body as UnsupportedInterestBody;

  if (
    typeof productCategory !== "string" ||
    !productCategory.trim() ||
    typeof countryCode !== "string" ||
    !countryCode.trim()
  ) {
    return NextResponse.json(
      { error: "productCategory and countryCode are required" },
      { status: 400 }
    );
  }

  const normalizedCountryCode = countryCode.trim().toUpperCase();
  if (!isValidCode(normalizedCountryCode)) {
    return NextResponse.json(
      { error: "Invalid countryCode" },
      { status: 400 }
    );
  }

  const payload = {
    productCategory: productCategory.trim(),
    countryCode: normalizedCountryCode,
    ...(typeof businessName === "string" && businessName.trim() && { businessName: businessName.trim() }),
    ...(typeof websiteUrl === "string" && websiteUrl.trim() && { websiteUrl: websiteUrl.trim() }),
    ...(typeof email === "string" && email.trim() && { email: email.trim() }),
  };

  // TODO: Persist to DB (e.g. table unsupported_onboarding_interest) or analytics.
  // For now, log so it appears in server logs until persistence is added.
  console.info("[unsupported-interest]", JSON.stringify(payload));

  return new NextResponse(null, { status: 204 });
}
