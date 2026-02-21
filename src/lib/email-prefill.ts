const CONSUMER_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "icloud.com",
  "aol.com",
  "protonmail.com",
  "proton.me",
  "mail.com",
  "zoho.com",
]);

export function isConsumerEmailDomain(domain: string): boolean {
  const normalized = domain.toLowerCase().trim();
  return CONSUMER_EMAIL_DOMAINS.has(normalized);
}

function titleCaseFromDomain(domainLabel: string): string {
  return domainLabel
    .split("-")
    .map((part) =>
      part.length > 0 ? part[0].toUpperCase() + part.slice(1).toLowerCase() : part
    )
    .join(" ");
}

export function getPrefillFromEmail(
  email: string
): { businessName: string; websiteUrl: string } | null {
  const trimmed = email.trim();
  if (!trimmed || !trimmed.includes("@")) return null;

  const atIndex = trimmed.lastIndexOf("@");
  const domain = trimmed.slice(atIndex + 1).toLowerCase().trim();
  if (!domain) return null;

  if (isConsumerEmailDomain(domain)) return null;

  const websiteUrl = domain;
  const domainLabel = domain.split(".")[0] ?? domain;
  const businessName = titleCaseFromDomain(domainLabel);

  return { businessName, websiteUrl };
}
