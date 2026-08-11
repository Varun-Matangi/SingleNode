// Falls back to these values if the env vars aren't set, so the site
// never breaks or shows blank contact info in an environment where
// they were forgotten.
export const SITE_EMAIL = process.env.NEXT_PUBLIC_SITE_EMAIL || "hello@singlenodestudio.com";
export const SITE_PHONE = process.env.NEXT_PUBLIC_SITE_PHONE || "+1 (555) 018-2947";

// Used for metadataBase (resolves OG/Twitter image URLs). Update this
// once you know your real Cloudflare Pages / custom domain.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://singlenodestudio.com";
