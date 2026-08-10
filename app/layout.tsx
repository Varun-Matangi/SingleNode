import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SingleNode Studio — Application Development, Web Design & Automations",
  description:
    "SingleNode Studio builds premium software: application development, website design & development, business automations, and Linux server infrastructure. One studio, senior craft, no shortcuts.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SingleNode Studio",
    description:
      "Application development, website design, automations, and Linux server setup — built with senior-level craft.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">
        {children}
      </body>
    </html>
  );
}
