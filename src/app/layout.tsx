import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riverbase — Launch your online store in minutes",
  description:
    "Create, manage, and grow your business with the all-in-one e-commerce platform built for Cambodian merchants. Secure, bank-integrated, and KHQR compatible.",
  metadataBase: new URL("https://riverbase.app"),
  openGraph: {
    title: "Riverbase — Launch your online store in minutes",
    description:
      "Create, manage, and grow your business with the all-in-one e-commerce platform built for Cambodian merchants. Secure, bank-integrated, and KHQR compatible.",
    type: "website",
    locale: "en_US",
    siteName: "Riverbase",
    url: "https://riverbase.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Riverbase — All-in-one e-commerce for Cambodian Merchants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riverbase — Launch your online store in minutes",
    description:
      "Create, manage, and grow your business with the all-in-one e-commerce platform built for Cambodian merchants. Secure, bank-integrated, and KHQR compatible.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-frame text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
