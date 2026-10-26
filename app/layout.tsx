import type { Metadata } from "next";
import "./globals.css";
import { TopStripBanner } from "@/components/common/TopStripBanner";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { SideQuickMenu } from "@/components/common/SideQuickMenu";
import { BottomQuickConsultForm } from "@/components/common/BottomQuickConsultForm";
import { getPageMetadata } from "@/lib/seo";
import { SiteStructuredData } from "@/components/seo/SiteStructuredData";

export const metadata: Metadata = {
  ...getPageMetadata('/'),
  verification: {
    other: {
      "naver-site-verification": "050aeba4061526fce2a67a81d24748bbf840c140",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth antialiased">
      <body className="flex min-h-screen flex-col bg-white">
        <SiteStructuredData />
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
