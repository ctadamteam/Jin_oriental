import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopStripBanner } from "@/components/common/TopStripBanner";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { SideQuickMenu } from "@/components/common/SideQuickMenu";
import { BottomQuickConsultForm } from "@/components/common/BottomQuickConsultForm";
import { SITE_CONFIG } from "@/lib/constants/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
      <body className="flex min-h-screen flex-col bg-white">
        <TopStripBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <BottomQuickConsultForm />
        <Footer />
        <SideQuickMenu />
      </body>
    </html>
  );
}
