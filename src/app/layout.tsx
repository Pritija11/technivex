import type { Metadata } from "next";
import { Geist, Geist_Mono, Hanken_Grotesk } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const SITE_URL = "https://technivex.cloud";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Technivex — Know Where Every Cloud Dollar Goes",
    template: "%s · Technivex",
  },
  description:
    "Technivex is an early-stage cloud cost intelligence startup based in Lalitpur, Nepal, helping engineering and finance teams allocate, attribute, and cut cloud and AI spend.",
  keywords: [
    "Technivex",
    "cloud cost startup",
    "FinOps",
    "cloud cost optimization",
    "cost allocation",
    "cloud spend management",
    "AI cost management",
    "anomaly detection",
    "Nepal startup",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Technivex — Know Where Every Cloud Dollar Goes",
    description:
      "Allocate, attribute, and cut cloud and AI spend — cost intelligence tied to the teams and products actually driving it.",
    siteName: "Technivex",
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technivex — Know Where Every Cloud Dollar Goes",
    description:
      "Allocate, attribute, and cut cloud and AI spend — cost intelligence tied to the teams and products actually driving it.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Technivex",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Technivex is an early-stage cloud cost intelligence startup based in Lalitpur, Nepal, helping engineering and finance teams allocate, attribute, and cut cloud and AI spend.",
  email: "hello@technivex.cloud",
  telephone: "+977-985-2233445",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jawalakhel",
    addressLocality: "Lalitpur",
    postalCode: "44700",
    addressCountry: "NP",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${hanken.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--bg)] text-[var(--fg)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
