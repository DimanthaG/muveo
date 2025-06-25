import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "./metadata";
import "./globals.css";
import { MinimalistNavbar } from "@/components/ui/minimalist-navbar";
import { Footer } from "@/components/ui/footer";
import { cn } from "@/lib/utils";
import { SessionProvider } from "@/components/providers/session-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Muveo Inc - Professional Moving Services in Toronto",
    template: "%s | Muveo Inc"
  },
  description: "Professional moving and logistics services in Toronto. Residential, commercial, and senior moving services across the GTA.",
  keywords: ["moving company", "toronto movers", "residential moving", "commercial moving", "senior moving", "GTA movers"],
  authors: [{ name: "Muveo Inc" }],
  creator: "Muveo Inc",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://muveo.ca",
    title: "Muveo Inc - Professional Moving Services",
    description: "Your trusted moving partner in Toronto",
    siteName: "Muveo Inc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muveo Inc - Professional Moving Services",
    description: "Your trusted moving partner in Toronto",
    images: ["/og.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/logo1.jpg",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/logo2.jpg",
        media: "(prefers-color-scheme: dark)"
      }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head />
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
          >
            <MinimalistNavbar />
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
