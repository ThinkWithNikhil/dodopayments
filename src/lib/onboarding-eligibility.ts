import { isCountryEligible } from "@/lib/countries";

/** Category values that are currently supported for onboarding. */
const SUPPORTED_CATEGORY_VALUES = new Set([
  "saas-ai-digital",
  "edtech",
  "financial-services",
]);

export function isEligible(
  productCategory: string,
  countryCode: string
): boolean {
  if (!productCategory?.trim() || !countryCode?.trim()) return false;
  return (
    SUPPORTED_CATEGORY_VALUES.has(productCategory.trim()) &&
    isCountryEligible(countryCode.trim().toUpperCase())
  );
}
