import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ThemeProvider from "@/app/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ogImage = "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80";
const siteTitle = "Matteus Kasten Guimarães | Personal Website";
const siteDescription = "AI, Data & Strategy Consultant Portfolio. I help organizations unlock value with AI, data, and strategy.";
const siteUrl = "https://yourdomain.com"; // Replace with your real domain
const keywords = "AI, Data, Strategy, Consulting, Technology, Blog, Portfolio, Matteus Kasten Guimarães, Tropicalia";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: keywords,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
  other: {
    'google-site-verification': 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <ThemeProvider />
        {children}
        <Footer />
      </body>
    </html>
  );
}