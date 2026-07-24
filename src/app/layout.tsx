import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "China Medical Devices | Professional Medical Device Exporter",
  description:
    "China Medical Devices is a professional Chinese medical device export company, dedicated to providing high-quality medical device products and services to global healthcare institutions.",
  keywords:
    "medical devices, export, surgical instruments, diagnostic equipment, rehabilitation devices, China Medical Devices",
  openGraph: {
    title: "China Medical Devices | Professional Medical Device Exporter",
    description: "Connecting China's Medical Excellence to the World",
    url: "https://www.0539cn.us",
    siteName: "China Medical Devices",
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
