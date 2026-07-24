import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Dandelion China Medical | Professional Medical Device Exporter",
  description:
    "Dandelion China Medical is a professional Chinese medical device export company, dedicated to providing high-quality medical device products and services to global healthcare institutions.",
  keywords:
    "medical devices, export, surgical instruments, diagnostic equipment, rehabilitation devices, Dandelion China Medical",
  openGraph: {
    title: "Dandelion China Medical | Professional Medical Device Exporter",
    description: "Connecting China's Medical Excellence to the World",
    url: "https://www.0539cn.us",
    siteName: "Dandelion China Medical",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
