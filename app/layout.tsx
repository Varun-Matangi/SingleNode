import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";
import { SITE_EMAIL, SITE_PHONE, SITE_URL } from "./lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = "SingleNode Studio — Application Development, Web Design & Automations";
const DESCRIPTION =
  "SingleNode Studio builds premium software: application development, website design & development, business automations, and Linux server infrastructure. One studio, senior craft, no shortcuts.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "custom application development",
    "website design and development",
    "business process automation",
    "Linux server infrastructure setup",
    "software development studio",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "SingleNode Studio",
    description:
      "Application development, website design, automations, and Linux server setup — built with senior-level craft.",
    url: SITE_URL,
    siteName: "SingleNode Studio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SingleNode Studio",
    description:
      "Application development, website design, automations, and Linux server setup — built with senior-level craft.",
  },
  // Once the site is verified in Google Search Console, add the value here:
  // verification: { google: "" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SingleNode Studio",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  description: DESCRIPTION,
  email: SITE_EMAIL,
  telephone: SITE_PHONE,
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Application Development",
        description:
          "Custom web and internal applications engineered to scale, from customer-facing portals to internal tools.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Website Design & Development",
        description:
          "Marketing sites and web platforms designed to convert and engineered to load fast.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Automations",
        description:
          "Automations that remove manual work between tools — data syncs, notifications, reporting, approvals.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Linux Server Setup",
        description:
          "Production infrastructure configured correctly from day one — hardened servers, deployment pipelines, monitoring, backups.",
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
