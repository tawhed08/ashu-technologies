import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/providers/ThemeProvider";
import SiteLayout from "@/components/layout/SiteLayout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteName = "ASHU Technologies";

const siteDescription =
  "ASHU Technologies builds modern websites, web applications, dashboards, and thoughtful digital solutions for growing businesses.";

export const metadata: Metadata = {
  applicationName: siteName,

  title: {
    default: `${siteName} | Digital Solutions`,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,

  keywords: [
    "ASHU Technologies",
    "web development",
    "website design",
    "React development",
    "Next.js development",
    "web applications",
    "digital solutions",
    "business websites",
  ],

  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,

  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    title: `${siteName} | Digital Solutions`,
    description: siteDescription,
    siteName,
    locale: "en_US",
  },

  twitter: {
    card: "summary",
    title: `${siteName} | Digital Solutions`,
    description: siteDescription,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#171B22" },
    { media: "(prefers-color-scheme: light)", color: "#F6F7F9" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <SiteLayout>{children}</SiteLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}