import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Naskh_Arabic } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const arabicSans = Noto_Naskh_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Waqia",
    template: "%s | Waqia",
  },
  description: "A minimal Islamic landing page with links to GitHub and Telegram.",
  metadataBase: new URL("https://waqia.app"),
  themeColor: "#0a0a0a",
  keywords: [
    "Waqia",
    "Muslim app",
    "Muslim website",
    "Muslim app",
    "Al-Waqi'ah",
    "الواقعة",
    "Quran",
    "Islamic UI",
    "Modern Islamic design",
    "Minimal UI",
    "AlanC8",
    "sevenstragen",
  ],
  authors: [{ name: "Alan", url: "https://github.com/AlanC8" }],
  openGraph: {
    type: "website",
    url: "https://waqia.app",
    siteName: "Waqia",
    title: "Waqia",
    description:
      "A minimal Islamic landing page with links to GitHub and Telegram.",
    images: [
      {
        url: "/vercel.svg",
        width: 512,
        height: 512,
        alt: "Waqia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waqia",
    description:
      "A minimal Islamic landing page with links to GitHub and Telegram.",
    images: ["/vercel.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  category: "Religion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${arabicSans.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
